let filename = "coords.json";

let coords_button = document.getElementById('coords_button');
let test_coords_button = document.getElementById('test_coords_button');
console.log(coords_button)
coords_button.addEventListener('click', () => {
  filename = "coords.json";
})
test_coords_button.addEventListener('click', () => {
  filename = "test_coords.json";
})

function check_lat_lon(lat, lon){
  // regex check for lat long valid numbers
  let _lat = /^(-?[1-8]?\d(?:\.\d{1,18})?|90(?:\.0{1,18})?)$/;
  let _lon = /^(-?(?:1[0-7]|[1-9])?\d(?:\.\d{1,18})?|180(?:\.0{1,18})?)$/;  
  let validLat = _lat.test(lat);
  let validLon = _lon.test(lon);
  if(validLat && validLon) {
      return true;
  } else {
      return false;
  }
}



function getJSON(){
  return fetch(filename) // this file name must match the file you are saving positions too
  .then(response => response.json())
  .then(json => json)
}


function getTime(){
  let time = new Date();
  let hh = time.getHours();
  let mm = time.getMinutes();
  let ss = time.getSeconds()
  let now = hh + ":" + mm + ":" + ss; 
  return now;
}