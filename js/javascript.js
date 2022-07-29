function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}
document.querySelector('.submit-email').addEventListener('mousedown', (e) => {
  e.preventDefault();
  document.querySelector('.subscription').classList.add('done');
});

function sendEmail() {
  Email.send({
    Host: "smtp.gmail.com",
    Username: "bogdan.denic5@gmail.com",
    Password: "bogdan123",
    To: 'bogdan.denic5@gmail.com',
    From: document.getElementById("Email").value,
    Subject: "Novi Email za newsletter",
    Body: "Email:" + document.getElementById("Email").value
  }).then(
    message => alert("Email poslat")
  );
}

