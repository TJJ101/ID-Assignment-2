var regpopup = document.getElementById('register');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == regpopup) {
        regpopup.style.display = "none";
    }
}

var loginpopup = document.getElementById('login');

window.onclick = function(event){
  if(event.target == loginpopup){
    loginpopup.style.display = "none";
  }
}

// To check if the password is matching on the register popup //
$('#password, #confirmPass').on('keyup', function () {
    if ($('#password').val() == $('#confirmPass').val()) {
      $('#warning').html('Password Matches').css('color', 'green');
    } else 
      $('#warning').html('Password Does not Match').css('color', 'red');
});


