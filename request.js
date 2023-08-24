let loadImg1 = document.querySelector(".loadImg1");
let postImg = document.querySelectorAll("rect");
let hide = document.querySelectorAll(".nascondi");
let cards = document.querySelectorAll(".card");
let noveMin = document.querySelectorAll(".text-muted");
console.log(hide);
fetch("https://api.pexels.com/v1/search?query=sky", {
  headers: {
    Authorization: "TbB35dMMKFN0zcMPt1bd7woZ8zTOXtzuULErgD4Em4NuKCvmUiigGwMs",
  },
})
  .then((stringedImages) => stringedImages.json())
  .then((images) => {
    hide.forEach((btn, index) => {
      btn.innerText = "hide";
      btn.addEventListener("click", () => {
        cards[index].classList.add("d-none");
      });
    });
    console.log(images);
    for (let i = 0; i < noveMin.length; i++) {
      noveMin[i].innerText = `${images.photos[i].id}`;
    }
  });
