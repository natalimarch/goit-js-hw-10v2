export const getGalleryItemMarkup = ({
    name,
    capital,
    population,
    flag,
    languages,
  }) => `
    <li class="country-item" id="${name}">
    <img class="country-flag" src="${flag}" alt="${name}">
      <div class="descr-wrapper">
        <p class="descr">
          <span>Capital</span>
          <span>${capital}</span>
        </p>
        <p class="descr">
          <span>Population</span>
          <span>${population}</span>
        </p>
        <p class="descr">
          <span>Language</span>
          <span>${languages}</span>
        </p>
      </div>
    </li>
    `;

//     name - полное имя страны
// capital - столица
// population - население
// flag - ссылка на изображение флага
// languages - массив языков