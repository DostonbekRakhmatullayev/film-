//<======Make query selector======>
let elList = document.querySelector(".js-list");
var elSelect = document.querySelector(".js-select");
var elSelect1 = document.querySelector(".js-select1");
let filmOption = [];
//<======Date years function======>
function getDate(format) {
  var date = new Date(format);
  return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
}

//<======Mirroring the movie function======>
function ixchamlash(array, node) {
  node.innerHTML = null
  for (let i = 0; i < array.length; i++) {
    let newItem = document.createElement("li");
    let newStrong = document.createElement("h4");
    let newImage = document.createElement("img");
    let newTime = document.createElement("time");
    let newText = document.createElement("p");
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
    newImage.setAttribute("class", "text")
    newStrong.style.marginTop = "15px";
    newTime.style.marginBottom = "20px";
    newText.style.fontSize = "20px"
    newText.style.color = "yellow"
    newItem.setAttribute("class", "film__item");

    newStrong.textContent = `${array[i].title}`;
    newTime.textContent = getDate(array[i].release_date);
    newStrong.textContent = `${array[i].title}`;
    newImage.src = array[i].poster
    newText.textContent = array[i].genres.join(' ')
    //<=======Make appendchild=======>
    newItem.appendChild(newImage);
    newItem.appendChild(newStrong);
    newItem.appendChild(newTime);
    newItem.appendChild(newText);
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

  for (let i of tywpe) {
    let newOption = document.createElement("option")
    newOption.textContent = i;
    newOption.setAttribute("value", i);
    ddd.appendChild(newOption);
  }
}


elSelect1.addEventListener("change", function () {

  let selectorValue = elSelect1.value;
  if (selectorValue == "A_Z") {
    let array = films.sort(function (a, b) {
      if (a.title > b.title) {
        return 1;
      }
      if (a.title < b.title) {
        return -1;
      }
      return 0;
    });
    ixchamlash(array, elList)
  } else if (selectorValue == "Z_A") {
    let array = films.sort(function (a, b) {
      if (a.title < b.title) {
        return 1;
      }
      if (a.title > b.title) {
        return -1;
      }
      return 0;
    });
    ixchamlash(array, elList)
  }
})

reflection(films, elSelect)

// <=====Print out=====>
let result = [];
elSelect.addEventListener("change", function () {
  result = [];
  elList.innerHTML = "";
  let selectVal = elSelect.value;
  films.forEach(kino => {
    if (kino.genres.includes(selectVal)) {
      result.push(kino);
    }
  })
  ixchamlash(result, elList, films);
})

