let etext=document.getElementById("evaluatedText");
let countw=document.getElementById("wordCount");
var c=0;
etext.addEventListener("input",()=>{
   c++;
   countw.innerHTML=c;
})