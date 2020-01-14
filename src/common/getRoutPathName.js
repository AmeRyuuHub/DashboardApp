
export const getRoutPathName = (path,routArray) =>{

    const  subPath = (path.split("/").length > 2);
    if (subPath) {
       
       const mainPath =path.split("/",2).join("/") ;
     let mainRout = routArray.filter(rout => rout.endPoint === mainPath)[0];
     let subRout = mainRout.subLinks.filter(subLink => subLink.endPoint === path)[0];
        return subRout };

        let mainRout = routArray.filter(rout => rout.endPoint === path)[0];
        return  mainRout;   

}