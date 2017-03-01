        function allowDrop(ev){
            ev.preventDefault();
        }

        function drag(ev) {
            ev.dataTransfer.setData("text", ev.target.id);
        }

        function drop(ev) {
            ev.preventDefault();
            var data = ev.dataTransfer.getData("text");
            ev.target.appendChild(document.getElementById(data));
        }

        var xhr = new XMLHttpRequest();
        var element = document.getElementById("superviseelist");
        xhr.onreadystatechange = function() {
            if(xhr.readyState == 4 && xhr.status == 200){
                myObj = JSON.parse(xhr.responseText);

                for(var i=0; i<myObj.length; i++){

                    var data = myObj.employee[i].name;
                    var individual = document.createElement("div");
                    individual.appendChild(document.createTextNode(data));
                    superviseelist.append(individual);
                }
            }
        };

        xhr.open("GET","employeesList.json",true);
        xhr.send();



        


