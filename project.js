const images = [
  [
    "projects image/ChatGPT Image Dec 19, 2025, 12_34_56 PM(1).png",
    "projects image/ChatGPT Image Dec 19, 2025, 12_34_56 PM.png",
    "projects image/ChatGPT Image Dec 19, 2025, 12_34_56 PM(2).png",
    "projects image/ChatGPT Image Dec 19, 2025, 12_34_56 PM (3).png"
  ],
  [
    "projects image/Solar panel installation across landscapes(2).png",
    "projects image/Solar panel installation across landscapes.png",
    "projects image/Solar panel installation across landscapes(1).png",
    "projects image/Solar panel installation across landscapes(3).png"
  ],
  [
    "./projects image2/Screenshot (51)_upscayl_4x_ultrasharp.png",
    "./projects image2/Screenshot (48)_upscayl_4x_ultrasharp.png",
    "./projects image2/Screenshot (52)_upscayl_4x_ultrasharp.png",
    "./projects image2/Screenshot (50)_upscayl_4x_ultrasharp.png"
  ],
  [
    "projects image/Industrial electrical equipment and professionals(2).png",
    "projects image/Industrial electrical equipment and professionals(3).png",
    "projects image/Industrial electrical equipment and professionals.png",
    "projects image/Industrial electrical equipment and professionals(1).png"
  ],
  [
    "projects image/Energy management in action(1).png",
    "projects image/Energy management in action(3).png",
    "projects image/Energy management in action(2).png",
    "projects image/Energy management in action.png"
  ],
  [
    "projects image/images (1) (3)_upscayl_4x_ultrasharp.png",
    "projects image/images (2) (3)_upscayl_4x_ultrasharp.png",
    "projects image/images (8)_upscayl_4x_ultrasharp.png",
    "projects image/images (4) (4)_upscayl_4x_ultrasharp.png"
  ],
  [
    "projects image/images (1)_upscayl_4x_ultrasharp.png",
    "projects image/images (4) (2)_upscayl_4x_ultrasharp.png",
    "projects image/images (5) (1)_upscayl_4x_ultrasharp.png",
    "projects image/images (6)_upscayl_4x_ultrasharp.png"
  ],
  [
    "projects image/download (1) (3)_upscayl_4x_ultrasharp.png",
    "projects image/download (2) (2)_upscayl_4x_ultrasharp.png",
    "projects image/download (5)_upscayl_4x_ultrasharp.png",
    "projects image/download (3)_upscayl_4x_ultrasharp.png"
  ],

  [
    "projects image/images (1) (4)_upscayl_4x_ultrasharp.png",
    "projects image/download (1) (4)_upscayl_4x_ultrasharp.png",
    "projects image/images (2) (4)_upscayl_4x_ultrasharp.png",
    "projects image/download (2) (3)_upscayl_4x_ultrasharp.png"
  ],
  [
    "projects image/Choosing-a-backup-generator_upscayl_4x_ultrasharp.png",
    "projects image/download_upscayl_4x_ultrasharp.png",
    "projects image/images (1) (1)_upscayl_4x_ultrasharp.png",
    "projects image/images (2) (1)_upscayl_4x_ultrasharp.png"
  ],
];

const projectBox = document.querySelectorAll(".project-box");

projectBox.forEach((box, i) => {
  const projectImage = box.querySelector(".project-image");
  const projectSpans = box.querySelectorAll(".project-span");
  if (!projectImage || !projectSpans.length) return;

  projectSpans.forEach((span, j) => {
    span.addEventListener("mouseenter", () => {
      const newSrc = images[i][j] || images[i][0];
      const tempImg = new Image();
      tempImg.src = newSrc;

      tempImg.onload = () => {
        projectImage.style.opacity = "0";
        setTimeout(() => {
          projectImage.src = newSrc;
          projectImage.style.opacity = "1";
        }, 50);
      };
    });

    span.addEventListener("mouseleave", () => {
      const tempImg = new Image();
      tempImg.src = images[i][0];

      tempImg.onload = () => {
        projectImage.style.opacity = "0";
        setTimeout(() => {
          projectImage.src = images[i][0];
          projectImage.style.opacity = "1";
        }, 50);
      };
    });
  });
});


