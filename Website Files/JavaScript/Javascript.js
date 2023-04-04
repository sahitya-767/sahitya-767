function allowlogin() {
  var usermail= document.getElementById("usermail").value;
  var password= document.getElementById("pass").value;
  if ((usermail == 'demouser@gmail.com' || usermail == 'srevinipati@gainsight.com') && password != null) {
    var b = usermail.substr(0, 5);
    alert("valid user");
    console.log('Navigating to index.html');
    location.href = "/Users/srevinipati/Desktop/Website Files/HTML/index.html";
    alert('Successfully Logged in');
} else {
    alert('Invalid password or user. Please try again.');
}
}

