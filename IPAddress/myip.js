function httpRequest(url, callback) {
  var xhr = new XMLHttpRequest();
  xhr.open("GET", url, true);
  xhr.onreadystatechange = function() {
    if (xhr.readyState == 4) {
        callback(xhr.responseText);
    }
  }
  xhr.send();
}

httpRequest('http://www.baidu.com/s?wd=ip', function(ip) {
  document.getElementById("ip_div").innerHTML = ip;
  document.getElementById("ip_div").innerHTML = document.querySelector(".c-gap-right").innerHTML;
  
 }); 