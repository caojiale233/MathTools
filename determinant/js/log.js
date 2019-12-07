function log(answer){
$("#answer").innerHTML+=answer;
}
function printArr(){
var a=[];
for(var i=0;i<arr.length;i++)
a[i]=JSON.parse(JSON.stringify(arr[i]));

for(var b=0;b<a.length;b++)
a[b]=a[b].join(" ");
$("#answer").innerHTML+="<div class='output' contenteditable='true'>"+a.join("<br>")+"</div>";
if(rank==1){
var k=1;
for(var i=0;i<result.length;i++)
k*=result[i];
log("=="+k*arr[0][0]);
}
}