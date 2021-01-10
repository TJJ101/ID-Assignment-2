// Back to Top Button Script
window.onscroll = function() {scrollVisibility()};
function scrollVisibility() {
  if(document.body.scrollTop > 30 || document.documentElement.scrollTop > 30) {
    document.getElementById("bttopbtn").style.display = "inline-block";
  } else {
    document.getElementById("bttopbtn").style.display = "none";
  }
}
function backToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

// Login/Register Script
var regpopup = document.getElementById('register');
var loginpopup = document.getElementById('login');
// When the user clicks anywhere outside of the login/register popup,  it will close

window.onclick = function(event) {
    if (event.target == regpopup)  {
        regpopup.style.display = "none";
    } else if (event.target == loginpopup) {
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



/* API Javascript */

Apicart
  .setDevEnv()
  .configure({
    store: new Apicart.Store({
      token: "LfkUIBRkw51xZcypQcDPc42GD7Vn0gGH?3d19cQlIS5o!!iqldLgyCA8tKYF_j12"
    }),
    payments: new Apicart.Payments({
      token: "bgYHvg2CPgd1yq6HrvIUkgab3Hsyx8!5gmaMWCSBjEI!a2A9cCgmrh?3d6k8i81l"
    }),
    vueComponentsTranslator: {
      localization: {
        en: {
          categories:{
            trainingprogram: {
              title: 'Training Programs',
              description: "Best Training Programs",
              menu: 'Training Programs',
              new: {
                title: 'New Programs',
                description: "New Training Programs that are Available Currently",
                menu: 'New Programs'
              },
              bundles: {
                title: 'Special Bundle',
                description: 'Special Bundle for Everyone',
                menu: 'Special Bundles'
              }
            },
            equipment: {
              title: 'Training Equipments',
              description: "High Quality Training Equipments",
              menu: 'Training Equipments',
              new:{
                title: 'New Equipments',
                description: "New Equipments that are Available Currently",
                menu: 'New Equipments'
              },
              bundles: {
                title: 'Special Bundles',
                description: "Special Bundles for Everyone",
                menu: 'Special Bundles'
              }
            },
            limited: {
              title: 'Limited Time Offer',
              description: "Limited Time Offer for Everyone to Enjoy",
              menu:  'Limited Time Offer'
            }
          }
        }
      },
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
          list: {
            trainingprogram: {
              new: [
                "https://cdn.apicart.dev/external/kelmr738y22probf7pftjeufr1vahzyd/data/01/1.json",
                "https://cdn.apicart.dev/external/kelmr738y22probf7pftjeufr1vahzyd/data/02/2.json",
                "https://cdn.apicart.dev/external/kelmr738y22probf7pftjeufr1vahzyd/data/03/3.json"
              ],
              bundles: [
                "https://cdn.apicart.dev/external/kelmr738y22probf7pftjeufr1vahzyd/data/07/7.json"
              ]
            },
            equipment: {
              new: [
                "https://cdn.apicart.dev/external/kelmr738y22probf7pftjeufr1vahzyd/data/04/4.json",
                "https://cdn.apicart.dev/external/kelmr738y22probf7pftjeufr1vahzyd/data/05/5.json",
                "https://cdn.apicart.dev/external/kelmr738y22probf7pftjeufr1vahzyd/data/06/6.json"
              ],
              bundles: [
                "https://cdn.apicart.dev/external/kelmr738y22probf7pftjeufr1vahzyd/data/08/8.json"
              ]
            },
            limited: [
              "https://cdn.apicart.dev/external/kelmr738y22probf7pftjeufr1vahzyd/data/09/9.json"
            ]
          }
        }
      }
    }
  })
  .initVueBundle();

