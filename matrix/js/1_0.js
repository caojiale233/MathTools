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
//范数
/*Frobenius范数*/
$("#normF").on("click",function (){
	var matrix12
	if($("#selector").checked){
		if(matrix12=strTOmatrix($("#input2").innerText))
			this.parentNode.parentNode.children[2].innerHTML="<input type='text' value='"+normF(matrix12)+"' class='norm'>";
	}else{
		if(matrix12=strTOmatrix($("#input1").innerText))
			this.parentNode.parentNode.children[0].innerHTML="<input type='text' value='"+normF(matrix12)+"' class='norm'>";
	}
});
/*行和范数*/
$("#norm00").on("click",function (){
	var matrix12
	if($("#selector").checked){
		if(matrix12=strTOmatrix($("#input2").innerText))
			this.parentNode.parentNode.children[2].innerHTML="<input type='text' value='"+norm00(matrix12)+"' class='norm'>";
	}else{
		if(matrix12=strTOmatrix($("#input1").innerText))
			this.parentNode.parentNode.children[0].innerHTML="<input type='text' value='"+norm00(matrix12)+"' class='norm'>";
	}
});
/*列和范数*/
$("#norm1").on("click",function (){
	var matrix12
	if($("#selector").checked){
		if(matrix12=strTOmatrix($("#input2").innerText))
			this.parentNode.parentNode.children[2].innerHTML="<input type='text' value='"+norm1(matrix12)+"' class='norm'>";
	}else{
		if(matrix12=strTOmatrix($("#input1").innerText))
			this.parentNode.parentNode.children[0].innerHTML="<input type='text' value='"+norm1(matrix12)+"' class='norm'>";
	}
});
/*谱范数*/
$("#norm2").on("click",function (){
	var matrix12
	if($("#selector").checked){
		if(matrix12=strTOmatrix($("#input2").innerText))
			this.parentNode.parentNode.children[2].innerHTML="<input type='text' value='"+norm2(matrix12)+"' class='norm'>";
	}else{
		if(matrix12=strTOmatrix($("#input1").innerText))
			this.parentNode.parentNode.children[0].innerHTML="<input type='text' value='"+norm2(matrix12)+"' class='norm'>";
	}
});
/*计算全部范数*/
$("#normAll").on("click",function (){
	$("#normF").click();
	setTimeout("$('#norm00').click()",300);
	setTimeout("$('#norm1').click()",600);
	setTimeout("$('#norm2').click()",900);
});