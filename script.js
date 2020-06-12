

var getTime = new XMLHttpRequest();

getTime.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    $('#date').text(this.responseText+' in the Innovation Suite');
  }
};
  
getTime.open("GET", "https://gwas-hackclub-api--sampoder.repl.co/time", true);

getTime.send();

var submitProject = new XMLHttpRequest();

getTime.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    $('#date').text(this.responseText+' in the Innovation Suite');
  }
};
  
getTime.open("GET", "https://gwas-hackclub-api--sampoder.repl.co/time", true);

getTime.send();


