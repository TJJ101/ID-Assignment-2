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




Apicart
  .setDevEnv() // Switch to dev environment
  .configure({
    store: new Apicart.Store({
      token: "LfkUIBRkw51xZcypQcDPc42GD7Vn0gGH?3d19cQlIS5o!!iqldLgyCA8tKYF_j12"
    }),
    payments: new Apicart.Payments({token: 
      "bgYHvg2CPgd1yq6HrvIUkgab3Hsyx8!5gmaMWCSBjEI!a2A9cCgmrh?3d6k8i81l"
    }),
    vueComponentsTranslator: {
      currencyFormats: {
        en: {
          currency: {
            currency: 'SGD'
          }
        }
      }
    },
    vueComponents: {
      cartDropdown: {
        dropdownPosition: 'right'
      },
      category: {
        products: {
          description: {
            length: 250
          },
          list: [
            "https://cdn.apicart.dev/external/kelmr738y22probf7pftjeufr1vahzyd/data/01/1.json",
            "https://cdn.apicart.dev/external/kelmr738y22probf7pftjeufr1vahzyd/data/02/2.json",
            "https://cdn.apicart.dev/external/kelmr738y22probf7pftjeufr1vahzyd/data/03/3.json",
            "https://cdn.apicart.dev/external/kelmr738y22probf7pftjeufr1vahzyd/data/04/4.json",
            "https://cdn.apicart.dev/external/kelmr738y22probf7pftjeufr1vahzyd/data/05/5.json",
            "https://cdn.apicart.dev/external/kelmr738y22probf7pftjeufr1vahzyd/data/06/6.json"
          ]
        }
      }
    }
  })
  .initVueBundle();

