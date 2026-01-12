document.getElementById("login-btn").addEventListener("click", function () {
  const userName = document.getElementById("user-name").value;
  const pin = document.getElementById("pin").value;
  convertPin = parseInt(pin);
  if (typeof userName === "string") {
    if (convertPin === 123456) {
      document.getElementById("learn").classList.remove("hidden");
      document.getElementById("vocabulary").classList.remove("hidden");
      document.getElementById("nav-ber").classList.remove("hidden");
      document.getElementById("hero").classList.add("hidden");
    } else {
      alert("incorrect your pin number");
    }
  } else {
    alert("name must be string");
  }
});
