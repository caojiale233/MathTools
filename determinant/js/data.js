function changeRank(a){
rank=a;
$("#css").innerHTML=".num{\
width:calc(25vw / "+rank+");\
height:calc(25vw / "+rank+");\
font-size:calc(10vw / "+rank+");\
line-height:calc(25vw / "+rank+");\
}";
var table="",k=0;
for(var i=1;i<=rank;i++){
table+="<tr>";
for(var j=1;j<=rank;j++)
table+="<td><input id=\"r"+i+"c"+j+"\" data-next=\""+(++k)+"\" type=\"number\" class=\"num\"></td>";
table+="</tr>";
}

$("#inputTable").innerHTML=table;
next();update();arrCreate();
}

function next(){
$(".num").on("keypress", function(event){
if(event.keyCode==13){
var i=this.getAttribute("data-next");
i=parseInt(i);
if(i==rank*rank)i=0;
$(".num",i).focus();
}
});
}next();

function update(){
$(".num").on("change", function (){
var id=this.id.split("c");
arr[parseInt(id[0].match("[0-9]"))-1][parseInt(id[1])-1]=parseInt(this.value);
});
}update();
function output(){
for(var i=0;i<rank;i++)
for(var j=0;j<rank;j++)
$("#r"+(i+1)+"c"+(j+1)).value=arr[i][j];
}

$("#A1").on("keypress", function(event){if(event.keyCode==13){$("#A2").focus();}});
$("#r1").on("keypress", function(event){if(event.keyCode==13){$("#r2").focus();}});
$("#r2").on("keypress", function(event){if(event.keyCode==13){$("#r3").focus();}});
$("#c1").on("keypress", function(event){if(event.keyCode==13){$("#c2").focus();}});
$("#c2").on("keypress", function(event){if(event.keyCode==13){$("#c3").focus();}});

$("#A2").on("keypress", function(event){if(event.keyCode==13){
A(parseInt($("#A1").value),parseInt($("#A2").value));
$("#A1").value="";$("#A2").value="";
}});
$("#r3").on("keypress", function(event){if(event.keyCode==13){
if(!$("#r2").value){$("#r2").value=1}
row(parseInt($("#r1").value),parseInt($("#r3").value),parseInt($("#r2").value));
$("#r1").value="";$("#r2").value="";$("#r3").value="";
}});
$("#c1").on("keypress", function(event){if(event.keyCode==13){
if(!$("#c2").value){$("#c2").value=1}
col(parseInt($("#c1").value),parseInt($("#c3").value),parseInt($("#c2").value));
$("#c1").value="";$("#c2").value="";$("#r3").value="";
}});
$("input[type='number']").on("focus", function (){$("#answer").style.display="none";$("#switch svg").style.transform="rotate(0deg)";});
$("input").on("blur", function (){$("#answer").style.display="flex";$("#switch svg").style.transform="rotate(180deg)";});
$("#answer").style.display="flex";
$("#switch").on("click",function (){
var ans=$("#answer").style;
if(ans.display=="flex"){
ans.display="none";
$("#switch svg").style.transform="rotate(0deg)";
}else{
ans.display="flex";
$("#switch svg").style.transform="rotate(180deg)";
}});
function answer(){
var cache=[];
cache[0]=arr[0][0]*arr[1][1]*arr[2][2];
cache[1]=arr[0][1]*arr[1][2]*arr[2][0];
cache[2]=arr[0][2]*arr[1][0]*arr[2][1];
cache[3]=arr[0][2]*arr[1][1]*arr[2][0];
cache[4]=arr[0][1]*arr[1][0]*arr[2][2];
cache[5]=arr[0][0]*arr[1][2]*arr[2][1];
cache[6]=cache[0]+cache[1]+cache[2]-cache[3]-cache[4]-cache[5];
//cache[6];
log("==");
cache[7]=1;
for(var i=0;i<result.length;i++){
log(result[i]+"×");
cache[7]*=result[i];
}
log(cache[6]+"=="+(cache[6]*cache[7]));
}
