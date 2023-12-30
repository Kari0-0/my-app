import React from 'react';

const Image = () => {
    const addImage = () => {
        var img = document.createElement("img");
        img.src="/Troi2.jpg";
        img.id = "city-image";
        var imageContainer = document.getElementById("image-container");
        imageContainer.appendChild(img);
      };
    
      const increaseImageSize = () => {
        var img = document.getElementById("city-image");
        img.style.width = (img.clientWidth * 2) + "px";
        img.style.height = (img.clientHeight * 2) + "px";
      };
    
      const decreaseImageSize = () => {
        var img = document.getElementById("city-image");
        img.style.width = (img.clientWidth / 2) + "px";
        img.style.height = (img.clientHeight / 2) + "px";
      };
    
      const deleteImage = () => {
        var img = document.getElementById("city-image");
        img.remove();
      };
    
  return (
    <div>
      <a href="https://uk.wikipedia.org/wiki/%D0%A7%D0%B5%D1%80%D0%BD%D1%96%D0%B3%D1%96%D0%B2" >
        <img src="/Troi1.jpg" alt="Фото міста Чернігова" />
      </a>
      <button onClick={addImage}>Додати</button>
      <button onClick={increaseImageSize}>Збільшити</button>
      <button onClick={decreaseImageSize}>Зменшити</button>
      <button onClick={deleteImage}>Видалити</button>
      <div id="image-container"></div>
    </div>
    
  );
};

export default Image;
