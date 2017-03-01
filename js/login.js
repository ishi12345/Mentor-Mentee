(function(){
	username = document.getElementById("username");			//username element
	password = document.getElementById("password");			//password element
	login = document.getElementById("login");				//login element	
	userType=["superuser","supervisor","supervisee"];
	userTypeURL={"superuser":"superuser.html","supervisor":"supervisor.html","supervisee":"supervisee.html"};

	if(localStorage["mmusername"]!=undefined){
		username.value=localStorage["mmusername"];
	}

	login.addEventListener("click",validateAndDirect);		//adds function which validates username and password and redirects user based on usertype
	function validateAndDirect(){

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
				userDetails=getUserDetails(username.value);
				console.log(userDetails);
				localStorage.setItem("userDetails",JSON.stringify(userDetails));
				//direct users to supervisor,user or visee page
				window.location=userTypeURL[userType[userDetails["flag"]]];
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
		return {"name":"vishal","id":"127439","flag":2};
	}
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