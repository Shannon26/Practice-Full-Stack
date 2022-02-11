async function fun1(){

    // Initializing and fetching the API
    let url = "https://raw.githubusercontent.com/prust/wikipedia-movie-data/master/movies.json";
    let response = await fetch(url);
    let data = await response.json();

    return data;
}


// Promise Satisfied then check for All details related to actor and genre
fun1().then((dataJs) =>{

    let dataReq = {
        actors : [],
        Genres : []
    };

    // DataJs from API to each Array
    for(i=0; i<2000; i++){

        // Cast from each Arrary of API
        if(dataJs[i].cast.length > 1){

            for(j=0; j<dataJs[i].cast.length; j++){

                // If empty then append 1st element
                if(dataReq.actors.length ==0){
                    let actor = {
                        Name: dataJs[i].cast[j],
                        movies: [dataJs[i].title]
                    };
    
                    dataReq.actors.push(actor);
                }else{

                    // Check if we have already added the Actor
                    let flag = true;

                    for(k=0; k<dataReq.actors.length; k++){

                        if(Object.values(dataReq.actors[k]).indexOf(dataJs[i].cast[j]) > -1){
                            dataReq.actors[k].movies.push(dataJs[i].title);
                            flag = false;
                            break;
                        }
                    }

                    // If not added then add the actor
                    if(flag){
                        let actor = {
                            Name: dataJs[i].cast[j],
                            movies: [dataJs[i].title]
                        };
                        dataReq.actors.push(actor);
                    }
                }
            }
        }
        

        // Genres from API call
        if(dataJs[i].genres.length > 1){

            for(j=0; j<dataJs[i].genres.length; j++){
                
                // If empty then append 1st element
                if(dataReq.Genres.length ==0){
                    let Genre = {
                        Type: dataJs[i].genres[j],
                        movies: [dataJs[i].title]
                    };
    
                    dataReq.Genres.push(Genre);
                }else{
                    let flag = true;

                    for(k=0; k<dataReq.Genres.length; k++){

                        // Check if we have already added the Genre
                        if(Object.values(dataReq.Genres[k]).indexOf(dataJs[i].genres[j]) > -1){
                            dataReq.Genres[k].movies.push(dataJs[i].title);
                            flag = false;
                            break;
                        }
                    }

                    // If not added then add the Genre
                    if(flag){
                        let Genre = {
                            Type: dataJs[i].genres[j],
                            movies: [dataJs[i].title]
                        };
                        dataReq.Genres.push(Genre);
                    }
                }
            }

        }
    }
    console.log(dataReq);
})