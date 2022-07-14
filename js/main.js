//<======Make query selector======>
let elList = document.querySelector(".js-list");
var elSelect = document.querySelector(".js-select");
var elSelect1 = document.querySelector(".js-select1");
let body = document.querySelector("#body");
let elBookmarkLest = document.querySelector(".js-bookmark");

let filmOption = [];

//<======Date years function======>
function getDate(format,) {
  let date = new Date(format);
  return `${String(date.getDate()).padStart(2, "0")}-${String(date.getMonth() + 1).padStart(2, "0")}-${date.getFullYear()}`;
}
let localList = JSON.parse(window.localStorage.getItem("bookmarkList"))
let bookmarkList = localList || [];

//<======Mirroring the movie function======>
function ixchamlash(array, node) {
  node.innerHTML = null;
  for (let i = 0; i < array.length; i++) {
    array[i].bookmark = false;
    
    let newItem = document.createElement("li");
    let newStrong = document.createElement("h4");
    let newImage = document.createElement("img");
    let newTime = document.createElement("time");
    let newText = document.createElement("p");
    let newButton = document.createElement("button");
    let newBookmark = document.createElement("button");
    let newBox = document.createElement("div");
    
    //<=======Giving styles=======>
    newBookmark.textContent = "Bookmark";
    newButton.textContent = "Modal";
    
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
    newText.style.fontSize = "20px";
    newText.style.color = "yellow";
    
    newImage.setAttribute("class", "text");
    newItem.setAttribute("class", "film__item");
    newBookmark.setAttribute("data-nom", array[i].id);
    newButton.setAttribute("data-id", array[i].id);
    newButton.setAttribute("class", "button_card");
    newBookmark.setAttribute("class", "button__bookmark");
    if(array[i].bookmark) newBookmark.setAttribute("class", "button__bookmark--active");
    
    newStrong.textContent = `${array[i].title}`;
    newTime.textContent = getDate(array[i].release_date);
    newStrong.textContent = `${array[i].title}`;
    newImage.src = array[i].poster;
    newText.textContent = array[i].genres.join(' ');
    //<=======Make appendchild=======>
    newItem.appendChild(newImage);
    newItem.appendChild(newStrong);
    newItem.appendChild(newTime);

    newBox.appendChild(newBookmark);
    newBox.appendChild(newButton);
    newItem.appendChild(newBox);
    
    node.appendChild(newItem);
  }
}

ixchamlash(films, elList);

const getBookmarkMovies =((array, node) => {
  node.innerHTML = "";
  window.localStorage.setItem("bookmarkList", JSON.stringify(bookmarkList));
  array.forEach(e => {
    let newBookmarkItem = document.createElement("li");
    let newBookmarkBtn = document.createElement("button");
    newBookmarkItem.textContent = e.title;
    newBookmarkBtn.textContent = "Deleti";
    newBookmarkBtn.setAttribute("class", "deleti-btn");
    newBookmarkBtn.setAttribute("data-id", e.id);
    newBookmarkItem.appendChild(newBookmarkBtn);
    node.appendChild(newBookmarkItem);
  })
})

getBookmarkMovies(bookmarkList, elBookmarkLest)
// <======Reflection, Mirroring=======>
function reflection(mirroring, ddd) {
  for (let i = 0; i < mirroring.length; i++) {
    filmOption.push(...mirroring[i].genres);
  }
  
  let tywpe = new Set(filmOption);
  
  for (let i of tywpe) {
    let newOption = document.createElement("option");
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

var elButtonCard = document.querySelectorAll(".button_card");

// yangi ul ga push qilish
elList.addEventListener("click", function(evt) {
  if(evt.target.matches(".button__bookmark")){

    let filmId = evt.target.dataset.nom;
    
    let findedFilm = films.find(e => e.id === filmId);
    
    if(!bookmarkList.includes(findedFilm)) {
      bookmarkList.push(findedFilm);
      getBookmarkMovies(bookmarkList, elBookmarkLest); 
    }
  }
})

elBookmarkLest.addEventListener("click", function(evt) {
  if(evt.target.matches(".deleti-btn")) {
    let boookId = evt.target.dataset.id;
    let findedBtn = bookmarkList.findIndex(e => e.id === boookId);
    bookmarkList.splice(findedBtn, 1);
    getBookmarkMovies(bookmarkList, elBookmarkLest);
  }
})

for (let e of elButtonCard) {
  e.addEventListener("click", function (evt) {
    evt.preventDefault();
    
    let cardId = evt.target.dataset.id;
    
    let foundFilm = films.find(a => a.id === cardId)
    
    let newBigBox = document.createElement("div");
    let newModal = document.createElement("div");
    let newImg = document.createElement("img");
    let newBox = document.createElement("div");
    let newDeleti = document.createElement("button");
    let newHiding = document.createElement("h4");
    let newText = document.createElement("p");
    let newStrong = document.createElement("strong");
    
    newBigBox.setAttribute("class", "big__box big__box--active");
    newModal.setAttribute("class", "modal__wrapper d-flex p-4 bg-dark");
    newDeleti.setAttribute("class", "deleti");
    newImg.setAttribute("class", "images");
    newBox.setAttribute("class", "d-block mx-3 text-white");
    newImg.setAttribute("src",foundFilm.poster);
    
    newHiding.textContent = foundFilm.title;
    newText.textContent = foundFilm.overview;
    newStrong.textContent = foundFilm.genres;
    newDeleti.textContent = "❌"
    
    newBox.appendChild(newHiding);
    newBox.appendChild(newText);
    newBox.appendChild(newStrong);
    
    newModal.appendChild(newImg);
    newModal.appendChild(newBox);
    newModal.appendChild(newDeleti);
    
    newBigBox.appendChild(newModal);
    
    body.appendChild(newBigBox);
    
    newDeleti.addEventListener("click", function() {
      newBigBox.classList.remove("big__box--active");
    })
  })
}


