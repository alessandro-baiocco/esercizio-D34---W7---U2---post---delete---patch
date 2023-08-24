let loadImg1 = document.querySelector(".loadImg1");
let postImg = document.querySelectorAll(".shadow-sm");
let cards = document.querySelectorAll(".card");

fetch("https://api.pexels.com/v1/search?query=sky", {
  headers: {
    Authorization: "TbB35dMMKFN0zcMPt1bd7woZ8zTOXtzuULErgD4Em4NuKCvmUiigGwMs",
  },
})
  .then((stringedImages) => stringedImages.json())
  .then((images) => {
    cards.forEach((dentroCard, index) => {
      dentroCard.innerHTML = `<img src ="${images.photos[index].src.small}"
    <div class="card-body">
    <h5 class="card-title">${images.photos[index].alt}</h5>
    <p class="card-text">
    This is a wider card with supporting text below as a natural lead-in to additional content. This
    content is a little bit longer.
    </p>
    <div class="d-flex justify-content-between align-items-center">
    <div class="btn-group">
    <button type="button" class="btn btn-sm btn-outline-secondary nascondi">View</button>
    <button type="button" class="btn btn-sm btn-outline-secondary">Edit</button>
    </div>
    <small class="text-muted">9 mins</small>
    </div>
    </div>`;
    });
    let noveMin = document.querySelectorAll(".text-muted");
    let hide = document.querySelectorAll(".nascondi");
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
