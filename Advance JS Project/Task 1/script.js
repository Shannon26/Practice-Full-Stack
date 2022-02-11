async function fun1(){

    // Initializing and fetching the API
    let url = "https://api.npoint.io/3ca7e843428998cd43f7";
    let response = await fetch(url);
    let data = await response.json();

    return data;
}


// Most Active
function mostActive(obj){
    let arr = Object.values(obj);
    let max = Math.max(...arr);

    return Object.keys(obj).find(key => obj[key] === max);
}

// Promise Satisfied then check for All details related to actor and genre
fun1().then( (dataJs) => {
    console.log(dataJs);

    // Final Result will be catched
    let finalResult = {
        'most_active':{
            'attacker_king': "",
            'defender_king': "",
            'region': "",
            'name':""
        },
        'attacker_outcome':{
            'win': 0, // total win
            'loss': 0 // total loss
        },
        'battle_type':[], // unique battle types
        'defender_size':{
            'average': 0,
            'min':0,
            'max':0
            }
        };


    // Most Active Initialise
    let mostActiveAttacker ={};
    let mostActiveDefender ={};
    let mostActiveRegion ={};
    let mostActiveName ={};
    
    // Attacker Outcone Initialise
    let totalWin =0;
    let totalloss =0;

    // Battle Type Initialise
    battleType =[];

    // Defender Size Initialise
    let defAvg =0;
    let defMin = 10000;
    let defMax = 0;
    
    for(let i=0; i<dataJs.length; i++){
        // Most Active Attacker
        if(dataJs[i].attacker_king in mostActiveAttacker){
            mostActiveAttacker[dataJs[i].attacker_king] = mostActiveAttacker[dataJs[i].attacker_king] +1;
        }else{
            mostActiveAttacker[dataJs[i].attacker_king] = 0;
        }

        // Most Active Defender
        if(dataJs[i].defender_king in mostActiveDefender){
            mostActiveDefender[dataJs[i].defender_king] = mostActiveDefender[dataJs[i].defender_king] +1;
        }else{
            mostActiveDefender[dataJs[i].defender_king] = 0;
        }

        // Most Active Region
        if(dataJs[i].region in mostActiveRegion){
            mostActiveRegion[dataJs[i].region] = mostActiveRegion[dataJs[i].region] +1;
        }else{
            mostActiveRegion[dataJs[i].region] = 0;
        }

        // Most Active Name 
        if(dataJs[i].name in mostActiveName){
            mostActiveName[dataJs[i].name] = mostActiveName[dataJs[i].name] +1;
        }else{
            mostActiveName[dataJs[i].name] = 0;
        }

        // Total Win
        if(dataJs[i].attacker_outcome == "win"){
            totalWin +=1;
        }else if(dataJs[i].attacker_outcome == "loss"){
            totalloss +=1;
        }

        // Battle Type
        if(battleType.includes(dataJs[i].battle_type)){
            // console.log(dataJs[i].battle_type);
        }else{
            battleType.push(dataJs[i].battle_type);
        }

        // Defender Size
        if(dataJs[i].defender_size < defMin){
            defMin = dataJs[i].defender_size;
        }

        if(dataJs[i].defender_size > defMax){
            defMax = dataJs[i].defender_size;
        }

        defAvg +=dataJs[i].defender_size;

    }

    // Most Active Data
    finalResult.most_active.attacker_king = mostActive(mostActiveAttacker);
    finalResult.most_active.defender_king = mostActive(mostActiveDefender);
    finalResult.most_active.region = mostActive(mostActiveRegion);

    // console.log(mostActiveName);
    finalResult.most_active.name = mostActive(mostActiveName);
    
    // Attacker_outcome Data
    finalResult.attacker_outcome.win = totalWin;
    finalResult.attacker_outcome.loss = totalloss;

    // Battle Type Data
    finalResult.battle_type = battleType;

    // Defender Size Data
    finalResult.defender_size.min = defMin;
    finalResult.defender_size.max = parseInt(defMax);
    finalResult.defender_size.average = (defAvg/dataJs.length);

    console.log(finalResult);
})