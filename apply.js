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

//CSS Style switcher
var style_cookie_name = "style" ;
var style_cookie_duration = 30 ;

function switch_style ( css_title ) {
  var i, link_tag ;
  for (i = 0, link_tag = document.getElementsByTagName("link") ;  i < link_tag.length ; i++ ) {
    if ((link_tag[i].rel.indexOf( "stylesheet" ) != -1) &&
      link_tag[i].title) {
      link_tag[i].disabled = true ;
      if (link_tag[i].title == css_title) {
        link_tag[i].disabled = false ;
      }
    }
    set_cookie( style_cookie_name, css_title,
      style_cookie_duration );
  }
}

function set_style_from_cookie()
{
  var css_title = get_cookie( style_cookie_name );
  if (css_title.length) {
    switch_style( css_title );
  }
}

function set_cookie ( cookie_name, cookie_value,
    lifespan_in_days, valid_domain ) {
    var domain_string = valid_domain ?
                       ("; domain=" + valid_domain) : '' ;
    document.cookie = cookie_name +
                       "=" + encodeURIComponent( cookie_value ) +
                       "; max-age=" + 60 * 60 *
                       24 * lifespan_in_days +
                       "; path=/" + domain_string ;
}

function get_cookie ( cookie_name )
{
    var cookie_string = document.cookie ;
    if (cookie_string.length != 0) {
        var cookie_value = cookie_string.match (
                        '(^|;)[\s]*' +
                        cookie_name +
                        '=([^;]*)' );
        return decodeURIComponent ( cookie_value[2] ) ;
    }
    return '' ;
}
