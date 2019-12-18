const sqlite = require('sqlite-sync');
const Pool = require('pg').Pool
const pool = new Pool({
  user: 'dferrante',
  host: 'localhost',
  database: 'mon',
  password: 'dferrante1nside3',
  port: 5432,
})


const getStatusByMAC = (request, response) => {
  const mac = request.params.mac
  const timeDB = new Date()
  sqlite.insert("method_logs", {
    UserID:	1,
    MethodType:	"getStatusByMAC",
    MAC:	mac,
    DateTime:	timeDB.toLocaleDateString("uk-UA",{day:'numeric',month:'numeric',year:'numeric', hour:'numeric',minute:'numeric'})
}, function (res) {
    if (res.error)
        throw res.error;
    //console.log(res);
});
  pool.query("SELECT *,CASE online WHEN 0 THEN 'offline' WHEN 1 THEN 'online' ELSE online::text END AS online,CASE pin WHEN '0' THEN '1234' ELSE pin::text END AS pin, CASE model WHEN 'vm1930' THEN 'IP' WHEN 'mobile' THEN 'MOBILE' WHEN 'co3510' THEN 'HYBRID' WHEN 'vm3000' THEN 'IP' WHEN 'vm1920' THEN 'HYBRID' ELSE model::text END AS type_m FROM status WHERE mac = $1", [mac], (error, results) => {
    if (error) {
      throw error
    }
     response.status(200).json({results:results.rows,status:(results.rows.length !== 0)? true: false})
  })
}

const getPingByMAC = (request, response) => {
  const mac = request.params.mac
  const timeDB = new Date()
  sqlite.insert("method_logs", {
    UserID:	1,
    MethodType:	"getPingByMAC",
    MAC:	mac,
    DateTime:	timeDB.toLocaleDateString("uk-UA",{day:'numeric',month:'numeric',year:'numeric', hour:'numeric',minute:'numeric'})
  }, function (res) {
    if (res.error)
        throw res.error;
    //console.log(res);
});

let macPattern = new RegExp("[0-9A-Fa-f]{"+mac.length+",}", "g");
if ( (mac.length !== 12 && mac.length !== 16) && !macPattern.test(value)) {return response.status(201).json({response:"",
errorMessage:"Wrong format of MAC Address",
status:false})
};

let startDate =new Date(new Date().setDate(new Date().getDate()-6)).setHours(0, 0, 0, 0);
pool.query("SELECT mac,is_platform,rtt,ts FROM public.icmp WHERE mac = $1 and ts > $2 " , [mac,startDate], (error, results) => {
    if (error) {
      throw error
    }
    if (results.rows.length !== 0) {
      let router = results.rows.map((item) =>{return item.is_platform==0}).map(({rtt,tss}) => ({rtt,tss}));
      let platform = results.rows.map((item) =>{return item.is_platform==1}).map(({rtt,tss}) => ({rtt,tss}));
      response.status(200).json({response:{
        mac:mac,
        router:router,
        platform:platform},
        errorMessage:"",
        status:true})
    } else {
      response.status(200).json({response:"",
        errorMessage:"There is no data",
        status:false})
    }
    
  })
}

const getTunerByMAC = (request, response) => {
  const mac = request.params.mac
  const timeDB = new Date()
  //const time = new Date((new Date()) - (24*60*60*1000) * request.params.sort)
  
  sqlite.insert("method_logs", {
    UserID:	1,
    MethodType:	"getTunerByMAC",
    MAC:	mac,
    DateTime:	timeDB.toLocaleDateString("uk-UA",{day:'numeric',month:'numeric',year:'numeric', hour:'numeric',minute:'numeric'})
}, function (res) {
    if (res.error)
        throw res.error;
    //console.log(res);
});
  pool.query("SELECT mac,frequency,quality,power,ber,level,snr,modulation,ts from public.tuner WHERE mac = $1 and frequency > 0 and to_timestamp(CAST(left(CAST(ts as VARCHAR (13)), 10) as BIGINT)) >= (NOW() - interval '7 DAY') order by frequency " , [mac], (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json({results:results.rows,status:(results.rows.length !== 0)? true: false}) 
    })
}



module.exports = {
  getStatusByMAC,
  getPingByMAC,
  getTunerByMAC,
}

/*
const getPingByMAC = (request, response) => {
  const mac = request.params.mac
  const sort = request.params.sort
  pool.query("SELECT id,mac,is_platform,rtt,to_timestamp(CAST(left(CAST(ts as VARCHAR (13)), 10) as BIGINT)) AS ts, (NOW() - interval '" + sort + " DAY') AS tt FROM public.icmp WHERE mac = $1 and to_timestamp(CAST(left(CAST(ts as VARCHAR (13)), 10) as BIGINT)) >= (NOW() - interval '" + sort + " DAY')" , [mac], (error, results) => {
    if (error) {
      throw error
    }
     response.status(200).json({router:results.rows.filter(function(item){return item.is_platform==0 }),platform:results.rows.filter(function(item){return item.is_platform==1})})
  })
}
} */