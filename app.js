const thumbnailContainer = document.getElementById("thumbnail-container");
const displayImage = document.getElementById("display-image");

let imgIndex = 0;

const images = [
  {
    src: "./assets/opening-scene.webp",
    alt: "Opening scene to the movie.",
  },
  {
    src: "./assets/first-joust.webp",
    alt: "William's first time jousting.",
  },
  {
    src: "./assets/the-start.webp",
    alt: "William is ready to fight Roland and Wat.",
  },
  {
    src: "./assets/training.webp",
    alt: "William is training to joust.",
  },
  {
    src: "./assets/sees-jocelyn.webp",
    alt: "William first lays eyes on Jocelyn.",
  },
  {
    src: "./assets/jocelyn.webp",
    alt: "Jocelyn enters the frame.",
  },
  {
    src: "./assets/roland.webp",
    alt: "Roland is stiching together the tent to create garments for the dance.",
  },
  {
    src: "./assets/dance-scene.webp",
    alt: "William and Jocelyn dance together.",
  },
  {
    src: "./assets/poem.webp",
    alt: "The team work together to construct a love poem.",
  },
  {
    src: "./assets/argument.webp",
    alt: "Jocelyn tells William she will only love him if he loses the next tournament, putting his pride at odds with his love.",
  },
  {
    src: "./assets/proof-of-love.webp",
    alt: "William takes all the hits to prove his love for Jocelyn.",
  },
  {
    src: "./assets/young-william1.webp",
    alt: "Flashback to young William being introduced to a knight.",
  },
  {
    src: "./assets/young-william.webp",
    alt: "Young William runs to the water to question his father how he will find his way home.",
  },
  {
    src: "./assets/home.webp",
    alt: "William followed his feet home.",
  },
  {
    src: "./assets/home2.webp",
    alt: "William is reunited with his father.",
  },
  {
    src: "./assets/friendship.webp",
    alt: "When William faces public shaming for being a fake knight, his loyal friends all proudly stand by him.",
  },
  {
    src: "./assets/knighting.webp",
    alt: "After being unmasked as a peasant, William is facing punishment when Prince Edward reveals himself and knights William.",
  },
  {
    src: "./assets/adhemar.webp",
    alt: "Count Adhemar stares down William before their last joust.",
  },
  {
    src: "./assets/eyes.webp",
    alt: "William focuses his eyes on Count Adhemar as he prepares for his last joust.",
  },
  {
    src: "./assets/finale.webp",
    alt: "William rides with no armour and his lance lashed to his arm.",
  },
  {
    src: "./assets/william!.webp",
    alt: "William shouts his name as he draws strength to land the final blow to knock Count Adhemar off his horse.",
  },
  {
    src: "./assets/lost.webp",
    alt: "Count Adhamer is knocked off his horse and is floating above the ground, he has the face of shock and defeat.",
  },
  {
    src: "./assets/victory.webp",
    alt: "William and his team stand over Count Adhemar and recites the speech he gave William.",
  },
  {
    src: "./assets/kiss.webp",
    alt: "After being victorious William runs to jocelyn for an emotional kiss.",
  },
];

for (let i = 0; i < images.length; i++) {
  const img = document.createElement("img");

  img.src = images[i].src;
  img.alt = images[i].alt;
  img.tabIndex = 0;

  img.addEventListener("click", function () {
    displayImage.src = images[i].src;
    displayImage.alt = images[i].alt;
  });

  thumbnailContainer.appendChild(img);
}

// Set initial focus on the first thumbnail
thumbnailContainer.children[0].focus();

// Listen for keydown events on the document
document.addEventListener("keydown", function (event) {
  const thumbnails = thumbnailContainer.children;

  if (event.key === "ArrowRight") {
    // Move to the next thumbnail
    imgIndex = (imgIndex + 1) % thumbnails.length;
    thumbnails[imgIndex].focus();
  } else if (event.key === "ArrowLeft") {
    // Move to the previous thumbnail
    imgIndex = (imgIndex - 1 + thumbnails.length) % thumbnails.length;
    thumbnails[imgIndex].focus();
  } else if (event.key === "Enter" || event.key === " ") {
    // Select the focused thumbnail
    displayImage.src = images[imgIndex].src;
    displayImage.alt = images[imgIndex].alt;
  }
});
