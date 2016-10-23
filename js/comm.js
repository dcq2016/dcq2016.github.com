/**
 * Created by dcq on 2016/10/2/0003.
 */
function toDou(n){
    return n<10?'0'+n:''+n;
}
function getYear(ms){
    var oDate=new Date();
    oDate.setTime(ms);

    return oDate.getFullYear()+'-'+toDou(oDate.getMonth()+1)+'-'+toDou(oDate.getDate())+' '+toDou(oDate.getHours())+':'+toDou(oDate.getMinutes())+':'+toDou(oDate.getSeconds());
}
function getByClass(oParent,sClass){
    if(document.getElementsByClassName){
        return oParent.getElementsByClassName(sClass);
    }else{
        var sEv=oParent.getElementsByTagName('*');
        var arr=[];
        var re=new RegExp('\\b'+sClass+'\\b');
        for(var i=0;i<sEv.length;i++){
            if(sEv[i].search(re)!=-1){
                arr.push(sEv[i]);
            }
        }
        return arr;
    }
}