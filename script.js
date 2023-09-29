document.addEventListener("DOMContentLoaded", function () {
    const korrektAnvändarnamn = "Bella";
    const korrektLösenord = "qwe123";
  
    const användarnamn = document.getElementById("användarnamn");
    const lösenord = document.getElementById("lösenord");
    const loginForm = document.getElementById("loginForm");
    const meddelande = document.getElementById("meddelande");
    const loginKnapp = document.getElementById("loginKnapp");
    const loggaUtKnapp = document.getElementById("loggaUtKnapp");
    let felaktigaInloggningsförsök = 0;
  
    if (localStorage.getItem("loggedIn") === "true") {
      visaInloggad();
    } else {
      visaUtloggad();
    }
  
    function visaInloggad() {
      loginForm.style.display = "none";
      meddelande.textContent = "Välkommen, du är inloggad";
      localStorage.setItem("loggedIn", "true");
      loggaUtKnapp.style.display = "block";
    }
  
    function visaUtloggad() {
      loginForm.style.display = "block";
      loggaUtKnapp.style.display = "none";
    }
  
    function rensaMeddelande() {
      meddelande.textContent = "";
    }
  
    loginKnapp.addEventListener("click", function (event) {
      event.preventDefault();
  
      const enteredAnvändarnamn = användarnamn.value;
      const enteredLösenord = lösenord.value;
  
      if (korrektAnvändarnamn === enteredAnvändarnamn && korrektLösenord === enteredLösenord) {
        rensaMeddelande();
        felaktigaInloggningsförsök = 0;
        visaInloggad();
      } else {
        felaktigaInloggningsförsök++;
        // Visa ett alert-meddelande istället för att ändra sidans innehåll
        alert("Fel användarnamn eller lösenord. Försök igen. (Försök: " + felaktigaInloggningsförsök + ")");
        användarnamn.value = "";
      lösenord.value = "";
      }
    });
  
    loggaUtKnapp.addEventListener("click", function () {
      rensaMeddelande();
      visaUtloggad();
      localStorage.removeItem("loggedIn");
      användarnamn.value = "";
      lösenord.value = "";
    });
  });
  
