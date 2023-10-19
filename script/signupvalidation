 function validateForm() {
        var username = document.getElementById("floatingInput").value;
        var password = document.getElementById("floatingPassword").value;
        var confirmpassword=document.getElementById("floatingconfirmPassword").value;
        var errorMessage = document.getElementById("error-message");
        errorMessage.innerHTML = "";

        if (username === "" && password === "") {
          errorMessage.innerHTML = "Both email and password are required.";
          return false;
        }
        if (username === "") {
          errorMessage.innerHTML = "Email is required.";
          return false;
        }
        if (password === "") {
          errorMessage.innerHTML = "Password is required.";
          return false;
        }

        if (username.length < 6) {
          errorMessage.innerHTML = "Email must be at least 6 characters long.";
          return false;
        }

        if (password.length < 8) {
          errorMessage.innerHTML =
            "Password must be at least 8 characters long.";
          return false;
        }

        if (!/[A-Z]/.test(password)) {
          errorMessage.innerHTML =
            "Password must contain at least one uppercase letter.";
          return false;
        }

        if (!/[a-z]/.test(password)) {
          errorMessage.innerHTML =
            "Password must contain at least one lowercase letter.";
          return false;
        }

        if (!/\d/.test(password)) {
          errorMessage.innerHTML = "Password must contain at least one digit.";
          return false;
        }

        if (!/[@#$%^&+=]/.test(password)) {
          errorMessage.innerHTML =
            "Password must contain at least one special character (@#$%^&+=).";
          return false;
        }
        if(confirmpassword!=password){
          errorMessage.innerHTML="password and confirm password need to be same.";
          return false;
        }
window.location.href = "../html/index.html";
        return false;
      }
