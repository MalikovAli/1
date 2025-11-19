let slider = document.querySelector(".slider");
slider.innerHTML = `
<div class="box">
              <img class="slider-image show showContent" src="https://res.cloudinary.com/dljpjmypg/image/upload/v1757753227/2_drkdnk.jpg" alt="">
              <p class ="content show-content">Solar Panels</p>
</div>

<div class="box">
              <img class="slider-image" src="https://res.cloudinary.com/dljpjmypg/image/upload/v1757753426/2_pbuqsd.jpg" alt="">
              <p class ="content">Heavy Industrial Equipment Repair</p>
</div>
<div class="box">
              <img class="slider-image" src="https://res.cloudinary.com/dyjcv3dos/image/upload/f_auto,q_auto/jbhmp5ixyxjuqvqvn8oi" alt="">
              <p class ="content">Vehicle Emission Systems</p>
</div>
<div class="box">
              <img class="slider-image" src="https://res.cloudinary.com/dljpjmypg/image/upload/v1757753969/2_wq1ny5.jpg" alt="">
              <p class ="content">Repair of Portal, Bridge, Telfer and Other Cranes</p>
</div>
<div class="box">
              <img class="slider-image" src="https://res.cloudinary.com/dljpjmypg/image/upload/v1757754460/2_lgsjn5.jpg" alt="">
              <p class ="content">Oil and Gas</p>
</div>
 `;

let img = document.querySelectorAll(".slider-image");
let content = document.querySelectorAll(".content");
let index = 0;
let contentIndex = 0;

function showImage() {
    img.forEach(a => a.classList.remove("show"));
    img[index].classList.add("show");
}
function showContent() {
    content.forEach(a => a.classList.remove("show-content"));
    content[contentIndex].classList.add("show-content");
}



let boxes = document.querySelector(".boxes");
boxes.innerHTML = `
            <div class="box">
              <img class="box-image" src="https://res.cloudinary.com/dljpjmypg/image/upload/v1757753227/2_drkdnk.jpg" alt="">
            </div>
            <div class="box">
              <img class="box-image" src="https://res.cloudinary.com/dljpjmypg/image/upload/v1757753426/2_pbuqsd.jpg" alt="">
            </div>
            <div class="box">
              <img class="box-image" src="https://res.cloudinary.com/dyjcv3dos/image/upload/f_auto,q_auto/jbhmp5ixyxjuqvqvn8oi" alt="">
            </div>
            <div class="box">
              <img class="box-image" src="https://res.cloudinary.com/dljpjmypg/image/upload/v1757753969/2_wq1ny5.jpg" alt="">
            </div>
            <div class="box">
              <img class="box-image" src="https://res.cloudinary.com/dljpjmypg/image/upload/v1757754460/2_lgsjn5.jpg" alt="">
            </div>
`
let boxImage = document.querySelectorAll(".box-image");
boxImage.forEach((a, idx) => {
  a.addEventListener("click", () => {
    img.forEach(i => i.classList.remove("show"));
    content.forEach(c => c.classList.remove("show-content"));

    img[idx].classList.add("show");
    content[idx].classList.add("show-content");

    index = idx;
  });
});

setInterval(() => {
  img.forEach(a => a.classList.remove("show"));
  content.forEach(a => a.classList.remove("show-content"));

  index++;
  if(index >= img.length) index = 0;

  img[index].classList.add("show");
  content[index].classList.add("show-content");
}, 4500);

const box = document.querySelector(".project-box1");
let projectIndex = 0;

function slide() {
  box.style.transform = `translateX(-${projectIndex * 12.3}%)`;
  projectIndex++;
  if (projectIndex > 3) projectIndex = 0; // 4 kartlıq addım
}

setInterval(slide, 2000);



