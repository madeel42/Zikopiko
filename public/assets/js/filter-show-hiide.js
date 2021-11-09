function myFunction() {
      
    var x = document.getElementById("myaccount_dash_content_left");
    
    if (x.style.display === "none") {
      x.style.display = "block";
      x.style.left = "1px";
    } else {
      x.style.display = "none";
      x.style.left = "-300px";
    }
  }