/*转置操作*/
$("#ope11").on("click",function (){
var matrix1;
if(matrix1=strTOmatrix($("#input1").innerText))
matrix1=transpose(matrix1);
print(matrix1);
});
$("#ope21").on("click",function (){
var matrix2;
if(matrix2=strTOmatrix($("#input2").innerText))
matrix2=transpose(matrix2);
print(matrix2);
});
/*伴随矩阵*/
$("#ope12").on("click",function (){
var matrix1=strTOmatrix($("#input1").innerText);
if(matrix1)
matrix1=adjoint(matrix1);
if(matrix1)
print(transpose(matrix1));
else
print(0);
});
$("#ope22").on("click",function (){
var matrix2=strTOmatrix($("#input2").innerText);
if(matrix2)
matrix2=adjoint(matrix2);
if(matrix2)
print(transpose(matrix2));
else
print(0);
});
/*计算行列式*/
$("#ope13").on("click",function (){
var matrix1=strTOmatrix($("#input1").innerText);
if(matrix1&&matrix1.length==matrix1[0].length)
$("#print").innerHTML+="<br>"+(determinant(matrix1));
else
print(0);
});
$("#ope23").on("click",function (){
var matrix2=strTOmatrix($("#input2").innerText);
if(matrix2&&matrix2.length==matrix2[0].length)
$("#print").innerHTML+="<br>"+(determinant(matrix2));
else
print(0);
});
$("#hyperDeterminant").on("click",function (){
window.open("../determinant/index.html");
});
/*矩阵算法*/
//加法
$("#ope5").on("click",function (){
var matrix1=strTOmatrix($("#input1").innerText);
var matrix2=strTOmatrix($("#input2").innerText);
if(matrix1&&matrix2)
print(add(matrix1,matrix2));
});
//乘法
$("#ope14").on("click",function (){
var matrix1=strTOmatrix($("#input1").innerText);
var matrix2=strTOmatrix($("#input2").innerText);
if(matrix1&&matrix2)
print(multiply(matrix1,matrix2));
});
$("#ope24").on("click",function (){
var matrix1=strTOmatrix($("#input1").innerText);
var matrix2=strTOmatrix($("#input2").innerText);
if(matrix1&&matrix2)
print(multiply(matrix2,matrix1));
});