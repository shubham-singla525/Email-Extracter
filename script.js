const rawTxt=document.querySelector("textarea[name=txtarea]");
const finTxt=document.querySelector("textarea[name=output]");
const btn=document.querySelector("button");
const counter=document.querySelector(".counter");
btn.addEventListener("click",function(){
    let temp=rawTxt.value;
    let exp=/([A-Za-z0-9._-]+@[A-Za-z0-9._-]+\.[A-Za-z0-9._-]+)/g;
    let getEmails=temp.match(exp);
    let holder=[];
    for(let x=0;x<getEmails.length;x++){
        if(holder.indexOf(getEmails[x])==-1){
        holder.push(getEmails[x]);}
    }
   let tempHolder =holder.join("------")
    counter.innerText="Emails Found: "+holder.length;
    finTxt.innerText=tempHolder;

})