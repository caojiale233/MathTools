
//转置
function transpose(a){
var b=new Array(a[0].length);
for(var c=0;c<b.length;c++){
b[c]=new Array(a.length);
for(var d=0;d<a.length;d++)
b[c][d]=a[d][c];
}
return b;
}
//伴随矩阵
function adjoint(a){
if(a[0].length!=a.length)return 0;
var b=[];
for(var i=0;i<a.length;i++)
b[i]=JSON.parse(JSON.stringify(a[i]));
for(var i=0;i<b.length;i++)
for(var j=0;j<b.length;j++){
var c=[];
for(var k=0;k<a.length;k++)
c[k]=JSON.parse(JSON.stringify(a[k]));
c.splice(i,1);
for(var k=0;k<c.length;k++)
c[k].splice(j,1);
b[i][j]=determinant(c)*Math.pow(-1,i+j);
}
return b;
}
//行列式
function determinant(a){
if(a[0].length!=a.length)return 0;
switch(a.length){
case 1:
return a[0][0];
case 2:
return a[0][0]*a[1][1]-a[0][1]*a[1][0];
case 3:
var b=[];
b[0]=a[0][0]*a[1][1]*a[2][2];
b[1]=a[0][1]*a[1][2]*a[2][0];
b[2]=a[0][2]*a[1][0]*a[2][1];
b[3]=a[0][2]*a[1][1]*a[2][0];
b[4]=a[0][1]*a[1][0]*a[2][2];
b[5]=a[0][0]*a[1][2]*a[2][1];
b[6]=b[0]+b[1]+b[2]-b[3]-b[4]-b[5];
return b[6];
default:
alert("此界面无法计算高阶行列式，请复制行列式移步另一个界面求解");
return 0;
}
}
//加法
function add(a,b){
if(a.length!=b.length||a[0].length!=b[0].length)return 0;
for(var c=0;c<a.length;c++)
for(var d=0;d<a[0].length;d++)
a[c][d]+=b[c][d];
return a;
}
//乘法
function min(a,b){return a>b?b:a;}
function multiply(a,b){
if(a[0].length!=b.length)return 0;
var c=[];
for(var d=0;d<a.length;d++){
c[d]=[];
for(var e=0;e<b[0].length;e++){
c[d][e]=0;
for(var f=0;f<b.length;f++)
c[d][e]+=a[d][f]*b[f][e];
}}return c;
}
//范数
function max(a){var b=a[0];for(var i=1;i<a.length;i++)b=a[i]>b?a[i]:b; return b;}
/*Frobenius范数*/
function normF(a){
	if(a.length!=a[0].length)return 0;
	var b=0;
	for(var i=0;i<a.length;i++)
		for(var j=0;j<a.length;j++)
			b+=Math.pow(Math.abs(a[i][j]),2);
	return Math.sqrt(b);
}
/*行和范数*/
function norm00(a){
	if(a.length!=a[0].length)return 0;
	var b=new Array(a.length);
	for(var i=0;i<a.length;i++){
		b[i]=0;
		for(var j=0;j<a.length;j++)
			b[i]+=Math.abs(a[i][j]);
	}
	return max(b);
}
/*列和范数*/
function norm1(a){
	if(a.length!=a[0].length)return 0;
	var b=new Array(a.length);
	for(var i=0;i<a.length;i++){
		b[i]=0;
		for(var j=0;j<a.length;j++)
			b[i]+=Math.abs(a[j][i]);
	}
	return max(b);
}
/*谱范数*/
function norm2(a){
	if(a.length!=a[0].length)return 0;
	a=multiply(transpose(a),a);
	switch(a.length){
		case 1:
		return Math.sqrt(a[0][0]);
		break;
		case 2:
		return Math.sqrt((a[0][0]+a[1][1]+Math.sqrt(Math.pow(a[0][0],2)+Math.pow(a[1][1],2)-2*a[0][0]*a[1][1]+4*a[0][1]*a[1][0]))/2);
		break;
		/*case 3:
		return Math.sqrt(max(cubicEquation(-1,a[0][0]+a[1][1]+a[2][2],a[0][2]*a[2][0]+a[1][2]*a[2][1]+a[0][1]*a[1][0]-a[0][0]*a[2][2]-a[1][1]*a[2][2]-a[0][0]*a[1][1],determinant(a))));
		break;*/
		default:
		return "方阵阶数不在支持范围内";
		break;
	}
}
/*一元三次方程*/
function cubicEquation(a,b,c,d){
	
	return [a,b,c,d];
}