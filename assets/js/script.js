// $(document).ready(() => {
//   const userInput = $("#userName");
//   const passInput = $("#password");
//   const confirmpassword = $("#confirmpassword");
//   const userValidation = $(".user-validation");
//   const userValidation1 = $("#userValidation1");
//   const userValidation2 = $("#userValidation2");
//   const userValidation3 = $("#userValidation3");
//   const signUpbtn = $("#signup");
//   userValidation.empty();

//   const errorSet = (errortext, element) => {
//     element.text(errortext);
//   };

//   // استفاده از رویداد input برای به روزرسانی آنی
//   $("#userName").on("input", () => {
//     if (!isuser(userInput.val())) {
//       errorSet("نام کاربری معتبر نیست", userValidation1);
//     } else {
//       errorSet("نام کاربری معتبر است", userValidation1);
//     }
//   });
//   $("#password").on("input", () => {
//     if (!isuser(passInput.val())) {
//       errorSet("پسورد معتبر نیست", userValidation2);
//     } else {
//       errorSet(" پسورد معتبر است", userValidation2);
//     }
//   });

//   signUpbtn.on("click", () => {
//     if (
//       userInput.val() === "" ||
//       passInput.val() === "" ||
//       confirmpassword.val() === ""
//     ) {
//       alert("لطفا تمامی فیلدهارا پر نمایید");
//     } else if (
//       isuser(passInput.val()) &&
//       isuser(userInput.val()) &&
//       confirmpassword.val() === passInput.val()
//     ) {
//       alert("شما با موفقیت ثبت نام شدین");
//     } else if (
//       !isuser(passInput.val()) ||
//       !isuser(userInput.val()) ||
//       confirmpassword.val() !== passInput.val()
//     ) {
//       alert("لطفا فیلدهارا درست پر کنید");
//     }
//   });

//   const isuser = (uservalid) => /^[0-9a-z]{6,16}$/.test(uservalid);
// });

$(document).ready(() => {
  const userName = $("#userName");
  const password = $("#password");
  const confirmpassword = $("#confirmpassword");
  const signupbtn = $("#signup");
  const userValidation1 = $("#userValidation1");
  const userValidation2 = $("#userValidation2");
  const userValidation3 = $("#userValidation3");

  const errorSet = (errortext, element) => {
    element.text(errortext);
  };

  
  userName.on("input", () => {
    if (!isuser(userName.val())) {
      errorSet("username is not correct", userValidation1);
      userValidation1.css({ color: "red" });
    } else {
      errorSet("username is correct", userValidation1);
      userValidation1.css({ color: "green" });
    }
  });
  password.on("input", () => {
    if (!isuser(password.val())) {
      errorSet("pass is not correct", userValidation2);
      userValidation2.css({ color: "red" });
    } else {
      errorSet("pass is corect", userValidation2);
      userValidation2.css({ color: "green" });
    }
  });
  confirmpassword.on("input", () => {
    if (password.val() !== confirmpassword.val()) {
        errorSet("Passwords do not match", userValidation3);
        userValidation3.css({ color: "red" });
    } else {
        errorSet("Passwords match", userValidation3);
        userValidation3.css({ color: "green" });
    }
});


  signupbtn.on("click", () => {
    if (
      userName.val() === "" ||
      password.val() === "" ||
      confirmpassword.Val() === ""
    ) {
      alert("fill all fields");
    } else if (
      isuser(userName.val()) &&
      isuser(password.val()) &&
      password.val() === confirmpassword.val()
    ) {
      alert("you are loged in");
    } else if (
      !isuser(userName.val())||
      !isuser(password.val())||
      confirmpassword.val() !== password.val()
    ){alert('fill correctly')
    }

    
  });

  const isuser = (uservalid) => /^[0-9a-z]{6,16}$/.test(uservalid);

});
