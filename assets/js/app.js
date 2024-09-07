$(document).ready(function () {
  const acc1 = {
    username: "kosarNouri",
    password: "kosar1378",
  };
  const acc2 = {
    username: "sadaftabari",
    password: "sadaf1378",
  };

  const acc3 = {
    username: "kianajavadpur",
    password: "kiana1378",
  };

  const accounts = [acc1, acc2, acc3];

  const userInput = $("#userName");
  const passInput = $("#password");
  const signInBtn = $("#signinbtn");
  const userValidation = $(".user-validation");
  userValidation.empty();

  signInBtn.on("click", (e) => {
    let interUser = userInput.val();
    let interPass = passInput.val();
    const matchingAcc = accounts.find((acc) => {
      return acc.username === interUser && acc.password === interPass;
    });
    if (matchingAcc) {
      errorSet("✔your info is correct",userValidation);
      $(".user-validation").css({ color: "green" });
    } else if (interUser === "" || interPass === "") {
      errorSet("*please fill the fields",userValidation);
      $(".user-validation").css({ color: "red" });
    } else {
      errorSet("*please enter the correct info",userValidation);
      $(".user-validation").css({ color: "red" });

      userInput.val("");
      passInput.val("");
    }

    e.pereventdefault();
  });

  const errorSet = (errortext, element) => {
    element.text(errortext);
  };

  
});
