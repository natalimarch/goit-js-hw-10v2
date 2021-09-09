import debounce from 'lodash.debounce';

import { getGalleryItemMarkup } from './tmp';

export const refs = {
  body: document.body,
  list: document.querySelector(".country-list"),
  input: document.querySelector("#search-box"),
  info: document.querySelector(".country-info"),
};

// const getMarkupGalleryItems = country =>
//   country.reduce((acc, el) => acc + getGalleryItemMarkup(el), '');
  
// const createGallery = country => {
//   const markup = getMarkupGalleryItems(country);
//   refs.list.insertAdjacentHTML('beforeend', markup);
// };
let query

  const fetchCountries = ({name}) => {
  return fetch(`https://restcountries.eu/rest/v2/name/${name}`)
  .then(response => response.json())
  .then(data => data)
};


refs.input.addEventListener('input', searchCountry);

const searchCountry = e => {
  const input = e.currentTarget;
  query = input.querySelector('input').value;
  fetchCountries(query)
    .then((country) => createGallery(country))
    .catch((error) => console.log(error));
};

function createGallery(country) {
  const markup = names
      .map((name) => {
        return `<li class="country-item" id="${name}">
        // <img class="country-flag" src="${flag}" alt="${name}">
        // </li>`;
      })
      .join("");
    refs.list.innerHTML = markup;
}
// const formMarkup = `<li class="country-item" id="${name}">
// <img class="country-flag" src="${flag}" alt="${name}">
// </li>`;

// export let name = '';


// const searchCountry = e => {
//   const input = e.currentTarget;
//   name = input.querySelector('input').value;
//   fetchUsers()
//     .then((country) => createGallery(country))
//     .catch((error) => console.log(error));
// };

// const getForm = parentNode => {
//     parentNode.insertAdjacentHTML('afterbegin', formMarkup);
//     const list = document.querySelector('.country-list');
//     list.addEventListener('input', searchCountry);
//   };

// export default getForm;
// function searchCountry() {
//   fetchCountries()
//   .then((country) => createGallery(country))
//   .catch((error) => console.log(error));
// }
// const renderGallery = ({ name }) =>
//   fetchImages({ name }).then(data => {
//     const { hits, totalHits } = data;
//     createGallery(hits);
//     last = Math.ceil(+totalHits / 15);
//     if (page === 1) {
//       removePaginator(refs.body);
//       renderPaginator({ parentNode: refs.gallery, last });
//     }
//   });


