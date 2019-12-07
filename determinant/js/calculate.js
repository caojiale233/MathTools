
function arrCreate(){
arr=[];
for(var i=0;i<rank;i++)
arr[i]=[];
}arrCreate();
function row(m,n,k){
m--;n--;
for(var i=0;i<rank;i++)
arr[m][i]+=k*arr[n][i];
output();
var equal="<div class=\"equal_1\"><div class=\"equal_2\">r<sub>"+(m+1)+"</sub>&nbsp;";
if(k>0)equal+="+";
if(k==-1)equal+="-";
else if(k!=1)equal+=k;
equal+="&nbsp;r<sub>"+(n+1)+"</sub></div></div>";
log(equal);
printArr();
}
function col(m,n,k){
m--;n--;
for(var i=0;i<rank;i++)
arr[i][m]+=k*arr[i][n];
output();
var equal="<div class=\"equal_1\"><div class=\"equal_2\">c<sub>"+(m+1)+"</sub>&nbsp;";
if(k>0)equal+="+";
if(k==-1)equal+="-";
else if(k!=1)equal+=k;
equal+="&nbsp;c<sub>"+(n+1)+"</sub></div></div>";
log(equal);
printArr();
}
function A(m,n){
if(rank==1)return false;
m--,n--,rank--;
var cache=arr[m][n]*Math.pow(-1,m+n);
result.push(cache);
log("="+cache+"×");
arr.splice(m,1);
for(var i=0;i<rank;i++)
arr[i].splice(n,1);
printArr();
var arr_backup=arr;
changeRank(rank);
arr=arr_backup;
output();
if(rank==1){
log("==");
var j=1;
for(var i=0;i<result.length;i++){
log(result[i]+"×");
j*=result[i];
}
log(arr[0][0]+"=="+(j*arr[0][0]));
}}