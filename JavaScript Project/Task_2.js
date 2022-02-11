let qTeams = {aaiec: 400,
    aaiwc: 60, 
    qai: 200, 
    poc: 100,
    gtm: 50,
    hr: 10
    };

let arr = (Object.entries(qTeams).sort((a,b) => b[1]-a[1]));

for(let i=0; i<arr.length; i++){
        console.log(arr[i][0],arr[i][1]);
}