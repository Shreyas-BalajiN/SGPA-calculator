
function inp(){
var core=document.getElementById("core");
var ele=document.getElementById("ele");
var lnp=document.getElementById("lnp");
/*var tcre=(core.value*4)+(ele.value*3)+(lnp.value*2);*/
for(var i=0;i<core.value;i++)
{
document.write("<body style='margin-top:175px;background-image:url(ground2.jpg);background-size:cover;background-repeat:no-repeat;'><center>Core ",i+1,": ","<input type='text' Placeholder='Core' class='inp1'><br><br></center>");
}
addidc();
for(var i=0;i<ele.value;i++)
{
document.write("<center>Elective ",i+1,": ","<input type='text' Placeholder='Elective' class='inp2'><br><br></center>");
}
addide();
for(var i=0;i<lnp.value;i++)
{
document.write("<center>Lab/Project ",i+1,": ","<input type='text' Placeholder='Lab/Project' class='inp3'><br><br></center>");
}
addidlp();
document.write("<center><input type='submit' onclick='calc()'><br></center></body>");
}
function addidc() {
var cls = document.getElementsByClassName("inp1"); 
for (n=0, length = cls.length; n < length; n++) {
cls[n].id= "core" + (n + 1);
}
}

function addide() {
var ae = document.getElementsByClassName("inp2"); 
for (n=0, length = ae.length; n < length; n++) {
ae[n].id= "ele" + (n + 1); 
}
}

function addidlp() {
var cls = document.getElementsByClassName("inp3"); 
for (n=0, length = cls.length; n < length; n++) {
cls[n].id= "lnp" + (n + 1); 
}
}

function gp(marks){
if(marks<45&&marks>=40)
return 4;
else if(marks<50&&marks>=45)
return 5;
else if(marks<60&&marks>=50)
return 6;
else if(marks<70&&marks>=60)
return 7;
else if(marks<80&&marks>=70)
return 8;
else if(marks<90&&marks>=80)
return 9;
else if(marks>90)
return 10;
}
function calc(){
var marks;
var grp;
var gc=0
var ge=0;
var glp=0;
var tcre=0;
var clas = document.getElementsByClassName("inp1"); 
for (n=0, length = clas.length; n < length; n++) {
if(clas[n].id.match(/core/)){
marks=parseInt(document.getElementById(clas[n].id).value);
grp=gp(marks);
gc=gc+(grp*4);
}
}
tcre=tcre+(clas.length*4);
var clus = document.getElementsByClassName("inp2"); 
for (n=0, length = clus.length; n < length; n++) {
if(clus[n].id.match(/ele/)){
marks=parseInt(document.getElementById(clus[n].id).value);
grp=gp(marks);
ge=ge+(grp*3);
}
}
tcre=tcre+(clus.length*3);
var cles = document.getElementsByClassName("inp3"); 
for (n=0, length = cles.length; n < length; n++) {
if(clas[n].id.match(/core/)){
marks=parseInt(document.getElementById(cles[n].id).value);
grp=gp(marks);
glp=glp+(grp*2);
}
}
tcre=tcre+(cles.length*2);
var gt=(gc+ge+glp)/tcre;
alert("Your SGPA is "+gt.toFixed(2));
}
