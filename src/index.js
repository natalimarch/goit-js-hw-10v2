import './css/styles.css';
import { fetchCountries } from './fetchCountries';

import debounce from 'lodash.debounce';
import Notiflix from "notiflix";


export const refs = {
  DEBOUNCE_DELAY: 300,
  body: document.body,
  list: document.querySelector('.country-list'),
  input: document.querySelector('#search-box'),
  info: document.querySelector('.country-info'),
};

let query;

const searchCountry = e => {
  query = refs.input.value.trim();
  clearInput();
  fetchCountries(query)
    .then(country => {createGallery(country);
    })
    .catch(error => {
      Notiflix.Notify.failure('Oops, there is no country with that name');
      console.log(error);
    });
};

refs.input.addEventListener('input', debounce(searchCountry, refs.DEBOUNCE_DELAY));

function createGallery(country) {
  if (country.length > 10) {
    Notiflix.Notify.info('Too many matches found. Please enter a more specific name.');
    return;
  }
  console.log(country);
  if (country.length >= 2 && country.length <= 10) {
    const markup = country
      .map(country => {
        return `<li class="country-item" id="${country.name}">
        <img class="country-flags" src="${country.flag}" alt="${country.name}"> ${country.name}
        </li>`;
      })
      .join('');
    refs.list.innerHTML = markup;
    return markup;
  }
  else if (country.length === 1) {
    const markupItem = country
      .map(country => {
        return `<ul class="country-list-card">
        <li class="country-item" id="${country.name}">
        <div class="country-header">
        <img class="country-flag" src="${country.flag}" alt="${country.name}">
        <p class="country-name">${country.name}</p></div>
          <div class="descr-wrapper">
            <p class="descr">
              <span class="country-titles">Capital: </span>
              <span>${country.capital}</span>
            </p>
            <p class="descr">
              <span class="country-titles">Population: </span>
              <span>${country.population}</span>
            </p>
            <p class="descr">
              <span>Language: </span>
              ${country.languages.length > 1 ?
                `<ul class ="language_list"> 
                ${country.languages.map(language => {
                  return `<li class = "language_item">${language.name}</li>`
                }).join("")}
                </ul>` : `${country.languages[0].name}`}
            </p>
          </div>
        </li>
        </ul>`
      }).join('');
    refs.info.innerHTML = markupItem;
  }
}


function clearInput() {
  if (refs.list.children.length) {
    refs.list.innerHTML = '';
  } else if(refs.info.children.length) {
    refs.info.innerHTML = '';
  }
}

