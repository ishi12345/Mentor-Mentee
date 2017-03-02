




	(function(){
	username = document.getElementById("username");			//username element
	password = document.getElementById("password");			//password element
	login = document.getElementById("login");				//login element	
	userType1=["superuser","supervisor","supervisee"];
	userTypeURL={"superuser":"dashboard.html","supervisor":"supervisor.html","supervisee":"supervisee.html"};

	if(localStorage["mmusername"]!=undefined){
		username.value=localStorage["mmusername"];
	}

	login.addEventListener("click",validateAndDirect);		//adds function which validates username and password and redirects user based on usertype
	function validateAndDirect(){
         console.log(username.value);
		 if(!(username.value===null || username.value==="" || password.value===null || password.value===""))
		 {
			//====================================dummy function validate user======================
			var valid = validateUser(username.value,password.value);	
			if(!valid){
				//make paragraph which show wrong username/password visible
				console.log("invalid login credentials");
				document.getElementById("errormessage").style.display="block";
			}else{
				if(document.getElementById("remember_checkbox").checked){
					//save username in localstorage
					console.log(username.value);
					localStorage.setItem("mmusername",username.value);
					console.log(localStorage["mmusername"]);
				}
				//====================================dummy function getUserDeatils======================
				getUserDetails();



				// userDetails=getUserDetails(username.value);
				// console.log(userDetails);
				// console.log(userDetails);
				// flagValue=getFlag();
				// localStorage.setItem("userDetails",JSON.stringify(userDetails));
				// //direct users to supervisor,user or visee page
				// console.log(userDetails[flagValue]);
				// window.location=userTypeURL[userType[userDetails[flagValue]]];




			}
			//prevent default form submitting
			event.preventDefault();
		}
	}

	function invalidCredentials(){
	}

//dummy function
	function validateUser(){
		return true;
	}

//dummy function
	function getUserDetails(){
		var xhr;
		  function initRequest()
		   {
              if(window.XMLHttpRequest)
              {
              	xhr=new XMLHttpRequest();
              }
              else if(window.ActiveXObject)
              {
                  xhr=new ActiveXObject("Microsoft.XMLHTTP");
              }
		   }

		   function load()
              {
	               initRequest();
	               let url="main1.json";
	             
                 
	              xhr.open("GET",url,true);
	              xhr.onreadystatechange=processResponse;
	              xhr.send(null);
              }

                function processResponse()
		          {
		   	          if(xhr.readyState==4 && xhr.status==200)
		      	        {
		   		           console.log(xhr.responseText);
		   		           var response=xhr.responseText;
		   		           var text=JSON.parse(response);
		   		           var len=text["employee"].length;
		   		           console.log(len);
		   		            var userType2;
		   		            
		   		            for(var i=0;i<len;i++)
		   		            {
		   		            	if(username.value===text.employee[i].userName)
		   		            	{
		   		            		var data=text.employee[i].employeeType;
		   		            		console.log(data);
		   		            		/*switch (data) {
		   		            			case 0:
		   		            				    userType2=["supervisor"];
		   		           	              
		   		           		             window.location=userTypeURL[userType2[data]];
		   		           		          
		   		            				break;
		   		            			case 1:
		   		            				  userType2=["superuser"];
		   		           	                	
		   		           		           window.location=userTypeURL[userType2[data]];
		   		           		         
		   		            				break;
		   		            		}*/
		   		            		  if(data==0)
		   		                         {
		   		           	                
		   		           		             window.location=userTypeURL[userType1[data]];
		   		           		          
		   		           		             //break;
		   		                         }
		   		                       else if(data==1)
		   		                         {
		   		           	                //userType1=["superuser"];
		   		           	                console.log(userTypeURL,userType1,userType1[data]);
		   		           		           window.location=userTypeURL[userType1[data]];
		   		           		         
		   		           		            //break;
		   		                         }
		   		            	}
		   		            }
		   		           /*var data=text.employee[0].employeeType;
		   		           console.log(data);
		   		           var userType2;*/
		   		         
		   		          
							/*var flagValue=getFlag();
							console.log(flagValue);
							// localStorage.setItem("userDetails",JSON.stringify(userDetails));
							//direct users to supervisor,user or visee page
							// console.log(userType1[flagValue]);*/
							//window.location=userTypeURL[userType[data]];
		   	            }
		           }
		           load();
};


	
})();


/* FORGOT PASSWORD */

(function()
{
    var clickEvent=document.getElementById("login");
    var modal = document.getElementById("emailPopup");
    var forgotPasswordBtn = document.getElementById("forgot_span");
    var closePopUp = document.getElementsByClassName("close-popup");
    var emailDone=document.getElementById("emailDone");
    var typedUsername=document.getElementById("forgot_username");
    var resetEmailForm=document.getElementById("emailForm");
    var showPopupDiv = document.getElementById("popupDiv");
    var successMsg = document.getElementById("success-msg");
    var showErrorMessage=document.getElementById("errorMessage");
    var re = new RegExp("adurai");


    forgotPasswordBtn.addEventListener("click", function() {
        modal.style.display = "block";
        showPopupDiv.style.display = "block";
        successMsg.style.display = "none";
    },false);

    closePopUp[1].addEventListener("click", function() {
          resetEmailForm.reset();
          modal.style.display = "none";
        showErrorMessage.innerHTML="";
},false);

    closePopUp[0].addEventListener("click",  function() {
        modal.style.display = "none";
        resetEmailForm.reset();
    });
    // window.addEventListener("click", function() {
    //     if (event.target == modal) {
    //         modal.style.display = "none";
    //         resetEmailForm.reset();
    //         showErrorMessage.innerHTML="";
    //     }
    // },false);

    emailDone.addEventListener("click", function(evnt){
    //===============================dummy function===========================
    if(!(typedUsername.value===null || typedUsername.value===""))
    {
        if(getUserDetails(typedUsername.value)){
        var showEmail=document.getElementById("emailId");//get the email extracted from json file
        showPopupDiv.style.display = "none";
        successMsg.style.display = "block"; 
        closePopUp[0].style.display="none";
        // showEmail.innerHTML=typedUsername.value;
        }
        else {
            showErrorMessage.innerHTML="This is an invalid UserName ";
        }
        evnt.preventDefault ();
        return true;
      }
    },false); 

    //dummy function
    function getUserDetails(){
    	return true;
    }
})();





