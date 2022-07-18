function validateLogin(){

    alert('please wait');
    
    alert(document.getElementById("usrname").value);
    
    let usrnameValue = document.getElementById("usrname").value ;
    let pwdValue = document.getElementById("psw").value ;

    return true;
   
    //console.log("--------------->"+document.forms.getElementById('usrname'))

    //alert("--------------->"+document.forms.getElementById('usrname'))
}


function bookingconfirm(){

    let rdateValue = document.getElementById('rdate').value;
    //alert('date ----------> '+   rdateValue)
    if (document.getElementById('otrip').checked) {
        let otripValue = document.getElementById('otrip').value;
        alert(otripValue)
      }
    if ((document.getElementById('rtrip').checked) &&  (rdateValue === '')) {
    let rtripValue = document.getElementById('rtrip').value;
    alert("Please select return date")
    }
    
   
}

function passengerConfirm(){
alert("hi")
  let pnameValue = document.getElementById("pname1").value;
  if( document.getElementById("pname1").length > 5){
 alert("text should be more than 5 characters")
  }

     
    }


        let myInput = document.getElementById("psw");
        let letter = document.getElementById("letter");
        let capital = document.getElementById("capital");
        let number = document.getElementById("number");
        let length = document.getElementById("length");
        
        // When the user clicks on the password field, show the message box
        myInput.onfocus = function() {
          document.getElementById("message").style.display = "block";
        }
        
        // When the user clicks outside of the password field, hide the message box
        myInput.onblur = function() {
          document.getElementById("message").style.display = "none";
        }
        
        // When the user starts to type something inside the password field
        myInput.onkeyup = function() {
          // Validate lowercase letters
          var lowerCaseLetters = /[a-z]/g;
          if(myInput.value.match(lowerCaseLetters)) {
            letter.classList.remove("invalid");
            letter.classList.add("valid");
          } else {
            letter.classList.remove("valid");
            letter.classList.add("invalid");
        }
        
          // Validate capital letters
          var upperCaseLetters = /[A-Z]/g;
          if(myInput.value.match(upperCaseLetters)) {
            capital.classList.remove("invalid");
            capital.classList.add("valid");
          } else {
            capital.classList.remove("valid");
            capital.classList.add("invalid");
          }
        
          // Validate numbers
          var numbers = /[0-9]/g;
          if(myInput.value.match(numbers)) {
            number.classList.remove("invalid");
            number.classList.add("valid");
          } else {
            number.classList.remove("valid");
            number.classList.add("invalid");
          }
        
          // Validate length
          if(myInput.value.length >= 8) {
            length.classList.remove("invalid");
            length.classList.add("valid");
          } else {
            length.classList.remove("valid");
            length.classList.add("invalid");
          }
        }
        