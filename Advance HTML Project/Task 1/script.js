// Home Page

var submit = document.getElementById("submit");
var form = document.querySelector("form")


submit.onclick = function (event){
    var productName = document.getElementById("product-name").value;
    var unitMeasure = document.getElementById("unit-measure").value;
    var price = document.getElementById("price").value;
    var image = document.getElementById("product-image").value;
    var decs = document.getElementById("comments").value;
    event.preventDefault();
    form.reset();

    window.alert("Added the Response")


    var tableE = document.getElementById("styled-table");
    var row = tableE.insertRow(1);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    var cell5 = row.insertCell(4);

    var path = image;
    var filename = path.replace(/^.*\\/, "");

    var elem = document.createElement("img");
    elem.setAttribute("src", filename);
    elem.setAttribute("height", "100");
    elem.setAttribute("width", "100");
    // document.getElementById("placehere").appendChild("elem");

    cell1.innerHTML = elem.outerHTML;
    cell2.innerHTML = productName;
    cell3.innerHTML = decs;
    cell4.innerHTML = price;
    cell5.innerHTML = unitMeasure;
    
};

// Display Page

var show = document.getElementById("show");
var tablePage = document.getElementById("table");
var formPage = document.getElementById("form");
var count =0;
show.onclick = function(){
    if(count%2 == 0){
        formPage.classList.add("display");
        tablePage.classList.remove("display");
        count++;
    }else{
        formPage.classList.remove("display");
        tablePage.classList.add("display");
        count++;
    }
};


