(function(){


		

		var button = document.getElementById("buttonn");

		

		



		button.addEventListener('click',function() {

			function randomString(length, chars) {
    	var result = '';
    	for (var i = length; i > 0; --i) result += chars[Math.round(Math.random() * (chars.length - 1))];
    	return result;
		}
		var pwd = randomString(8, '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ');

			

			var mail = "Your Password is: "+pwd;
			
			emailjs.send("gmail","template_LqU4E6f6",{name: name ,"message_html": mail,"to_name": name, "reply_to": "mentormentee2k17@gmail.com","email":, notes: "Check this out!"}).then(function(response) {
   		console.log("SUCCESS. status=%d, text=%s", response.status, response.text);
		}, function(err) {
   			console.log("FAILED. error=", err);
		});
			
		}
		);

})();


