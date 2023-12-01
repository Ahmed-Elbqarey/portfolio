function validateForm() {
  // Reset errors
  resetErrors();
  // Get form values
  var fullName = document.getElementById("fullName").value;
  var email = document.getElementById("email").value;
  var phoneNumber = document.getElementById("phoneNumber").value;
  var servicesSelect = document.getElementById("services-select").value;
  var message = document.getElementById("message-form").value;
  // Validate full name
  if (fullName === "") {
    document.getElementById("fullNameError").innerText = "The name field must be filled out";
  }
  // Validate email
  if (email === "") {
    document.getElementById("emailError").innerText = " The email field must be filled out";
  } else {
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      document.getElementById("emailError").innerText = "Invalid email format";
    }
  }
  // Validate phone number
  // قاعدة التحقق: يجب أن يحتوي رقم الهاتف على أرقام فقط ويكون طوله 11 رقم
  var phoneRegex = /^[0-9]{11}$/;
  // التحقق من صحة رقم الهاتف
  if (!phoneRegex.test(phoneNumber)) {
    // إذا لم يكن رقم الهاتف صحيحًا، عرض رسالة خطأ
    document.getElementById("phoneNumberError").innerHTML = "Phone number must be 11 digits";
  } else {
    // إذا كان رقم الهاتف صحيحًا، إفراغ رسالة الخطأ
    document.getElementById("phoneNumberError").innerHTML = "";
  }
  // Validate services selection
  if (servicesSelect === "") {
    document.getElementById("servicesError").innerText = "You must choose a service";
  }
  // Validate message
  if (message === "") {
    document.getElementById("messageError").innerText = "The message field must be filled out";
  }
  // If no errors, submit the form
  if (fullName !== "" && email !== "" && phoneNumber !== "" && servicesSelect !== "" && message !== "") {
    document.getElementById("myForm").submit();
  }
}
function resetErrors() {
  var errorElements = document.getElementsByClassName("error");
  for (var i = 0; i < errorElements.length; i++) {
    errorElements[i].innerText = "";
  }
}
