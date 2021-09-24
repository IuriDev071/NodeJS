function chamarGet() {
let httpRequest = new XMLHttpRequest();

httpRequest.onreadystatechange = alertContents;
httpRequest.open('GET', "http://localhost:3000/aviao");
httpRequest.setRequestHeader('Content-Type', 'application/json');
httpRequest.send();

function alertContents() {
    if (httpRequest.readyState === 4) {
      if (httpRequest.status === 200) {
        alert(JSON.parse(httpRequest.responseText));
      } else {
        alert('There was a problem with the request.');
      }
    }
  }
}