let submit = document.getElementById("submit");
let form = document.getElementById("form");
let result = document.getElementById("result");

async function fun1(search){
    // Initializing and fetching the API
    let url = "https://api.github.com/search/repositories?q=" + search;
    let response = await fetch(url);
    let data = await response.json();

    return data;
}


// Fetch and return Name, Follower and Following Count
async function fun2(url){
    let response = await fetch(url);
    let data = await response.json();

    return obj = {
        name : data.name,
        followerCount : data.followers,
        followingCount : data.following
    };
}


// Fetch and return the number of Branches
async function fun3(url){

    let url1 = url.split("{");
    let response = await fetch(url1[0]);
    let data = await response.json();

    return data.length
}

submit.onclick = function(event){
    event.preventDefault();
    // On Clicking Submit get the value
    let search =document.getElementById("search").value;

    // Promise Satisfied then check for Details
    // Fun1 Promise
    fun1(search).then((dataJs) => {
        
        // Fun2 Promise
        fun2(dataJs.items[0].owner.url).then((dataJs2) =>{

            // Fun3 Promise
            fun3(dataJs.items[0].branches_url).then((numOfBranch) =>{
                let obj = {
                    name : dataJs.items[0].name,
                    full_name : dataJs.items[0].full_name,
                    private : dataJs.items[0].private,
                    owner : {
                        login :dataJs.items[0].owner.login,
                        name : dataJs2.name,
                        followerCount : dataJs2.followerCount,
                        followingCount : dataJs2.followingCount
                    },
                    licenseName : dataJs.items[0].license.name,
                    score : dataJs.items[0].score,
                    numberOfBranch : numOfBranch
                }
                console.log(obj);
            })
        })

    })
 
    form.reset();
}


