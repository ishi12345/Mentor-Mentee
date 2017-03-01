(function(){

    var xhr = new XMLHttpRequest();
    xhr.open("GET", "D:/Trial/employeesList.json", false);
    xhr.send(null);
    var jsonObject = JSON.parse(xhr.responseText);

    var searchField = document.getElementById("search");
	searchField.addEventListener("keyup",function(){
	var ul, li, a, i;
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
    }
	})
})();