//import axios from 'axios'
const host = "https://www.googleapis.com/books/v1/volumes"

/* axios.get(host).then(res => {
    console.log(res)
}).catch(err => {
    console.error(err);
}); */


function loadDoc() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        //document.getElementById("yes").innerHTML = this.responseText;
        let list = JSON.parse(this.response);
        for (let i = 0; i < 6; i++) {
            document.getElementById(`item${i}`).innerHTML = list.items[i].volumeInfo.title;
            console.log(list);
        }
      }
    };
    sIndex = pNumber * 6;
    xhttp.open("GET", `https://www.googleapis.com/books/v1/volumes?q=bear&startIndex=${sIndex}`, true);
    xhttp.send();
  }

let pNumber = 0;

function pageNumber(polarity) {
    switch(polarity) {
        case "plus":
            pNumber ++;
            break;
        case "minus":
            pNumber --;
            break; 
    }
    if (pNumber < 0) {pNumber = 0};
    document.getElementById("page").innerHTML = pNumber;
    loadDoc()
}