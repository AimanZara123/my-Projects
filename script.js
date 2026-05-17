 const images = [
      {
        title: "Mountain",
        image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4"
      },
      {
        title: "Forest",
        image: "https://images.unsplash.com/photo-1448375240586-882707db888b"
      },
      {
        title: "Beach",
        image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e"
      },
      {
        title: "City",
        image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000"
      }
      
    ];

    const gallery = document.getElementById("gallery");

    for (let i = 0; i < images.length; i++) {
      const card = document.createElement("div");
      card.classList.add("image-card");

      const img = document.createElement("img");
      img.src = images[i].image;
      img.alt = images[i].title;

      const title = document.createElement("h3");
      title.innerText = images[i].title;

      card.appendChild(img);
      card.appendChild(title);

      gallery.appendChild(card);
    }