let elList = document.querySelector(".js-list")

function getDate(format) {
  var date = new Date(format)

  return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`

}

for (let i = 0; i < films.length; i++) {
  let newItem = document.createElement("li")
  let newStrong = document.createElement("h4")
  let newImage = document.createElement("img")
  let newTime = document.createElement("time")
  newItem.style.display = "flex";
  newItem.style.flexDirection = "column";
  newItem.style.textAlign = "center";
  newItem.style.alignItems = "center";
  newItem.style.marginBottom = "30px";
  newItem.style.width = "270px";
  newItem.style.borderRadius = "20px";
  newItem.style.paddingTop = "20px"
   newItem.style.color = "white"
  newImage.style.width = "250px";
  newImage.style.borderRadius = "20px"
  newImage.style.height = "300px";
  newImage.style.display = "block"
  newStrong.style.marginTop = "15px"
  newTime.style.marginBottom = "20px"

  newItem.setAttribute("class", "film__item")

  newStrong.textContent = `${films[i].title}`
  newTime.textContent = getDate(films[i].release_date)
  newStrong.textContent = `${films[i].title}`
  newImage.src = films[i].poster

  newItem.appendChild(newImage)
  newItem.appendChild(newStrong)
   newItem.appendChild(newTime)
  elList.appendChild(newItem)

}