
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
