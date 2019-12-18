export const initialState = {
  searchResult: null,
  searchMacValue: null,
  searchStatus: null,
  isFetching: false,
  requestFailed: false,
  statusPattern:[
    {name:'model', value:'', text:'Model', good:'', bad: '', status:''},
    {name:'online', value:'', text:'Status', good:'online', bad:'offline', status:''},
    {name:'power', value:'', text:'Power', good:'on', bad:'', status:''},
    {name:'version',value:'', text:'Version', good:{vm1920:'000.000.01002'}, bad:'',status:''}
  ],
  detailsPattern:[
    {name:'cpu', value:'', text:'CPU', good:'', bad: '', status:''},
    {name:'loader', value:'', text:'Loader', good:'', bad:'', status:''},
    {name:'minerva', value:'', text:'Platform', good:'', bad:'', status:''},
    {name:'pin',value:'', text:'Pin', good:'', bad:'',status:''},
    {name:'hdmi',value:'', text:'HDMI', good:'', bad:'',status:''},
    
  ],
  connectPattern:[
    {name:'ExternalIP', value:'', text:'External IP', good:'', bad: '', status:''},
    {name:'IpAddress', value:'', text:'Internal IP', good:'', bad:'', status:''},
    {name:'DefaultGateway', value:'', text:'Default Gateway', good:'', bad:'', status:''},
    {name:'DnsServer1',value:'', text:'DNS Server 1', good:'', bad:'',status:''},
    {name:'DnsServer2',value:'', text:'DNS Server 2', good:'', bad:'',status:''},
    
  ],
}; 