let submit = document.getElementById("submit");
let form = document.getElementById("form");

submit.onclick = function(event){
    let para = document.getElementById("comment").value;
    let result = para.match( /[^\.!\?]+[\.!\?]+/g );
    let output = document.getElementById("output");
    let count = 1;

    for (let i=0; i<result.length; i++){
        result[i]=result[i].trim();
        let words = result[i].split(/[\s,]+/);

        if (words.length >3){

            output.innerHTML += count +". ";

            for (let i in words){
                let varApp = "";

                if(!isNaN(Number(words[i]))){
                    for(let x =0; x<words[i].length; x++){
                        varApp +="X";
                    }
                    words[i] = varApp;
                }
                output.innerHTML += " "+ words[i] + " ";
            }
            output.innerHTML += "<br>";
            count++;
        }
        
    }

    event.preventDefault();
    form.reset();
}