const word = "Hello!";

const onRegister = function () {
  var fname = document.getElementById("fname").value;
  var lname = document.getElementById("lname").value;

  var genderRadios = document.getElementsByName("radGender");
  var gender;

  for (var i = 0; i < genderRadios.length; i++) {
    if (genderRadios[i].checked) {
      gender = genderRadios[i].value;
      break;
    }
  }

  var selectElement = document.querySelector(
    'select[name="dropdown-occupation"]'
  );
  var occupation = selectElement.value;

  var carCheckbox = document.getElementById("car");
  var bikeCheckbox = document.getElementById("bike");

  var selectedValues = [];
  if (carCheckbox.checked) {
    selectedValues.push(carCheckbox.value);
  }

  if (bikeCheckbox.checked) {
    selectedValues.push(bikeCheckbox.value);
  }

  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;

  var policyCheckbox = document.getElementById("policy");
  var registerBtn = document.getElementById("register-btn");

  registerBtn.addEventListener("click", function () {
    if (!policyCheckbox.checked) {
      alert("You must accept the policy and agreement to register."); 
    } else {
        alert("Welcome to our website, we will bring you to login");
        //call function to write json
        location.replace("login.html")
    }
  });

};
