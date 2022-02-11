async function fun1(){

    // Initializing and fetching the API
    let url = "http://api.nobelprize.org/v1/prize.json";
    let response = await fetch(url);
    let data = await response.json();
    let count = 0;

    // Counting the data between 2000 to 2019 
    data.prizes.forEach(element => {
        if(element.year <= 2019 && element.year >= 2000){
            count++;

            // Fetching all the chemistry Nobel Prize Winner
            if(element.category == "chemistry"){
                try{
                    element.laureates.forEach((element1) =>{
                        console.log("Name: " +element1.firstname+ " " +element1.surname+ " || Year: " +element.year);
                    });
                }
                // Handle error where there is no Entry
                catch{
                }                
            }
        }        
    });

    console.log("Total Entry Between Year 2000 to 2019: " +count);
}

fun1()