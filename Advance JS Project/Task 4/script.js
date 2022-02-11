async function fun1(){

    // Initializing and fetching the API
    let url = "https://think.cs.vt.edu/corgis/datasets/json/airlines/airlines.json";
    let response = await fetch(url);
    let data = await response.json();

    return data;
}


// Promise Satisfied then check for All details related to Cancelled, Delayed, Diverted, On Time and Total
fun1().then((dataJS) => {


    // Create a structure to record the whole data
    let name = {};
    for(i=0; i<dataJS.length; i++){
        name[dataJS[i].Airport.Code] = {
            "Cancelled" :0,
            "Delayed" : 0,
            "Diverted" : 0,
            "On Time" : 0,
            "Total" : 0
        };
    }


    // Add the details to the empty Object for calculation
    for(i=0; i<dataJS.length; i++){
        name[dataJS[i].Airport.Code]["Cancelled"] += parseInt(dataJS[i].Statistics.Flights["Cancelled"]);
        name[dataJS[i].Airport.Code]["Delayed"] += parseInt(dataJS[i].Statistics.Flights["Delayed"]);
        name[dataJS[i].Airport.Code]["Diverted"] += parseInt(dataJS[i].Statistics.Flights["Diverted"]);
        name[dataJS[i].Airport.Code]["On Time"] += parseInt(dataJS[i].Statistics.Flights["On Time"]);
        name[dataJS[i].Airport.Code]["Total"] += parseInt(dataJS[i].Statistics.Flights["Total"]);  
    }

    console.log(name);

    return name;
})

.then((name)=> {

    // Check for the Total matches to the sum of all the status
    for(i in name){
        if(name[i]["Total"] === (name[i]["Cancelled"] + name[i]["Delayed"] + name[i]["Diverted"] + name[i]["On Time"])){
            console.log(i + " Total Matches");
        }else{
            console.log(i + "Total does not match");
        }
    }
})