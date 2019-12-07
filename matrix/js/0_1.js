//转换成行列式
function strTOmatrix(a){
var b=a.split("\n"),c=0,d=new Array;
for(var i=b.length-1;i>=0;i--){
b[i]=b[i].split(" ");
for(var j=0;j<b[i].length;j++)
b[i][j]=parseInt(b[i][j]);
if(isNaN(b[i][0])){b.splice(i,1);}else{c+=b[i].length;}
}
if(c!=b.length*b[0].length){
alert("输入数据非法\n请检查数据");
console.log("输入数据非法，请检查数据");
return 0;
}
return b;
}
//输出行列式
function print(a){
if(a){
for(var b=0;b<a.length;b++)
a[b]=a[b].join(" ");
$("#print").innerHTML+="<div class='matrix' contenteditable='true'>"+a.join("<br>")+"</div>";
}else{
$("#print").innerHTML+="<br><strong style='color:#f44336'>数据错误，请检查</strong><br>";
}}
//md控件
function md_button_check(md_element){md_element.style.background=md_element.getAttribute("data-md-bgColor");md_element.style.color=md_element.getAttribute("data-md-fontColor");}
function md_button_change(md_element){md_element.top="-64px";md_element.left="-38px";md_element.width="200px";md_element.height="200px";setTimeout(function (){md_element.display="none";md_element.top="50%";md_element.left="50%";md_element.width="0";md_element.height="0";},800);setTimeout(function (){md_element.display="block";},1100);}
window.onload=function (){var md_button=document.querySelectorAll(".md_button_bg");for(var i=0;i<md_button.length;i++){md_button_check(md_button[i]);}}
//返回顶部
window.onscroll=function (e){
if(document.documentElement.scrollTop || document.body.scrollTop)
$("#JumpToTop").style.display="block";
else
$("#JumpToTop").style.display="none";
}
