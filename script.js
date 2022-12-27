let etext=document.getElementById("evaluatedText");
let countw=document.getElementById("wordCount");

var c=0;
/*etext.addEventListener("input",()=>{
        c++;
        countw.innerHTML=c;
    }
)*/
etext.addEventListener("keydown",(e)=>{
    if(e.key!='Backspace'){
    c++;
    countw.innerHTML=c;
    }
    else{
        c--;
        countw.innerHTML=c;

    }

})
