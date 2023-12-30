import React from 'react';

const Header = () => {
  const Seven = () => {
    var x = document.getElementById('7');
    if (x.classList.contains('seven-style')) {
      x.classList.remove('seven-style');
      x.classList.add('eight-style');
    } else {
      x.classList.remove('eight-style');
      x.classList.add('seven-style');
    }
  };

  const Eight = () => {
    var elements = document.querySelectorAll("li.eight");
    elements.forEach(function (element) {
      if (element.classList.contains('eight-style')) {
        element.classList.remove('eight-style');
        element.classList.add('seven-style');
      } else {
        element.classList.remove('seven-style');
        element.classList.add('eight-style');
      }
    });
  };

  return (
    <header>
      <h2>Литвин Карина Анатоліївна</h2>
    <p>Місце народження: 16 листопада 2004 року, м. Чернігів</p>
    <p>Освіта: СЗСШ №1, м. Чернігів;КПІ ім. Ігоря Сікорського, м. Київ</p>

    <p >Хоббі:</p>
    <ul>
        <li>Книги</li>
        <li>Малювання</li>
        <li>Спорт</li>
    </ul>
    <p onClick={Seven} id="7">Улюблені книги:</p>
    <ol>
        <li onClick={Eight} className="eight">Серія: "Академія вампірів", 2007-2010, Райчел Мід</li>
        <li>Новела "Магістр диявольського культу", 2015, Мосян Тунсю</li>
        <li>Новела "Хаскі та його Вчитель Білий Кіт", 2017, Жоубао Бучі Жоу</li>
    </ol>

      <style>{`
        .seven-style {
          color: white;
          background-color: blue;
        }

        .eight-style {
          color: black;
          background-color: green;
        }
      `}</style>
    </header>
  );
};

export default Header;
