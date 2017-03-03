(function(){
        //logout dropdown functinality
        var logoutdropdown=document.getElementById("logoutdropdown");

        logoutdropdown.addEventListener('click', myFunction);


        function myFunction() {
            document.getElementById("myDropdown").classList.toggle("show");
        }


        // Close the dropdown if the user clicks outside of it
        window.onclick = function(event) {
          if (!event.target.matches('.dropbtn')) {

            var dropdowns = document.getElementsByClassName("dropdown-content");
            var i;
            for (i = 0; i < dropdowns.length; i++) {
              var openDropdown = dropdowns[i];
              if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
              }
            }
          }
        }

        //fetching data from server
        
    	var xhr; 
        if(window.XMLHttpRequest)
        {
            xhr=new XMLHttpRequest();
        }
        else if(window.ActiveXObject)
        {
            xhr=new ActiveXObject("Microsoft.XMLHTTP");
        } 
        
    	var supervisorlistdisplay=document.getElementsByClassName("supervisorlistdisplay")[0];

        //click functionality
        function addClickFunctionality(){
            var supervisorList = document.getElementsByClassName("supervisor"); //list of all supervisord that are displayed
            supervisorClickedClass="supervisorclicked"; //the class that should be applied to the supervisor div once it has been clicked
            supervisorNotClickedClass="supervisor";
            currentActiveSupervisor=document.querySelectorAll(".supervisor")[1];    //skip the hidden skeleton and the first supervisor that is displayed by default
            
            //adding click event to all the supervisor list elements so that when it is clicked the supervisee under them can be displayed
            for(var i=0;i<supervisorList.length;i++){
                console.log(supervisorList[i]);
                supervisorList[i].addEventListener("click",displaySupervisorList);
            }

            currentActiveSupervisor.setAttribute("class",supervisorClickedClass);       //highlight the first supervisor

            //this function displays the all the supervisees under the supervisor
            function displaySupervisorList(){
                //this if is to avoid removing highlight on double click
                if(this!==currentActiveSupervisor){
                    var clickedSupervisorUserName = this.getAttribute("id");          //the clicked supervisor's userName
                    superviseeList = displaySuperviseeList(clickedSupervisorUserName);            //this function returns the list of all supervisees under that supervisor
                    this.setAttribute("class",supervisorClickedClass);  //to highlight the clicked supervisor
                    currentActiveSupervisor.setAttribute("class",supervisorNotClickedClass);    //remove highlight on the previously clicked supervisor
                    currentActiveSupervisor=this;   //setting active supervisor to the clicked element
                }
            }

            //this function retrieves the list of all supervisees under the supervisor and displays it
            function displaySuperviseeList(supervisorId){
                /*getSupervisees(supervisorId);
                return true;*/


            }

            //this function returns all the supervisees under the supervisor
            /*function getSupervisees(){

            }*/
        }


        //fetched data now populate the supervisor list display
    	xhr.onreadystatechange = function() {
        if (xhr.readyState == 4 && xhr.status == 200) {
            myObj = JSON.parse(xhr.responseText);
            /*console.log(myObj.employee);
           	console.log(myObj.employee.length);*/
            var divSkeleton = document.getElementsByClassName("supervisor")[0];
            var hrSkeleton = document.getElementsByClassName("divide")[0];
            for(var i=0;i<myObj.length;i++)
            {
            	if(myObj[i].employeeType==1)
                {
                var data = myObj[i].name;
                var supervisorDiv = divSkeleton.cloneNode(true);
                supervisorDiv.style.display="";
                supervisorDiv.setAttribute("id", myObj[i].userName);
                supervisorlistdisplay.appendChild(supervisorDiv);

                document.querySelector("#"+myObj[i].userName+" .supervisorname").innerHTML=myObj[i].name;
                document.querySelector("#"+myObj[i].userName+" .supervisorid").innerHTML=myObj[i].id;

                var hrDiv = hrSkeleton.cloneNode(true);
                hrDiv.style.display="";
                supervisorlistdisplay.appendChild(hrDiv);
                }
        	}
            //add click Functionality
            addClickFunctionality();
        }      
    };


    xhr.open("GET", "supervisorList.json", true);
   /* xhr.open("GET", "supervisorList.json", true);*/
    xhr.send();



    //search functionality

    var searchField = document.getElementById("search");
    searchField.addEventListener("keyup",function(){
    		var ul, li;
        	filter = searchField.value.toUpperCase();
        	ul = document.getElementsByClassName("supervisorlistdisplay")[0];
        	li = ul.getElementsByTagName("div");
            var flag=true;  //to highlight first result in search
            //i=1 so that we ignore the division from which we have cloned
        	for (var i = 1; i < li.length; i++) {
                console.log(li[i].innerHTML,i);
                if (li[i].querySelector(".supervisorname").innerHTML.toUpperCase().indexOf(filter) > -1) {
                    console.log(li[i],i,"sucess");
                    li[i].style.display = "";
                    //to redisplay hr lines on backspace
                    document.querySelector("#"+li[i].getAttribute("id")+"+hr").style.display="";
                    //to highlight first result of the search
                    if(flag){
                        currentActiveSupervisor.setAttribute("class",supervisorNotClickedClass); //remove highlight
                        currentActiveSupervisor=li[i];  //change active supervisor
                        currentActiveSupervisor.setAttribute("class",supervisorClickedClass);   //highlight current active supervisor
                        flag=false;
                    }
                } 
                else {
                    li[i].style.display = "none";
                    //to remove hr lines on search
                    document.querySelector("#"+li[i].getAttribute("id")+"+hr").style.display="none";
                }
            }   
    	});

})();


//click functionality