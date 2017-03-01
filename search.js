(function(){

    var xhr = new XMLHttpRequest();
    xhr.open("GET", "employeesList.json", false);
    xhr.send(null);
    var jsonObject = JSON.parse(xhr.responseText);

    console.log("Parsed");

    var htmlText = '';

    for ( var key in jsonObject ) {
                htmlText += '<div class="div-container">';
                htmlText += '<p class="p-name"> Name: ' + jsonObject[key].name + '</p>';
                htmlText += '<p class="p-loc"> Location: ' + jsonObject[key].location + '</p>';
                htmlText += '</div>';
            }

    $('body').append(htmlText);

    var searchField = document.getElementById("search");
	searchField.addEventListener("keyup",function(){
	/*var ul, li, a, i;
    var filter = searchField.value.toUpperCase();
    var	ul = document.getElementById("employeesList");
    var	li = ul.getElementsByTagName("li");
    for (i = 0; i < li.length; i++) {
        if (li[i].innerHTML.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } 
        else {
            li[i].style.display = "none";
        }
    }*/
    var filter = searchField.value.toUpperCase();
    console.log(jsonObject);
    console.log(jsonObject.employee.name);
    var needle = 'aa';

    // iterate over each element in the array
    for (var i = 0; i < jsonObject.length; i++){
    // look for the entry with a matching `code` value
    if (jsonObject[i].name == needle){
     // we found itc
    // obj[i].name is the matched result
        console.log("Yayy");
        }
    }
	})
})();