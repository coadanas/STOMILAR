  // NAME
    function names() {
      let name = document.getElementById("name");
      let value = name.value;
      let res = document.getElementById("name-res");
      let style = document.getElementById("name-box");

      if (value == "") {
        res.innerText = "enter your name";
        res.style.color = "red";
        res.style.fontSize = "12px"
        style.setAttribute("class", "wrong-res")
      } else {
        res.innerText = "";
        style.setAttribute("class", "right-res")
      }
    }
    // EMAIL
    function emails() {
      let email = document.getElementById("email");
      let value = email.value;
      let res = document.getElementById("email-res");
      let style = document.getElementById("email-box");

      if (value == "") {
        res.innerText = "enter your email";
        res.style.color = "red";
        res.style.fontSize = "12px"
        style.setAttribute("class", "wrong-res")
      } else {
        res.innerText = "";
        style.setAttribute("class", "right-res")
      }
    }