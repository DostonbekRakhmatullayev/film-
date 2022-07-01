//<======Make query selector======>
let elList = document.querySelector(".js-list");
var elSelect = document.querySelector(".js-select");
let filmOption = [];
//<======Date years function======>
function getDate(format) {
  var date = new Date(format); 
  return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`; 
}

//<======Mirroring the movie function======>
function ixchamlash(array, node) {
  for (let i = 0; i < array.length; i++) {
    let newItem = document.createElement("li");
    let newStrong = document.createElement("h4");
    let newImage = document.createElement("img");
    let newTime = document.createElement("time");
    //<=======Giving styles=======>
    newItem.style.display = "flex";
    newItem.style.flexDirection = "column";
    newItem.style.textAlign = "center";
    newItem.style.alignItems = "center";
    newItem.style.marginBottom = "30px";
    newItem.style.width = "270px";
    newItem.style.borderRadius = "20px";
    newItem.style.paddingTop = "20px";
    newItem.style.color = "white";
    newImage.style.width = "250px";
    newImage.style.borderRadius = "20px"
    newImage.style.height = "300px";
    newImage.style.display = "block";
    newStrong.style.marginTop = "15px";
    newTime.style.marginBottom = "20px";
    
    newItem.setAttribute("class", "film__item");
    
    newStrong.textContent = `${array[i].title}`;
    newTime.textContent = getDate(array[i].release_date);
    newStrong.textContent = `${array[i].title}`;
    newImage.src = array[i].poster
    //<=======Make appendchild=======>
    newItem.appendChild(newImage);
    newItem.appendChild(newStrong);
    newItem.appendChild(newTime);
    node.appendChild(newItem);
  }
}

ixchamlash(films, elList)

// <======Reflection, Mirroring=======>
function reflection(mirroring, ddd) {
  for (let i = 0; i < mirroring.length; i++) {
    filmOption.push(...mirroring[i].genres)
  }

  let tywpe = new Set(filmOption);

  for(let  i of tywpe) {
  let newOption = document.createElement("option")
    newOption.textContent = i;
    newOption.setAttribute("value",  i);
    ddd.appendChild(newOption);
    console.log(ddd);
  } 
}

reflection(films, elSelect)

// <=====Print out=====>
let result = [];
elSelect.addEventListener("change", function() {
  result = [];
  elList.innerHTML = "";
  let selectVal = elSelect.value;
  films.forEach(kino => {
    if(kino.genres.includes(selectVal)) {
      result.push(kino);
    }
  })
  ixchamlash( result, elList, films);
})

