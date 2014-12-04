$(document).ready(function() {

  $(".main").onepage_scroll({
     sectionContainer: "section",
     keyboard: true,
     responsiveFallback: 600,
     loop: true
  });
});

function loadXMLDoc() {
  var xmlhttp;
  if (window.XMLHttpRequest) {
    // code for IE7+, Firefox, Chrome, Opera, Safari
    xmlhttp=new XMLHttpRequest();
  }
  else {
    // code for IE6, IE5
    xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
  }
  xmlhttp.onreadystatechange=function() {
    if (xmlhttp.readyState==4 && xmlhttp.status==200) {
      document.getElementById("myDiv").innerHTML=xmlhttp.responseText;
    }
  };

  xmlhttp.open("GET","ajax_test.txt",true);
  xmlhttp.send();
}

function validateForm(){
  var mail = document.getElementById("mail").value;
  var message = document.getElementById("message").value;

  if(mail === ""){
    alert("Bitte eine Mailadresse eingeben.");
    return false;
  }

  if(!validateEmail(mail)){
    alert("Keine gueltige Mailadresse eingegeben. Bitte Eingabe ueberpruefen.");
    return false;
  }

  if(message === ""){
    alert("Bitte eine Nachricht eingeben.");
    return false;
  }

  alert("Nachricht versendet");
  return true;
}

function validateEmail(email) {
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}
