let buttons=Array.from(document.querySelectorAll(".btn"));
let operations=Array.from(document.querySelectorAll(".o"));
let display=document.querySelector(".container");
let prevnum="";
let newnum="";
let oper="";
let res=0;
buttons.map(function add(btn){


btn.addEventListener("click",(e)=>{
switch(e.target.innerHTML){
case "Reset":{
setTimeout(() => {
    location.reload()
}, 200);
}
break;
 case "Delete":{
                display.innerHTML = display.innerHTML.slice(0, -1);
                if (oper == "") {
                    prevnum = display.innerHTML;
                }
                else if (oper == "-") {
                    let num = display.innerHTML.indexOf("-");
                    newnum = display.innerHTML.slice(num+1);
                    console.log(prevnum);
                    console.log(newnum);
                } 
                else if (oper == "+") {
                    let num = display.innerHTML.indexOf("+");
                    newnum = display.innerHTML.slice(num+1);
                }
              
                else if (oper == "/") {
                    let num = display.innerHTML.indexOf("/");
                    newnum = display.innerHTML.slice(num+1);
                } else if (oper == "X") {
                    let num = display.innerHTML.indexOf("X");
                    newnum = display.innerHTML.slice(num+1);
                }



            }
                break;

case ".":{
if(prevnum.includes(".")&&oper=="")
return 0;
else if(newnum.includes("."))
return 0;

}


default:{display.innerHTML+=e.target.innerText;
    if(oper=="")
prevnum+=e.target.innerHTML;
else{
    newnum+=e.target.innerHTML;
}


}



}

})



});
operations.map((o)=>{
o.addEventListener("click",(e)=>{
    if(oper=="")
    
{    oper=e.target.innerHTML;
}

display.innerHTML+=e.target.innerHTML;
if(newnum!=""){

    
switch(oper)
{
case "+":{
res= Number(prevnum)+Number(newnum);
display.innerHTML=res;
prevnum=String(res);
newnum="";
oper="";

}
break;
case "-":{
    res= Number(prevnum)-Number(newnum);
    display.innerHTML=res;
    prevnum=String(res);
    newnum="";
    oper="";

}
break;
case "X":
{    res= Number(prevnum)*Number(newnum);
    display.innerHTML=res;

   prevnum=String(res);
    newnum="";
    oper="";


}
break;
case "/":
{
res= Number(prevnum)/Number(newnum);
display.innerHTML=res;
prevnum=String(res);
newnum="";
oper="";


}
}
}




})





});








 function equal(){


switch(oper)
{
case "+":{
res= Number(prevnum)+Number(newnum);
display.innerHTML=res;
prevnum=String(res);
newnum="";
oper="";

}
break;
case "-":{
    res= Number(prevnum)-Number(newnum);
    display.innerHTML=res;
    prevnum=String(res);
    newnum="";
    oper="";


}
break;
case "X":
{    res= Number(prevnum)*Number(newnum);
    display.innerHTML=res;

    prevnum=String(res);
    newnum="";
    oper="";

}
break;
case "/":
{
res= Number(prevnum)/Number(newnum);
display.innerHTML=res;
prevnum=String(res);
newnum="";
oper="";


}
}


};
