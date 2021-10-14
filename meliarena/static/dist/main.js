(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["interface"] = factory();
	else
		root["interface"] = factory();
})(self, function() {
return /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/javascript/constants/index.js":
/*!*******************************************!*\
  !*** ./src/javascript/constants/index.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const constants = {
  API_URL: 'http://127.0.0.1:5000/api',
  COMPARE_ENDPOINT: '/compare',
  SEARCH_ENDPOINT: '/search'
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (constants);

/***/ }),

/***/ "./src/javascript/interface/actions/addItemToSlot.js":
/*!***********************************************************!*\
  !*** ./src/javascript/interface/actions/addItemToSlot.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _domElements__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../domElements */ "./src/javascript/interface/domElements.js");
/* harmony import */ var _builders_card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../builders/card */ "./src/javascript/interface/builders/card.js");



const addItemToSlot = item => {
  // Build card element
  const card = (0,_builders_card__WEBPACK_IMPORTED_MODULE_1__["default"])(item, false); // If first slot is empty add to it

  if (_domElements__WEBPACK_IMPORTED_MODULE_0__["default"].comparation.slotA.getAttribute('data-empty') === 'true') {
    _domElements__WEBPACK_IMPORTED_MODULE_0__["default"].comparation.slotA.insertBefore(card, _domElements__WEBPACK_IMPORTED_MODULE_0__["default"].comparation.slotA.firstChild);
    _domElements__WEBPACK_IMPORTED_MODULE_0__["default"].comparation.slotA.setAttribute('data-empty', false);
    _domElements__WEBPACK_IMPORTED_MODULE_0__["default"].comparation.slotA.classList.toggle('is-skeleton');
  } else if (_domElements__WEBPACK_IMPORTED_MODULE_0__["default"].comparation.slotB.getAttribute('data-empty') === 'true') {
    _domElements__WEBPACK_IMPORTED_MODULE_0__["default"].comparation.slotB.insertBefore(card, _domElements__WEBPACK_IMPORTED_MODULE_0__["default"].comparation.slotB.firstChild);
    _domElements__WEBPACK_IMPORTED_MODULE_0__["default"].comparation.slotB.setAttribute('data-empty', false);
    _domElements__WEBPACK_IMPORTED_MODULE_0__["default"].comparation.slotB.classList.toggle('is-skeleton');
  } else {
    alert("Você não tem mais espaço para adicionar items. Remova algum item e adicione novamente");
  }
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (addItemToSlot);

/***/ }),

/***/ "./src/javascript/interface/actions/clearSearchResults.js":
/*!****************************************************************!*\
  !*** ./src/javascript/interface/actions/clearSearchResults.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _updateSearchResults__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./updateSearchResults */ "./src/javascript/interface/actions/updateSearchResults.js");


const clearSearchResults = () => {
  (0,_updateSearchResults__WEBPACK_IMPORTED_MODULE_0__["default"])([]);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (clearSearchResults);

/***/ }),

/***/ "./src/javascript/interface/actions/removeItemFromSlot.js":
/*!****************************************************************!*\
  !*** ./src/javascript/interface/actions/removeItemFromSlot.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _domElements__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../domElements */ "./src/javascript/interface/domElements.js");
/* harmony import */ var _helpers_getProductsIdsInSlot__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helpers/getProductsIdsInSlot */ "./src/javascript/interface/helpers/getProductsIdsInSlot.js");



const removeItemFromSlot = itemId => {
  // Build card element
  const cardToRemove = document.querySelector(`.comparation .products .product-card[data-product-id=${itemId}]`);

  if (!cardToRemove) {
    return;
  }

  cardToRemove.parentElement.setAttribute('data-empty', true);
  cardToRemove.parentElement.classList.add('is-skeleton');
  cardToRemove.remove();
  _domElements__WEBPACK_IMPORTED_MODULE_0__["default"].comparation.specs.querySelectorAll(".spec").forEach(spec => spec.remove());
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (removeItemFromSlot);

/***/ }),

/***/ "./src/javascript/interface/actions/updateCompareTable.js":
/*!****************************************************************!*\
  !*** ./src/javascript/interface/actions/updateCompareTable.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _builders_specTable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../builders/specTable */ "./src/javascript/interface/builders/specTable.js");
/* harmony import */ var _helpers_groupComparationResults__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helpers/groupComparationResults */ "./src/javascript/interface/helpers/groupComparationResults.js");



const updateCompareTable = itemsComparation => {
  const groupedResults = (0,_helpers_groupComparationResults__WEBPACK_IMPORTED_MODULE_1__["default"])(itemsComparation);
  (0,_builders_specTable__WEBPACK_IMPORTED_MODULE_0__["default"])(groupedResults); // console.log(groupedResults)
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (updateCompareTable);

/***/ }),

/***/ "./src/javascript/interface/actions/updateSearchResults.js":
/*!*****************************************************************!*\
  !*** ./src/javascript/interface/actions/updateSearchResults.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _domElements__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../domElements */ "./src/javascript/interface/domElements.js");
/* harmony import */ var _builders_card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../builders/card */ "./src/javascript/interface/builders/card.js");


let previousReference = false;

const updateSearchResults = items => {
  const cards = [];

  if (previousReference && previousReference.destroy) {
    previousReference.destroy();
  } // If we don't have itens passed them we clear the whole thing, otherwise just show the slider


  if (!items || items.length === 0) {
    _domElements__WEBPACK_IMPORTED_MODULE_0__["default"].search.resultsWithRefresh().innerHTML = '';
    _domElements__WEBPACK_IMPORTED_MODULE_0__["default"].search.wrapper.classList.remove('search-open'); // Might need to destroy old slide reference here

    return;
  } else {
    _domElements__WEBPACK_IMPORTED_MODULE_0__["default"].search.wrapper.classList.add('search-open');
  } // Create item elements


  items.forEach(item => {
    const card = (0,_builders_card__WEBPACK_IMPORTED_MODULE_1__["default"])(item, true);
    cards.push(card);
  }); // Clean all child

  _domElements__WEBPACK_IMPORTED_MODULE_0__["default"].search.resultsWithRefresh().innerHTML = ''; // Append items to search results

  cards.forEach(item => {
    _domElements__WEBPACK_IMPORTED_MODULE_0__["default"].search.resultsWithRefresh().appendChild(item);
  });
  console.log(_domElements__WEBPACK_IMPORTED_MODULE_0__["default"].search.resultsWithRefresh()); // Generate slider with results

  previousReference = tns({
    container: _domElements__WEBPACK_IMPORTED_MODULE_0__["default"].search.resultsWithRefresh(),
    items: 3,
    gutter: 30,
    mouseDrag: true,
    loop: false,
    slideBy: 1,
    nextButton: _domElements__WEBPACK_IMPORTED_MODULE_0__["default"].search.slider.nextButtonWithRefresh(),
    prevButton: _domElements__WEBPACK_IMPORTED_MODULE_0__["default"].search.slider.prevButtonWithRefresh(),
    responsive: {
      100: {
        items: 1
      },
      400: {
        items: 2
      },
      900: {
        items: 3
      }
    }
  }); // return elements.search.results
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (updateSearchResults);

/***/ }),

/***/ "./src/javascript/interface/builders/card.js":
/*!***************************************************!*\
  !*** ./src/javascript/interface/builders/card.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../constants */ "./src/javascript/constants/index.js");
/* harmony import */ var _services_MeliProductEquivalence__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/MeliProductEquivalence */ "./src/javascript/services/MeliProductEquivalence.js");



const buildProductCard = ({
  id,
  title,
  price,
  thumbnail,
  permalink,
  currency_id = false,
  site_id = false
}, addIcon = true, onButtonClickCallback = () => {}) => {
  // console.log(id, title, price)
  const card = document.createElement('div');
  card.classList.add('product-card');
  card.setAttribute('data-product-id', id);
  const cardWrapper = document.createElement('div');
  cardWrapper.classList.add('product-card--wrapping');
  const cardThumbnailWrapper = document.createElement('div');
  cardThumbnailWrapper.classList.add('product-card--thumbnail');
  const cardButton = document.createElement('button');

  if (addIcon) {
    cardButton.id = 'add-item';
    cardButton.innerHTML = `<input class="product-checkbox form-check-input" type="checkbox" name="${id}" value="">`;
  } else {
    cardButton.innerHTML = '<svg width="13" height="14" viewBox="0 0 13 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12.6114 2.50482L8.06575 7.05051L12.9145 11.8992L11.3993 13.4145L6.55052 8.56574L2.00483 13.1114L0.388588 11.4952L4.93427 6.94949L0.0855422 2.10076L1.60077 0.585531L6.4495 5.43426L10.9952 0.888577L12.6114 2.50482Z" fill="#FD6666"/></svg>';
    cardButton.id = 'remove-item';
  }

  cardButton.addEventListener('click', onButtonClickCallback);
  cardThumbnailWrapper.appendChild(cardButton);
  const cardThumbnailImage = document.createElement('img');
  cardThumbnailImage.setAttribute('src', thumbnail);
  cardThumbnailWrapper.appendChild(cardThumbnailImage);
  cardWrapper.appendChild(cardThumbnailWrapper);
  const cardInfo = document.createElement('div');
  cardInfo.classList.add('product-card--info');
  const cardInfoPrice = document.createElement('div');
  cardInfoPrice.classList.add('price');
  cardInfoPrice.innerText = `${price.toLocaleString(_services_MeliProductEquivalence__WEBPACK_IMPORTED_MODULE_1__["default"][site_id] ?? 'pt-br', {
    style: 'currency',
    currency: currency_id ?? 'BRL'
  })}`;
  cardInfo.appendChild(cardInfoPrice);
  const cardInfoTitle = document.createElement('a');
  cardInfoTitle.setAttribute('href', permalink);
  cardInfoTitle.setAttribute('target', '__blank');
  cardInfoTitle.classList.add('name');
  cardInfoTitle.innerText = title;
  cardInfo.appendChild(cardInfoTitle);
  cardWrapper.appendChild(cardInfo);
  card.appendChild(cardWrapper);
  return card;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (buildProductCard);

/***/ }),

/***/ "./src/javascript/interface/builders/feedback.js":
/*!*******************************************************!*\
  !*** ./src/javascript/interface/builders/feedback.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _stars__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./stars */ "./src/javascript/interface/builders/stars.js");


const buildFeedback = ({
  title,
  evaluation,
  stars
}) => {
  // <div class="feedback">
  //     <span class="title">Ótimo</span>
  //     <div class="star-wrapper">
  //         <span class="star filled"><svg width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10 15.27L16.18 19L14.54 11.97L20 7.24L12.81 6.63L10 0L7.19 6.63L0 7.24L5.46 11.97L3.82 19L10 15.27Z" fill="#3483FA"/></svg></span>
  //         <span class="star filled"><svg width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10 15.27L16.18 19L14.54 11.97L20 7.24L12.81 6.63L10 0L7.19 6.63L0 7.24L5.46 11.97L3.82 19L10 15.27Z" fill="#3483FA"/></svg></span>
  //         <span class="star filled"><svg width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10 15.27L16.18 19L14.54 11.97L20 7.24L12.81 6.63L10 0L7.19 6.63L0 7.24L5.46 11.97L3.82 19L10 15.27Z" fill="#3483FA"/></svg></span>
  //         <span class="star filled"><svg width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10 15.27L16.18 19L14.54 11.97L20 7.24L12.81 6.63L10 0L7.19 6.63L0 7.24L5.46 11.97L3.82 19L10 15.27Z" fill="#3483FA"/></svg></span>
  //         <span class="star not-filled"><svg width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20 7.24L12.81 6.62L10 0L7.19 6.63L0 7.24L5.46 11.97L3.82 19L10 15.27L16.18 19L14.55 11.97L20 7.24ZM10 13.4L6.24 15.67L7.24 11.39L3.92 8.51L8.3 8.13L10 4.1L11.71 8.14L16.09 8.52L12.77 11.4L13.77 15.68L10 13.4Z" fill="black"/></svg></span>
  //     </div>
  //     <div class="evaluation">
  //         Instrumento muito bom ,bem acabado, som top, não fica devendo nada a baixos de renome, serve para músicos iniciantes ou profissionais. Quem estiver em dúvida pode ficar tranquilo, o baixo é excelente, e além de tudo muito bonito.
  //     </div>
  // </div>
  const feedbackWrapper = document.createElement('div');
  feedbackWrapper.classList.add('feedback');
  const titleEl = document.createElement('span');
  titleEl.classList.add('title');
  titleEl.innerText = title;
  const evaluationEl = document.createElement('div');
  evaluationEl.classList.add('evaluation');
  evaluationEl.innerText = evaluation;
  feedbackWrapper.appendChild(titleEl);
  feedbackWrapper.appendChild((0,_stars__WEBPACK_IMPORTED_MODULE_0__["default"])(stars, 20));
  feedbackWrapper.appendChild(evaluationEl);
  return feedbackWrapper;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (buildFeedback);

/***/ }),

/***/ "./src/javascript/interface/builders/modal.js":
/*!****************************************************!*\
  !*** ./src/javascript/interface/builders/modal.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _feedback__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./feedback */ "./src/javascript/interface/builders/feedback.js");
/* harmony import */ var _stars__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./stars */ "./src/javascript/interface/builders/stars.js");
/* harmony import */ var _domElements__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../domElements */ "./src/javascript/interface/domElements.js");
/* harmony import */ var _builders_rating_levels__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../builders/rating-levels */ "./src/javascript/interface/builders/rating-levels.js");





const buildModalContent = ({
  baseElement,
  questions,
  reviews,
  rating_average,
  rating_levels
}) => {
  const content = document.createElement('div');
  content.classList.add('content'); // Add button

  content.innerHTML = '<button id="close-modal"><svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17.0716 6.465L12.5259 11.0107L17.3746 15.8594L15.8594 17.3747L11.0107 12.5259L6.46498 17.0716L4.84873 15.4554L9.39442 10.9097L4.54569 6.06094L6.06091 4.54571L10.9096 9.39445L15.4553 4.84876L17.0716 6.465Z" fill="#FD6666"/></svg></button>';
  content.querySelector('button#close-modal').addEventListener('click', () => {
    _domElements__WEBPACK_IMPORTED_MODULE_2__["default"].modal.classList.remove('show');
    _domElements__WEBPACK_IMPORTED_MODULE_2__["default"].modal.querySelector('.content').remove();
  });
  const ratingBox = document.createElement('div');
  ratingBox.classList.add('rating-box');
  const starsEvaluation = document.createElement('div');
  starsEvaluation.classList.add('stars-evaluation');
  const averege = document.createElement('div');
  averege.classList.add('average');
  const averegeSpan = document.createElement('span');
  averegeSpan.innerText = rating_average;
  const evaluation = document.createElement('div');
  evaluation.classList.add('evaluation');
  evaluation.appendChild((0,_stars__WEBPACK_IMPORTED_MODULE_1__["default"])(rating_average, 22));
  averege.appendChild(averegeSpan);
  averege.appendChild(evaluation);
  starsEvaluation.appendChild(averege);
  const ratingLevels = document.createElement('div');
  ratingLevels.classList.add('rating-levels');
  ratingLevels.appendChild((0,_builders_rating_levels__WEBPACK_IMPORTED_MODULE_3__["default"])(rating_levels));
  starsEvaluation.appendChild(ratingLevels);
  ratingBox.appendChild(starsEvaluation);
  const feedbacks = document.createElement('div');
  feedbacks.classList.add('feedbacks');
  reviews.forEach(review => {
    const reviewEl = (0,_feedback__WEBPACK_IMPORTED_MODULE_0__["default"])({
      title: review.title,
      evaluation: review.content,
      stars: review.rate
    });
    feedbacks.appendChild(reviewEl);
  });
  ratingBox.appendChild(feedbacks);
  content.appendChild(ratingBox);
  baseElement.appendChild(content);
  return baseElement;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (buildModalContent);

/***/ }),

/***/ "./src/javascript/interface/builders/rating-levels.js":
/*!************************************************************!*\
  !*** ./src/javascript/interface/builders/rating-levels.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const buildRatingLevels = ratingLevels => {
  const wrapper = document.createElement('div');
  wrapper.classList.add('rating-levels');
  const totalReviews = Object.values(ratingLevels).reduce((prevValue, currentValue) => currentValue + prevValue);
  Object.values(ratingLevels).forEach((level, index) => {
    // <div class="level">
    //     <span>5 estrelas</span>
    //     <div class="progress">
    //         <div class="filling" data-percentage="86"></div>
    //     </div>
    //     <span>36</span>
    // </div>
    const levelEl = document.createElement('div');
    levelEl.classList.add('level');
    let span = document.createElement('span');
    span.innerText = `${5 - index} estrela${5 - index > 1 ? 's' : ''}`;
    levelEl.appendChild(span);
    const progress = document.createElement('div');
    progress.classList.add('progress');
    const filling = document.createElement('div');
    filling.classList.add('filling');
    filling.style.width = `${level * 100 / totalReviews}%`;
    progress.appendChild(filling);
    const quantity = document.createElement('span');
    quantity.innerHTML = level;
    levelEl.appendChild(progress);
    levelEl.appendChild(quantity);
    wrapper.appendChild(levelEl);
  });
  return wrapper;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (buildRatingLevels);

/***/ }),

/***/ "./src/javascript/interface/builders/spec.js":
/*!***************************************************!*\
  !*** ./src/javascript/interface/builders/spec.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
{
  /* <div class="spec">
     <span class="key">Armazenamento interno</span>
     <span class="value-a">128GB</span>
     <span class="value-b">32GB</span>
  </div> */
}

const buildSpec = ({
  key,
  values = []
}) => {
  const spec = document.createElement('div');
  spec.classList.add('spec');
  spec.setAttribute('data-spec-id', key);
  const span = document.createElement('span');
  span.classList.add(`key`);
  span.innerText = key;
  spec.appendChild(span);
  values.forEach((value, index) => {
    const span = document.createElement('span');
    span.classList.add(`value-${index}`);
    span.innerText = value;
    spec.appendChild(span);
  });
  return spec;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (buildSpec);

/***/ }),

/***/ "./src/javascript/interface/builders/specTable.js":
/*!********************************************************!*\
  !*** ./src/javascript/interface/builders/specTable.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _domElements__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../domElements */ "./src/javascript/interface/domElements.js");
/* harmony import */ var _spec__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./spec */ "./src/javascript/interface/builders/spec.js");


{
  /* <div class="spec">
     <span class="key">Armazenamento interno</span>
     <span class="value-a">128GB</span>
     <span class="value-b">32GB</span>
  </div> */
}

const buildSpecTable = groupedResults => {
  // Remove all previous items
  _domElements__WEBPACK_IMPORTED_MODULE_0__["default"].comparation.specs.innerHTML = '';
  const specs = [];
  groupedResults.forEach(item => {
    const spec = (0,_spec__WEBPACK_IMPORTED_MODULE_1__["default"])(item);
    specs.push(spec);
    _domElements__WEBPACK_IMPORTED_MODULE_0__["default"].comparation.specs.appendChild(spec);
  });
  return specs;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (buildSpecTable);

/***/ }),

/***/ "./src/javascript/interface/builders/stars.js":
/*!****************************************************!*\
  !*** ./src/javascript/interface/builders/stars.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const buildStars = (stars, size = 20) => {
  //<div class="star-wrapper">
  //         <span class="star filled"><svg width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10 15.27L16.18 19L14.54 11.97L20 7.24L12.81 6.63L10 0L7.19 6.63L0 7.24L5.46 11.97L3.82 19L10 15.27Z" fill="#3483FA"/></svg></span>
  //         <span class="star filled"><svg width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10 15.27L16.18 19L14.54 11.97L20 7.24L12.81 6.63L10 0L7.19 6.63L0 7.24L5.46 11.97L3.82 19L10 15.27Z" fill="#3483FA"/></svg></span>
  //         <span class="star filled"></span>
  //         <span class="star filled"><svg width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10 15.27L16.18 19L14.54 11.97L20 7.24L12.81 6.63L10 0L7.19 6.63L0 7.24L5.46 11.97L3.82 19L10 15.27Z" fill="#3483FA"/></svg></span>
  //         <span class="star not-filled"></span>
  const starResults = document.createElement('div');
  starResults.classList.add('star-wrapper');
  let starIteration = stars;

  while (true) {
    if (starIteration - 1 >= 0) {
      starIteration -= 1;
      const star = document.createElement('span');
      star.classList.add('star');
      star.innerHTML = `<svg width='${size}' height='${size}' viewBox='0 0 ${size} ${size}'` + 'fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10 15.27L16.18 19L14.54 11.97L20 7.24L12.81 6.63L10 0L7.19 6.63L0 7.24L5.46 11.97L3.82 19L10 15.27Z" fill="#3483FA"/></svg>';
      starResults.appendChild(star);
    } else {
      break;
    }
  }

  if (starIteration >= 0.5) {
    const star = document.createElement('span');
    star.classList.add('star');
    star.innerHTML = `<svg width='${size}' height='${size}' viewBox='0 0 ${size} ${size}'` + 'fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M20 7.24L12.81 6.62L10 0L7.19 6.63L0 7.24L5.46 11.97L3.82 19L10 15.27L16.18 19L14.55 11.97L20 7.24ZM10 13.4V4.1L11.71 8.14L16.09 8.52L12.77 11.4L13.77 15.68L10 13.4Z" fill="#3483FA"/> </svg>';
    starResults.appendChild(star);
  }

  for (let i = starResults.children.length; i < 5; i++) {
    const star = document.createElement('span');
    star.classList.add('star');
    star.innerHTML = `<svg width='${size}' height='${size}' viewBox='0 0 ${size} ${size}'` + 'fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20 7.24L12.81 6.62L10 0L7.19 6.63L0 7.24L5.46 11.97L3.82 19L10 15.27L16.18 19L14.55 11.97L20 7.24ZM10 13.4L6.24 15.67L7.24 11.39L3.92 8.51L8.3 8.13L10 4.1L11.71 8.14L16.09 8.52L12.77 11.4L13.77 15.68L10 13.4Z" fill="black"/></svg>';
    starResults.appendChild(star);
  }

  return starResults;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (buildStars);

/***/ }),

/***/ "./src/javascript/interface/domElements.js":
/*!*************************************************!*\
  !*** ./src/javascript/interface/domElements.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  search: {
    wrapper: document.querySelector('.search'),
    input: document.querySelector('.search--form form#search input[type=text]'),
    searchForm: document.querySelector('.search--form form#search'),
    submitButton: document.querySelector('.search--form form#search button#search-button'),
    clearButton: document.querySelector('.search--form form#search button#clear-results'),
    addButton: document.querySelector('.search button#add-item-button'),
    results: document.querySelector('.search--results-items'),
    resultsWithRefresh: () => document.querySelector('.search--results-items'),
    slider: {
      nextButtonWithRefresh: () => document.getElementById('next-slide'),
      prevButtonWithRefresh: () => document.getElementById('prev-slide')
    }
  },
  comparation: {
    wrapper: document.querySelector('.comparation'),
    slotA: document.querySelector('.products--slot-a'),
    slotB: document.querySelector('.products--slot-b'),
    specs: document.querySelector('.comparation--specs'),
    compareButton: document.querySelector('.comparation button#compare-button')
  },
  loader: document.querySelector('.loader'),
  modal: document.querySelector('.informative-modal')
});

/***/ }),

/***/ "./src/javascript/interface/handlers/addItensToSlot.js":
/*!*************************************************************!*\
  !*** ./src/javascript/interface/handlers/addItensToSlot.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _domElements__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../domElements */ "./src/javascript/interface/domElements.js");
/* harmony import */ var _helpers_getSelectedProductsIds__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helpers/getSelectedProductsIds */ "./src/javascript/interface/helpers/getSelectedProductsIds.js");
/* harmony import */ var _actions_addItemToSlot__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../actions/addItemToSlot */ "./src/javascript/interface/actions/addItemToSlot.js");
/* harmony import */ var _mocks_items__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../mocks/items */ "./src/javascript/mocks/items.js");
/* harmony import */ var _helpers_quantityOfAvaliableSlots__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../helpers/quantityOfAvaliableSlots */ "./src/javascript/interface/helpers/quantityOfAvaliableSlots.js");
/* harmony import */ var _helpers_clearCheckboxes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../helpers/clearCheckboxes */ "./src/javascript/interface/helpers/clearCheckboxes.js");







const addItensToSlot = () => {
  _domElements__WEBPACK_IMPORTED_MODULE_0__["default"].search.addButton.addEventListener('click', () => {
    const selectedProductIds = (0,_helpers_getSelectedProductsIds__WEBPACK_IMPORTED_MODULE_1__["default"])();
    const quantitySlots = (0,_helpers_quantityOfAvaliableSlots__WEBPACK_IMPORTED_MODULE_4__["default"])();

    if (quantitySlots === 0 && selectedProductIds.length === 2) {// Clear the slots and replace with new products (?)
    }

    if (quantitySlots < selectedProductIds.length) {
      alert("Você não tem espaço o suficiente para adicionar");
      return;
    }

    if (selectedProductIds.length === 0) {
      alert("Selecione algum produto");
      return;
    }

    if (selectedProductIds.length > 2) {
      alert("Selecione apenas 2 itens para realizar a comparação");
      return;
    } // Get items object


    const choosenOnes = window.products.filter(item => {
      return selectedProductIds.includes(item.id);
    }); // Uncheck the checkboxes
    // Add items to slot

    choosenOnes.forEach(item => {
      (0,_actions_addItemToSlot__WEBPACK_IMPORTED_MODULE_2__["default"])(item);
    });
    (0,_helpers_clearCheckboxes__WEBPACK_IMPORTED_MODULE_5__["default"])();
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (addItensToSlot);

/***/ }),

/***/ "./src/javascript/interface/handlers/clearSearchResults.js":
/*!*****************************************************************!*\
  !*** ./src/javascript/interface/handlers/clearSearchResults.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _domElements__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../domElements */ "./src/javascript/interface/domElements.js");
/* harmony import */ var _actions_clearSearchResults__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../actions/clearSearchResults */ "./src/javascript/interface/actions/clearSearchResults.js");



const handleClearSearchResults = () => {
  _domElements__WEBPACK_IMPORTED_MODULE_0__["default"].search.clearButton.addEventListener('click', ev => {
    ev.preventDefault();
    _domElements__WEBPACK_IMPORTED_MODULE_0__["default"].search.input.value = "";
    (0,_actions_clearSearchResults__WEBPACK_IMPORTED_MODULE_1__["default"])();
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (handleClearSearchResults);

/***/ }),

/***/ "./src/javascript/interface/handlers/compareButton.js":
/*!************************************************************!*\
  !*** ./src/javascript/interface/handlers/compareButton.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../constants */ "./src/javascript/constants/index.js");
/* harmony import */ var _domElements__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../domElements */ "./src/javascript/interface/domElements.js");
/* harmony import */ var _helpers_getProductsIdsInSlot__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../helpers/getProductsIdsInSlot */ "./src/javascript/interface/helpers/getProductsIdsInSlot.js");
/* harmony import */ var _actions_updateCompareTable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../actions/updateCompareTable */ "./src/javascript/interface/actions/updateCompareTable.js");
/* harmony import */ var _mocks_compareResponse__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../mocks/compareResponse */ "./src/javascript/mocks/compareResponse.js");
/* harmony import */ var _helpers_toggleLoader__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../helpers/toggleLoader */ "./src/javascript/interface/helpers/toggleLoader.js");






const [toggleOnLoader, toggleOffLoader] = _helpers_toggleLoader__WEBPACK_IMPORTED_MODULE_5__["default"];

const handleCompareButtonSubmit = () => {
  _domElements__WEBPACK_IMPORTED_MODULE_1__["default"].comparation.compareButton.addEventListener('click', () => {
    const selectedProductIds = (0,_helpers_getProductsIdsInSlot__WEBPACK_IMPORTED_MODULE_2__["default"])();

    if (!selectedProductIds.length) {
      alert("Ops! Parece que você não adicionou nenhum produto para comparar");
      return;
    }

    if (selectedProductIds.length === 1) {
      alert("Adicione dois produtos para realizar a comparação");
      return;
    } // Make the request to handle with
    // new Promise((resolve, reject) => {
    //     toggleOnLoader()
    //     setTimeout(() => { 
    //         resolve(compareResponse)
    //     }, 200)
    // }).then(data => {
    //     // Call build table to interact with interface
    //     toggleOffLoader()
    //     updateCompareTable(compareResponse)
    // })


    toggleOnLoader();
    fetch(`${_constants__WEBPACK_IMPORTED_MODULE_0__["default"].API_URL + _constants__WEBPACK_IMPORTED_MODULE_0__["default"].COMPARE_ENDPOINT}?ids=${selectedProductIds.join(',')}`).then(data => data.json()).then(data => {
      toggleOffLoader();
      (0,_actions_updateCompareTable__WEBPACK_IMPORTED_MODULE_3__["default"])(data);
    });
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (handleCompareButtonSubmit);

/***/ }),

/***/ "./src/javascript/interface/handlers/input.js":
/*!****************************************************!*\
  !*** ./src/javascript/interface/handlers/input.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _domElements__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../domElements */ "./src/javascript/interface/domElements.js");
/* harmony import */ var _services_SearchItems__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/SearchItems */ "./src/javascript/services/SearchItems.js");
/* harmony import */ var _actions_updateSearchResults__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../actions/updateSearchResults */ "./src/javascript/interface/actions/updateSearchResults.js");
/* harmony import */ var _helpers_toggleLoader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../helpers/toggleLoader */ "./src/javascript/interface/helpers/toggleLoader.js");




const [toggleOnLoader, toggleOffLoader] = _helpers_toggleLoader__WEBPACK_IMPORTED_MODULE_3__["default"];

const handleInput = () => {
  _domElements__WEBPACK_IMPORTED_MODULE_0__["default"].search.searchForm.addEventListener('submit', ev => {
    ev.preventDefault();
    const inputValue = _domElements__WEBPACK_IMPORTED_MODULE_0__["default"].search.input.value;

    if (inputValue.length === 0) {
      return;
    }

    toggleOnLoader();
    _services_SearchItems__WEBPACK_IMPORTED_MODULE_1__["default"].searchByName(inputValue).then(data => {
      (0,_actions_updateSearchResults__WEBPACK_IMPORTED_MODULE_2__["default"])(data);
      toggleOffLoader();
    });
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (handleInput);

/***/ }),

/***/ "./src/javascript/interface/handlers/removeFromSlot.js":
/*!*************************************************************!*\
  !*** ./src/javascript/interface/handlers/removeFromSlot.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _domElements__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../domElements */ "./src/javascript/interface/domElements.js");
/* harmony import */ var _actions_removeItemFromSlot__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../actions/removeItemFromSlot */ "./src/javascript/interface/actions/removeItemFromSlot.js");



const handleRemoveFromSlot = () => {
  document.addEventListener('DOMSubtreeModified', () => {
    document.querySelectorAll('button#remove-item').forEach(removeButton => {
      removeButton.addEventListener('click', () => {
        const itemIdToRemove = removeButton.closest('.product-card').getAttribute('data-product-id');
        (0,_actions_removeItemFromSlot__WEBPACK_IMPORTED_MODULE_1__["default"])(itemIdToRemove);
      });
    });
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (handleRemoveFromSlot);

/***/ }),

/***/ "./src/javascript/interface/helpers/clearCheckboxes.js":
/*!*************************************************************!*\
  !*** ./src/javascript/interface/helpers/clearCheckboxes.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _domElements__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../domElements */ "./src/javascript/interface/domElements.js");


const clearCheckBoxes = () => {
  const selectedCheckboxes = _domElements__WEBPACK_IMPORTED_MODULE_0__["default"].search.resultsWithRefresh().querySelectorAll('.product-card .product-checkbox:checked');
  selectedCheckboxes.forEach(checkbox => checkbox.checked = false);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (clearCheckBoxes);

/***/ }),

/***/ "./src/javascript/interface/helpers/getProductsIdsInSlot.js":
/*!******************************************************************!*\
  !*** ./src/javascript/interface/helpers/getProductsIdsInSlot.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _domElements__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../domElements */ "./src/javascript/interface/domElements.js");


const getProductsIdsInSlot = () => {
  const selectedProductsIds = []; // Find selected products by checkbox

  const selectedCheckboxes = _domElements__WEBPACK_IMPORTED_MODULE_0__["default"].comparation.wrapper.querySelectorAll('.product-card');
  selectedCheckboxes.forEach(checkbox => {
    // Find product id by checkbox
    selectedProductsIds.push(checkbox.closest('.product-card').getAttribute('data-product-id'));
  });
  return selectedProductsIds;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getProductsIdsInSlot);

/***/ }),

/***/ "./src/javascript/interface/helpers/getSelectedProductsIds.js":
/*!********************************************************************!*\
  !*** ./src/javascript/interface/helpers/getSelectedProductsIds.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _domElements__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../domElements */ "./src/javascript/interface/domElements.js");


const getSelectedProductIds = () => {
  const selectedProductsIds = []; // Find selected products by checkbox

  const selectedCheckboxes = _domElements__WEBPACK_IMPORTED_MODULE_0__["default"].search.resultsWithRefresh().querySelectorAll('.product-card .product-checkbox:checked');
  selectedCheckboxes.forEach(checkbox => {
    // Find product id by checkbox
    selectedProductsIds.push(checkbox.closest('.product-card').getAttribute('data-product-id'));
  });
  return selectedProductsIds;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getSelectedProductIds);

/***/ }),

/***/ "./src/javascript/interface/helpers/groupComparationResults.js":
/*!*********************************************************************!*\
  !*** ./src/javascript/interface/helpers/groupComparationResults.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const groupComparationResults = itemsComparation => {
  const referenceItem = itemsComparation[0];
  const groupedResults = [];
  referenceItem.attributes.forEach((attribute, index) => {
    const {
      name,
      value_name: valueName
    } = attribute;
    const matchingAttributes = [];

    for (let i = 1; i < itemsComparation.length; i++) {
      const comparatedItem = itemsComparation[i];
      const {
        value_name: valueName
      } = comparatedItem.attributes[index];
      matchingAttributes.push(valueName);
    }

    groupedResults.push({
      key: name,
      values: [valueName, ...matchingAttributes]
    });
  });
  return groupedResults;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (groupComparationResults);

/***/ }),

/***/ "./src/javascript/interface/helpers/quantityOfAvaliableSlots.js":
/*!**********************************************************************!*\
  !*** ./src/javascript/interface/helpers/quantityOfAvaliableSlots.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _domElements__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../domElements */ "./src/javascript/interface/domElements.js");


const quantityOfAvaliableSlots = () => {
  let total = 0;

  if (_domElements__WEBPACK_IMPORTED_MODULE_0__["default"].comparation.slotA.getAttribute('data-empty') === "true") {
    total += 1;
  }

  if (_domElements__WEBPACK_IMPORTED_MODULE_0__["default"].comparation.slotB.getAttribute('data-empty') === "true") {
    total += 1;
  }

  return total;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (quantityOfAvaliableSlots);

/***/ }),

/***/ "./src/javascript/interface/helpers/toggleLoader.js":
/*!**********************************************************!*\
  !*** ./src/javascript/interface/helpers/toggleLoader.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _domElements__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../domElements */ "./src/javascript/interface/domElements.js");


const toggleOnLoader = () => {
  _domElements__WEBPACK_IMPORTED_MODULE_0__["default"].loader.classList.remove('hide');
};

const toggleOffLoader = () => {
  _domElements__WEBPACK_IMPORTED_MODULE_0__["default"].loader.classList.add('hide');
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ([toggleOnLoader, toggleOffLoader]);

/***/ }),

/***/ "./src/javascript/mocks/compareResponse.js":
/*!*************************************************!*\
  !*** ./src/javascript/mocks/compareResponse.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// 20211008131339
// https://gist.githubusercontent.com/marcosdmyr/2548f67fbe6e07d923fe34ef3b2ce454/raw/ae27e583b20ea183bcbafaa0b46172bc8966f130/gistfile1.txt
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ([{
  "accepts_mercadopago": true,
  "attributes": [{
    "attribute_group_id": "OTHERS",
    "attribute_group_name": "Outros",
    "id": "BATTERY_CAPACITY",
    "name": "Capacidade da bateria",
    "value_id": "98435",
    "value_name": "3000 mAh",
    "value_struct": {
      "number": 3000,
      "unit": "mAh"
    },
    "values": [{
      "id": "98435",
      "name": "3000 mAh",
      "struct": {
        "number": 3000,
        "unit": "mAh"
      }
    }]
  }, {
    "attribute_group_id": "OTHERS",
    "attribute_group_name": "Outros",
    "id": "BATTERY_TYPE",
    "name": "Tipo de bateria",
    "value_id": "95013",
    "value_name": "Íon de lítio",
    "value_struct": null,
    "values": [{
      "id": "95013",
      "name": "Íon de lítio",
      "struct": null
    }]
  }, {
    "attribute_group_id": "OTHERS",
    "attribute_group_name": "Outros",
    "id": "BRAND",
    "name": "Marca",
    "value_id": "2503",
    "value_name": "Motorola",
    "value_struct": null,
    "values": [{
      "id": "2503",
      "name": "Motorola",
      "struct": null
    }]
  }, {
    "attribute_group_id": "OTHERS",
    "attribute_group_name": "Outros",
    "id": "CARRIER",
    "name": "Operadora",
    "value_id": "298335",
    "value_name": "Desbloqueado",
    "value_struct": null,
    "values": [{
      "id": "298335",
      "name": "Desbloqueado",
      "struct": null
    }]
  }, {
    "attribute_group_id": "OTHERS",
    "attribute_group_name": "Outros",
    "id": "COLOR",
    "name": "Cor",
    "value_id": "1020149",
    "value_name": "Lunar gray",
    "value_struct": null,
    "values": [{
      "id": "1020149",
      "name": "Lunar gray",
      "struct": null
    }]
  }, {
    "attribute_group_id": "OTHERS",
    "attribute_group_name": "Outros",
    "id": "CPU_MODELS",
    "name": "Modelos de CPU",
    "value_id": "7648849",
    "value_name": "8x2 GHz Cortex-A53",
    "value_struct": null,
    "values": [{
      "id": "7648849",
      "name": "8x2 GHz Cortex-A53",
      "struct": null
    }]
  }, {
    "attribute_group_id": "OTHERS",
    "attribute_group_name": "Outros",
    "id": "DEPTH",
    "name": "Profundidade",
    "value_id": "7614149",
    "value_name": "8.04 mm",
    "value_struct": {
      "number": 8.04,
      "unit": "mm"
    },
    "values": [{
      "id": "7614149",
      "name": "8.04 mm",
      "struct": {
        "number": 8.04,
        "unit": "mm"
      }
    }]
  }, {
    "attribute_group_id": "OTHERS",
    "attribute_group_name": "Outros",
    "id": "DIGITAL_ZOOM",
    "name": "Zoom digital",
    "value_id": "1339",
    "value_name": "8x",
    "value_struct": {
      "number": 8,
      "unit": "x"
    },
    "values": [{
      "id": "1339",
      "name": "8x",
      "struct": {
        "number": 8,
        "unit": "x"
      }
    }]
  }, {
    "attribute_group_id": "OTHERS",
    "attribute_group_name": "Outros",
    "id": "DISPLAY_MAX_BRIGHTNESS",
    "name": "Brilho máximo da tela",
    "value_id": "1160581",
    "value_name": "500 cd/m²",
    "value_struct": {
      "number": 500,
      "unit": "cd/m²"
    },
    "values": [{
      "id": "1160581",
      "name": "500 cd/m²",
      "struct": {
        "number": 500,
        "unit": "cd/m²"
      }
    }]
  }, {
    "attribute_group_id": "OTHERS",
    "attribute_group_name": "Outros",
    "id": "DISPLAY_PIXELS_PER_INCH",
    "name": "Pixels por polegada",
    "value_id": "7058226",
    "value_name": "401 ppi",
    "value_struct": {
      "number": 401,
      "unit": "ppi"
    },
    "values": [{
      "id": "7058226",
      "name": "401 ppi",
      "struct": {
        "number": 401,
        "unit": "ppi"
      }
    }]
  }, {
    "attribute_group_id": "OTHERS",
    "attribute_group_name": "Outros",
    "id": "DISPLAY_RESOLUTION",
    "name": "Resolução da tela",
    "value_id": "7199626",
    "value_name": "1080 px x 1920 px",
    "value_struct": null,
    "values": [{
      "id": "7199626",
      "name": "1080 px x 1920 px",
      "struct": null
    }]
  }, {
    "attribute_group_id": "OTHERS",
    "attribute_group_name": "Outros",
    "id": "DISPLAY_SIZE",
    "name": "Tamanho da tela",
    "value_id": "4428482",
    "value_name": "5.5 \"",
    "value_struct": {
      "number": 5.5,
      "unit": "\""
    },
    "values": [{
      "id": "4428482",
      "name": "5.5 \"",
      "struct": {
        "number": 5.5,
        "unit": "\""
      }
    }]
  }, {
    "attribute_group_id": "OTHERS",
    "attribute_group_name": "Outros",
    "id": "DISPLAY_TECHNOLOGY",
    "name": "Tecnologia da tela",
    "value_id": "80490",
    "value_name": "IPS",
    "value_struct": null,
    "values": [{
      "id": "80490",
      "name": "IPS",
      "struct": null
    }]
  }, {
    "attribute_group_id": "OTHERS",
    "attribute_group_name": "Outros",
    "id": "FRONT_CAMERAS_NUMBER",
    "name": "Quantidade de câmeras frontais",
    "value_id": "7477216",
    "value_name": "1",
    "value_struct": null,
    "values": [{
      "id": "7477216",
      "name": "1",
      "struct": null
    }]
  }, {
    "attribute_group_id": "OTHERS",
    "attribute_group_name": "Outros",
    "id": "FRONT_CAMERA_APERTURE",
    "name": "Abertura do diafragma da câmera frontal",
    "value_id": "7408577",
    "value_name": "f 2.0",
    "value_struct": null,
    "values": [{
      "id": "7408577",
      "name": "f 2.0",
      "struct": null
    }]
  }, {
    "attribute_group_id": "OTHERS",
    "attribute_group_name": "Outros",
    "id": "GPU_MODEL",
    "name": "Modelo de GPU",
    "value_id": "7524181",
    "value_name": "Adreno 506",
    "value_struct": null,
    "values": [{
      "id": "7524181",
      "name": "Adreno 506",
      "struct": null
    }]
  }, {
    "attribute_group_id": "OTHERS",
    "attribute_group_name": "Outros",
    "id": "GTIN",
    "name": "Código universal de produto",
    "value_id": null,
    "value_name": "7892597341016",
    "value_struct": null,
    "values": [{
      "id": null,
      "name": "7892597341016",
      "struct": null
    }]
  }, {
    "attribute_group_id": "OTHERS",
    "attribute_group_name": "Outros",
    "id": "HEIGHT",
    "name": "Altura",
    "value_id": "6935580",
    "value_name": "153.5 mm",
    "value_struct": {
      "number": 153.5,
      "unit": "mm"
    },
    "values": [{
      "id": "6935580",
      "name": "153.5 mm",
      "struct": {
        "number": 153.5,
        "unit": "mm"
      }
    }]
  }, {
    "attribute_group_id": "OTHERS",
    "attribute_group_name": "Outros",
    "id": "INTERNAL_MEMORY",
    "name": "Memória interna",
    "value_id": "59725",
    "value_name": "32 GB",
    "value_struct": {
      "number": 32,
      "unit": "GB"
    },
    "values": [{
      "id": "59725",
      "name": "32 GB",
      "struct": {
        "number": 32,
        "unit": "GB"
      }
    }]
  }, {
    "attribute_group_id": "OTHERS",
    "attribute_group_name": "Outros",
    "id": "IS_DUAL_SIM",
    "name": "É Dual SIM",
    "value_id": "242085",
    "value_name": "Sim",
    "value_struct": null,
    "values": [{
      "id": "242085",
      "name": "Sim",
      "struct": null
    }]
  }, {
    "attribute_group_id": "OTHERS",
    "attribute_group_name": "Outros",
    "id": "ITEM_CONDITION",
    "name": "Condição do item",
    "value_id": "2230284",
    "value_name": "Novo",
    "value_struct": null,
    "values": [{
      "id": "2230284",
      "name": "Novo",
      "struct": null
    }]
  }, {
    "attribute_group_id": "OTHERS",
    "attribute_group_name": "Outros",
    "id": "LINE",
    "name": "Linha",
    "value_id": "3073863",
    "value_name": "Moto G",
    "value_struct": null,
    "values": [{
      "id": "3073863",
      "name": "Moto G",
      "struct": null
    }]
  }, {
    "attribute_group_id": "OTHERS",
    "attribute_group_name": "Outros",
    "id": "MAIN_COLOR",
    "name": "Cor principal",
    "value_id": "2450294",
    "value_name": "Cinza",
    "value_struct": null,
    "values": [{
      "id": "2450294",
      "name": "Cinza",
      "struct": null
    }]
  }, {
    "attribute_group_id": "OTHERS",
    "attribute_group_name": "Outros",
    "id": "MAIN_FRONT_CAMERA_RESOLUTION",
    "name": "Resolução da câmera frontal principal",
    "value_id": "7207052",
    "value_name": "8 Mpx",
    "value_struct": {
      "number": 8,
      "unit": "Mpx"
    },
    "values": [{
      "id": "7207052",
      "name": "8 Mpx",
      "struct": {
        "number": 8,
        "unit": "Mpx"
      }
    }]
  }, {
    "attribute_group_id": "OTHERS",
    "attribute_group_name": "Outros",
    "id": "MAIN_REAR_CAMERA_RESOLUTION",
    "name": "Resolução da câmera traseira principal",
    "value_id": "7206960",
    "value_name": "13 Mpx",
    "value_struct": {
      "number": 13,
      "unit": "Mpx"
    },
    "values": [{
      "id": "7206960",
      "name": "13 Mpx",
      "struct": {
        "number": 13,
        "unit": "Mpx"
      }
    }]
  }, {
    "attribute_group_id": "OTHERS",
    "attribute_group_name": "Outros",
    "id": "MAX_MEMORY_CARD_CAPACITY",
    "name": "Capacidade máxima do cartão de memória",
    "value_id": "2087792",
    "value_name": "256 GB",
    "value_struct": {
      "number": 256,
      "unit": "GB"
    },
    "values": [{
      "id": "2087792",
      "name": "256 GB",
      "struct": {
        "number": 256,
        "unit": "GB"
      }
    }]
  }, {
    "attribute_group_id": "OTHERS",
    "attribute_group_name": "Outros",
    "id": "MEMORY_CARD_TYPES",
    "name": "Tipos de cartão de memória",
    "value_id": "7199655",
    "value_name": "MicroSD",
    "value_struct": null,
    "values": [{
      "id": "7199655",
      "name": "MicroSD",
      "struct": null
    }]
  }, {
    "attribute_group_id": "OTHERS",
    "attribute_group_name": "Outros",
    "id": "MOBILE_NETWORK",
    "name": "Rede",
    "value_id": "367876",
    "value_name": "4G/LTE",
    "value_struct": null,
    "values": [{
      "id": "367876",
      "name": "4G/LTE",
      "struct": null
    }]
  }, {
    "attribute_group_id": "OTHERS",
    "attribute_group_name": "Outros",
    "id": "MODEL",
    "name": "Modelo",
    "value_id": "1249909",
    "value_name": "G5S Plus Dual SIM",
    "value_struct": null,
    "values": [{
      "id": "1249909",
      "name": "G5S Plus Dual SIM",
      "struct": null
    }]
  }, {
    "attribute_group_id": "OTHERS",
    "attribute_group_name": "Outros",
    "id": "NUMBER_OF_SIM_CARD_SLOTS",
    "name": "Quantidade de ranhuras para cartão SIM",
    "value_id": "2087802",
    "value_name": "2",
    "value_struct": null,
    "values": [{
      "id": "2087802",
      "name": "2",
      "struct": null
    }]
  }, {
    "attribute_group_id": "OTHERS",
    "attribute_group_name": "Outros",
    "id": "OPERATING_SYSTEM_NAME",
    "name": "Nome do sistema operacional",
    "value_id": "7403813",
    "value_name": "Android",
    "value_struct": null,
    "values": [{
      "id": "7403813",
      "name": "Android",
      "struct": null
    }]
  }, {
    "attribute_group_id": "OTHERS",
    "attribute_group_name": "Outros",
    "id": "OPERATING_SYSTEM_ORIGINAL_VERSION",
    "name": "Versão original do sistema operacional",
    "value_id": "7199644",
    "value_name": "7.1 Nougat",
    "value_struct": null,
    "values": [{
      "id": "7199644",
      "name": "7.1 Nougat",
      "struct": null
    }]
  }, {
    "attribute_group_id": "OTHERS",
    "attribute_group_name": "Outros",
    "id": "PROCESSOR_CORES_NUMBER",
    "name": "Quantidade de núcleos do processador",
    "value_id": "7206961",
    "value_name": "8",
    "value_struct": null,
    "values": [{
      "id": "7206961",
      "name": "8",
      "struct": null
    }]
  }, {
    "attribute_group_id": "OTHERS",
    "attribute_group_name": "Outros",
    "id": "PROCESSOR_MODEL",
    "name": "Modelo do processador",
    "value_id": "2087856",
    "value_name": "Snapdragon 625",
    "value_struct": null,
    "values": [{
      "id": "2087856",
      "name": "Snapdragon 625",
      "struct": null
    }]
  }, {
    "attribute_group_id": "OTHERS",
    "attribute_group_name": "Outros",
    "id": "PROCESSOR_SPEED",
    "name": "Velocidade do processador",
    "value_id": "365995",
    "value_name": "2 GHz",
    "value_struct": {
      "number": 2,
      "unit": "GHz"
    },
    "values": [{
      "id": "365995",
      "name": "2 GHz",
      "struct": {
        "number": 2,
        "unit": "GHz"
      }
    }]
  }, {
    "attribute_group_id": "OTHERS",
    "attribute_group_name": "Outros",
    "id": "RAM",
    "name": "Memória RAM",
    "value_id": "98970",
    "value_name": "3 GB",
    "value_struct": {
      "number": 3,
      "unit": "GB"
    },
    "values": [{
      "id": "98970",
      "name": "3 GB",
      "struct": {
        "number": 3,
        "unit": "GB"
      }
    }]
  }, {
    "attribute_group_id": "OTHERS",
    "attribute_group_name": "Outros",
    "id": "REAR_CAMERAS_NUMBER",
    "name": "Quantidade de câmeras traseiras",
    "value_id": "7477262",
    "value_name": "2",
    "value_struct": null,
    "values": [{
      "id": "7477262",
      "name": "2",
      "struct": null
    }]
  }, {
    "attribute_group_id": "OTHERS",
    "attribute_group_name": "Outros",
    "id": "REAR_CAMERAS_RESOLUTION",
    "name": "Resolução das câmeras traseiras",
    "value_id": "7444340",
    "value_name": "13 Mpx/13 Mpx",
    "value_struct": null,
    "values": [{
      "id": "7444340",
      "name": "13 Mpx/13 Mpx",
      "struct": null
    }]
  }, {
    "attribute_group_id": "OTHERS",
    "attribute_group_name": "Outros",
    "id": "REAR_CAMERA_APERTURE",
    "name": "Abertura do diafragma da câmera traseira",
    "value_id": "7439461",
    "value_name": "f 2.0",
    "value_struct": null,
    "values": [{
      "id": "7439461",
      "name": "f 2.0",
      "struct": null
    }]
  }, {
    "attribute_group_id": "OTHERS",
    "attribute_group_name": "Outros",
    "id": "REAR_CAMERA_RECORDING_RESOLUTION",
    "name": "Resolução de vídeo da câmera traseira",
    "value_id": "7199630",
    "value_name": "3840 px x 2160 px",
    "value_struct": null,
    "values": [{
      "id": "7199630",
      "name": "3840 px x 2160 px",
      "struct": null
    }]
  }, {
    "attribute_group_id": "OTHERS",
    "attribute_group_name": "Outros",
    "id": "RELEASE_YEAR",
    "name": "Ano de lançamento",
    "value_id": "401816",
    "value_name": "2017",
    "value_struct": null,
    "values": [{
      "id": "401816",
      "name": "2017",
      "struct": null
    }]
  }, {
    "attribute_group_id": "OTHERS",
    "attribute_group_name": "Outros",
    "id": "SELLER_SKU",
    "name": "SKU",
    "value_id": null,
    "value_name": "CELMOTXT180232GBPT-C",
    "value_struct": null,
    "values": [{
      "id": null,
      "name": "CELMOTXT180232GBPT-C",
      "struct": null
    }]
  }, {
    "attribute_group_id": "OTHERS",
    "attribute_group_name": "Outros",
    "id": "SIM_SIZES",
    "name": "Tamanhos de cartão SIM compatíveis",
    "value_id": "80453",
    "value_name": "Nano-SIM",
    "value_struct": null,
    "values": [{
      "id": "80453",
      "name": "Nano-SIM",
      "struct": null
    }]
  }, {
    "attribute_group_id": "OTHERS",
    "attribute_group_name": "Outros",
    "id": "WEIGHT",
    "name": "Peso",
    "value_id": "6793640",
    "value_name": "168 g",
    "value_struct": {
      "number": 168,
      "unit": "g"
    },
    "values": [{
      "id": "6793640",
      "name": "168 g",
      "struct": {
        "number": 168,
        "unit": "g"
      }
    }]
  }, {
    "attribute_group_id": "OTHERS",
    "attribute_group_name": "Outros",
    "id": "WIDTH",
    "name": "Largura",
    "value_id": "6525489",
    "value_name": "76.2 mm",
    "value_struct": {
      "number": 76.2,
      "unit": "mm"
    },
    "values": [{
      "id": "6525489",
      "name": "76.2 mm",
      "struct": {
        "number": 76.2,
        "unit": "mm"
      }
    }]
  }, {
    "attribute_group_id": "OTHERS",
    "attribute_group_name": "Outros",
    "id": "WITH_ACCELEROMETER",
    "name": "Com acelerômetro",
    "value_id": "242085",
    "value_name": "Sim",
    "value_struct": null,
    "values": [{
      "id": "242085",
      "name": "Sim",
      "struct": null
    }]
  }, {
    "attribute_group_id": "OTHERS",
    "attribute_group_name": "Outros",
    "id": "WITH_BLUETOOTH",
    "name": "Com Bluetooth",
    "value_id": "242085",
    "value_name": "Sim",
    "value_struct": null,
    "values": [{
      "id": "242085",
      "name": "Sim",
      "struct": null
    }]
  }, {
    "attribute_group_id": "OTHERS",
    "attribute_group_name": "Outros",
    "id": "WITH_CAMERA",
    "name": "Com câmera",
    "value_id": "242085",
    "value_name": "Sim",
    "value_struct": null,
    "values": [{
      "id": "242085",
      "name": "Sim",
      "struct": null
    }]
  }, {
    "attribute_group_id": "OTHERS",
    "attribute_group_name": "Outros",
    "id": "WITH_FINGERPRINT_READER",
    "name": "Com leitor de impressão digital",
    "value_id": "242085",
    "value_name": "Sim",
    "value_struct": null,
    "values": [{
      "id": "242085",
      "name": "Sim",
      "struct": null
    }]
  }, {
    "attribute_group_id": "OTHERS",
    "attribute_group_name": "Outros",
    "id": "WITH_FRONT_CAMERA_FLASH",
    "name": "Com flash na câmara frontal",
    "value_id": "242085",
    "value_name": "Sim",
    "value_struct": null,
    "values": [{
      "id": "242085",
      "name": "Sim",
      "struct": null
    }]
  }, {
    "attribute_group_id": "OTHERS",
    "attribute_group_name": "Outros",
    "id": "WITH_GPS",
    "name": "Com GPS",
    "value_id": "242085",
    "value_name": "Sim",
    "value_struct": null,
    "values": [{
      "id": "242085",
      "name": "Sim",
      "struct": null
    }]
  }, {
    "attribute_group_id": "OTHERS",
    "attribute_group_name": "Outros",
    "id": "WITH_GYROSCOPE",
    "name": "Com giroscópio",
    "value_id": "242085",
    "value_name": "Sim",
    "value_struct": null,
    "values": [{
      "id": "242085",
      "name": "Sim",
      "struct": null
    }]
  }, {
    "attribute_group_id": "OTHERS",
    "attribute_group_name": "Outros",
    "id": "WITH_IMEI",
    "name": "Com IMEI",
    "value_id": "242085",
    "value_name": "Sim",
    "value_struct": null,
    "values": [{
      "id": "242085",
      "name": "Sim",
      "struct": null
    }]
  }, {
    "attribute_group_id": "OTHERS",
    "attribute_group_name": "Outros",
    "id": "WITH_MEMORY_CARD_SLOT",
    "name": "Com ranhura para cartão de memória",
    "value_id": "242085",
    "value_name": "Sim",
    "value_struct": null,
    "values": [{
      "id": "242085",
      "name": "Sim",
      "struct": null
    }]
  }, {
    "attribute_group_id": "OTHERS",
    "attribute_group_name": "Outros",
    "id": "WITH_NFC",
    "name": "Com NFC",
    "value_id": "242085",
    "value_name": "Sim",
    "value_struct": null,
    "values": [{
      "id": "242085",
      "name": "Sim",
      "struct": null
    }]
  }, {
    "attribute_group_id": "OTHERS",
    "attribute_group_name": "Outros",
    "id": "WITH_PHYSICAL_QWERTY_KEYBOARD",
    "name": "Com teclado QWERTY físico",
    "value_id": "242084",
    "value_name": "Não",
    "value_struct": null,
    "values": [{
      "id": "242084",
      "name": "Não",
      "struct": null
    }]
  }, {
    "attribute_group_id": "OTHERS",
    "attribute_group_name": "Outros",
    "id": "WITH_PROXIMITY_SENSOR",
    "name": "Com sensor de proximidade",
    "value_id": "242085",
    "value_name": "Sim",
    "value_struct": null,
    "values": [{
      "id": "242085",
      "name": "Sim",
      "struct": null
    }]
  }, {
    "attribute_group_id": "OTHERS",
    "attribute_group_name": "Outros",
    "id": "WITH_REMOVABLE_BATTERY",
    "name": "Com bateria removível",
    "value_id": "242084",
    "value_name": "Não",
    "value_struct": null,
    "values": [{
      "id": "242084",
      "name": "Não",
      "struct": null
    }]
  }, {
    "attribute_group_id": "OTHERS",
    "attribute_group_name": "Outros",
    "id": "WITH_TOUCHSCREEN_DISPLAY",
    "name": "Com tela tátil",
    "value_id": "242085",
    "value_name": "Sim",
    "value_struct": null,
    "values": [{
      "id": "242085",
      "name": "Sim",
      "struct": null
    }]
  }, {
    "attribute_group_id": "OTHERS",
    "attribute_group_name": "Outros",
    "id": "WITH_USB_CONNECTOR",
    "name": "Com conector USB",
    "value_id": "242085",
    "value_name": "Sim",
    "value_struct": null,
    "values": [{
      "id": "242085",
      "name": "Sim",
      "struct": null
    }]
  }, {
    "attribute_group_id": "OTHERS",
    "attribute_group_name": "Outros",
    "id": "WITH_WIFI",
    "name": "Com Wi-Fi",
    "value_id": "242085",
    "value_name": "Sim",
    "value_struct": null,
    "values": [{
      "id": "242085",
      "name": "Sim",
      "struct": null
    }]
  }],
  "automatic_relist": false,
  "available_quantity": 1,
  "base_price": 889.2,
  "buying_mode": "buy_it_now",
  "catalog_listing": true,
  "catalog_product_id": "MLB8054599",
  "category_id": "MLB1055",
  "channels": ["marketplace"],
  "condition": "new",
  "coverage_areas": [],
  "currency_id": "BRL",
  "date_created": "2020-12-21T14:40:39.000Z",
  "deal_ids": [],
  "descriptions": [{
    "id": "MLB1746271593-3116793980"
  }],
  "differential_pricing": null,
  "domain_id": "MLB-CELLPHONES",
  "health": null,
  "id": "MLB1746271593",
  "initial_quantity": 188,
  "international_delivery_mode": "none",
  "last_updated": "2021-10-07T12:41:05.000Z",
  "listing_source": "",
  "listing_type_id": "gold_pro",
  "location": {},
  "non_mercado_pago_payment_methods": [],
  "official_store_id": null,
  "original_price": 936,
  "parent_item_id": null,
  "permalink": "https://produto.mercadolivre.com.br/MLB-1746271593-moto-g5s-plus-dual-sim-32-gb-lunar-gray-3-gb-ram-_JM",
  "pictures": [{
    "id": "617183-MLA40691870107_022020",
    "max_size": "616x1197",
    "quality": "",
    "secure_url": "https://http2.mlstatic.com/D_617183-MLA40691870107_022020-O.jpg",
    "size": "257x500",
    "url": "http://http2.mlstatic.com/D_617183-MLA40691870107_022020-O.jpg"
  }, {
    "id": "842330-MLA40691870108_022020",
    "max_size": "611x1197",
    "quality": "",
    "secure_url": "https://http2.mlstatic.com/D_842330-MLA40691870108_022020-O.jpg",
    "size": "255x500",
    "url": "http://http2.mlstatic.com/D_842330-MLA40691870108_022020-O.jpg"
  }, {
    "id": "969331-MLA40691870109_022020",
    "max_size": "585x1197",
    "quality": "",
    "secure_url": "https://http2.mlstatic.com/D_969331-MLA40691870109_022020-O.jpg",
    "size": "244x500",
    "url": "http://http2.mlstatic.com/D_969331-MLA40691870109_022020-O.jpg"
  }, {
    "id": "945983-MLA40691870110_022020",
    "max_size": "774x1081",
    "quality": "",
    "secure_url": "https://http2.mlstatic.com/D_945983-MLA40691870110_022020-O.jpg",
    "size": "358x500",
    "url": "http://http2.mlstatic.com/D_945983-MLA40691870110_022020-O.jpg"
  }],
  "price": 889.2,
  "sale_terms": [{
    "id": "WARRANTY_TYPE",
    "name": "Tipo de garantia",
    "value_id": "2230280",
    "value_name": "Garantia do vendedor",
    "value_struct": null,
    "values": [{
      "id": "2230280",
      "name": "Garantia do vendedor",
      "struct": null
    }]
  }, {
    "id": "WARRANTY_TIME",
    "name": "Tempo de garantia",
    "value_id": null,
    "value_name": "90 dias",
    "value_struct": {
      "number": 90,
      "unit": "dias"
    },
    "values": [{
      "id": null,
      "name": "90 dias",
      "struct": {
        "number": 90,
        "unit": "dias"
      }
    }]
  }],
  "secure_thumbnail": "https://http2.mlstatic.com/D_617183-MLA40691870107_022020-I.jpg",
  "seller_address": {
    "city": {
      "id": "BR-SP-44",
      "name": "São Paulo"
    },
    "country": {
      "id": "BR",
      "name": "Brasil"
    },
    "id": 108571147,
    "search_location": {
      "city": {
        "id": "TUxCQ1NQLTk0MDc",
        "name": "São Paulo Centro"
      },
      "neighborhood": {
        "id": "TUxCQkNBTTk1NTk",
        "name": "Campos Elíseos"
      },
      "state": {
        "id": "TUxCUFNBT085N2E4",
        "name": "São Paulo"
      }
    },
    "state": {
      "id": "BR-SP",
      "name": "São Paulo"
    }
  },
  "seller_contact": null,
  "seller_id": 56287320,
  "shipping": {
    "dimensions": null,
    "free_methods": [{
      "id": 100009,
      "rule": {
        "default": true,
        "free_mode": "country",
        "free_shipping_flag": true,
        "value": null
      }
    }],
    "free_shipping": true,
    "local_pick_up": false,
    "logistic_type": "cross_docking",
    "mode": "me2",
    "store_pick_up": false,
    "tags": ["mandatory_free_shipping"]
  },
  "site_id": "MLB",
  "sold_quantity": 150,
  "start_time": "2020-12-21T14:40:39.000Z",
  "status": "active",
  "stop_time": "2040-12-16T04:00:00.000Z",
  "sub_status": [],
  "subtitle": null,
  "tags": ["extended_warranty_eligible", "good_quality_picture", "loyalty_discount_eligible", "brand_verified", "immediate_payment", "cart_eligible"],
  "thumbnail": "http://http2.mlstatic.com/D_617183-MLA40691870107_022020-I.jpg",
  "thumbnail_id": "617183-MLA40691870107_022020",
  "title": " Moto G5s Plus Dual Sim 32 Gb Lunar Gray 3 Gb Ram",
  "variations": [],
  "video_id": null,
  "warnings": [],
  "warranty": "Garantia do vendedor: 90 dias"
}, {
  "accepts_mercadopago": true,
  "attributes": [{
    "attribute_group_id": "OTHERS",
    "attribute_group_name": "Outros",
    "id": "BATTERY_CAPACITY",
    "name": "Capacidade da bateria",
    "value_id": "98439",
    "value_name": "5000 mAh",
    "value_struct": {
      "number": 5000,
      "unit": "mAh"
    },
    "values": [{
      "id": "98439",
      "name": "5000 mAh",
      "struct": {
        "number": 5000,
        "unit": "mAh"
      }
    }]
  }, {
    "attribute_group_id": "OTHERS",
    "attribute_group_name": "Outros",
    "id": "BATTERY_TYPE",
    "name": "Tipo de bateria",
    "value_id": "95013",
    "value_name": "Íon de lítio",
    "value_struct": null,
    "values": [{
      "id": "95013",
      "name": "Íon de lítio",
      "struct": null
    }]
  }, {
    "attribute_group_id": "OTHERS",
    "attribute_group_name": "Outros",
    "id": "BRAND",
    "name": "Marca",
    "value_id": "206",
    "value_name": "Samsung",
    "value_struct": null,
    "values": [{
      "id": "206",
      "name": "Samsung",
      "struct": null
    }]
  }, {
    "attribute_group_id": "OTHERS",
    "attribute_group_name": "Outros",
    "id": "CARRIER",
    "name": "Operadora",
    "value_id": "298335",
    "value_name": "Desbloqueado",
    "value_struct": null,
    "values": [{
      "id": "298335",
      "name": "Desbloqueado",
      "struct": null
    }]
  }, {
    "attribute_group_id": "OTHERS",
    "attribute_group_name": "Outros",
    "id": "COLOR",
    "name": "Cor",
    "value_id": "10201685",
    "value_name": "Branco",
    "value_struct": null,
    "values": [{
      "id": "10201685",
      "name": "Branco",
      "struct": null
    }]
  }, {
    "attribute_group_id": "OTHERS",
    "attribute_group_name": "Outros",
    "id": "CPU_MODELS",
    "name": "Modelos de CPU",
    "value_id": null,
    "value_name": "2x2 GHz Cortex-A75,6x1.8 GHz Cortex-A55",
    "value_struct": null,
    "values": [{
      "id": null,
      "name": "2x2 GHz Cortex-A75",
      "struct": null
    }, {
      "id": null,
      "name": "6x1.8 GHz Cortex-A55",
      "struct": null
    }]
  }, {
    "attribute_group_id": "OTHERS",
    "attribute_group_name": "Outros",
    "id": "DEPTH",
    "name": "Profundidade",
    "value_id": "4805907",
    "value_name": "8.4 mm",
    "value_struct": {
      "number": 8.4,
      "unit": "mm"
    },
    "values": [{
      "id": "4805907",
      "name": "8.4 mm",
      "struct": {
        "number": 8.4,
        "unit": "mm"
      }
    }]
  }, {
    "attribute_group_id": "OTHERS",
    "attribute_group_name": "Outros",
    "id": "DIGITAL_ZOOM",
    "name": "Zoom digital",
    "value_id": "7199637",
    "value_name": "10x",
    "value_struct": {
      "number": 10,
      "unit": "x"
    },
    "values": [{
      "id": "7199637",
      "name": "10x",
      "struct": {
        "number": 10,
        "unit": "x"
      }
    }]
  }, {
    "attribute_group_id": "OTHERS",
    "attribute_group_name": "Outros",
    "id": "DISPLAY_MAX_BRIGHTNESS",
    "name": "Brilho máximo da tela",
    "value_id": "8249453",
    "value_name": "800 cd/m²",
    "value_struct": {
      "number": 800,
      "unit": "cd/m²"
    },
    "values": [{
      "id": "8249453",
      "name": "800 cd/m²",
      "struct": {
        "number": 800,
        "unit": "cd/m²"
      }
    }]
  }, {
    "attribute_group_id": "OTHERS",
    "attribute_group_name": "Outros",
    "id": "DISPLAY_PIXELS_PER_INCH",
    "name": "Pixels por polegada",
    "value_id": "7084108",
    "value_name": "411 ppi",
    "value_struct": {
      "number": 411,
      "unit": "ppi"
    },
    "values": [{
      "id": "7084108",
      "name": "411 ppi",
      "struct": {
        "number": 411,
        "unit": "ppi"
      }
    }]
  }, {
    "attribute_group_id": "OTHERS",
    "attribute_group_name": "Outros",
    "id": "DISPLAY_RESOLUTION",
    "name": "Resolução da tela",
    "value_id": "7439958",
    "value_name": "1080 px x 2400 px",
    "value_struct": null,
    "values": [{
      "id": "7439958",
      "name": "1080 px x 2400 px",
      "struct": null
    }]
  }, {
    "attribute_group_id": "OTHERS",
    "attribute_group_name": "Outros",
    "id": "DISPLAY_SIZE",
    "name": "Tamanho da tela",
    "value_id": "7024668",
    "value_name": "6.4 \"",
    "value_struct": {
      "number": 6.4,
      "unit": "\""
    },
    "values": [{
      "id": "7024668",
      "name": "6.4 \"",
      "struct": {
        "number": 6.4,
        "unit": "\""
      }
    }]
  }, {
    "attribute_group_id": "OTHERS",
    "attribute_group_name": "Outros",
    "id": "DISPLAY_TECHNOLOGY",
    "name": "Tecnologia da tela",
    "value_id": "80493",
    "value_name": "Super AMOLED",
    "value_struct": null,
    "values": [{
      "id": "80493",
      "name": "Super AMOLED",
      "struct": null
    }]
  }, {
    "attribute_group_id": "OTHERS",
    "attribute_group_name": "Outros",
    "id": "FRONT_CAMERAS_NUMBER",
    "name": "Quantidade de câmeras frontais",
    "value_id": "7477216",
    "value_name": "1",
    "value_struct": null,
    "values": [{
      "id": "7477216",
      "name": "1",
      "struct": null
    }]
  }, {
    "attribute_group_id": "OTHERS",
    "attribute_group_name": "Outros",
    "id": "FRONT_CAMERA_APERTURE",
    "name": "Abertura do diafragma da câmera frontal",
    "value_id": "7408595",
    "value_name": "f 2.2",
    "value_struct": null,
    "values": [{
      "id": "7408595",
      "name": "f 2.2",
      "struct": null
    }]
  }, {
    "attribute_group_id": "OTHERS",
    "attribute_group_name": "Outros",
    "id": "GPU_MODEL",
    "name": "Modelo de GPU",
    "value_id": "8678038",
    "value_name": "Mali-G52 MC2",
    "value_struct": null,
    "values": [{
      "id": "8678038",
      "name": "Mali-G52 MC2",
      "struct": null
    }]
  }, {
    "attribute_group_id": "OTHERS",
    "attribute_group_name": "Outros",
    "id": "GTIN",
    "name": "Código universal de produto",
    "value_id": null,
    "value_name": "7892509117746",
    "value_struct": null,
    "values": [{
      "id": null,
      "name": "7892509117746",
      "struct": null
    }]
  }, {
    "attribute_group_id": "OTHERS",
    "attribute_group_name": "Outros",
    "id": "HEIGHT",
    "name": "Altura",
    "value_id": "8859882",
    "value_name": "158.9 mm",
    "value_struct": {
      "number": 158.9,
      "unit": "mm"
    },
    "values": [{
      "id": "8859882",
      "name": "158.9 mm",
      "struct": {
        "number": 158.9,
        "unit": "mm"
      }
    }]
  }, {
    "attribute_group_id": "OTHERS",
    "attribute_group_name": "Outros",
    "id": "INTERNAL_MEMORY",
    "name": "Memória interna",
    "value_id": "84611",
    "value_name": "128 GB",
    "value_struct": {
      "number": 128,
      "unit": "GB"
    },
    "values": [{
      "id": "84611",
      "name": "128 GB",
      "struct": {
        "number": 128,
        "unit": "GB"
      }
    }]
  }, {
    "attribute_group_id": "OTHERS",
    "attribute_group_name": "Outros",
    "id": "IS_DUAL_SIM",
    "name": "É Dual SIM",
    "value_id": "242085",
    "value_name": "Sim",
    "value_struct": null,
    "values": [{
      "id": "242085",
      "name": "Sim",
      "struct": null
    }]
  }, {
    "attribute_group_id": "OTHERS",
    "attribute_group_name": "Outros",
    "id": "ITEM_CONDITION",
    "name": "Condição do item",
    "value_id": "2230284",
    "value_name": "Novo",
    "value_struct": null,
    "values": [{
      "id": "2230284",
      "name": "Novo",
      "struct": null
    }]
  }, {
    "attribute_group_id": "OTHERS",
    "attribute_group_name": "Outros",
    "id": "LINE",
    "name": "Linha",
    "value_id": "322977",
    "value_name": "Galaxy A",
    "value_struct": null,
    "values": [{
      "id": "322977",
      "name": "Galaxy A",
      "struct": null
    }]
  }, {
    "attribute_group_id": "OTHERS",
    "attribute_group_name": "Outros",
    "id": "MAIN_COLOR",
    "name": "Cor principal",
    "value_id": "2450308",
    "value_name": "Branco",
    "value_struct": null,
    "values": [{
      "id": "2450308",
      "name": "Branco",
      "struct": null
    }]
  }, {
    "attribute_group_id": "OTHERS",
    "attribute_group_name": "Outros",
    "id": "MAIN_FRONT_CAMERA_RESOLUTION",
    "name": "Resolução da câmera frontal principal",
    "value_id": "7209628",
    "value_name": "20 Mpx",
    "value_struct": {
      "number": 20,
      "unit": "Mpx"
    },
    "values": [{
      "id": "7209628",
      "name": "20 Mpx",
      "struct": {
        "number": 20,
        "unit": "Mpx"
      }
    }]
  }, {
    "attribute_group_id": "OTHERS",
    "attribute_group_name": "Outros",
    "id": "MAIN_REAR_CAMERA_RESOLUTION",
    "name": "Resolução da câmera traseira principal",
    "value_id": "7863872",
    "value_name": "64 Mpx",
    "value_struct": {
      "number": 64,
      "unit": "Mpx"
    },
    "values": [{
      "id": "7863872",
      "name": "64 Mpx",
      "struct": {
        "number": 64,
        "unit": "Mpx"
      }
    }]
  }, {
    "attribute_group_id": "OTHERS",
    "attribute_group_name": "Outros",
    "id": "MAX_MEMORY_CARD_CAPACITY",
    "name": "Capacidade máxima do cartão de memória",
    "value_id": "7408581",
    "value_name": "1 TB",
    "value_struct": {
      "number": 1,
      "unit": "TB"
    },
    "values": [{
      "id": "7408581",
      "name": "1 TB",
      "struct": {
        "number": 1,
        "unit": "TB"
      }
    }]
  }, {
    "attribute_group_id": "OTHERS",
    "attribute_group_name": "Outros",
    "id": "MEMORY_CARD_TYPES",
    "name": "Tipos de cartão de memória",
    "value_id": "7199655",
    "value_name": "MicroSD",
    "value_struct": null,
    "values": [{
      "id": "7199655",
      "name": "MicroSD",
      "struct": null
    }]
  }, {
    "attribute_group_id": "OTHERS",
    "attribute_group_name": "Outros",
    "id": "MOBILE_NETWORK",
    "name": "Rede",
    "value_id": "367876",
    "value_name": "4G/LTE",
    "value_struct": null,
    "values": [{
      "id": "367876",
      "name": "4G/LTE",
      "struct": null
    }]
  }, {
    "attribute_group_id": "OTHERS",
    "attribute_group_name": "Outros",
    "id": "MODEL",
    "name": "Modelo",
    "value_id": "11058030",
    "value_name": "A32 Dual SIM",
    "value_struct": null,
    "values": [{
      "id": "11058030",
      "name": "A32 Dual SIM",
      "struct": null
    }]
  }, {
    "attribute_group_id": "OTHERS",
    "attribute_group_name": "Outros",
    "id": "NUMBER_OF_SIM_CARD_SLOTS",
    "name": "Quantidade de ranhuras para cartão SIM",
    "value_id": "2087802",
    "value_name": "2",
    "value_struct": null,
    "values": [{
      "id": "2087802",
      "name": "2",
      "struct": null
    }]
  }, {
    "attribute_group_id": "OTHERS",
    "attribute_group_name": "Outros",
    "id": "OPERATING_SYSTEM_NAME",
    "name": "Nome do sistema operacional",
    "value_id": "7403813",
    "value_name": "Android",
    "value_struct": null,
    "values": [{
      "id": "7403813",
      "name": "Android",
      "struct": null
    }]
  }, {
    "attribute_group_id": "OTHERS",
    "attribute_group_name": "Outros",
    "id": "OPERATING_SYSTEM_ORIGINAL_VERSION",
    "name": "Versão original do sistema operacional",
    "value_id": "6839822",
    "value_name": "11",
    "value_struct": null,
    "values": [{
      "id": "6839822",
      "name": "11",
      "struct": null
    }]
  }, {
    "attribute_group_id": "OTHERS",
    "attribute_group_name": "Outros",
    "id": "PROCESSOR_CORES_NUMBER",
    "name": "Quantidade de núcleos do processador",
    "value_id": "7206961",
    "value_name": "8",
    "value_struct": null,
    "values": [{
      "id": "7206961",
      "name": "8",
      "struct": null
    }]
  }, {
    "attribute_group_id": "OTHERS",
    "attribute_group_name": "Outros",
    "id": "PROCESSOR_MODEL",
    "name": "Modelo do processador",
    "value_id": "8814919",
    "value_name": "MediaTek Helio G80",
    "value_struct": null,
    "values": [{
      "id": "8814919",
      "name": "MediaTek Helio G80",
      "struct": null
    }]
  }, {
    "attribute_group_id": "OTHERS",
    "attribute_group_name": "Outros",
    "id": "PROCESSOR_SPEED",
    "name": "Velocidade do processador",
    "value_id": "365995",
    "value_name": "2 GHz",
    "value_struct": {
      "number": 2,
      "unit": "GHz"
    },
    "values": [{
      "id": "365995",
      "name": "2 GHz",
      "struct": {
        "number": 2,
        "unit": "GHz"
      }
    }]
  }, {
    "attribute_group_id": "OTHERS",
    "attribute_group_name": "Outros",
    "id": "RAM",
    "name": "Memória RAM",
    "value_id": "98852",
    "value_name": "4 GB",
    "value_struct": {
      "number": 4,
      "unit": "GB"
    },
    "values": [{
      "id": "98852",
      "name": "4 GB",
      "struct": {
        "number": 4,
        "unit": "GB"
      }
    }]
  }, {
    "attribute_group_id": "OTHERS",
    "attribute_group_name": "Outros",
    "id": "REAR_CAMERAS_NUMBER",
    "name": "Quantidade de câmeras traseiras",
    "value_id": "7505958",
    "value_name": "4",
    "value_struct": null,
    "values": [{
      "id": "7505958",
      "name": "4",
      "struct": null
    }]
  }, {
    "attribute_group_id": "OTHERS",
    "attribute_group_name": "Outros",
    "id": "REAR_CAMERAS_RESOLUTION",
    "name": "Resolução das câmeras traseiras",
    "value_id": "8230826",
    "value_name": "64 Mpx/8 Mpx/5 Mpx/5 Mpx",
    "value_struct": null,
    "values": [{
      "id": "8230826",
      "name": "64 Mpx/8 Mpx/5 Mpx/5 Mpx",
      "struct": null
    }]
  }, {
    "attribute_group_id": "OTHERS",
    "attribute_group_name": "Outros",
    "id": "REAR_CAMERA_APERTURE",
    "name": "Abertura do diafragma da câmera traseira",
    "value_id": "8015584",
    "value_name": "f 1.8/f 2.2/f 2.4/f 2.4",
    "value_struct": null,
    "values": [{
      "id": "8015584",
      "name": "f 1.8/f 2.2/f 2.4/f 2.4",
      "struct": null
    }]
  }, {
    "attribute_group_id": "OTHERS",
    "attribute_group_name": "Outros",
    "id": "REAR_CAMERA_RECORDING_RESOLUTION",
    "name": "Resolução de vídeo da câmera traseira",
    "value_id": "7199621",
    "value_name": "1920 px x 1080 px",
    "value_struct": null,
    "values": [{
      "id": "7199621",
      "name": "1920 px x 1080 px",
      "struct": null
    }]
  }, {
    "attribute_group_id": "OTHERS",
    "attribute_group_name": "Outros",
    "id": "RELEASE_YEAR",
    "name": "Ano de lançamento",
    "value_id": "9676768",
    "value_name": "2021",
    "value_struct": null,
    "values": [{
      "id": "9676768",
      "name": "2021",
      "struct": null
    }]
  }, {
    "attribute_group_id": "OTHERS",
    "attribute_group_name": "Outros",
    "id": "SELLER_SKU",
    "name": "SKU",
    "value_id": null,
    "value_name": "634899",
    "value_struct": null,
    "values": [{
      "id": null,
      "name": "634899",
      "struct": null
    }]
  }, {
    "attribute_group_id": "OTHERS",
    "attribute_group_name": "Outros",
    "id": "SIM_SIZES",
    "name": "Tamanhos de cartão SIM compatíveis",
    "value_id": "80453",
    "value_name": "Nano-SIM",
    "value_struct": null,
    "values": [{
      "id": "80453",
      "name": "Nano-SIM",
      "struct": null
    }]
  }, {
    "attribute_group_id": "OTHERS",
    "attribute_group_name": "Outros",
    "id": "WEIGHT",
    "name": "Peso",
    "value_id": "6780741",
    "value_name": "184 g",
    "value_struct": {
      "number": 184,
      "unit": "g"
    },
    "values": [{
      "id": "6780741",
      "name": "184 g",
      "struct": {
        "number": 184,
        "unit": "g"
      }
    }]
  }, {
    "attribute_group_id": "OTHERS",
    "attribute_group_name": "Outros",
    "id": "WIDTH",
    "name": "Largura",
    "value_id": "7060385",
    "value_name": "73.6 mm",
    "value_struct": {
      "number": 73.6,
      "unit": "mm"
    },
    "values": [{
      "id": "7060385",
      "name": "73.6 mm",
      "struct": {
        "number": 73.6,
        "unit": "mm"
      }
    }]
  }, {
    "attribute_group_id": "OTHERS",
    "attribute_group_name": "Outros",
    "id": "WITH_ACCELEROMETER",
    "name": "Com acelerômetro",
    "value_id": "242085",
    "value_name": "Sim",
    "value_struct": null,
    "values": [{
      "id": "242085",
      "name": "Sim",
      "struct": null
    }]
  }, {
    "attribute_group_id": "OTHERS",
    "attribute_group_name": "Outros",
    "id": "WITH_BLUETOOTH",
    "name": "Com Bluetooth",
    "value_id": "242085",
    "value_name": "Sim",
    "value_struct": null,
    "values": [{
      "id": "242085",
      "name": "Sim",
      "struct": null
    }]
  }, {
    "attribute_group_id": "OTHERS",
    "attribute_group_name": "Outros",
    "id": "WITH_CAMERA",
    "name": "Com câmera",
    "value_id": "242085",
    "value_name": "Sim",
    "value_struct": null,
    "values": [{
      "id": "242085",
      "name": "Sim",
      "struct": null
    }]
  }, {
    "attribute_group_id": "OTHERS",
    "attribute_group_name": "Outros",
    "id": "WITH_FINGERPRINT_READER",
    "name": "Com leitor de impressão digital",
    "value_id": "242085",
    "value_name": "Sim",
    "value_struct": null,
    "values": [{
      "id": "242085",
      "name": "Sim",
      "struct": null
    }]
  }, {
    "attribute_group_id": "OTHERS",
    "attribute_group_name": "Outros",
    "id": "WITH_FRONT_CAMERA_FLASH",
    "name": "Com flash na câmara frontal",
    "value_id": "242084",
    "value_name": "Não",
    "value_struct": null,
    "values": [{
      "id": "242084",
      "name": "Não",
      "struct": null
    }]
  }, {
    "attribute_group_id": "OTHERS",
    "attribute_group_name": "Outros",
    "id": "WITH_GPS",
    "name": "Com GPS",
    "value_id": "242085",
    "value_name": "Sim",
    "value_struct": null,
    "values": [{
      "id": "242085",
      "name": "Sim",
      "struct": null
    }]
  }, {
    "attribute_group_id": "OTHERS",
    "attribute_group_name": "Outros",
    "id": "WITH_GYROSCOPE",
    "name": "Com giroscópio",
    "value_id": "242085",
    "value_name": "Sim",
    "value_struct": null,
    "values": [{
      "id": "242085",
      "name": "Sim",
      "struct": null
    }]
  }, {
    "attribute_group_id": "OTHERS",
    "attribute_group_name": "Outros",
    "id": "WITH_IMEI",
    "name": "Com IMEI",
    "value_id": "242085",
    "value_name": "Sim",
    "value_struct": null,
    "values": [{
      "id": "242085",
      "name": "Sim",
      "struct": null
    }]
  }, {
    "attribute_group_id": "OTHERS",
    "attribute_group_name": "Outros",
    "id": "WITH_MEMORY_CARD_SLOT",
    "name": "Com ranhura para cartão de memória",
    "value_id": "242085",
    "value_name": "Sim",
    "value_struct": null,
    "values": [{
      "id": "242085",
      "name": "Sim",
      "struct": null
    }]
  }, {
    "attribute_group_id": "OTHERS",
    "attribute_group_name": "Outros",
    "id": "WITH_NFC",
    "name": "Com NFC",
    "value_id": "242085",
    "value_name": "Sim",
    "value_struct": null,
    "values": [{
      "id": "242085",
      "name": "Sim",
      "struct": null
    }]
  }, {
    "attribute_group_id": "OTHERS",
    "attribute_group_name": "Outros",
    "id": "WITH_PHYSICAL_QWERTY_KEYBOARD",
    "name": "Com teclado QWERTY físico",
    "value_id": "242084",
    "value_name": "Não",
    "value_struct": null,
    "values": [{
      "id": "242084",
      "name": "Não",
      "struct": null
    }]
  }, {
    "attribute_group_id": "OTHERS",
    "attribute_group_name": "Outros",
    "id": "WITH_PROXIMITY_SENSOR",
    "name": "Com sensor de proximidade",
    "value_id": "242085",
    "value_name": "Sim",
    "value_struct": null,
    "values": [{
      "id": "242085",
      "name": "Sim",
      "struct": null
    }]
  }, {
    "attribute_group_id": "OTHERS",
    "attribute_group_name": "Outros",
    "id": "WITH_REMOVABLE_BATTERY",
    "name": "Com bateria removível",
    "value_id": "242084",
    "value_name": "Não",
    "value_struct": null,
    "values": [{
      "id": "242084",
      "name": "Não",
      "struct": null
    }]
  }, {
    "attribute_group_id": "OTHERS",
    "attribute_group_name": "Outros",
    "id": "WITH_TOUCHSCREEN_DISPLAY",
    "name": "Com tela tátil",
    "value_id": "242085",
    "value_name": "Sim",
    "value_struct": null,
    "values": [{
      "id": "242085",
      "name": "Sim",
      "struct": null
    }]
  }, {
    "attribute_group_id": "OTHERS",
    "attribute_group_name": "Outros",
    "id": "WITH_USB_CONNECTOR",
    "name": "Com conector USB",
    "value_id": "242085",
    "value_name": "Sim",
    "value_struct": null,
    "values": [{
      "id": "242085",
      "name": "Sim",
      "struct": null
    }]
  }, {
    "attribute_group_id": "OTHERS",
    "attribute_group_name": "Outros",
    "id": "WITH_WIFI",
    "name": "Com Wi-Fi",
    "value_id": "242085",
    "value_name": "Sim",
    "value_struct": null,
    "values": [{
      "id": "242085",
      "name": "Sim",
      "struct": null
    }]
  }],
  "automatic_relist": false,
  "available_quantity": 500,
  "base_price": 1388,
  "buying_mode": "buy_it_now",
  "catalog_listing": true,
  "catalog_product_id": "MLB17465174",
  "category_id": "MLB1055",
  "channels": ["marketplace"],
  "condition": "new",
  "coverage_areas": [],
  "currency_id": "BRL",
  "date_created": "2021-08-04T20:35:09.000Z",
  "deal_ids": [],
  "descriptions": [{
    "id": "MLB1970253878-3653481958"
  }],
  "differential_pricing": null,
  "domain_id": "MLB-CELLPHONES",
  "health": null,
  "id": "MLB1970253878",
  "initial_quantity": 1717,
  "international_delivery_mode": "none",
  "last_updated": "2021-10-08T14:49:31.371Z",
  "listing_source": "",
  "listing_type_id": "gold_pro",
  "location": {},
  "non_mercado_pago_payment_methods": [],
  "official_store_id": 2707,
  "original_price": 2399,
  "parent_item_id": null,
  "permalink": "https://produto.mercadolivre.com.br/MLB-1970253878-samsung-galaxy-a32-dual-sim-128-gb-branco-4-gb-ram-_JM",
  "pictures": [{
    "id": "999657-MLA45668418806_042021",
    "max_size": "504x1014",
    "quality": "",
    "secure_url": "https://http2.mlstatic.com/D_999657-MLA45668418806_042021-O.jpg",
    "size": "248x500",
    "url": "http://http2.mlstatic.com/D_999657-MLA45668418806_042021-O.jpg"
  }, {
    "id": "953111-MLA45668418807_042021",
    "max_size": "503x1011",
    "quality": "",
    "secure_url": "https://http2.mlstatic.com/D_953111-MLA45668418807_042021-O.jpg",
    "size": "248x500",
    "url": "http://http2.mlstatic.com/D_953111-MLA45668418807_042021-O.jpg"
  }, {
    "id": "647432-MLA45668561590_042021",
    "max_size": "505x1027",
    "quality": "",
    "secure_url": "https://http2.mlstatic.com/D_647432-MLA45668561590_042021-O.jpg",
    "size": "245x500",
    "url": "http://http2.mlstatic.com/D_647432-MLA45668561590_042021-O.jpg"
  }, {
    "id": "966075-MLA45668850174_042021",
    "max_size": "908x1200",
    "quality": "",
    "secure_url": "https://http2.mlstatic.com/D_966075-MLA45668850174_042021-O.jpg",
    "size": "378x500",
    "url": "http://http2.mlstatic.com/D_966075-MLA45668850174_042021-O.jpg"
  }],
  "price": 1388,
  "sale_terms": [{
    "id": "WARRANTY_TYPE",
    "name": "Tipo de garantia",
    "value_id": "2230279",
    "value_name": "Garantia de fábrica",
    "value_struct": null,
    "values": [{
      "id": "2230279",
      "name": "Garantia de fábrica",
      "struct": null
    }]
  }, {
    "id": "WARRANTY_TIME",
    "name": "Tempo de garantia",
    "value_id": null,
    "value_name": "12 meses",
    "value_struct": {
      "number": 12,
      "unit": "meses"
    },
    "values": [{
      "id": null,
      "name": "12 meses",
      "struct": {
        "number": 12,
        "unit": "meses"
      }
    }]
  }],
  "secure_thumbnail": "https://http2.mlstatic.com/D_999657-MLA45668418806_042021-I.jpg",
  "seller_address": {
    "city": {
      "id": "QlItU1BDYWphbWFy",
      "name": "Cajamar"
    },
    "country": {
      "id": "BR",
      "name": "Brasil"
    },
    "id": 1073624908,
    "search_location": {
      "city": {
        "id": "TVhYQ2FqYW1hclRVeENVRk5CVDA4NU4yRTQ",
        "name": "Cajamar"
      },
      "neighborhood": {
        "id": "TVhYRGlzdHJpdG8gSW5kdXN0cmlhbFRWaFlRM0",
        "name": "Distrito Industrial"
      },
      "state": {
        "id": "TUxCUFNBT085N2E4",
        "name": "São Paulo"
      }
    },
    "state": {
      "id": "BR-SP",
      "name": "São Paulo"
    }
  },
  "seller_contact": null,
  "seller_id": 480263032,
  "shipping": {
    "dimensions": null,
    "free_methods": [{
      "id": 100009,
      "rule": {
        "default": true,
        "free_mode": "country",
        "free_shipping_flag": true,
        "value": null
      }
    }],
    "free_shipping": true,
    "local_pick_up": false,
    "logistic_type": "fulfillment",
    "mode": "me2",
    "store_pick_up": false,
    "tags": ["mandatory_free_shipping"]
  },
  "site_id": "MLB",
  "sold_quantity": 500,
  "start_time": "2021-08-04T20:35:09.000Z",
  "status": "active",
  "stop_time": "2041-07-30T04:00:00.000Z",
  "sub_status": [],
  "subtitle": null,
  "tags": ["extended_warranty_eligible", "good_quality_picture", "good_quality_thumbnail", "immediate_payment", "cart_eligible"],
  "thumbnail": "http://http2.mlstatic.com/D_999657-MLA45668418806_042021-I.jpg",
  "thumbnail_id": "999657-MLA45668418806_042021",
  "title": "Samsung Galaxy A32 Dual Sim 128 Gb Branco 4 Gb Ram",
  "variations": [],
  "video_id": null,
  "warnings": [],
  "warranty": "Garantia de fábrica: 12 meses"
}]);

/***/ }),

/***/ "./src/javascript/mocks/items.js":
/*!***************************************!*\
  !*** ./src/javascript/mocks/items.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const items = [{
  "id": "MLA913255823",
  "site_id": "MLA",
  "title": "Moto G8 Plus Dual Sim 64 Gb Cosmic Blue 4 Gb Ram",
  "subtitle": null,
  "seller_id": 118683543,
  "category_id": "MLA1055",
  "official_store_id": null,
  "price": 62000,
  "base_price": 62000,
  "original_price": null,
  "currency_id": "ARS",
  "initial_quantity": 5,
  "available_quantity": 1,
  "sold_quantity": 1,
  "sale_terms": [{
    "id": "WARRANTY_TYPE",
    "name": "Tipo de garantía",
    "value_id": "2230280",
    "value_name": "Garantía del vendedor",
    "value_struct": null,
    "values": [{
      "id": "2230280",
      "name": "Garantía del vendedor",
      "struct": null
    }]
  }, {
    "id": "WARRANTY_TIME",
    "name": "Tiempo de garantía",
    "value_id": null,
    "value_name": "3 meses",
    "value_struct": {
      "number": 3,
      "unit": "meses"
    },
    "values": [{
      "id": null,
      "name": "3 meses",
      "struct": {
        "number": 3,
        "unit": "meses"
      }
    }]
  }],
  "buying_mode": "buy_it_now",
  "listing_type_id": "gold_special",
  "start_time": "2021-03-23T22:51:41.000Z",
  "stop_time": "2041-03-18T04:00:00.000Z",
  "condition": "new",
  "permalink": "https://articulo.mercadolibre.com.ar/MLA-913255823-moto-g8-plus-dual-sim-64-gb-cosmic-blue-4-gb-ram-_JM",
  "thumbnail_id": "686788-MLA40452533371_012020",
  "thumbnail": "http://http2.mlstatic.com/D_686788-MLA40452533371_012020-I.jpg",
  "secure_thumbnail": "https://http2.mlstatic.com/D_686788-MLA40452533371_012020-I.jpg",
  "pictures": [{
    "id": "686788-MLA40452533371_012020",
    "url": "http://http2.mlstatic.com/D_686788-MLA40452533371_012020-O.jpg",
    "secure_url": "https://http2.mlstatic.com/D_686788-MLA40452533371_012020-O.jpg",
    "size": "250x500",
    "max_size": "554x1108",
    "quality": ""
  }, {
    "id": "703228-MLA40452533370_012020",
    "url": "http://http2.mlstatic.com/D_703228-MLA40452533370_012020-O.jpg",
    "secure_url": "https://http2.mlstatic.com/D_703228-MLA40452533370_012020-O.jpg",
    "size": "249x500",
    "max_size": "553x1108",
    "quality": ""
  }, {
    "id": "830807-MLA40452559331_012020",
    "url": "http://http2.mlstatic.com/D_830807-MLA40452559331_012020-O.jpg",
    "secure_url": "https://http2.mlstatic.com/D_830807-MLA40452559331_012020-O.jpg",
    "size": "243x500",
    "max_size": "539x1105",
    "quality": ""
  }, {
    "id": "803032-MLA40452559330_012020",
    "url": "http://http2.mlstatic.com/D_803032-MLA40452559330_012020-O.jpg",
    "secure_url": "https://http2.mlstatic.com/D_803032-MLA40452559330_012020-O.jpg",
    "size": "243x500",
    "max_size": "539x1106",
    "quality": ""
  }, {
    "id": "978330-MLA40452533372_012020",
    "url": "http://http2.mlstatic.com/D_978330-MLA40452533372_012020-O.jpg",
    "secure_url": "https://http2.mlstatic.com/D_978330-MLA40452533372_012020-O.jpg",
    "size": "243x500",
    "max_size": "539x1106",
    "quality": ""
  }, {
    "id": "989260-MLA40452533373_012020",
    "url": "http://http2.mlstatic.com/D_989260-MLA40452533373_012020-O.jpg",
    "secure_url": "https://http2.mlstatic.com/D_989260-MLA40452533373_012020-O.jpg",
    "size": "243x500",
    "max_size": "540x1107",
    "quality": ""
  }],
  "video_id": "y-DaK-wgt3k",
  "descriptions": [{
    "id": "MLA913255823-3337218973"
  }],
  "accepts_mercadopago": true,
  "non_mercado_pago_payment_methods": [],
  "shipping": {
    "mode": "me2",
    "free_methods": [{
      "id": 73328,
      "rule": {
        "default": true,
        "free_mode": "country",
        "free_shipping_flag": true,
        "value": null
      }
    }],
    "tags": ["mandatory_free_shipping"],
    "dimensions": null,
    "local_pick_up": true,
    "free_shipping": true,
    "logistic_type": "drop_off",
    "store_pick_up": false
  },
  "international_delivery_mode": "none",
  "seller_address": {
    "city": {
      "id": "TUxBQ0NBUGNiZGQx",
      "name": "Córdoba"
    },
    "state": {
      "id": "AR-X",
      "name": "Córdoba"
    },
    "country": {
      "id": "AR",
      "name": "Argentina"
    },
    "search_location": {
      "neighborhood": {
        "id": "TUxBQk5VRTgzOTZa",
        "name": "Nueva Córdoba"
      },
      "city": {
        "id": "TUxBQ0NBUGNiZGQx",
        "name": "Córdoba"
      },
      "state": {
        "id": "TUxBUENPUmFkZGIw",
        "name": "Córdoba"
      }
    },
    "id": 1009418070
  },
  "seller_contact": null,
  "location": {},
  "coverage_areas": [],
  "attributes": [{
    "id": "BATTERY_CAPACITY",
    "name": "Capacidad de la batería",
    "value_id": "106685",
    "value_name": "4000 mAh",
    "value_struct": {
      "number": 4000,
      "unit": "mAh"
    },
    "values": [{
      "id": "106685",
      "name": "4000 mAh",
      "struct": {
        "number": 4000,
        "unit": "mAh"
      }
    }],
    "attribute_group_id": "OTHERS",
    "attribute_group_name": "Otros"
  }, {
    "id": "BATTERY_TYPE",
    "name": "Tipo de batería",
    "value_id": "7573636",
    "value_name": "Polímero de litio",
    "value_struct": null,
    "values": [{
      "id": "7573636",
      "name": "Polímero de litio",
      "struct": null
    }],
    "attribute_group_id": "OTHERS",
    "attribute_group_name": "Otros"
  }, {
    "id": "BRAND",
    "name": "Marca",
    "value_id": "2503",
    "value_name": "Motorola",
    "value_struct": null,
    "values": [{
      "id": "2503",
      "name": "Motorola",
      "struct": null
    }],
    "attribute_group_id": "OTHERS",
    "attribute_group_name": "Otros"
  }, {
    "id": "CARRIER",
    "name": "Compañía telefónica",
    "value_id": "298335",
    "value_name": "Liberado",
    "value_struct": null,
    "values": [{
      "id": "298335",
      "name": "Liberado",
      "struct": null
    }],
    "attribute_group_id": "OTHERS",
    "attribute_group_name": "Otros"
  }, {
    "id": "CHARGE_CONNECTOR_TYPE",
    "name": "Tipo de conector de carga",
    "value_id": "8275367",
    "value_name": "USB-C",
    "value_struct": null,
    "values": [{
      "id": "8275367",
      "name": "USB-C",
      "struct": null
    }],
    "attribute_group_id": "OTHERS",
    "attribute_group_name": "Otros"
  }, {
    "id": "CPU_MODELS",
    "name": "Modelos de CPU",
    "value_id": null,
    "value_name": "4x2 GHz Kryo 260 Gold,4x1.8 GHz Kryo 260 Silver",
    "value_struct": null,
    "values": [{
      "id": null,
      "name": "4x2 GHz Kryo 260 Gold",
      "struct": null
    }, {
      "id": null,
      "name": "4x1.8 GHz Kryo 260 Silver",
      "struct": null
    }],
    "attribute_group_id": "OTHERS",
    "attribute_group_name": "Otros"
  }, {
    "id": "DEPTH",
    "name": "Profundidad",
    "value_id": "7940783",
    "value_name": "9.09 mm",
    "value_struct": {
      "number": 9.09,
      "unit": "mm"
    },
    "values": [{
      "id": "7940783",
      "name": "9.09 mm",
      "struct": {
        "number": 9.09,
        "unit": "mm"
      }
    }],
    "attribute_group_id": "OTHERS",
    "attribute_group_name": "Otros"
  }, {
    "id": "DIGITAL_ZOOM",
    "name": "Zoom digital",
    "value_id": "1339",
    "value_name": "8x",
    "value_struct": {
      "number": 8,
      "unit": "x"
    },
    "values": [{
      "id": "1339",
      "name": "8x",
      "struct": {
        "number": 8,
        "unit": "x"
      }
    }],
    "attribute_group_id": "OTHERS",
    "attribute_group_name": "Otros"
  }, {
    "id": "DISPLAY_PIXELS_PER_INCH",
    "name": "Píxeles por pulgada",
    "value_id": "7058226",
    "value_name": "401 ppi",
    "value_struct": {
      "number": 401,
      "unit": "ppi"
    },
    "values": [{
      "id": "7058226",
      "name": "401 ppi",
      "struct": {
        "number": 401,
        "unit": "ppi"
      }
    }],
    "attribute_group_id": "OTHERS",
    "attribute_group_name": "Otros"
  }, {
    "id": "DISPLAY_RESOLUTION",
    "name": "Resolución de la pantalla",
    "value_id": "7209635",
    "value_name": "1080 px x 2280 px",
    "value_struct": null,
    "values": [{
      "id": "7209635",
      "name": "1080 px x 2280 px",
      "struct": null
    }],
    "attribute_group_id": "OTHERS",
    "attribute_group_name": "Otros"
  }, {
    "id": "DISPLAY_SIZE",
    "name": "Tamaño de la pantalla",
    "value_id": "6938054",
    "value_name": "6.3 \"",
    "value_struct": {
      "number": 6.3,
      "unit": "\""
    },
    "values": [{
      "id": "6938054",
      "name": "6.3 \"",
      "struct": {
        "number": 6.3,
        "unit": "\""
      }
    }],
    "attribute_group_id": "OTHERS",
    "attribute_group_name": "Otros"
  }, {
    "id": "DISPLAY_TECHNOLOGY",
    "name": "Tecnología de la pantalla",
    "value_id": "80490",
    "value_name": "IPS",
    "value_struct": null,
    "values": [{
      "id": "80490",
      "name": "IPS",
      "struct": null
    }],
    "attribute_group_id": "OTHERS",
    "attribute_group_name": "Otros"
  }, {
    "id": "FRONT_CAMERAS_NUMBER",
    "name": "Cantidad de cámaras frontales",
    "value_id": "7477216",
    "value_name": "1",
    "value_struct": null,
    "values": [{
      "id": "7477216",
      "name": "1",
      "struct": null
    }],
    "attribute_group_id": "OTHERS",
    "attribute_group_name": "Otros"
  }, {
    "id": "FRONT_CAMERA_APERTURE",
    "name": "Apertura del diafragma de la cámara frontal",
    "value_id": "7408577",
    "value_name": "f 2.0",
    "value_struct": null,
    "values": [{
      "id": "7408577",
      "name": "f 2.0",
      "struct": null
    }],
    "attribute_group_id": "OTHERS",
    "attribute_group_name": "Otros"
  }, {
    "id": "FRONT_CAMERA_RECORDING_RESOLUTION",
    "name": "Resolución de video de la cámara frontal",
    "value_id": "7173215",
    "value_name": "1920 px x 1080 px",
    "value_struct": null,
    "values": [{
      "id": "7173215",
      "name": "1920 px x 1080 px",
      "struct": null
    }],
    "attribute_group_id": "OTHERS",
    "attribute_group_name": "Otros"
  }, {
    "id": "GPU_MODEL",
    "name": "Modelo de GPU",
    "value_id": "7671213",
    "value_name": "Adreno 610",
    "value_struct": null,
    "values": [{
      "id": "7671213",
      "name": "Adreno 610",
      "struct": null
    }],
    "attribute_group_id": "OTHERS",
    "attribute_group_name": "Otros"
  }, {
    "id": "HEIGHT",
    "name": "Altura",
    "value_id": "8988706",
    "value_name": "158.35 mm",
    "value_struct": {
      "number": 158.35,
      "unit": "mm"
    },
    "values": [{
      "id": "8988706",
      "name": "158.35 mm",
      "struct": {
        "number": 158.35,
        "unit": "mm"
      }
    }],
    "attribute_group_id": "OTHERS",
    "attribute_group_name": "Otros"
  }, {
    "id": "INTERNAL_MEMORY",
    "name": "Memoria interna",
    "value_id": "59726",
    "value_name": "64 GB",
    "value_struct": {
      "number": 64,
      "unit": "GB"
    },
    "values": [{
      "id": "59726",
      "name": "64 GB",
      "struct": {
        "number": 64,
        "unit": "GB"
      }
    }],
    "attribute_group_id": "OTHERS",
    "attribute_group_name": "Otros"
  }, {
    "id": "IS_DUAL_SIM",
    "name": "Es Dual SIM",
    "value_id": "242085",
    "value_name": "Sí",
    "value_struct": null,
    "values": [{
      "id": "242085",
      "name": "Sí",
      "struct": null
    }],
    "attribute_group_id": "OTHERS",
    "attribute_group_name": "Otros"
  }, {
    "id": "IS_SPLASH_RESISTANT",
    "name": "Es resistente a salpicaduras",
    "value_id": "242085",
    "value_name": "Sí",
    "value_struct": null,
    "values": [{
      "id": "242085",
      "name": "Sí",
      "struct": null
    }],
    "attribute_group_id": "OTHERS",
    "attribute_group_name": "Otros"
  }, {
    "id": "IS_WATERPROOF",
    "name": "Es a prueba de agua",
    "value_id": "242084",
    "value_name": "No",
    "value_struct": null,
    "values": [{
      "id": "242084",
      "name": "No",
      "struct": null
    }],
    "attribute_group_id": "OTHERS",
    "attribute_group_name": "Otros"
  }, {
    "id": "IS_WATER_RESISTANT",
    "name": "Es resistente al agua",
    "value_id": "242084",
    "value_name": "No",
    "value_struct": null,
    "values": [{
      "id": "242084",
      "name": "No",
      "struct": null
    }],
    "attribute_group_id": "OTHERS",
    "attribute_group_name": "Otros"
  }, {
    "id": "ITEM_CONDITION",
    "name": "Condición del ítem",
    "value_id": "2230284",
    "value_name": "Nuevo",
    "value_struct": null,
    "values": [{
      "id": "2230284",
      "name": "Nuevo",
      "struct": null
    }],
    "attribute_group_id": "OTHERS",
    "attribute_group_name": "Otros"
  }, {
    "id": "LINE",
    "name": "Línea",
    "value_id": "3073863",
    "value_name": "Moto G",
    "value_struct": null,
    "values": [{
      "id": "3073863",
      "name": "Moto G",
      "struct": null
    }],
    "attribute_group_id": "OTHERS",
    "attribute_group_name": "Otros"
  }, {
    "id": "MAIN_FRONT_CAMERA_RESOLUTION",
    "name": "Resolución de la cámara frontal principal",
    "value_id": "7448582",
    "value_name": "25 Mpx",
    "value_struct": {
      "number": 25,
      "unit": "Mpx"
    },
    "values": [{
      "id": "7448582",
      "name": "25 Mpx",
      "struct": {
        "number": 25,
        "unit": "Mpx"
      }
    }],
    "attribute_group_id": "OTHERS",
    "attribute_group_name": "Otros"
  }, {
    "id": "MAIN_REAR_CAMERA_RESOLUTION",
    "name": "Resolución de la cámara trasera principal",
    "value_id": "7340647",
    "value_name": "48 Mpx",
    "value_struct": {
      "number": 48,
      "unit": "Mpx"
    },
    "values": [{
      "id": "7340647",
      "name": "48 Mpx",
      "struct": {
        "number": 48,
        "unit": "Mpx"
      }
    }],
    "attribute_group_id": "OTHERS",
    "attribute_group_name": "Otros"
  }, {
    "id": "MAX_MEMORY_CARD_CAPACITY",
    "name": "Capacidad máxima de la tarjeta de memoria",
    "value_id": "6901713",
    "value_name": "512 GB",
    "value_struct": {
      "number": 512,
      "unit": "GB"
    },
    "values": [{
      "id": "6901713",
      "name": "512 GB",
      "struct": {
        "number": 512,
        "unit": "GB"
      }
    }],
    "attribute_group_id": "OTHERS",
    "attribute_group_name": "Otros"
  }, {
    "id": "MEMORY_CARD_TYPES",
    "name": "Tipos de tarjeta de memoria",
    "value_id": "7199655",
    "value_name": "MicroSD",
    "value_struct": null,
    "values": [{
      "id": "7199655",
      "name": "MicroSD",
      "struct": null
    }],
    "attribute_group_id": "OTHERS",
    "attribute_group_name": "Otros"
  }, {
    "id": "MOBILE_NETWORK",
    "name": "Red",
    "value_id": "367876",
    "value_name": "4G/LTE",
    "value_struct": null,
    "values": [{
      "id": "367876",
      "name": "4G/LTE",
      "struct": null
    }],
    "attribute_group_id": "OTHERS",
    "attribute_group_name": "Otros"
  }, {
    "id": "MODEL",
    "name": "Modelo",
    "value_id": "7903927",
    "value_name": "G8 Plus Dual SIM",
    "value_struct": null,
    "values": [{
      "id": "7903927",
      "name": "G8 Plus Dual SIM",
      "struct": null
    }],
    "attribute_group_id": "OTHERS",
    "attribute_group_name": "Otros"
  }, {
    "id": "NUMBER_OF_SIM_CARD_SLOTS",
    "name": "Cantidad de ranuras para tarjeta SIM",
    "value_id": "2087802",
    "value_name": "2",
    "value_struct": null,
    "values": [{
      "id": "2087802",
      "name": "2",
      "struct": null
    }],
    "attribute_group_id": "OTHERS",
    "attribute_group_name": "Otros"
  }, {
    "id": "OPERATING_SYSTEM_NAME",
    "name": "Nombre del sistema operativo",
    "value_id": "7403813",
    "value_name": "Android",
    "value_struct": null,
    "values": [{
      "id": "7403813",
      "name": "Android",
      "struct": null
    }],
    "attribute_group_id": "OTHERS",
    "attribute_group_name": "Otros"
  }, {
    "id": "OPERATING_SYSTEM_ORIGINAL_VERSION",
    "name": "Versión original del sistema operativo",
    "value_id": "7207107",
    "value_name": "9.0 Pie",
    "value_struct": null,
    "values": [{
      "id": "7207107",
      "name": "9.0 Pie",
      "struct": null
    }],
    "attribute_group_id": "OTHERS",
    "attribute_group_name": "Otros"
  }, {
    "id": "PROCESSOR_CORES_NUMBER",
    "name": "Cantidad de núcleos del procesador",
    "value_id": "7206961",
    "value_name": "8",
    "value_struct": null,
    "values": [{
      "id": "7206961",
      "name": "8",
      "struct": null
    }],
    "attribute_group_id": "OTHERS",
    "attribute_group_name": "Otros"
  }, {
    "id": "PROCESSOR_MODEL",
    "name": "Modelo del procesador",
    "value_id": "7671215",
    "value_name": "Snapdragon 665",
    "value_struct": null,
    "values": [{
      "id": "7671215",
      "name": "Snapdragon 665",
      "struct": null
    }],
    "attribute_group_id": "OTHERS",
    "attribute_group_name": "Otros"
  }, {
    "id": "PROCESSOR_SPEED",
    "name": "Velocidad del procesador",
    "value_id": "365995",
    "value_name": "2 GHz",
    "value_struct": {
      "number": 2,
      "unit": "GHz"
    },
    "values": [{
      "id": "365995",
      "name": "2 GHz",
      "struct": {
        "number": 2,
        "unit": "GHz"
      }
    }],
    "attribute_group_id": "OTHERS",
    "attribute_group_name": "Otros"
  }, {
    "id": "RAM",
    "name": "Memoria RAM",
    "value_id": "98852",
    "value_name": "4 GB",
    "value_struct": {
      "number": 4,
      "unit": "GB"
    },
    "values": [{
      "id": "98852",
      "name": "4 GB",
      "struct": {
        "number": 4,
        "unit": "GB"
      }
    }],
    "attribute_group_id": "OTHERS",
    "attribute_group_name": "Otros"
  }, {
    "id": "REAR_CAMERAS_NUMBER",
    "name": "Cantidad de cámaras traseras",
    "value_id": "7505949",
    "value_name": "3",
    "value_struct": null,
    "values": [{
      "id": "7505949",
      "name": "3",
      "struct": null
    }],
    "attribute_group_id": "OTHERS",
    "attribute_group_name": "Otros"
  }, {
    "id": "REAR_CAMERAS_RESOLUTION",
    "name": "Resolución de las cámaras traseras",
    "value_id": "7903926",
    "value_name": "48 Mpx/16 Mpx/5 Mpx",
    "value_struct": null,
    "values": [{
      "id": "7903926",
      "name": "48 Mpx/16 Mpx/5 Mpx",
      "struct": null
    }],
    "attribute_group_id": "OTHERS",
    "attribute_group_name": "Otros"
  }, {
    "id": "REAR_CAMERA_APERTURE",
    "name": "Apertura del diafragma de la cámara trasera",
    "value_id": "7439959",
    "value_name": "f 1.7/f 2.2/f 2.2",
    "value_struct": null,
    "values": [{
      "id": "7439959",
      "name": "f 1.7/f 2.2/f 2.2",
      "struct": null
    }],
    "attribute_group_id": "OTHERS",
    "attribute_group_name": "Otros"
  }, {
    "id": "REAR_CAMERA_RECORDING_RESOLUTION",
    "name": "Resolución de video de la cámara trasera",
    "value_id": "7199630",
    "value_name": "3840 px x 2160 px",
    "value_struct": null,
    "values": [{
      "id": "7199630",
      "name": "3840 px x 2160 px",
      "struct": null
    }],
    "attribute_group_id": "OTHERS",
    "attribute_group_name": "Otros"
  }, {
    "id": "RELEASE_MONTH",
    "name": "Mes de lanzamiento",
    "value_id": "8275349",
    "value_name": "Octubre",
    "value_struct": null,
    "values": [{
      "id": "8275349",
      "name": "Octubre",
      "struct": null
    }],
    "attribute_group_id": "OTHERS",
    "attribute_group_name": "Otros"
  }, {
    "id": "RELEASE_YEAR",
    "name": "Año de lanzamiento",
    "value_id": "5057727",
    "value_name": "2019",
    "value_struct": null,
    "values": [{
      "id": "5057727",
      "name": "2019",
      "struct": null
    }],
    "attribute_group_id": "OTHERS",
    "attribute_group_name": "Otros"
  }, {
    "id": "SIM_SIZES",
    "name": "Tamaños de tarjeta SIM compatibles",
    "value_id": "80453",
    "value_name": "Nano-SIM",
    "value_struct": null,
    "values": [{
      "id": "80453",
      "name": "Nano-SIM",
      "struct": null
    }],
    "attribute_group_id": "OTHERS",
    "attribute_group_name": "Otros"
  }, {
    "id": "STANDBY_TIME",
    "name": "Duración de la batería en espera",
    "value_id": "7903925",
    "value_name": "328 h",
    "value_struct": {
      "number": 328,
      "unit": "h"
    },
    "values": [{
      "id": "7903925",
      "name": "328 h",
      "struct": {
        "number": 328,
        "unit": "h"
      }
    }],
    "attribute_group_id": "OTHERS",
    "attribute_group_name": "Otros"
  }, {
    "id": "TALK_TIME",
    "name": "Tiempo de conversación",
    "value_id": "6886613",
    "value_name": "34 h",
    "value_struct": {
      "number": 34,
      "unit": "h"
    },
    "values": [{
      "id": "6886613",
      "name": "34 h",
      "struct": {
        "number": 34,
        "unit": "h"
      }
    }],
    "attribute_group_id": "OTHERS",
    "attribute_group_name": "Otros"
  }, {
    "id": "WEIGHT",
    "name": "Peso",
    "value_id": "522900",
    "value_name": "188 g",
    "value_struct": {
      "number": 188,
      "unit": "g"
    },
    "values": [{
      "id": "522900",
      "name": "188 g",
      "struct": {
        "number": 188,
        "unit": "g"
      }
    }],
    "attribute_group_id": "OTHERS",
    "attribute_group_name": "Otros"
  }, {
    "id": "WIDTH",
    "name": "Ancho",
    "value_id": "8988707",
    "value_name": "75.83 mm",
    "value_struct": {
      "number": 75.83,
      "unit": "mm"
    },
    "values": [{
      "id": "8988707",
      "name": "75.83 mm",
      "struct": {
        "number": 75.83,
        "unit": "mm"
      }
    }],
    "attribute_group_id": "OTHERS",
    "attribute_group_name": "Otros"
  }, {
    "id": "WITH_3_5_JACK",
    "name": "Con jack 3.5",
    "value_id": "242085",
    "value_name": "Sí",
    "value_struct": null,
    "values": [{
      "id": "242085",
      "name": "Sí",
      "struct": null
    }],
    "attribute_group_id": "OTHERS",
    "attribute_group_name": "Otros"
  }, {
    "id": "WITH_ACCELEROMETER",
    "name": "Con acelerómetro",
    "value_id": "242085",
    "value_name": "Sí",
    "value_struct": null,
    "values": [{
      "id": "242085",
      "name": "Sí",
      "struct": null
    }],
    "attribute_group_id": "OTHERS",
    "attribute_group_name": "Otros"
  }, {
    "id": "WITH_BLUETOOTH",
    "name": "Con Bluetooth",
    "value_id": "242085",
    "value_name": "Sí",
    "value_struct": null,
    "values": [{
      "id": "242085",
      "name": "Sí",
      "struct": null
    }],
    "attribute_group_id": "OTHERS",
    "attribute_group_name": "Otros"
  }, {
    "id": "WITH_CAMERA",
    "name": "Con cámara",
    "value_id": "242085",
    "value_name": "Sí",
    "value_struct": null,
    "values": [{
      "id": "242085",
      "name": "Sí",
      "struct": null
    }],
    "attribute_group_id": "OTHERS",
    "attribute_group_name": "Otros"
  }, {
    "id": "WITH_COMPASS",
    "name": "Con brújula",
    "value_id": "242085",
    "value_name": "Sí",
    "value_struct": null,
    "values": [{
      "id": "242085",
      "name": "Sí",
      "struct": null
    }],
    "attribute_group_id": "OTHERS",
    "attribute_group_name": "Otros"
  }, {
    "id": "WITH_ESIM",
    "name": "Con eSIM",
    "value_id": "242084",
    "value_name": "No",
    "value_struct": null,
    "values": [{
      "id": "242084",
      "name": "No",
      "struct": null
    }],
    "attribute_group_id": "OTHERS",
    "attribute_group_name": "Otros"
  }, {
    "id": "WITH_FACIAL_RECOGNITION",
    "name": "Con reconocimiento facial",
    "value_id": "242085",
    "value_name": "Sí",
    "value_struct": null,
    "values": [{
      "id": "242085",
      "name": "Sí",
      "struct": null
    }],
    "attribute_group_id": "OTHERS",
    "attribute_group_name": "Otros"
  }, {
    "id": "WITH_FINGERPRINT_READER",
    "name": "Con lector de huella digital",
    "value_id": "242085",
    "value_name": "Sí",
    "value_struct": null,
    "values": [{
      "id": "242085",
      "name": "Sí",
      "struct": null
    }],
    "attribute_group_id": "OTHERS",
    "attribute_group_name": "Otros"
  }, {
    "id": "WITH_FRONT_CAMERA_FLASH",
    "name": "Con flash en la cámara frontal",
    "value_id": "242084",
    "value_name": "No",
    "value_struct": null,
    "values": [{
      "id": "242084",
      "name": "No",
      "struct": null
    }],
    "attribute_group_id": "OTHERS",
    "attribute_group_name": "Otros"
  }, {
    "id": "WITH_GPS",
    "name": "Con GPS",
    "value_id": "242085",
    "value_name": "Sí",
    "value_struct": null,
    "values": [{
      "id": "242085",
      "name": "Sí",
      "struct": null
    }],
    "attribute_group_id": "OTHERS",
    "attribute_group_name": "Otros"
  }, {
    "id": "WITH_GYROSCOPE",
    "name": "Con giroscopio",
    "value_id": "242085",
    "value_name": "Sí",
    "value_struct": null,
    "values": [{
      "id": "242085",
      "name": "Sí",
      "struct": null
    }],
    "attribute_group_id": "OTHERS",
    "attribute_group_name": "Otros"
  }, {
    "id": "WITH_IMEI",
    "name": "Con IMEI",
    "value_id": "242085",
    "value_name": "Sí",
    "value_struct": null,
    "values": [{
      "id": "242085",
      "name": "Sí",
      "struct": null
    }],
    "attribute_group_id": "OTHERS",
    "attribute_group_name": "Otros"
  }, {
    "id": "WITH_MEMORY_CARD_SLOT",
    "name": "Con ranura para tarjeta de memoria",
    "value_id": "242085",
    "value_name": "Sí",
    "value_struct": null,
    "values": [{
      "id": "242085",
      "name": "Sí",
      "struct": null
    }],
    "attribute_group_id": "OTHERS",
    "attribute_group_name": "Otros"
  }, {
    "id": "WITH_MINI_HDMI",
    "name": "Con mini HDMI",
    "value_id": "242084",
    "value_name": "No",
    "value_struct": null,
    "values": [{
      "id": "242084",
      "name": "No",
      "struct": null
    }],
    "attribute_group_id": "OTHERS",
    "attribute_group_name": "Otros"
  }, {
    "id": "WITH_PHYSICAL_QWERTY_KEYBOARD",
    "name": "Con teclado QWERTY físico",
    "value_id": "242084",
    "value_name": "No",
    "value_struct": null,
    "values": [{
      "id": "242084",
      "name": "No",
      "struct": null
    }],
    "attribute_group_id": "OTHERS",
    "attribute_group_name": "Otros"
  }, {
    "id": "WITH_PROXIMITY_SENSOR",
    "name": "Con sensor de proximidad",
    "value_id": "242085",
    "value_name": "Sí",
    "value_struct": null,
    "values": [{
      "id": "242085",
      "name": "Sí",
      "struct": null
    }],
    "attribute_group_id": "OTHERS",
    "attribute_group_name": "Otros"
  }, {
    "id": "WITH_RADIO",
    "name": "Con radio",
    "value_id": "242085",
    "value_name": "Sí",
    "value_struct": null,
    "values": [{
      "id": "242085",
      "name": "Sí",
      "struct": null
    }],
    "attribute_group_id": "OTHERS",
    "attribute_group_name": "Otros"
  }, {
    "id": "WITH_REMOVABLE_BATTERY",
    "name": "Con batería removible",
    "value_id": "242084",
    "value_name": "No",
    "value_struct": null,
    "values": [{
      "id": "242084",
      "name": "No",
      "struct": null
    }],
    "attribute_group_id": "OTHERS",
    "attribute_group_name": "Otros"
  }, {
    "id": "WITH_TOUCHSCREEN_DISPLAY",
    "name": "Con pantalla táctil",
    "value_id": "242085",
    "value_name": "Sí",
    "value_struct": null,
    "values": [{
      "id": "242085",
      "name": "Sí",
      "struct": null
    }],
    "attribute_group_id": "OTHERS",
    "attribute_group_name": "Otros"
  }, {
    "id": "WITH_TV_TUNER",
    "name": "Con sintonizador de TV",
    "value_id": "242084",
    "value_name": "No",
    "value_struct": null,
    "values": [{
      "id": "242084",
      "name": "No",
      "struct": null
    }],
    "attribute_group_id": "OTHERS",
    "attribute_group_name": "Otros"
  }, {
    "id": "WITH_USB_CONNECTOR",
    "name": "Con conector USB",
    "value_id": "242085",
    "value_name": "Sí",
    "value_struct": null,
    "values": [{
      "id": "242085",
      "name": "Sí",
      "struct": null
    }],
    "attribute_group_id": "OTHERS",
    "attribute_group_name": "Otros"
  }, {
    "id": "WITH_WIFI",
    "name": "Con Wi-Fi",
    "value_id": "242085",
    "value_name": "Sí",
    "value_struct": null,
    "values": [{
      "id": "242085",
      "name": "Sí",
      "struct": null
    }],
    "attribute_group_id": "OTHERS",
    "attribute_group_name": "Otros"
  }],
  "warnings": [],
  "listing_source": "",
  "variations": [{
    "id": 79563625232,
    "price": 62000.00,
    "attribute_combinations": [{
      "id": "COLOR",
      "name": "Color",
      "value_id": "9141508",
      "value_name": "Cosmic blue",
      "value_struct": null,
      "values": [{
        "id": "9141508",
        "name": "Cosmic blue",
        "struct": null
      }]
    }],
    "available_quantity": 1,
    "sold_quantity": 1,
    "sale_terms": [],
    "picture_ids": ["686788-MLA40452533371_012020", "703228-MLA40452533370_012020", "830807-MLA40452559331_012020", "803032-MLA40452559330_012020", "978330-MLA40452533372_012020", "989260-MLA40452533373_012020"],
    "catalog_product_id": "MLA15273216"
  }],
  "status": "active",
  "sub_status": [],
  "tags": ["loyalty_discount_eligible", "extended_warranty_eligible", "good_quality_picture", "good_quality_thumbnail", "immediate_payment", "cart_eligible"],
  "warranty": "Garantía del vendedor: 3 meses",
  "catalog_product_id": "MLA15273215",
  "domain_id": "MLA-CELLPHONES",
  "parent_item_id": null,
  "differential_pricing": null,
  "deal_ids": [],
  "automatic_relist": false,
  "date_created": "2021-03-23T22:51:42.000Z",
  "last_updated": "2021-10-01T08:59:31.797Z",
  "health": 0.88,
  "catalog_listing": false,
  "channels": ["marketplace"]
}, {
  "id": "MLA920065558",
  "site_id": "MLA",
  "title": "Samsung Galaxy S20 Plus Muy Bueno Gris Liberado",
  "subtitle": null,
  "seller_id": 304248120,
  "category_id": "MLA1055",
  "official_store_id": null,
  "price": 95999,
  "base_price": 95999,
  "original_price": null,
  "currency_id": "ARS",
  "initial_quantity": 26,
  "available_quantity": 1,
  "sold_quantity": 5,
  "sale_terms": [{
    "id": "WARRANTY_TYPE",
    "name": "Tipo de garantía",
    "value_id": "2230280",
    "value_name": "Garantía del vendedor",
    "value_struct": null,
    "values": [{
      "id": "2230280",
      "name": "Garantía del vendedor",
      "struct": null
    }]
  }, {
    "id": "WARRANTY_TIME",
    "name": "Tiempo de garantía",
    "value_id": null,
    "value_name": "90 días",
    "value_struct": {
      "number": 90,
      "unit": "días"
    },
    "values": [{
      "id": null,
      "name": "90 días",
      "struct": {
        "number": 90,
        "unit": "días"
      }
    }]
  }],
  "buying_mode": "buy_it_now",
  "listing_type_id": "gold_pro",
  "start_time": "2021-05-10T20:30:29.000Z",
  "stop_time": "2041-05-05T04:00:00.000Z",
  "condition": "new",
  "permalink": "https://articulo.mercadolibre.com.ar/MLA-920065558-samsung-galaxy-s20-plus-muy-bueno-gris-liberado-_JM",
  "thumbnail_id": "636377-MLA45883992537_052021",
  "thumbnail": "http://http2.mlstatic.com/D_636377-MLA45883992537_052021-I.jpg",
  "secure_thumbnail": "https://http2.mlstatic.com/D_636377-MLA45883992537_052021-I.jpg",
  "pictures": [{
    "id": "636377-MLA45883992537_052021",
    "url": "http://http2.mlstatic.com/D_636377-MLA45883992537_052021-O.jpg",
    "secure_url": "https://http2.mlstatic.com/D_636377-MLA45883992537_052021-O.jpg",
    "size": "272x500",
    "max_size": "436x800",
    "quality": ""
  }, {
    "id": "652999-MLA45883992533_052021",
    "url": "http://http2.mlstatic.com/D_652999-MLA45883992533_052021-O.jpg",
    "secure_url": "https://http2.mlstatic.com/D_652999-MLA45883992533_052021-O.jpg",
    "size": "253x500",
    "max_size": "406x800",
    "quality": ""
  }, {
    "id": "659096-MLA45883992536_052021",
    "url": "http://http2.mlstatic.com/D_659096-MLA45883992536_052021-O.jpg",
    "secure_url": "https://http2.mlstatic.com/D_659096-MLA45883992536_052021-O.jpg",
    "size": "273x500",
    "max_size": "437x800",
    "quality": ""
  }, {
    "id": "945706-MLA45883992534_052021",
    "url": "http://http2.mlstatic.com/D_945706-MLA45883992534_052021-O.jpg",
    "secure_url": "https://http2.mlstatic.com/D_945706-MLA45883992534_052021-O.jpg",
    "size": "500x293",
    "max_size": "790x463",
    "quality": ""
  }, {
    "id": "662897-MLA45883992535_052021",
    "url": "http://http2.mlstatic.com/D_662897-MLA45883992535_052021-O.jpg",
    "secure_url": "https://http2.mlstatic.com/D_662897-MLA45883992535_052021-O.jpg",
    "size": "500x484",
    "max_size": "748x725",
    "quality": ""
  }],
  "video_id": null,
  "descriptions": [{
    "id": "MLA920065558-3458187939"
  }],
  "accepts_mercadopago": true,
  "non_mercado_pago_payment_methods": [],
  "shipping": {
    "mode": "me2",
    "free_methods": [{
      "id": 73328,
      "rule": {
        "default": true,
        "free_mode": "country",
        "free_shipping_flag": true,
        "value": null
      }
    }],
    "tags": ["self_service_in", "mandatory_free_shipping"],
    "dimensions": null,
    "local_pick_up": false,
    "free_shipping": true,
    "logistic_type": "cross_docking",
    "store_pick_up": false
  },
  "international_delivery_mode": "none",
  "seller_address": {
    "city": {
      "id": "TUxBQk1PTjUxOTJa",
      "name": "Monserrat"
    },
    "state": {
      "id": "AR-C",
      "name": "Capital Federal"
    },
    "country": {
      "id": "AR",
      "name": "Argentina"
    },
    "search_location": {
      "neighborhood": {
        "id": "TUxBQk1PTjUxOTJa",
        "name": "Monserrat"
      },
      "city": {
        "id": "TUxBQ0NBUGZlZG1sYQ",
        "name": "Capital Federal"
      },
      "state": {
        "id": "TUxBUENBUGw3M2E1",
        "name": "Capital Federal"
      }
    },
    "id": 1089417052
  },
  "seller_contact": null,
  "location": {},
  "coverage_areas": [],
  "attributes": [{
    "id": "BATTERY_CAPACITY",
    "name": "Capacidad de la batería",
    "value_id": "106671",
    "value_name": "4500 mAh",
    "value_struct": {
      "number": 4500,
      "unit": "mAh"
    },
    "values": [{
      "id": "106671",
      "name": "4500 mAh",
      "struct": {
        "number": 4500,
        "unit": "mAh"
      }
    }],
    "attribute_group_id": "OTHERS",
    "attribute_group_name": "Otros"
  }, {
    "id": "BATTERY_TYPE",
    "name": "Tipo de batería",
    "value_id": "7573636",
    "value_name": "Polímero de litio",
    "value_struct": null,
    "values": [{
      "id": "7573636",
      "name": "Polímero de litio",
      "struct": null
    }],
    "attribute_group_id": "OTHERS",
    "attribute_group_name": "Otros"
  }, {
    "id": "BRAND",
    "name": "Marca",
    "value_id": "206",
    "value_name": "Samsung",
    "value_struct": null,
    "values": [{
      "id": "206",
      "name": "Samsung",
      "struct": null
    }],
    "attribute_group_id": "OTHERS",
    "attribute_group_name": "Otros"
  }, {
    "id": "CAMERAS_MAIN_FEATURES",
    "name": "Características principales de las cámaras",
    "value_id": null,
    "value_name": "LED flash,Autofocus,Touch focus,OIS,Face detection,Smile detection,HDR",
    "value_struct": null,
    "values": [{
      "id": null,
      "name": "LED flash",
      "struct": null
    }, {
      "id": null,
      "name": "Autofocus",
      "struct": null
    }, {
      "id": null,
      "name": "Touch focus",
      "struct": null
    }, {
      "id": null,
      "name": "OIS",
      "struct": null
    }, {
      "id": null,
      "name": "Face detection",
      "struct": null
    }, {
      "id": null,
      "name": "Smile detection",
      "struct": null
    }, {
      "id": null,
      "name": "HDR",
      "struct": null
    }],
    "attribute_group_id": "OTHERS",
    "attribute_group_name": "Otros"
  }, {
    "id": "CARRIER",
    "name": "Compañía telefónica",
    "value_id": "298335",
    "value_name": "Liberado",
    "value_struct": null,
    "values": [{
      "id": "298335",
      "name": "Liberado",
      "struct": null
    }],
    "attribute_group_id": "OTHERS",
    "attribute_group_name": "Otros"
  }, {
    "id": "CHARGE_CONNECTOR_TYPE",
    "name": "Tipo de conector de carga",
    "value_id": "8275367",
    "value_name": "USB-C",
    "value_struct": null,
    "values": [{
      "id": "8275367",
      "name": "USB-C",
      "struct": null
    }],
    "attribute_group_id": "OTHERS",
    "attribute_group_name": "Otros"
  }, {
    "id": "CPU_MODELS",
    "name": "Modelos de CPU",
    "value_id": null,
    "value_name": "2x2.73 GHz Mongoose M5,2x2.5 GHz Cortex-A76,4x2 GHz Cortex-A55",
    "value_struct": null,
    "values": [{
      "id": null,
      "name": "2x2.73 GHz Mongoose M5",
      "struct": null
    }, {
      "id": null,
      "name": "2x2.5 GHz Cortex-A76",
      "struct": null
    }, {
      "id": null,
      "name": "4x2 GHz Cortex-A55",
      "struct": null
    }],
    "attribute_group_id": "OTHERS",
    "attribute_group_name": "Otros"
  }, {
    "id": "DEPTH",
    "name": "Profundidad",
    "value_id": "6850489",
    "value_name": "7.8 mm",
    "value_struct": {
      "number": 7.8,
      "unit": "mm"
    },
    "values": [{
      "id": "6850489",
      "name": "7.8 mm",
      "struct": {
        "number": 7.8,
        "unit": "mm"
      }
    }],
    "attribute_group_id": "OTHERS",
    "attribute_group_name": "Otros"
  }, {
    "id": "DIGITAL_ZOOM",
    "name": "Zoom digital",
    "value_id": "7865788",
    "value_name": "30x",
    "value_struct": {
      "number": 30,
      "unit": "x"
    },
    "values": [{
      "id": "7865788",
      "name": "30x",
      "struct": {
        "number": 30,
        "unit": "x"
      }
    }],
    "attribute_group_id": "OTHERS",
    "attribute_group_name": "Otros"
  }, {
    "id": "DISPLAY_ASPECT_RATIO",
    "name": "Relación de aspecto de la pantalla",
    "value_id": "9568929",
    "value_name": "20 - 9",
    "value_struct": null,
    "values": [{
      "id": "9568929",
      "name": "20 - 9",
      "struct": null
    }],
    "attribute_group_id": "OTHERS",
    "attribute_group_name": "Otros"
  }, {
    "id": "DISPLAY_PIXELS_PER_INCH",
    "name": "Píxeles por pulgada",
    "value_id": "8216359",
    "value_name": "525 ppi",
    "value_struct": {
      "number": 525,
      "unit": "ppi"
    },
    "values": [{
      "id": "8216359",
      "name": "525 ppi",
      "struct": {
        "number": 525,
        "unit": "ppi"
      }
    }],
    "attribute_group_id": "OTHERS",
    "attribute_group_name": "Otros"
  }, {
    "id": "DISPLAY_REFRESH_RATE",
    "name": "Frecuencia de actualización de la pantalla",
    "value_id": "7875467",
    "value_name": "120 Hz",
    "value_struct": {
      "number": 120,
      "unit": "Hz"
    },
    "values": [{
      "id": "7875467",
      "name": "120 Hz",
      "struct": {
        "number": 120,
        "unit": "Hz"
      }
    }],
    "attribute_group_id": "OTHERS",
    "attribute_group_name": "Otros"
  }, {
    "id": "DISPLAY_RESOLUTION",
    "name": "Resolución de la pantalla",
    "value_id": "8202437",
    "value_name": "1440 px x 3200 px",
    "value_struct": null,
    "values": [{
      "id": "8202437",
      "name": "1440 px x 3200 px",
      "struct": null
    }],
    "attribute_group_id": "OTHERS",
    "attribute_group_name": "Otros"
  }, {
    "id": "DISPLAY_RESOLUTION_TYPE",
    "name": "Tipo de resolución de la pantalla ",
    "value_id": "9596104",
    "value_name": "Quad HD+",
    "value_struct": null,
    "values": [{
      "id": "9596104",
      "name": "Quad HD+",
      "struct": null
    }],
    "attribute_group_id": "OTHERS",
    "attribute_group_name": "Otros"
  }, {
    "id": "DISPLAY_SIZE",
    "name": "Tamaño de la pantalla",
    "value_id": null,
    "value_name": "6.7 pulgadas",
    "value_struct": {
      "number": 6.7,
      "unit": "pulgadas"
    },
    "values": [{
      "id": null,
      "name": "6.7 pulgadas",
      "struct": {
        "number": 6.7,
        "unit": "pulgadas"
      }
    }],
    "attribute_group_id": "OTHERS",
    "attribute_group_name": "Otros"
  }, {
    "id": "DISPLAY_TECHNOLOGY",
    "name": "Tecnología de la pantalla",
    "value_id": "8202723",
    "value_name": "Dynamic AMOLED 2X",
    "value_struct": null,
    "values": [{
      "id": "8202723",
      "name": "Dynamic AMOLED 2X",
      "struct": null
    }],
    "attribute_group_id": "OTHERS",
    "attribute_group_name": "Otros"
  }, {
    "id": "DISPLAY_TYPE",
    "name": "Tipo de pantalla",
    "value_id": "9606643",
    "value_name": "Infinity-O Display",
    "value_struct": null,
    "values": [{
      "id": "9606643",
      "name": "Infinity-O Display",
      "struct": null
    }],
    "attribute_group_id": "OTHERS",
    "attribute_group_name": "Otros"
  }, {
    "id": "ESIMS_NUMBER",
    "name": "Cantidad de eSIMs",
    "value_id": "8278380",
    "value_name": "1",
    "value_struct": null,
    "values": [{
      "id": "8278380",
      "name": "1",
      "struct": null
    }],
    "attribute_group_id": "OTHERS",
    "attribute_group_name": "Otros"
  }, {
    "id": "FRONT_CAMERAS_NUMBER",
    "name": "Cantidad de cámaras frontales",
    "value_id": "7477216",
    "value_name": "1",
    "value_struct": null,
    "values": [{
      "id": "7477216",
      "name": "1",
      "struct": null
    }],
    "attribute_group_id": "OTHERS",
    "attribute_group_name": "Otros"
  }, {
    "id": "FRONT_CAMERA_APERTURE",
    "name": "Apertura del diafragma de la cámara frontal",
    "value_id": "7408595",
    "value_name": "f 2.2",
    "value_struct": null,
    "values": [{
      "id": "7408595",
      "name": "f 2.2",
      "struct": null
    }],
    "attribute_group_id": "OTHERS",
    "attribute_group_name": "Otros"
  }, {
    "id": "FRONT_CAMERA_RECORDING_RESOLUTION",
    "name": "Resolución de video de la cámara frontal",
    "value_id": "7207112",
    "value_name": "3840 px x 2160 px",
    "value_struct": null,
    "values": [{
      "id": "7207112",
      "name": "3840 px x 2160 px",
      "struct": null
    }],
    "attribute_group_id": "OTHERS",
    "attribute_group_name": "Otros"
  }, {
    "id": "GPU_MODEL",
    "name": "Modelo de GPU",
    "value_id": "8202445",
    "value_name": "Mali-G77 MP11",
    "value_struct": null,
    "values": [{
      "id": "8202445",
      "name": "Mali-G77 MP11",
      "struct": null
    }],
    "attribute_group_id": "OTHERS",
    "attribute_group_name": "Otros"
  }, {
    "id": "HEIGHT",
    "name": "Altura",
    "value_id": "7059690",
    "value_name": "161.9 mm",
    "value_struct": {
      "number": 161.9,
      "unit": "mm"
    },
    "values": [{
      "id": "7059690",
      "name": "161.9 mm",
      "struct": {
        "number": 161.9,
        "unit": "mm"
      }
    }],
    "attribute_group_id": "OTHERS",
    "attribute_group_name": "Otros"
  }, {
    "id": "HYBRID_ZOOM",
    "name": "Zoom híbrido",
    "value_id": "8579928",
    "value_name": "3x",
    "value_struct": {
      "number": 3,
      "unit": "x"
    },
    "values": [{
      "id": "8579928",
      "name": "3x",
      "struct": {
        "number": 3,
        "unit": "x"
      }
    }],
    "attribute_group_id": "OTHERS",
    "attribute_group_name": "Otros"
  }, {
    "id": "INTERNAL_MEMORY",
    "name": "Memoria interna",
    "value_id": null,
    "value_name": "128 GB",
    "value_struct": {
      "number": 128,
      "unit": "GB"
    },
    "values": [{
      "id": null,
      "name": "128 GB",
      "struct": {
        "number": 128,
        "unit": "GB"
      }
    }],
    "attribute_group_id": "OTHERS",
    "attribute_group_name": "Otros"
  }, {
    "id": "IP_RATING",
    "name": "Clasificación IP",
    "value_id": "8275373",
    "value_name": "IP68",
    "value_struct": null,
    "values": [{
      "id": "8275373",
      "name": "IP68",
      "struct": null
    }],
    "attribute_group_id": "OTHERS",
    "attribute_group_name": "Otros"
  }, {
    "id": "IS_DROP_RESISTANT",
    "name": "Es resistente a caídas",
    "value_id": "242084",
    "value_name": "No",
    "value_struct": null,
    "values": [{
      "id": "242084",
      "name": "No",
      "struct": null
    }],
    "attribute_group_id": "OTHERS",
    "attribute_group_name": "Otros"
  }, {
    "id": "IS_DUAL_SIM",
    "name": "Es Dual SIM",
    "value_id": "242084",
    "value_name": "No",
    "value_struct": null,
    "values": [{
      "id": "242084",
      "name": "No",
      "struct": null
    }],
    "attribute_group_id": "OTHERS",
    "attribute_group_name": "Otros"
  }, {
    "id": "IS_DUST_RESISTANT",
    "name": "Es resistente al polvo",
    "value_id": "242085",
    "value_name": "Sí",
    "value_struct": null,
    "values": [{
      "id": "242085",
      "name": "Sí",
      "struct": null
    }],
    "attribute_group_id": "OTHERS",
    "attribute_group_name": "Otros"
  }, {
    "id": "IS_SPLASH_RESISTANT",
    "name": "Es resistente a salpicaduras",
    "value_id": "242085",
    "value_name": "Sí",
    "value_struct": null,
    "values": [{
      "id": "242085",
      "name": "Sí",
      "struct": null
    }],
    "attribute_group_id": "OTHERS",
    "attribute_group_name": "Otros"
  }, {
    "id": "IS_WATERPROOF",
    "name": "Es a prueba de agua",
    "value_id": "242084",
    "value_name": "No",
    "value_struct": null,
    "values": [{
      "id": "242084",
      "name": "No",
      "struct": null
    }],
    "attribute_group_id": "OTHERS",
    "attribute_group_name": "Otros"
  }, {
    "id": "IS_WATER_RESISTANT",
    "name": "Es resistente al agua",
    "value_id": "242085",
    "value_name": "Sí",
    "value_struct": null,
    "values": [{
      "id": "242085",
      "name": "Sí",
      "struct": null
    }],
    "attribute_group_id": "OTHERS",
    "attribute_group_name": "Otros"
  }, {
    "id": "ITEM_CONDITION",
    "name": "Condición del ítem",
    "value_id": "2230582",
    "value_name": "Reacondicionado",
    "value_struct": null,
    "values": [{
      "id": "2230582",
      "name": "Reacondicionado",
      "struct": null
    }],
    "attribute_group_id": "OTHERS",
    "attribute_group_name": "Otros"
  }, {
    "id": "LINE",
    "name": "Línea",
    "value_id": "43675",
    "value_name": "Galaxy",
    "value_struct": null,
    "values": [{
      "id": "43675",
      "name": "Galaxy",
      "struct": null
    }],
    "attribute_group_id": "OTHERS",
    "attribute_group_name": "Otros"
  }, {
    "id": "MAIN_FRONT_CAMERA_RESOLUTION",
    "name": "Resolución de la cámara frontal principal",
    "value_id": "7222497",
    "value_name": "10 Mpx",
    "value_struct": {
      "number": 10,
      "unit": "Mpx"
    },
    "values": [{
      "id": "7222497",
      "name": "10 Mpx",
      "struct": {
        "number": 10,
        "unit": "Mpx"
      }
    }],
    "attribute_group_id": "OTHERS",
    "attribute_group_name": "Otros"
  }, {
    "id": "MAIN_REAR_CAMERA_RESOLUTION",
    "name": "Resolución de la cámara trasera principal",
    "value_id": "7863872",
    "value_name": "64 Mpx",
    "value_struct": {
      "number": 64,
      "unit": "Mpx"
    },
    "values": [{
      "id": "7863872",
      "name": "64 Mpx",
      "struct": {
        "number": 64,
        "unit": "Mpx"
      }
    }],
    "attribute_group_id": "OTHERS",
    "attribute_group_name": "Otros"
  }, {
    "id": "MAX_MEMORY_CARD_CAPACITY",
    "name": "Capacidad máxima de la tarjeta de memoria",
    "value_id": "7408581",
    "value_name": "1 TB",
    "value_struct": {
      "number": 1,
      "unit": "TB"
    },
    "values": [{
      "id": "7408581",
      "name": "1 TB",
      "struct": {
        "number": 1,
        "unit": "TB"
      }
    }],
    "attribute_group_id": "OTHERS",
    "attribute_group_name": "Otros"
  }, {
    "id": "MEMORY_CARD_TYPES",
    "name": "Tipos de tarjeta de memoria",
    "value_id": "7199655",
    "value_name": "MicroSD",
    "value_struct": null,
    "values": [{
      "id": "7199655",
      "name": "MicroSD",
      "struct": null
    }],
    "attribute_group_id": "OTHERS",
    "attribute_group_name": "Otros"
  }, {
    "id": "MOBILE_NETWORK",
    "name": "Red",
    "value_id": "367876",
    "value_name": "4G/LTE",
    "value_struct": null,
    "values": [{
      "id": "367876",
      "name": "4G/LTE",
      "struct": null
    }],
    "attribute_group_id": "OTHERS",
    "attribute_group_name": "Otros"
  }, {
    "id": "MODEL",
    "name": "Modelo",
    "value_id": null,
    "value_name": "S20 Plus",
    "value_struct": null,
    "values": [{
      "id": null,
      "name": "S20 Plus",
      "struct": null
    }],
    "attribute_group_id": "OTHERS",
    "attribute_group_name": "Otros"
  }, {
    "id": "NUMBER_OF_SIM_CARD_SLOTS",
    "name": "Cantidad de ranuras para tarjeta SIM",
    "value_id": "2087812",
    "value_name": "1",
    "value_struct": null,
    "values": [{
      "id": "2087812",
      "name": "1",
      "struct": null
    }],
    "attribute_group_id": "OTHERS",
    "attribute_group_name": "Otros"
  }, {
    "id": "OPERATING_SYSTEM_NAME",
    "name": "Nombre del sistema operativo",
    "value_id": "7403813",
    "value_name": "Android",
    "value_struct": null,
    "values": [{
      "id": "7403813",
      "name": "Android",
      "struct": null
    }],
    "attribute_group_id": "OTHERS",
    "attribute_group_name": "Otros"
  }, {
    "id": "OPERATING_SYSTEM_ORIGINAL_VERSION",
    "name": "Versión original del sistema operativo",
    "value_id": "4743197",
    "value_name": "10",
    "value_struct": null,
    "values": [{
      "id": "4743197",
      "name": "10",
      "struct": null
    }],
    "attribute_group_id": "OTHERS",
    "attribute_group_name": "Otros"
  }, {
    "id": "OPERATING_SYSTEM_PERSONALIZATION_ORIGINAL_SHELL",
    "name": "Capa original de personalización del sistema operativo",
    "value_id": "8101789",
    "value_name": "One UI 2",
    "value_struct": null,
    "values": [{
      "id": "8101789",
      "name": "One UI 2",
      "struct": null
    }],
    "attribute_group_id": "OTHERS",
    "attribute_group_name": "Otros"
  }, {
    "id": "OPTICAL_ZOOM",
    "name": "Zoom óptico",
    "value_id": "960",
    "value_name": "3x",
    "value_struct": {
      "number": 3,
      "unit": "x"
    },
    "values": [{
      "id": "960",
      "name": "3x",
      "struct": {
        "number": 3,
        "unit": "x"
      }
    }],
    "attribute_group_id": "OTHERS",
    "attribute_group_name": "Otros"
  }, {
    "id": "PROCESSOR_CORES_NUMBER",
    "name": "Cantidad de núcleos del procesador",
    "value_id": "7206961",
    "value_name": "8",
    "value_struct": null,
    "values": [{
      "id": "7206961",
      "name": "8",
      "struct": null
    }],
    "attribute_group_id": "OTHERS",
    "attribute_group_name": "Otros"
  }, {
    "id": "PROCESSOR_MODEL",
    "name": "Modelo del procesador",
    "value_id": "8202439",
    "value_name": "Exynos 990",
    "value_struct": null,
    "values": [{
      "id": "8202439",
      "name": "Exynos 990",
      "struct": null
    }],
    "attribute_group_id": "OTHERS",
    "attribute_group_name": "Otros"
  }, {
    "id": "PROCESSOR_SPEED",
    "name": "Velocidad del procesador",
    "value_id": "7101774",
    "value_name": "2.73 GHz",
    "value_struct": {
      "number": 2.73,
      "unit": "GHz"
    },
    "values": [{
      "id": "7101774",
      "name": "2.73 GHz",
      "struct": {
        "number": 2.73,
        "unit": "GHz"
      }
    }],
    "attribute_group_id": "OTHERS",
    "attribute_group_name": "Otros"
  }, {
    "id": "RAM",
    "name": "Memoria RAM",
    "value_id": null,
    "value_name": "8 GB",
    "value_struct": {
      "number": 8,
      "unit": "GB"
    },
    "values": [{
      "id": null,
      "name": "8 GB",
      "struct": {
        "number": 8,
        "unit": "GB"
      }
    }],
    "attribute_group_id": "OTHERS",
    "attribute_group_name": "Otros"
  }, {
    "id": "REAR_CAMERAS_NUMBER",
    "name": "Cantidad de cámaras traseras",
    "value_id": "7505958",
    "value_name": "4",
    "value_struct": null,
    "values": [{
      "id": "7505958",
      "name": "4",
      "struct": null
    }],
    "attribute_group_id": "OTHERS",
    "attribute_group_name": "Otros"
  }, {
    "id": "REAR_CAMERAS_RESOLUTION",
    "name": "Resolución de las cámaras traseras",
    "value_id": "8216360",
    "value_name": "64 Mpx/12 Mpx/12 Mpx/0.3 Mpx",
    "value_struct": null,
    "values": [{
      "id": "8216360",
      "name": "64 Mpx/12 Mpx/12 Mpx/0.3 Mpx",
      "struct": null
    }],
    "attribute_group_id": "OTHERS",
    "attribute_group_name": "Otros"
  }, {
    "id": "REAR_CAMERA_APERTURE",
    "name": "Apertura del diafragma de la cámara trasera",
    "value_id": "8216358",
    "value_name": "f 2.0/f 1.8/f 2.2/f 1.0",
    "value_struct": null,
    "values": [{
      "id": "8216358",
      "name": "f 2.0/f 1.8/f 2.2/f 1.0",
      "struct": null
    }],
    "attribute_group_id": "OTHERS",
    "attribute_group_name": "Otros"
  }, {
    "id": "REAR_CAMERA_RECORDING_RESOLUTION",
    "name": "Resolución de video de la cámara trasera",
    "value_id": "8075985",
    "value_name": "7680 px x 4320 px",
    "value_struct": null,
    "values": [{
      "id": "8075985",
      "name": "7680 px x 4320 px",
      "struct": null
    }],
    "attribute_group_id": "OTHERS",
    "attribute_group_name": "Otros"
  }, {
    "id": "RELEASE_MONTH",
    "name": "Mes de lanzamiento",
    "value_id": "8275342",
    "value_name": "Marzo",
    "value_struct": null,
    "values": [{
      "id": "8275342",
      "name": "Marzo",
      "struct": null
    }],
    "attribute_group_id": "OTHERS",
    "attribute_group_name": "Otros"
  }, {
    "id": "RELEASE_YEAR",
    "name": "Año de lanzamiento",
    "value_id": "7885601",
    "value_name": "2020",
    "value_struct": null,
    "values": [{
      "id": "7885601",
      "name": "2020",
      "struct": null
    }],
    "attribute_group_id": "OTHERS",
    "attribute_group_name": "Otros"
  }, {
    "id": "SIM_SIZES",
    "name": "Tamaños de tarjeta SIM compatibles",
    "value_id": "80453",
    "value_name": "Nano-SIM",
    "value_struct": null,
    "values": [{
      "id": "80453",
      "name": "Nano-SIM",
      "struct": null
    }],
    "attribute_group_id": "OTHERS",
    "attribute_group_name": "Otros"
  }, {
    "id": "TALK_TIME",
    "name": "Tiempo de conversación",
    "value_id": "2087988",
    "value_name": "23 h",
    "value_struct": {
      "number": 23,
      "unit": "h"
    },
    "values": [{
      "id": "2087988",
      "name": "23 h",
      "struct": {
        "number": 23,
        "unit": "h"
      }
    }],
    "attribute_group_id": "OTHERS",
    "attribute_group_name": "Otros"
  }, {
    "id": "WEIGHT",
    "name": "Peso",
    "value_id": "461995",
    "value_name": "186 g",
    "value_struct": {
      "number": 186,
      "unit": "g"
    },
    "values": [{
      "id": "461995",
      "name": "186 g",
      "struct": {
        "number": 186,
        "unit": "g"
      }
    }],
    "attribute_group_id": "OTHERS",
    "attribute_group_name": "Otros"
  }, {
    "id": "WIDTH",
    "name": "Ancho",
    "value_id": "7024657",
    "value_name": "73.7 mm",
    "value_struct": {
      "number": 73.7,
      "unit": "mm"
    },
    "values": [{
      "id": "7024657",
      "name": "73.7 mm",
      "struct": {
        "number": 73.7,
        "unit": "mm"
      }
    }],
    "attribute_group_id": "OTHERS",
    "attribute_group_name": "Otros"
  }, {
    "id": "WITH_3_5_JACK",
    "name": "Con jack 3.5",
    "value_id": "242084",
    "value_name": "No",
    "value_struct": null,
    "values": [{
      "id": "242084",
      "name": "No",
      "struct": null
    }],
    "attribute_group_id": "OTHERS",
    "attribute_group_name": "Otros"
  }, {
    "id": "WITH_ACCELEROMETER",
    "name": "Con acelerómetro",
    "value_id": "242085",
    "value_name": "Sí",
    "value_struct": null,
    "values": [{
      "id": "242085",
      "name": "Sí",
      "struct": null
    }],
    "attribute_group_id": "OTHERS",
    "attribute_group_name": "Otros"
  }, {
    "id": "WITH_BAROMETER",
    "name": "Con barómetro",
    "value_id": "242085",
    "value_name": "Sí",
    "value_struct": null,
    "values": [{
      "id": "242085",
      "name": "Sí",
      "struct": null
    }],
    "attribute_group_id": "OTHERS",
    "attribute_group_name": "Otros"
  }, {
    "id": "WITH_BLUETOOTH",
    "name": "Con Bluetooth",
    "value_id": "242085",
    "value_name": "Sí",
    "value_struct": null,
    "values": [{
      "id": "242085",
      "name": "Sí",
      "struct": null
    }],
    "attribute_group_id": "OTHERS",
    "attribute_group_name": "Otros"
  }, {
    "id": "WITH_CAMERA",
    "name": "Con cámara",
    "value_id": "242085",
    "value_name": "Sí",
    "value_struct": null,
    "values": [{
      "id": "242085",
      "name": "Sí",
      "struct": null
    }],
    "attribute_group_id": "OTHERS",
    "attribute_group_name": "Otros"
  }, {
    "id": "WITH_COMPASS",
    "name": "Con brújula",
    "value_id": "242085",
    "value_name": "Sí",
    "value_struct": null,
    "values": [{
      "id": "242085",
      "name": "Sí",
      "struct": null
    }],
    "attribute_group_id": "OTHERS",
    "attribute_group_name": "Otros"
  }, {
    "id": "WITH_ESIM",
    "name": "Con eSIM",
    "value_id": "242085",
    "value_name": "Sí",
    "value_struct": null,
    "values": [{
      "id": "242085",
      "name": "Sí",
      "struct": null
    }],
    "attribute_group_id": "OTHERS",
    "attribute_group_name": "Otros"
  }, {
    "id": "WITH_FACIAL_RECOGNITION",
    "name": "Con reconocimiento facial",
    "value_id": "242085",
    "value_name": "Sí",
    "value_struct": null,
    "values": [{
      "id": "242085",
      "name": "Sí",
      "struct": null
    }],
    "attribute_group_id": "OTHERS",
    "attribute_group_name": "Otros"
  }, {
    "id": "WITH_FAST_CHARGING",
    "name": "Con carga rápida",
    "value_id": "242085",
    "value_name": "Sí",
    "value_struct": null,
    "values": [{
      "id": "242085",
      "name": "Sí",
      "struct": null
    }],
    "attribute_group_id": "OTHERS",
    "attribute_group_name": "Otros"
  }, {
    "id": "WITH_FINGERPRINT_READER",
    "name": "Con lector de huella digital",
    "value_id": "242085",
    "value_name": "Sí",
    "value_struct": null,
    "values": [{
      "id": "242085",
      "name": "Sí",
      "struct": null
    }],
    "attribute_group_id": "OTHERS",
    "attribute_group_name": "Otros"
  }, {
    "id": "WITH_FRONT_CAMERA_FLASH",
    "name": "Con flash en la cámara frontal",
    "value_id": "242084",
    "value_name": "No",
    "value_struct": null,
    "values": [{
      "id": "242084",
      "name": "No",
      "struct": null
    }],
    "attribute_group_id": "OTHERS",
    "attribute_group_name": "Otros"
  }, {
    "id": "WITH_GPS",
    "name": "Con GPS",
    "value_id": "242085",
    "value_name": "Sí",
    "value_struct": null,
    "values": [{
      "id": "242085",
      "name": "Sí",
      "struct": null
    }],
    "attribute_group_id": "OTHERS",
    "attribute_group_name": "Otros"
  }, {
    "id": "WITH_GYROSCOPE",
    "name": "Con giroscopio",
    "value_id": "242085",
    "value_name": "Sí",
    "value_struct": null,
    "values": [{
      "id": "242085",
      "name": "Sí",
      "struct": null
    }],
    "attribute_group_id": "OTHERS",
    "attribute_group_name": "Otros"
  }, {
    "id": "WITH_HAND_RECOGNITION",
    "name": "Con reconocimiento de mano",
    "value_id": "242084",
    "value_name": "No",
    "value_struct": null,
    "values": [{
      "id": "242084",
      "name": "No",
      "struct": null
    }],
    "attribute_group_id": "OTHERS",
    "attribute_group_name": "Otros"
  }, {
    "id": "WITH_HEART_RATE_SENSOR",
    "name": "Con sensor de ritmo cardíaco",
    "value_id": "242084",
    "value_name": "No",
    "value_struct": null,
    "values": [{
      "id": "242084",
      "name": "No",
      "struct": null
    }],
    "attribute_group_id": "OTHERS",
    "attribute_group_name": "Otros"
  }, {
    "id": "WITH_IMEI",
    "name": "Con IMEI",
    "value_id": "242085",
    "value_name": "Sí",
    "value_struct": null,
    "values": [{
      "id": "242085",
      "name": "Sí",
      "struct": null
    }],
    "attribute_group_id": "OTHERS",
    "attribute_group_name": "Otros"
  }, {
    "id": "WITH_IRIS_RECOGNITION",
    "name": "Con reconocimiento de iris",
    "value_id": "242084",
    "value_name": "No",
    "value_struct": null,
    "values": [{
      "id": "242084",
      "name": "No",
      "struct": null
    }],
    "attribute_group_id": "OTHERS",
    "attribute_group_name": "Otros"
  }, {
    "id": "WITH_MEMORY_CARD_SLOT",
    "name": "Con ranura para tarjeta de memoria",
    "value_id": "242085",
    "value_name": "Sí",
    "value_struct": null,
    "values": [{
      "id": "242085",
      "name": "Sí",
      "struct": null
    }],
    "attribute_group_id": "OTHERS",
    "attribute_group_name": "Otros"
  }, {
    "id": "WITH_MINI_HDMI",
    "name": "Con mini HDMI",
    "value_id": "242084",
    "value_name": "No",
    "value_struct": null,
    "values": [{
      "id": "242084",
      "name": "No",
      "struct": null
    }],
    "attribute_group_id": "OTHERS",
    "attribute_group_name": "Otros"
  }, {
    "id": "WITH_NFC",
    "name": "Con NFC",
    "value_id": "242085",
    "value_name": "Sí",
    "value_struct": null,
    "values": [{
      "id": "242085",
      "name": "Sí",
      "struct": null
    }],
    "attribute_group_id": "OTHERS",
    "attribute_group_name": "Otros"
  }, {
    "id": "WITH_PHYSICAL_QWERTY_KEYBOARD",
    "name": "Con teclado QWERTY físico",
    "value_id": "242084",
    "value_name": "No",
    "value_struct": null,
    "values": [{
      "id": "242084",
      "name": "No",
      "struct": null
    }],
    "attribute_group_id": "OTHERS",
    "attribute_group_name": "Otros"
  }, {
    "id": "WITH_PROXIMITY_SENSOR",
    "name": "Con sensor de proximidad",
    "value_id": "242085",
    "value_name": "Sí",
    "value_struct": null,
    "values": [{
      "id": "242085",
      "name": "Sí",
      "struct": null
    }],
    "attribute_group_id": "OTHERS",
    "attribute_group_name": "Otros"
  }, {
    "id": "WITH_RADIO",
    "name": "Con radio",
    "value_id": "242084",
    "value_name": "No",
    "value_struct": null,
    "values": [{
      "id": "242084",
      "name": "No",
      "struct": null
    }],
    "attribute_group_id": "OTHERS",
    "attribute_group_name": "Otros"
  }, {
    "id": "WITH_REMOVABLE_BATTERY",
    "name": "Con batería removible",
    "value_id": "242084",
    "value_name": "No",
    "value_struct": null,
    "values": [{
      "id": "242084",
      "name": "No",
      "struct": null
    }],
    "attribute_group_id": "OTHERS",
    "attribute_group_name": "Otros"
  }, {
    "id": "WITH_TOUCHSCREEN_DISPLAY",
    "name": "Con pantalla táctil",
    "value_id": "242085",
    "value_name": "Sí",
    "value_struct": null,
    "values": [{
      "id": "242085",
      "name": "Sí",
      "struct": null
    }],
    "attribute_group_id": "OTHERS",
    "attribute_group_name": "Otros"
  }, {
    "id": "WITH_TV_TUNER",
    "name": "Con sintonizador de TV",
    "value_id": "242084",
    "value_name": "No",
    "value_struct": null,
    "values": [{
      "id": "242084",
      "name": "No",
      "struct": null
    }],
    "attribute_group_id": "OTHERS",
    "attribute_group_name": "Otros"
  }, {
    "id": "WITH_USB_CONNECTOR",
    "name": "Con conector USB",
    "value_id": "242085",
    "value_name": "Sí",
    "value_struct": null,
    "values": [{
      "id": "242085",
      "name": "Sí",
      "struct": null
    }],
    "attribute_group_id": "OTHERS",
    "attribute_group_name": "Otros"
  }, {
    "id": "WITH_WIFI",
    "name": "Con Wi-Fi",
    "value_id": "242085",
    "value_name": "Sí",
    "value_struct": null,
    "values": [{
      "id": "242085",
      "name": "Sí",
      "struct": null
    }],
    "attribute_group_id": "OTHERS",
    "attribute_group_name": "Otros"
  }, {
    "id": "WITH_WIRELESS_CHARGING",
    "name": "Con carga inalámbrica",
    "value_id": "242085",
    "value_name": "Sí",
    "value_struct": null,
    "values": [{
      "id": "242085",
      "name": "Sí",
      "struct": null
    }],
    "attribute_group_id": "OTHERS",
    "attribute_group_name": "Otros"
  }],
  "warnings": [],
  "listing_source": "",
  "variations": [{
    "id": 84210048955,
    "price": 95999.00,
    "attribute_combinations": [{
      "id": "COLOR",
      "name": "Color",
      "value_id": "283165",
      "value_name": "Gris",
      "value_struct": null,
      "values": [{
        "id": "283165",
        "name": "Gris",
        "struct": null
      }]
    }],
    "available_quantity": 1,
    "sold_quantity": 5,
    "sale_terms": [],
    "picture_ids": ["636377-MLA45883992537_052021", "652999-MLA45883992533_052021", "659096-MLA45883992536_052021", "945706-MLA45883992534_052021", "662897-MLA45883992535_052021"],
    "catalog_product_id": "MLA15482172"
  }],
  "status": "active",
  "sub_status": [],
  "tags": ["good_quality_picture", "loyalty_discount_eligible", "immediate_payment"],
  "warranty": "Garantía del vendedor: 90 días",
  "catalog_product_id": "MLA15482170",
  "domain_id": "MLA-CELLPHONES",
  "parent_item_id": null,
  "differential_pricing": null,
  "deal_ids": ["MLA6500"],
  "automatic_relist": false,
  "date_created": "2021-05-10T20:30:30.000Z",
  "last_updated": "2021-10-07T12:06:46.070Z",
  "health": 1,
  "catalog_listing": false,
  "channels": ["marketplace"]
}, {
  "id": "MLA902688426",
  "site_id": "MLA",
  "title": "Celular Samsung Galaxy S10 Sm-g973 128gb Refabricado",
  "subtitle": null,
  "seller_id": 119914491,
  "category_id": "MLA1055",
  "official_store_id": null,
  "price": 49999,
  "base_price": 49999,
  "original_price": null,
  "currency_id": "ARS",
  "initial_quantity": 1019,
  "available_quantity": 500,
  "sold_quantity": 5,
  "sale_terms": [{
    "id": "WARRANTY_TYPE",
    "name": "Tipo de garantía",
    "value_id": "2230280",
    "value_name": "Garantía del vendedor",
    "value_struct": null,
    "values": [{
      "id": "2230280",
      "name": "Garantía del vendedor",
      "struct": null
    }]
  }, {
    "id": "WARRANTY_TIME",
    "name": "Tiempo de garantía",
    "value_id": null,
    "value_name": "3 meses",
    "value_struct": {
      "number": 3,
      "unit": "meses"
    },
    "values": [{
      "id": null,
      "name": "3 meses",
      "struct": {
        "number": 3,
        "unit": "meses"
      }
    }]
  }],
  "buying_mode": "buy_it_now",
  "listing_type_id": "gold_special",
  "start_time": "2020-12-30T18:58:44.000Z",
  "stop_time": "2040-12-25T04:00:00.000Z",
  "condition": "new",
  "permalink": "https://articulo.mercadolibre.com.ar/MLA-902688426-celular-samsung-galaxy-s10-sm-g973-128gb-refabricado-_JM",
  "thumbnail_id": "977979-MLA44456365404_122020",
  "thumbnail": "http://http2.mlstatic.com/D_977979-MLA44456365404_122020-I.jpg",
  "secure_thumbnail": "https://http2.mlstatic.com/D_977979-MLA44456365404_122020-I.jpg",
  "pictures": [{
    "id": "977979-MLA44456365404_122020",
    "url": "http://http2.mlstatic.com/D_977979-MLA44456365404_122020-O.jpg",
    "secure_url": "https://http2.mlstatic.com/D_977979-MLA44456365404_122020-O.jpg",
    "size": "249x500",
    "max_size": "596x1196",
    "quality": ""
  }, {
    "id": "609482-MLA47497958670_092021",
    "url": "http://http2.mlstatic.com/D_609482-MLA47497958670_092021-O.jpg",
    "secure_url": "https://http2.mlstatic.com/D_609482-MLA47497958670_092021-O.jpg",
    "size": "500x465",
    "max_size": "528x492",
    "quality": ""
  }, {
    "id": "626328-MLA44456373038_122020",
    "url": "http://http2.mlstatic.com/D_626328-MLA44456373038_122020-O.jpg",
    "secure_url": "https://http2.mlstatic.com/D_626328-MLA44456373038_122020-O.jpg",
    "size": "249x500",
    "max_size": "596x1196",
    "quality": ""
  }, {
    "id": "769010-MLA44456373037_122020",
    "url": "http://http2.mlstatic.com/D_769010-MLA44456373037_122020-O.jpg",
    "secure_url": "https://http2.mlstatic.com/D_769010-MLA44456373037_122020-O.jpg",
    "size": "230x500",
    "max_size": "560x1214",
    "quality": ""
  }, {
    "id": "632221-MLA44456360117_122020",
    "url": "http://http2.mlstatic.com/D_632221-MLA44456360117_122020-O.jpg",
    "secure_url": "https://http2.mlstatic.com/D_632221-MLA44456360117_122020-O.jpg",
    "size": "500x500",
    "max_size": "1080x1080",
    "quality": ""
  }, {
    "id": "885488-MLA44456360118_122020",
    "url": "http://http2.mlstatic.com/D_885488-MLA44456360118_122020-O.jpg",
    "secure_url": "https://http2.mlstatic.com/D_885488-MLA44456360118_122020-O.jpg",
    "size": "500x500",
    "max_size": "1080x1080",
    "quality": ""
  }, {
    "id": "982725-MLA44456357268_122020",
    "url": "http://http2.mlstatic.com/D_982725-MLA44456357268_122020-O.jpg",
    "secure_url": "https://http2.mlstatic.com/D_982725-MLA44456357268_122020-O.jpg",
    "size": "500x500",
    "max_size": "1080x1080",
    "quality": ""
  }, {
    "id": "766295-MLA44456344766_122020",
    "url": "http://http2.mlstatic.com/D_766295-MLA44456344766_122020-O.jpg",
    "secure_url": "https://http2.mlstatic.com/D_766295-MLA44456344766_122020-O.jpg",
    "size": "500x500",
    "max_size": "1080x1080",
    "quality": ""
  }, {
    "id": "757854-MLA44456357270_122020",
    "url": "http://http2.mlstatic.com/D_757854-MLA44456357270_122020-O.jpg",
    "secure_url": "https://http2.mlstatic.com/D_757854-MLA44456357270_122020-O.jpg",
    "size": "500x500",
    "max_size": "1080x1080",
    "quality": ""
  }],
  "video_id": null,
  "descriptions": [{
    "id": "MLA902688426-3134649588"
  }],
  "accepts_mercadopago": true,
  "non_mercado_pago_payment_methods": [],
  "shipping": {
    "mode": "me2",
    "free_methods": [{
      "id": 73328,
      "rule": {
        "default": true,
        "free_mode": "country",
        "free_shipping_flag": true,
        "value": null
      }
    }],
    "tags": ["self_service_in", "mandatory_free_shipping"],
    "dimensions": null,
    "local_pick_up": true,
    "free_shipping": true,
    "logistic_type": "cross_docking",
    "store_pick_up": false
  },
  "international_delivery_mode": "none",
  "seller_address": {
    "city": {
      "id": "TUxBQlNBQTM3Mzda",
      "name": "Saavedra"
    },
    "state": {
      "id": "AR-C",
      "name": "Capital Federal"
    },
    "country": {
      "id": "AR",
      "name": "Argentina"
    },
    "search_location": {
      "neighborhood": {
        "id": "TUxBQlNBQTM3Mzda",
        "name": "Saavedra"
      },
      "city": {
        "id": "TUxBQ0NBUGZlZG1sYQ",
        "name": "Capital Federal"
      },
      "state": {
        "id": "TUxBUENBUGw3M2E1",
        "name": "Capital Federal"
      }
    },
    "id": 1188804068
  },
  "seller_contact": null,
  "location": {},
  "coverage_areas": [],
  "attributes": [{
    "id": "BATTERY_CAPACITY",
    "name": "Capacidad de la batería",
    "value_id": "2729224",
    "value_name": "3400 mAh",
    "value_struct": {
      "number": 3400,
      "unit": "mAh"
    },
    "values": [{
      "id": "2729224",
      "name": "3400 mAh",
      "struct": {
        "number": 3400,
        "unit": "mAh"
      }
    }],
    "attribute_group_id": "OTHERS",
    "attribute_group_name": "Otros"
  }, {
    "id": "BATTERY_TYPE",
    "name": "Tipo de batería",
    "value_id": "95013",
    "value_name": "Ion de litio",
    "value_struct": null,
    "values": [{
      "id": "95013",
      "name": "Ion de litio",
      "struct": null
    }],
    "attribute_group_id": "OTHERS",
    "attribute_group_name": "Otros"
  }, {
    "id": "BRAND",
    "name": "Marca",
    "value_id": "206",
    "value_name": "Samsung",
    "value_struct": null,
    "values": [{
      "id": "206",
      "name": "Samsung",
      "struct": null
    }],
    "attribute_group_id": "OTHERS",
    "attribute_group_name": "Otros"
  }, {
    "id": "CARRIER",
    "name": "Compañía telefónica",
    "value_id": "298335",
    "value_name": "Liberado",
    "value_struct": null,
    "values": [{
      "id": "298335",
      "name": "Liberado",
      "struct": null
    }],
    "attribute_group_id": "OTHERS",
    "attribute_group_name": "Otros"
  }, {
    "id": "DEPTH",
    "name": "Profundidad",
    "value_id": "6850489",
    "value_name": "7.8 mm",
    "value_struct": {
      "number": 7.8,
      "unit": "mm"
    },
    "values": [{
      "id": "6850489",
      "name": "7.8 mm",
      "struct": {
        "number": 7.8,
        "unit": "mm"
      }
    }],
    "attribute_group_id": "OTHERS",
    "attribute_group_name": "Otros"
  }, {
    "id": "DISPLAY_PIXELS_PER_INCH",
    "name": "Píxeles por pulgada",
    "value_id": "7453385",
    "value_name": "550 ppi",
    "value_struct": {
      "number": 550,
      "unit": "ppi"
    },
    "values": [{
      "id": "7453385",
      "name": "550 ppi",
      "struct": {
        "number": 550,
        "unit": "ppi"
      }
    }],
    "attribute_group_id": "OTHERS",
    "attribute_group_name": "Otros"
  }, {
    "id": "DISPLAY_RESOLUTION",
    "name": "Resolución de la pantalla",
    "value_id": "7222494",
    "value_name": "1440 px x 3040 px",
    "value_struct": null,
    "values": [{
      "id": "7222494",
      "name": "1440 px x 3040 px",
      "struct": null
    }],
    "attribute_group_id": "OTHERS",
    "attribute_group_name": "Otros"
  }, {
    "id": "DISPLAY_SIZE",
    "name": "Tamaño de la pantalla",
    "value_id": "6892143",
    "value_name": "6.1 \"",
    "value_struct": {
      "number": 6.1,
      "unit": "\""
    },
    "values": [{
      "id": "6892143",
      "name": "6.1 \"",
      "struct": {
        "number": 6.1,
        "unit": "\""
      }
    }],
    "attribute_group_id": "OTHERS",
    "attribute_group_name": "Otros"
  }, {
    "id": "DISPLAY_TECHNOLOGY",
    "name": "Tecnología de la pantalla",
    "value_id": "7453381",
    "value_name": "Dynamic AMOLED",
    "value_struct": null,
    "values": [{
      "id": "7453381",
      "name": "Dynamic AMOLED",
      "struct": null
    }],
    "attribute_group_id": "OTHERS",
    "attribute_group_name": "Otros"
  }, {
    "id": "FRONT_CAMERAS_NUMBER",
    "name": "Cantidad de cámaras frontales",
    "value_id": "7477216",
    "value_name": "1",
    "value_struct": null,
    "values": [{
      "id": "7477216",
      "name": "1",
      "struct": null
    }],
    "attribute_group_id": "OTHERS",
    "attribute_group_name": "Otros"
  }, {
    "id": "FRONT_CAMERA_APERTURE",
    "name": "Apertura del diafragma de la cámara frontal",
    "value_id": "7439050",
    "value_name": "f 1.9",
    "value_struct": null,
    "values": [{
      "id": "7439050",
      "name": "f 1.9",
      "struct": null
    }],
    "attribute_group_id": "OTHERS",
    "attribute_group_name": "Otros"
  }, {
    "id": "FRONT_CAMERA_RECORDING_RESOLUTION",
    "name": "Resolución de video de la cámara frontal",
    "value_id": "7207112",
    "value_name": "3840 px x 2160 px",
    "value_struct": null,
    "values": [{
      "id": "7207112",
      "name": "3840 px x 2160 px",
      "struct": null
    }],
    "attribute_group_id": "OTHERS",
    "attribute_group_name": "Otros"
  }, {
    "id": "GTIN",
    "name": "Código universal de producto",
    "value_id": null,
    "value_name": "887276302126",
    "value_struct": null,
    "values": [{
      "id": null,
      "name": "887276302126",
      "struct": null
    }],
    "attribute_group_id": "OTHERS",
    "attribute_group_name": "Otros"
  }, {
    "id": "HEIGHT",
    "name": "Altura",
    "value_id": "6886135",
    "value_name": "149.9 mm",
    "value_struct": {
      "number": 149.9,
      "unit": "mm"
    },
    "values": [{
      "id": "6886135",
      "name": "149.9 mm",
      "struct": {
        "number": 149.9,
        "unit": "mm"
      }
    }],
    "attribute_group_id": "OTHERS",
    "attribute_group_name": "Otros"
  }, {
    "id": "INTERNAL_MEMORY",
    "name": "Memoria interna",
    "value_id": "84611",
    "value_name": "128 GB",
    "value_struct": {
      "number": 128,
      "unit": "GB"
    },
    "values": [{
      "id": "84611",
      "name": "128 GB",
      "struct": {
        "number": 128,
        "unit": "GB"
      }
    }],
    "attribute_group_id": "OTHERS",
    "attribute_group_name": "Otros"
  }, {
    "id": "IS_DUAL_SIM",
    "name": "Es Dual SIM",
    "value_id": "242084",
    "value_name": "No",
    "value_struct": null,
    "values": [{
      "id": "242084",
      "name": "No",
      "struct": null
    }],
    "attribute_group_id": "OTHERS",
    "attribute_group_name": "Otros"
  }, {
    "id": "IS_SPLASH_RESISTANT",
    "name": "Es resistente a salpicaduras",
    "value_id": "242085",
    "value_name": "Sí",
    "value_struct": null,
    "values": [{
      "id": "242085",
      "name": "Sí",
      "struct": null
    }],
    "attribute_group_id": "OTHERS",
    "attribute_group_name": "Otros"
  }, {
    "id": "IS_WATERPROOF",
    "name": "Es a prueba de agua",
    "value_id": "242084",
    "value_name": "No",
    "value_struct": null,
    "values": [{
      "id": "242084",
      "name": "No",
      "struct": null
    }],
    "attribute_group_id": "OTHERS",
    "attribute_group_name": "Otros"
  }, {
    "id": "IS_WATER_RESISTANT",
    "name": "Es resistente al agua",
    "value_id": "242085",
    "value_name": "Sí",
    "value_struct": null,
    "values": [{
      "id": "242085",
      "name": "Sí",
      "struct": null
    }],
    "attribute_group_id": "OTHERS",
    "attribute_group_name": "Otros"
  }, {
    "id": "ITEM_CONDITION",
    "name": "Condición del ítem",
    "value_id": "2230582",
    "value_name": "Reacondicionado",
    "value_struct": null,
    "values": [{
      "id": "2230582",
      "name": "Reacondicionado",
      "struct": null
    }],
    "attribute_group_id": "OTHERS",
    "attribute_group_name": "Otros"
  }, {
    "id": "LINE",
    "name": "Línea",
    "value_id": "249991",
    "value_name": "Galaxy S",
    "value_struct": null,
    "values": [{
      "id": "249991",
      "name": "Galaxy S",
      "struct": null
    }],
    "attribute_group_id": "OTHERS",
    "attribute_group_name": "Otros"
  }, {
    "id": "MAIN_FRONT_CAMERA_RESOLUTION",
    "name": "Resolución de la cámara frontal principal",
    "value_id": "7222497",
    "value_name": "10 Mpx",
    "value_struct": {
      "number": 10,
      "unit": "Mpx"
    },
    "values": [{
      "id": "7222497",
      "name": "10 Mpx",
      "struct": {
        "number": 10,
        "unit": "Mpx"
      }
    }],
    "attribute_group_id": "OTHERS",
    "attribute_group_name": "Otros"
  }, {
    "id": "MAIN_REAR_CAMERA_RESOLUTION",
    "name": "Resolución de la cámara trasera principal",
    "value_id": "7207095",
    "value_name": "16 Mpx",
    "value_struct": {
      "number": 16,
      "unit": "Mpx"
    },
    "values": [{
      "id": "7207095",
      "name": "16 Mpx",
      "struct": {
        "number": 16,
        "unit": "Mpx"
      }
    }],
    "attribute_group_id": "OTHERS",
    "attribute_group_name": "Otros"
  }, {
    "id": "MAX_MEMORY_CARD_CAPACITY",
    "name": "Capacidad máxima de la tarjeta de memoria",
    "value_id": "6901713",
    "value_name": "512 GB",
    "value_struct": {
      "number": 512,
      "unit": "GB"
    },
    "values": [{
      "id": "6901713",
      "name": "512 GB",
      "struct": {
        "number": 512,
        "unit": "GB"
      }
    }],
    "attribute_group_id": "OTHERS",
    "attribute_group_name": "Otros"
  }, {
    "id": "MEMORY_CARD_TYPES",
    "name": "Tipos de tarjeta de memoria",
    "value_id": "7199655",
    "value_name": "MicroSD",
    "value_struct": null,
    "values": [{
      "id": "7199655",
      "name": "MicroSD",
      "struct": null
    }],
    "attribute_group_id": "OTHERS",
    "attribute_group_name": "Otros"
  }, {
    "id": "MOBILE_NETWORK",
    "name": "Red",
    "value_id": "367876",
    "value_name": "4G/LTE",
    "value_struct": null,
    "values": [{
      "id": "367876",
      "name": "4G/LTE",
      "struct": null
    }],
    "attribute_group_id": "OTHERS",
    "attribute_group_name": "Otros"
  }, {
    "id": "MODEL",
    "name": "Modelo",
    "value_id": "7227",
    "value_name": "S10",
    "value_struct": null,
    "values": [{
      "id": "7227",
      "name": "S10",
      "struct": null
    }],
    "attribute_group_id": "OTHERS",
    "attribute_group_name": "Otros"
  }, {
    "id": "NUMBER_OF_SIM_CARD_SLOTS",
    "name": "Cantidad de ranuras para tarjeta SIM",
    "value_id": "2087812",
    "value_name": "1",
    "value_struct": null,
    "values": [{
      "id": "2087812",
      "name": "1",
      "struct": null
    }],
    "attribute_group_id": "OTHERS",
    "attribute_group_name": "Otros"
  }, {
    "id": "OPERATING_SYSTEM_LAST_COMPATIBLE_VERSION",
    "name": "Última versión compatible del sistema operativo",
    "value_id": "9169129",
    "value_name": "11",
    "value_struct": null,
    "values": [{
      "id": "9169129",
      "name": "11",
      "struct": null
    }],
    "attribute_group_id": "OTHERS",
    "attribute_group_name": "Otros"
  }, {
    "id": "OPERATING_SYSTEM_NAME",
    "name": "Nombre del sistema operativo",
    "value_id": "7403813",
    "value_name": "Android",
    "value_struct": null,
    "values": [{
      "id": "7403813",
      "name": "Android",
      "struct": null
    }],
    "attribute_group_id": "OTHERS",
    "attribute_group_name": "Otros"
  }, {
    "id": "OPERATING_SYSTEM_ORIGINAL_VERSION",
    "name": "Versión original del sistema operativo",
    "value_id": "7207107",
    "value_name": "9.0 Pie",
    "value_struct": null,
    "values": [{
      "id": "7207107",
      "name": "9.0 Pie",
      "struct": null
    }],
    "attribute_group_id": "OTHERS",
    "attribute_group_name": "Otros"
  }, {
    "id": "OPERATING_SYSTEM_PERSONALIZATION_LAST_COMPATIBLE_SHELL",
    "name": "Última capa compatible de personalización del sistema operativo",
    "value_id": "9785217",
    "value_name": "One UI 3",
    "value_struct": null,
    "values": [{
      "id": "9785217",
      "name": "One UI 3",
      "struct": null
    }],
    "attribute_group_id": "OTHERS",
    "attribute_group_name": "Otros"
  }, {
    "id": "OPERATING_SYSTEM_PERSONALIZATION_ORIGINAL_SHELL",
    "name": "Capa original de personalización del sistema operativo",
    "value_id": "7439957",
    "value_name": "One UI",
    "value_struct": null,
    "values": [{
      "id": "7439957",
      "name": "One UI",
      "struct": null
    }],
    "attribute_group_id": "OTHERS",
    "attribute_group_name": "Otros"
  }, {
    "id": "OPTICAL_ZOOM",
    "name": "Zoom óptico",
    "value_id": "1344",
    "value_name": "2x",
    "value_struct": {
      "number": 2,
      "unit": "x"
    },
    "values": [{
      "id": "1344",
      "name": "2x",
      "struct": {
        "number": 2,
        "unit": "x"
      }
    }],
    "attribute_group_id": "OTHERS",
    "attribute_group_name": "Otros"
  }, {
    "id": "PROCESSOR_CORES_NUMBER",
    "name": "Cantidad de núcleos del procesador",
    "value_id": "7206961",
    "value_name": "8",
    "value_struct": null,
    "values": [{
      "id": "7206961",
      "name": "8",
      "struct": null
    }],
    "attribute_group_id": "OTHERS",
    "attribute_group_name": "Otros"
  }, {
    "id": "PROCESSOR_SPEED",
    "name": "Velocidad del procesador",
    "value_id": "2241389",
    "value_name": "2.7 GHz",
    "value_struct": {
      "number": 2.7,
      "unit": "GHz"
    },
    "values": [{
      "id": "2241389",
      "name": "2.7 GHz",
      "struct": {
        "number": 2.7,
        "unit": "GHz"
      }
    }],
    "attribute_group_id": "OTHERS",
    "attribute_group_name": "Otros"
  }, {
    "id": "RAM",
    "name": "Memoria RAM",
    "value_id": "579564",
    "value_name": "8 GB",
    "value_struct": {
      "number": 8,
      "unit": "GB"
    },
    "values": [{
      "id": "579564",
      "name": "8 GB",
      "struct": {
        "number": 8,
        "unit": "GB"
      }
    }],
    "attribute_group_id": "OTHERS",
    "attribute_group_name": "Otros"
  }, {
    "id": "REAR_CAMERAS_NUMBER",
    "name": "Cantidad de cámaras traseras",
    "value_id": "7505949",
    "value_name": "3",
    "value_struct": null,
    "values": [{
      "id": "7505949",
      "name": "3",
      "struct": null
    }],
    "attribute_group_id": "OTHERS",
    "attribute_group_name": "Otros"
  }, {
    "id": "REAR_CAMERAS_RESOLUTION",
    "name": "Resolución de las cámaras traseras",
    "value_id": "7453383",
    "value_name": "16 Mpx/12.2 Mpx/12 Mpx",
    "value_struct": null,
    "values": [{
      "id": "7453383",
      "name": "16 Mpx/12.2 Mpx/12 Mpx",
      "struct": null
    }],
    "attribute_group_id": "OTHERS",
    "attribute_group_name": "Otros"
  }, {
    "id": "REAR_CAMERA_APERTURE",
    "name": "Apertura del diafragma de la cámara trasera",
    "value_id": "7453382",
    "value_name": "f 2.2/f 1.5/f 2.4",
    "value_struct": null,
    "values": [{
      "id": "7453382",
      "name": "f 2.2/f 1.5/f 2.4",
      "struct": null
    }],
    "attribute_group_id": "OTHERS",
    "attribute_group_name": "Otros"
  }, {
    "id": "REAR_CAMERA_RECORDING_RESOLUTION",
    "name": "Resolución de video de la cámara trasera",
    "value_id": "7199630",
    "value_name": "3840 px x 2160 px",
    "value_struct": null,
    "values": [{
      "id": "7199630",
      "name": "3840 px x 2160 px",
      "struct": null
    }],
    "attribute_group_id": "OTHERS",
    "attribute_group_name": "Otros"
  }, {
    "id": "RELEASE_YEAR",
    "name": "Año de lanzamiento",
    "value_id": "5057727",
    "value_name": "2019",
    "value_struct": null,
    "values": [{
      "id": "5057727",
      "name": "2019",
      "struct": null
    }],
    "attribute_group_id": "OTHERS",
    "attribute_group_name": "Otros"
  }, {
    "id": "SIM_SIZES",
    "name": "Tamaños de tarjeta SIM compatibles",
    "value_id": "80453",
    "value_name": "Nano-SIM",
    "value_struct": null,
    "values": [{
      "id": "80453",
      "name": "Nano-SIM",
      "struct": null
    }],
    "attribute_group_id": "OTHERS",
    "attribute_group_name": "Otros"
  }, {
    "id": "WEIGHT",
    "name": "Peso",
    "value_id": "2087839",
    "value_name": "157 g",
    "value_struct": {
      "number": 157,
      "unit": "g"
    },
    "values": [{
      "id": "2087839",
      "name": "157 g",
      "struct": {
        "number": 157,
        "unit": "g"
      }
    }],
    "attribute_group_id": "OTHERS",
    "attribute_group_name": "Otros"
  }, {
    "id": "WIDTH",
    "name": "Ancho",
    "value_id": "7453384",
    "value_name": "70.4 mm",
    "value_struct": {
      "number": 70.4,
      "unit": "mm"
    },
    "values": [{
      "id": "7453384",
      "name": "70.4 mm",
      "struct": {
        "number": 70.4,
        "unit": "mm"
      }
    }],
    "attribute_group_id": "OTHERS",
    "attribute_group_name": "Otros"
  }, {
    "id": "WITH_ACCELEROMETER",
    "name": "Con acelerómetro",
    "value_id": "242085",
    "value_name": "Sí",
    "value_struct": null,
    "values": [{
      "id": "242085",
      "name": "Sí",
      "struct": null
    }],
    "attribute_group_id": "OTHERS",
    "attribute_group_name": "Otros"
  }, {
    "id": "WITH_BLUETOOTH",
    "name": "Con Bluetooth",
    "value_id": "242085",
    "value_name": "Sí",
    "value_struct": null,
    "values": [{
      "id": "242085",
      "name": "Sí",
      "struct": null
    }],
    "attribute_group_id": "OTHERS",
    "attribute_group_name": "Otros"
  }, {
    "id": "WITH_CAMERA",
    "name": "Con cámara",
    "value_id": "242085",
    "value_name": "Sí",
    "value_struct": null,
    "values": [{
      "id": "242085",
      "name": "Sí",
      "struct": null
    }],
    "attribute_group_id": "OTHERS",
    "attribute_group_name": "Otros"
  }, {
    "id": "WITH_ESIM",
    "name": "Con eSIM",
    "value_id": "242084",
    "value_name": "No",
    "value_struct": null,
    "values": [{
      "id": "242084",
      "name": "No",
      "struct": null
    }],
    "attribute_group_id": "OTHERS",
    "attribute_group_name": "Otros"
  }, {
    "id": "WITH_FACIAL_RECOGNITION",
    "name": "Con reconocimiento facial",
    "value_id": "242085",
    "value_name": "Sí",
    "value_struct": null,
    "values": [{
      "id": "242085",
      "name": "Sí",
      "struct": null
    }],
    "attribute_group_id": "OTHERS",
    "attribute_group_name": "Otros"
  }, {
    "id": "WITH_FAST_CHARGING",
    "name": "Con carga rápida",
    "value_id": "242085",
    "value_name": "Sí",
    "value_struct": null,
    "values": [{
      "id": "242085",
      "name": "Sí",
      "struct": null
    }],
    "attribute_group_id": "OTHERS",
    "attribute_group_name": "Otros"
  }, {
    "id": "WITH_FINGERPRINT_READER",
    "name": "Con lector de huella digital",
    "value_id": "242085",
    "value_name": "Sí",
    "value_struct": null,
    "values": [{
      "id": "242085",
      "name": "Sí",
      "struct": null
    }],
    "attribute_group_id": "OTHERS",
    "attribute_group_name": "Otros"
  }, {
    "id": "WITH_FRONT_CAMERA_FLASH",
    "name": "Con flash en la cámara frontal",
    "value_id": "242084",
    "value_name": "No",
    "value_struct": null,
    "values": [{
      "id": "242084",
      "name": "No",
      "struct": null
    }],
    "attribute_group_id": "OTHERS",
    "attribute_group_name": "Otros"
  }, {
    "id": "WITH_GPS",
    "name": "Con GPS",
    "value_id": "242085",
    "value_name": "Sí",
    "value_struct": null,
    "values": [{
      "id": "242085",
      "name": "Sí",
      "struct": null
    }],
    "attribute_group_id": "OTHERS",
    "attribute_group_name": "Otros"
  }, {
    "id": "WITH_GYROSCOPE",
    "name": "Con giroscopio",
    "value_id": "242085",
    "value_name": "Sí",
    "value_struct": null,
    "values": [{
      "id": "242085",
      "name": "Sí",
      "struct": null
    }],
    "attribute_group_id": "OTHERS",
    "attribute_group_name": "Otros"
  }, {
    "id": "WITH_IMEI",
    "name": "Con IMEI",
    "value_id": "242085",
    "value_name": "Sí",
    "value_struct": null,
    "values": [{
      "id": "242085",
      "name": "Sí",
      "struct": null
    }],
    "attribute_group_id": "OTHERS",
    "attribute_group_name": "Otros"
  }, {
    "id": "WITH_MINI_HDMI",
    "name": "Con mini HDMI",
    "value_id": "242084",
    "value_name": "No",
    "value_struct": null,
    "values": [{
      "id": "242084",
      "name": "No",
      "struct": null
    }],
    "attribute_group_id": "OTHERS",
    "attribute_group_name": "Otros"
  }, {
    "id": "WITH_PHYSICAL_QWERTY_KEYBOARD",
    "name": "Con teclado QWERTY físico",
    "value_id": "242084",
    "value_name": "No",
    "value_struct": null,
    "values": [{
      "id": "242084",
      "name": "No",
      "struct": null
    }],
    "attribute_group_id": "OTHERS",
    "attribute_group_name": "Otros"
  }, {
    "id": "WITH_PROXIMITY_SENSOR",
    "name": "Con sensor de proximidad",
    "value_id": "242085",
    "value_name": "Sí",
    "value_struct": null,
    "values": [{
      "id": "242085",
      "name": "Sí",
      "struct": null
    }],
    "attribute_group_id": "OTHERS",
    "attribute_group_name": "Otros"
  }, {
    "id": "WITH_RADIO",
    "name": "Con radio",
    "value_id": "242084",
    "value_name": "No",
    "value_struct": null,
    "values": [{
      "id": "242084",
      "name": "No",
      "struct": null
    }],
    "attribute_group_id": "OTHERS",
    "attribute_group_name": "Otros"
  }, {
    "id": "WITH_REMOVABLE_BATTERY",
    "name": "Con batería removible",
    "value_id": "242084",
    "value_name": "No",
    "value_struct": null,
    "values": [{
      "id": "242084",
      "name": "No",
      "struct": null
    }],
    "attribute_group_id": "OTHERS",
    "attribute_group_name": "Otros"
  }, {
    "id": "WITH_TOUCHSCREEN_DISPLAY",
    "name": "Con pantalla táctil",
    "value_id": "242085",
    "value_name": "Sí",
    "value_struct": null,
    "values": [{
      "id": "242085",
      "name": "Sí",
      "struct": null
    }],
    "attribute_group_id": "OTHERS",
    "attribute_group_name": "Otros"
  }, {
    "id": "WITH_TV_TUNER",
    "name": "Con sintonizador de TV",
    "value_id": "242084",
    "value_name": "No",
    "value_struct": null,
    "values": [{
      "id": "242084",
      "name": "No",
      "struct": null
    }],
    "attribute_group_id": "OTHERS",
    "attribute_group_name": "Otros"
  }, {
    "id": "WITH_USB_CONNECTOR",
    "name": "Con conector USB",
    "value_id": "242085",
    "value_name": "Sí",
    "value_struct": null,
    "values": [{
      "id": "242085",
      "name": "Sí",
      "struct": null
    }],
    "attribute_group_id": "OTHERS",
    "attribute_group_name": "Otros"
  }, {
    "id": "WITH_WIFI",
    "name": "Con Wi-Fi",
    "value_id": "242085",
    "value_name": "Sí",
    "value_struct": null,
    "values": [{
      "id": "242085",
      "name": "Sí",
      "struct": null
    }],
    "attribute_group_id": "OTHERS",
    "attribute_group_name": "Otros"
  }, {
    "id": "WITH_WIRELESS_CHARGING",
    "name": "Con carga inalámbrica",
    "value_id": "242085",
    "value_name": "Sí",
    "value_struct": null,
    "values": [{
      "id": "242085",
      "name": "Sí",
      "struct": null
    }],
    "attribute_group_id": "OTHERS",
    "attribute_group_name": "Otros"
  }],
  "warnings": [],
  "listing_source": "",
  "variations": [{
    "id": 72054349073,
    "price": 49999.00,
    "attribute_combinations": [{
      "id": "COLOR",
      "name": "Color",
      "value_id": "6807997",
      "value_name": "Negro prisma",
      "value_struct": null,
      "values": [{
        "id": "6807997",
        "name": "Negro prisma",
        "struct": null
      }]
    }],
    "available_quantity": 500,
    "sold_quantity": 5,
    "sale_terms": [],
    "picture_ids": ["977979-MLA44456365404_122020", "609482-MLA47497958670_092021", "626328-MLA44456373038_122020", "769010-MLA44456373037_122020", "632221-MLA44456360117_122020", "885488-MLA44456360118_122020", "982725-MLA44456357268_122020", "766295-MLA44456344766_122020", "757854-MLA44456357270_122020"],
    "catalog_product_id": "MLA14186165"
  }],
  "status": "active",
  "sub_status": [],
  "tags": ["brand_verified", "good_quality_picture", "good_quality_thumbnail", "loyalty_discount_eligible", "immediate_payment", "cart_eligible"],
  "warranty": "Garantía del vendedor: 3 meses",
  "catalog_product_id": "MLA14186164",
  "domain_id": "MLA-CELLPHONES",
  "parent_item_id": null,
  "differential_pricing": null,
  "deal_ids": ["MLA6500"],
  "automatic_relist": false,
  "date_created": "2020-12-30T18:58:45.000Z",
  "last_updated": "2021-10-07T12:48:48.836Z",
  "health": 0.9,
  "catalog_listing": false,
  "channels": ["marketplace", "mshops"]
}, {
  "id": "MLA920067745",
  "site_id": "MLA",
  "title": "Samsung Galaxy S10e 128gb Dual Cam Refabricado Liberado",
  "subtitle": null,
  "seller_id": 119914491,
  "category_id": "MLA1055",
  "official_store_id": null,
  "price": 44999,
  "base_price": 44999,
  "original_price": null,
  "currency_id": "ARS",
  "initial_quantity": 10,
  "available_quantity": 1,
  "sold_quantity": 5,
  "sale_terms": [{
    "id": "WARRANTY_TIME",
    "name": "Tiempo de garantía",
    "value_id": null,
    "value_name": "3 meses",
    "value_struct": {
      "number": 3,
      "unit": "meses"
    },
    "values": [{
      "id": null,
      "name": "3 meses",
      "struct": {
        "number": 3,
        "unit": "meses"
      }
    }]
  }, {
    "id": "WARRANTY_TYPE",
    "name": "Tipo de garantía",
    "value_id": "2230280",
    "value_name": "Garantía del vendedor",
    "value_struct": null,
    "values": [{
      "id": "2230280",
      "name": "Garantía del vendedor",
      "struct": null
    }]
  }],
  "buying_mode": "buy_it_now",
  "listing_type_id": "gold_special",
  "start_time": "2021-05-10T20:47:38.000Z",
  "stop_time": "2041-05-05T04:00:00.000Z",
  "condition": "new",
  "permalink": "https://articulo.mercadolibre.com.ar/MLA-920067745-samsung-galaxy-s10e-128gb-dual-cam-refabricado-liberado-_JM",
  "thumbnail_id": "616749-MLA45884118157_052021",
  "thumbnail": "http://http2.mlstatic.com/D_616749-MLA45884118157_052021-I.jpg",
  "secure_thumbnail": "https://http2.mlstatic.com/D_616749-MLA45884118157_052021-I.jpg",
  "pictures": [{
    "id": "616749-MLA45884118157_052021",
    "url": "http://http2.mlstatic.com/D_616749-MLA45884118157_052021-O.jpg",
    "secure_url": "https://http2.mlstatic.com/D_616749-MLA45884118157_052021-O.jpg",
    "size": "440x500",
    "max_size": "924x1048",
    "quality": ""
  }, {
    "id": "838679-MLA47498064921_092021",
    "url": "http://http2.mlstatic.com/D_838679-MLA47498064921_092021-O.jpg",
    "secure_url": "https://http2.mlstatic.com/D_838679-MLA47498064921_092021-O.jpg",
    "size": "500x465",
    "max_size": "528x492",
    "quality": ""
  }, {
    "id": "893736-MLA45884037812_052021",
    "url": "http://http2.mlstatic.com/D_893736-MLA45884037812_052021-O.jpg",
    "secure_url": "https://http2.mlstatic.com/D_893736-MLA45884037812_052021-O.jpg",
    "size": "250x500",
    "max_size": "524x1048",
    "quality": ""
  }, {
    "id": "797600-MLA45884081485_052021",
    "url": "http://http2.mlstatic.com/D_797600-MLA45884081485_052021-O.jpg",
    "secure_url": "https://http2.mlstatic.com/D_797600-MLA45884081485_052021-O.jpg",
    "size": "249x500",
    "max_size": "523x1048",
    "quality": ""
  }, {
    "id": "981509-MLA45884126093_052021",
    "url": "http://http2.mlstatic.com/D_981509-MLA45884126093_052021-O.jpg",
    "secure_url": "https://http2.mlstatic.com/D_981509-MLA45884126093_052021-O.jpg",
    "size": "233x500",
    "max_size": "496x1062",
    "quality": ""
  }, {
    "id": "912306-MLA45884102358_052021",
    "url": "http://http2.mlstatic.com/D_912306-MLA45884102358_052021-O.jpg",
    "secure_url": "https://http2.mlstatic.com/D_912306-MLA45884102358_052021-O.jpg",
    "size": "500x500",
    "max_size": "1080x1080",
    "quality": ""
  }, {
    "id": "661645-MLA45884061647_052021",
    "url": "http://http2.mlstatic.com/D_661645-MLA45884061647_052021-O.jpg",
    "secure_url": "https://http2.mlstatic.com/D_661645-MLA45884061647_052021-O.jpg",
    "size": "500x500",
    "max_size": "1080x1080",
    "quality": ""
  }, {
    "id": "704120-MLA45884055686_052021",
    "url": "http://http2.mlstatic.com/D_704120-MLA45884055686_052021-O.jpg",
    "secure_url": "https://http2.mlstatic.com/D_704120-MLA45884055686_052021-O.jpg",
    "size": "500x500",
    "max_size": "1080x1080",
    "quality": ""
  }, {
    "id": "905630-MLA45884009967_052021",
    "url": "http://http2.mlstatic.com/D_905630-MLA45884009967_052021-O.jpg",
    "secure_url": "https://http2.mlstatic.com/D_905630-MLA45884009967_052021-O.jpg",
    "size": "500x500",
    "max_size": "1080x1080",
    "quality": ""
  }, {
    "id": "946262-MLA45884128110_052021",
    "url": "http://http2.mlstatic.com/D_946262-MLA45884128110_052021-O.jpg",
    "secure_url": "https://http2.mlstatic.com/D_946262-MLA45884128110_052021-O.jpg",
    "size": "500x500",
    "max_size": "1080x1080",
    "quality": ""
  }],
  "video_id": null,
  "descriptions": [{
    "id": "MLA920067745-3458210724"
  }],
  "accepts_mercadopago": true,
  "non_mercado_pago_payment_methods": [],
  "shipping": {
    "mode": "me2",
    "free_methods": [{
      "id": 73328,
      "rule": {
        "default": true,
        "free_mode": "country",
        "free_shipping_flag": true,
        "value": null
      }
    }],
    "tags": ["self_service_in", "mandatory_free_shipping"],
    "dimensions": null,
    "local_pick_up": true,
    "free_shipping": true,
    "logistic_type": "cross_docking",
    "store_pick_up": false
  },
  "international_delivery_mode": "none",
  "seller_address": {
    "city": {
      "id": "TUxBQlNBQTM3Mzda",
      "name": "Saavedra"
    },
    "state": {
      "id": "AR-C",
      "name": "Capital Federal"
    },
    "country": {
      "id": "AR",
      "name": "Argentina"
    },
    "search_location": {
      "neighborhood": {
        "id": "TUxBQlNBQTM3Mzda",
        "name": "Saavedra"
      },
      "city": {
        "id": "TUxBQ0NBUGZlZG1sYQ",
        "name": "Capital Federal"
      },
      "state": {
        "id": "TUxBUENBUGw3M2E1",
        "name": "Capital Federal"
      }
    },
    "id": 1188804068
  },
  "seller_contact": null,
  "location": {},
  "coverage_areas": [],
  "attributes": [{
    "id": "BATTERY_CAPACITY",
    "name": "Capacidad de la batería",
    "value_id": "142962",
    "value_name": "3100 mAh",
    "value_struct": {
      "number": 3100,
      "unit": "mAh"
    },
    "values": [{
      "id": "142962",
      "name": "3100 mAh",
      "struct": {
        "number": 3100,
        "unit": "mAh"
      }
    }],
    "attribute_group_id": "OTHERS",
    "attribute_group_name": "Otros"
  }, {
    "id": "BATTERY_TYPE",
    "name": "Tipo de batería",
    "value_id": "95013",
    "value_name": "Ion de litio",
    "value_struct": null,
    "values": [{
      "id": "95013",
      "name": "Ion de litio",
      "struct": null
    }],
    "attribute_group_id": "OTHERS",
    "attribute_group_name": "Otros"
  }, {
    "id": "BRAND",
    "name": "Marca",
    "value_id": "206",
    "value_name": "Samsung",
    "value_struct": null,
    "values": [{
      "id": "206",
      "name": "Samsung",
      "struct": null
    }],
    "attribute_group_id": "OTHERS",
    "attribute_group_name": "Otros"
  }, {
    "id": "CAMERAS_MAIN_FEATURES",
    "name": "Características principales de las cámaras",
    "value_id": null,
    "value_name": "Scene optimizer,Shot suggestions,Flaw detection,Food,Panorama,Pro,Live focus with bokeh effect,Photo,Video,Super Slow-mo,Slow motion,Hyperlapse,LED flash,Autofocus,Touch focus,OIS,Face detection,Smile detection,HDR",
    "value_struct": null,
    "values": [{
      "id": null,
      "name": "Scene optimizer",
      "struct": null
    }, {
      "id": null,
      "name": "Shot suggestions",
      "struct": null
    }, {
      "id": null,
      "name": "Flaw detection",
      "struct": null
    }, {
      "id": null,
      "name": "Food",
      "struct": null
    }, {
      "id": null,
      "name": "Panorama",
      "struct": null
    }, {
      "id": null,
      "name": "Pro",
      "struct": null
    }, {
      "id": null,
      "name": "Live focus with bokeh effect",
      "struct": null
    }, {
      "id": null,
      "name": "Photo",
      "struct": null
    }, {
      "id": null,
      "name": "Video",
      "struct": null
    }, {
      "id": null,
      "name": "Super Slow-mo",
      "struct": null
    }, {
      "id": null,
      "name": "Slow motion",
      "struct": null
    }, {
      "id": null,
      "name": "Hyperlapse",
      "struct": null
    }, {
      "id": null,
      "name": "LED flash",
      "struct": null
    }, {
      "id": null,
      "name": "Autofocus",
      "struct": null
    }, {
      "id": null,
      "name": "Touch focus",
      "struct": null
    }, {
      "id": null,
      "name": "OIS",
      "struct": null
    }, {
      "id": null,
      "name": "Face detection",
      "struct": null
    }, {
      "id": null,
      "name": "Smile detection",
      "struct": null
    }, {
      "id": null,
      "name": "HDR",
      "struct": null
    }],
    "attribute_group_id": "OTHERS",
    "attribute_group_name": "Otros"
  }, {
    "id": "CARRIER",
    "name": "Compañía telefónica",
    "value_id": "298335",
    "value_name": "Liberado",
    "value_struct": null,
    "values": [{
      "id": "298335",
      "name": "Liberado",
      "struct": null
    }],
    "attribute_group_id": "OTHERS",
    "attribute_group_name": "Otros"
  }, {
    "id": "CHARGE_CONNECTOR_TYPE",
    "name": "Tipo de conector de carga",
    "value_id": "8275367",
    "value_name": "USB-C",
    "value_struct": null,
    "values": [{
      "id": "8275367",
      "name": "USB-C",
      "struct": null
    }],
    "attribute_group_id": "OTHERS",
    "attribute_group_name": "Otros"
  }, {
    "id": "DEPTH",
    "name": "Profundidad",
    "value_id": "6901708",
    "value_name": "7.9 mm",
    "value_struct": {
      "number": 7.9,
      "unit": "mm"
    },
    "values": [{
      "id": "6901708",
      "name": "7.9 mm",
      "struct": {
        "number": 7.9,
        "unit": "mm"
      }
    }],
    "attribute_group_id": "OTHERS",
    "attribute_group_name": "Otros"
  }, {
    "id": "DIGITAL_ZOOM",
    "name": "Zoom digital",
    "value_id": "1339",
    "value_name": "8x",
    "value_struct": {
      "number": 8,
      "unit": "x"
    },
    "values": [{
      "id": "1339",
      "name": "8x",
      "struct": {
        "number": 8,
        "unit": "x"
      }
    }],
    "attribute_group_id": "OTHERS",
    "attribute_group_name": "Otros"
  }, {
    "id": "DISPLAY_PIXELS_PER_INCH",
    "name": "Píxeles por pulgada",
    "value_id": "9698036",
    "value_name": "438 ppi",
    "value_struct": {
      "number": 438,
      "unit": "ppi"
    },
    "values": [{
      "id": "9698036",
      "name": "438 ppi",
      "struct": {
        "number": 438,
        "unit": "ppi"
      }
    }],
    "attribute_group_id": "OTHERS",
    "attribute_group_name": "Otros"
  }, {
    "id": "DISPLAY_RESOLUTION",
    "name": "Resolución de la pantalla",
    "value_id": "7209635",
    "value_name": "1080 px x 2280 px",
    "value_struct": null,
    "values": [{
      "id": "7209635",
      "name": "1080 px x 2280 px",
      "struct": null
    }],
    "attribute_group_id": "OTHERS",
    "attribute_group_name": "Otros"
  }, {
    "id": "DISPLAY_RESOLUTION_TYPE",
    "name": "Tipo de resolución de la pantalla ",
    "value_id": "9568930",
    "value_name": "Full HD+",
    "value_struct": null,
    "values": [{
      "id": "9568930",
      "name": "Full HD+",
      "struct": null
    }],
    "attribute_group_id": "OTHERS",
    "attribute_group_name": "Otros"
  }, {
    "id": "DISPLAY_SIZE",
    "name": "Tamaño de la pantalla",
    "value_id": "6927988",
    "value_name": "5.8 \"",
    "value_struct": {
      "number": 5.8,
      "unit": "\""
    },
    "values": [{
      "id": "6927988",
      "name": "5.8 \"",
      "struct": {
        "number": 5.8,
        "unit": "\""
      }
    }],
    "attribute_group_id": "OTHERS",
    "attribute_group_name": "Otros"
  }, {
    "id": "DISPLAY_TECHNOLOGY",
    "name": "Tecnología de la pantalla",
    "value_id": "7453381",
    "value_name": "Dynamic AMOLED",
    "value_struct": null,
    "values": [{
      "id": "7453381",
      "name": "Dynamic AMOLED",
      "struct": null
    }],
    "attribute_group_id": "OTHERS",
    "attribute_group_name": "Otros"
  }, {
    "id": "DISPLAY_TYPE",
    "name": "Tipo de pantalla",
    "value_id": "9606643",
    "value_name": "Infinity-O Display",
    "value_struct": null,
    "values": [{
      "id": "9606643",
      "name": "Infinity-O Display",
      "struct": null
    }],
    "attribute_group_id": "OTHERS",
    "attribute_group_name": "Otros"
  }, {
    "id": "FRONT_CAMERAS_NUMBER",
    "name": "Cantidad de cámaras frontales",
    "value_id": "7477216",
    "value_name": "1",
    "value_struct": null,
    "values": [{
      "id": "7477216",
      "name": "1",
      "struct": null
    }],
    "attribute_group_id": "OTHERS",
    "attribute_group_name": "Otros"
  }, {
    "id": "FRONT_CAMERA_APERTURE",
    "name": "Apertura del diafragma de la cámara frontal",
    "value_id": "7439050",
    "value_name": "f 1.9",
    "value_struct": null,
    "values": [{
      "id": "7439050",
      "name": "f 1.9",
      "struct": null
    }],
    "attribute_group_id": "OTHERS",
    "attribute_group_name": "Otros"
  }, {
    "id": "FRONT_CAMERA_RECORDING_RESOLUTION",
    "name": "Resolución de video de la cámara frontal",
    "value_id": "7207112",
    "value_name": "3840 px x 2160 px",
    "value_struct": null,
    "values": [{
      "id": "7207112",
      "name": "3840 px x 2160 px",
      "struct": null
    }],
    "attribute_group_id": "OTHERS",
    "attribute_group_name": "Otros"
  }, {
    "id": "GTIN",
    "name": "Código universal de producto",
    "value_id": null,
    "value_name": "887276295039",
    "value_struct": null,
    "values": [{
      "id": null,
      "name": "887276295039",
      "struct": null
    }],
    "attribute_group_id": "OTHERS",
    "attribute_group_name": "Otros"
  }, {
    "id": "HEIGHT",
    "name": "Altura",
    "value_id": "7460794",
    "value_name": "142.2 mm",
    "value_struct": {
      "number": 142.2,
      "unit": "mm"
    },
    "values": [{
      "id": "7460794",
      "name": "142.2 mm",
      "struct": {
        "number": 142.2,
        "unit": "mm"
      }
    }],
    "attribute_group_id": "OTHERS",
    "attribute_group_name": "Otros"
  }, {
    "id": "INTERNAL_MEMORY",
    "name": "Memoria interna",
    "value_id": null,
    "value_name": "128 GB",
    "value_struct": {
      "number": 128,
      "unit": "GB"
    },
    "values": [{
      "id": null,
      "name": "128 GB",
      "struct": {
        "number": 128,
        "unit": "GB"
      }
    }],
    "attribute_group_id": "OTHERS",
    "attribute_group_name": "Otros"
  }, {
    "id": "IP_RATING",
    "name": "Clasificación IP",
    "value_id": "8275373",
    "value_name": "IP68",
    "value_struct": null,
    "values": [{
      "id": "8275373",
      "name": "IP68",
      "struct": null
    }],
    "attribute_group_id": "OTHERS",
    "attribute_group_name": "Otros"
  }, {
    "id": "IS_DUAL_SIM",
    "name": "Es Dual SIM",
    "value_id": "242084",
    "value_name": "No",
    "value_struct": null,
    "values": [{
      "id": "242084",
      "name": "No",
      "struct": null
    }],
    "attribute_group_id": "OTHERS",
    "attribute_group_name": "Otros"
  }, {
    "id": "IS_DUST_RESISTANT",
    "name": "Es resistente al polvo",
    "value_id": "242085",
    "value_name": "Sí",
    "value_struct": null,
    "values": [{
      "id": "242085",
      "name": "Sí",
      "struct": null
    }],
    "attribute_group_id": "OTHERS",
    "attribute_group_name": "Otros"
  }, {
    "id": "IS_SPLASH_RESISTANT",
    "name": "Es resistente a salpicaduras",
    "value_id": "242085",
    "value_name": "Sí",
    "value_struct": null,
    "values": [{
      "id": "242085",
      "name": "Sí",
      "struct": null
    }],
    "attribute_group_id": "OTHERS",
    "attribute_group_name": "Otros"
  }, {
    "id": "IS_WATERPROOF",
    "name": "Es a prueba de agua",
    "value_id": "242084",
    "value_name": "No",
    "value_struct": null,
    "values": [{
      "id": "242084",
      "name": "No",
      "struct": null
    }],
    "attribute_group_id": "OTHERS",
    "attribute_group_name": "Otros"
  }, {
    "id": "IS_WATER_RESISTANT",
    "name": "Es resistente al agua",
    "value_id": "242085",
    "value_name": "Sí",
    "value_struct": null,
    "values": [{
      "id": "242085",
      "name": "Sí",
      "struct": null
    }],
    "attribute_group_id": "OTHERS",
    "attribute_group_name": "Otros"
  }, {
    "id": "ITEM_CONDITION",
    "name": "Condición del ítem",
    "value_id": "2230582",
    "value_name": "Reacondicionado",
    "value_struct": null,
    "values": [{
      "id": "2230582",
      "name": "Reacondicionado",
      "struct": null
    }],
    "attribute_group_id": "OTHERS",
    "attribute_group_name": "Otros"
  }, {
    "id": "LINE",
    "name": "Línea",
    "value_id": "249991",
    "value_name": "Galaxy S",
    "value_struct": null,
    "values": [{
      "id": "249991",
      "name": "Galaxy S",
      "struct": null
    }],
    "attribute_group_id": "OTHERS",
    "attribute_group_name": "Otros"
  }, {
    "id": "MAIN_FRONT_CAMERA_RESOLUTION",
    "name": "Resolución de la cámara frontal principal",
    "value_id": "7222497",
    "value_name": "10 Mpx",
    "value_struct": {
      "number": 10,
      "unit": "Mpx"
    },
    "values": [{
      "id": "7222497",
      "name": "10 Mpx",
      "struct": {
        "number": 10,
        "unit": "Mpx"
      }
    }],
    "attribute_group_id": "OTHERS",
    "attribute_group_name": "Otros"
  }, {
    "id": "MAIN_REAR_CAMERA_RESOLUTION",
    "name": "Resolución de la cámara trasera principal",
    "value_id": "7207095",
    "value_name": "16 Mpx",
    "value_struct": {
      "number": 16,
      "unit": "Mpx"
    },
    "values": [{
      "id": "7207095",
      "name": "16 Mpx",
      "struct": {
        "number": 16,
        "unit": "Mpx"
      }
    }],
    "attribute_group_id": "OTHERS",
    "attribute_group_name": "Otros"
  }, {
    "id": "MAX_MEMORY_CARD_CAPACITY",
    "name": "Capacidad máxima de la tarjeta de memoria",
    "value_id": "6901713",
    "value_name": "512 GB",
    "value_struct": {
      "number": 512,
      "unit": "GB"
    },
    "values": [{
      "id": "6901713",
      "name": "512 GB",
      "struct": {
        "number": 512,
        "unit": "GB"
      }
    }],
    "attribute_group_id": "OTHERS",
    "attribute_group_name": "Otros"
  }, {
    "id": "MEMORY_CARD_TYPES",
    "name": "Tipos de tarjeta de memoria",
    "value_id": "7199655",
    "value_name": "MicroSD",
    "value_struct": null,
    "values": [{
      "id": "7199655",
      "name": "MicroSD",
      "struct": null
    }],
    "attribute_group_id": "OTHERS",
    "attribute_group_name": "Otros"
  }, {
    "id": "MOBILE_NETWORK",
    "name": "Red",
    "value_id": "367876",
    "value_name": "4G/LTE",
    "value_struct": null,
    "values": [{
      "id": "367876",
      "name": "4G/LTE",
      "struct": null
    }],
    "attribute_group_id": "OTHERS",
    "attribute_group_name": "Otros"
  }, {
    "id": "MODEL",
    "name": "Modelo",
    "value_id": "100090",
    "value_name": "S10e",
    "value_struct": null,
    "values": [{
      "id": "100090",
      "name": "S10e",
      "struct": null
    }],
    "attribute_group_id": "OTHERS",
    "attribute_group_name": "Otros"
  }, {
    "id": "NUMBER_OF_SIM_CARD_SLOTS",
    "name": "Cantidad de ranuras para tarjeta SIM",
    "value_id": "2087812",
    "value_name": "1",
    "value_struct": null,
    "values": [{
      "id": "2087812",
      "name": "1",
      "struct": null
    }],
    "attribute_group_id": "OTHERS",
    "attribute_group_name": "Otros"
  }, {
    "id": "OPERATING_SYSTEM_NAME",
    "name": "Nombre del sistema operativo",
    "value_id": "7403813",
    "value_name": "Android",
    "value_struct": null,
    "values": [{
      "id": "7403813",
      "name": "Android",
      "struct": null
    }],
    "attribute_group_id": "OTHERS",
    "attribute_group_name": "Otros"
  }, {
    "id": "OPERATING_SYSTEM_ORIGINAL_VERSION",
    "name": "Versión original del sistema operativo",
    "value_id": "7207107",
    "value_name": "9.0 Pie",
    "value_struct": null,
    "values": [{
      "id": "7207107",
      "name": "9.0 Pie",
      "struct": null
    }],
    "attribute_group_id": "OTHERS",
    "attribute_group_name": "Otros"
  }, {
    "id": "OPERATING_SYSTEM_PERSONALIZATION_ORIGINAL_SHELL",
    "name": "Capa original de personalización del sistema operativo",
    "value_id": "7439957",
    "value_name": "One UI",
    "value_struct": null,
    "values": [{
      "id": "7439957",
      "name": "One UI",
      "struct": null
    }],
    "attribute_group_id": "OTHERS",
    "attribute_group_name": "Otros"
  }, {
    "id": "PROCESSOR_CORES_NUMBER",
    "name": "Cantidad de núcleos del procesador",
    "value_id": "7206961",
    "value_name": "8",
    "value_struct": null,
    "values": [{
      "id": "7206961",
      "name": "8",
      "struct": null
    }],
    "attribute_group_id": "OTHERS",
    "attribute_group_name": "Otros"
  }, {
    "id": "PROCESSOR_SPEED",
    "name": "Velocidad del procesador",
    "value_id": "2241389",
    "value_name": "2.7 GHz",
    "value_struct": {
      "number": 2.7,
      "unit": "GHz"
    },
    "values": [{
      "id": "2241389",
      "name": "2.7 GHz",
      "struct": {
        "number": 2.7,
        "unit": "GHz"
      }
    }],
    "attribute_group_id": "OTHERS",
    "attribute_group_name": "Otros"
  }, {
    "id": "RAM",
    "name": "Memoria RAM",
    "value_id": null,
    "value_name": "6 GB",
    "value_struct": {
      "number": 6,
      "unit": "GB"
    },
    "values": [{
      "id": null,
      "name": "6 GB",
      "struct": {
        "number": 6,
        "unit": "GB"
      }
    }],
    "attribute_group_id": "OTHERS",
    "attribute_group_name": "Otros"
  }, {
    "id": "REAR_CAMERAS_NUMBER",
    "name": "Cantidad de cámaras traseras",
    "value_id": "7477262",
    "value_name": "2",
    "value_struct": null,
    "values": [{
      "id": "7477262",
      "name": "2",
      "struct": null
    }],
    "attribute_group_id": "OTHERS",
    "attribute_group_name": "Otros"
  }, {
    "id": "REAR_CAMERAS_RESOLUTION",
    "name": "Resolución de las cámaras traseras",
    "value_id": "7460791",
    "value_name": "16 Mpx/12 Mpx",
    "value_struct": null,
    "values": [{
      "id": "7460791",
      "name": "16 Mpx/12 Mpx",
      "struct": null
    }],
    "attribute_group_id": "OTHERS",
    "attribute_group_name": "Otros"
  }, {
    "id": "REAR_CAMERA_APERTURE",
    "name": "Apertura del diafragma de la cámara trasera",
    "value_id": "9212951",
    "value_name": "f 2.2/f 1.5-2.4",
    "value_struct": null,
    "values": [{
      "id": "9212951",
      "name": "f 2.2/f 1.5-2.4",
      "struct": null
    }],
    "attribute_group_id": "OTHERS",
    "attribute_group_name": "Otros"
  }, {
    "id": "REAR_CAMERA_RECORDING_RESOLUTION",
    "name": "Resolución de video de la cámara trasera",
    "value_id": "7199630",
    "value_name": "3840 px x 2160 px",
    "value_struct": null,
    "values": [{
      "id": "7199630",
      "name": "3840 px x 2160 px",
      "struct": null
    }],
    "attribute_group_id": "OTHERS",
    "attribute_group_name": "Otros"
  }, {
    "id": "RELEASE_MONTH",
    "name": "Mes de lanzamiento",
    "value_id": "8275342",
    "value_name": "Marzo",
    "value_struct": null,
    "values": [{
      "id": "8275342",
      "name": "Marzo",
      "struct": null
    }],
    "attribute_group_id": "OTHERS",
    "attribute_group_name": "Otros"
  }, {
    "id": "RELEASE_YEAR",
    "name": "Año de lanzamiento",
    "value_id": "5057727",
    "value_name": "2019",
    "value_struct": null,
    "values": [{
      "id": "5057727",
      "name": "2019",
      "struct": null
    }],
    "attribute_group_id": "OTHERS",
    "attribute_group_name": "Otros"
  }, {
    "id": "SIM_SIZES",
    "name": "Tamaños de tarjeta SIM compatibles",
    "value_id": "80453",
    "value_name": "Nano-SIM",
    "value_struct": null,
    "values": [{
      "id": "80453",
      "name": "Nano-SIM",
      "struct": null
    }],
    "attribute_group_id": "OTHERS",
    "attribute_group_name": "Otros"
  }, {
    "id": "WEIGHT",
    "name": "Peso",
    "value_id": "963",
    "value_name": "150 g",
    "value_struct": {
      "number": 150,
      "unit": "g"
    },
    "values": [{
      "id": "963",
      "name": "150 g",
      "struct": {
        "number": 150,
        "unit": "g"
      }
    }],
    "attribute_group_id": "OTHERS",
    "attribute_group_name": "Otros"
  }, {
    "id": "WIDTH",
    "name": "Ancho",
    "value_id": "7091122",
    "value_name": "69.9 mm",
    "value_struct": {
      "number": 69.9,
      "unit": "mm"
    },
    "values": [{
      "id": "7091122",
      "name": "69.9 mm",
      "struct": {
        "number": 69.9,
        "unit": "mm"
      }
    }],
    "attribute_group_id": "OTHERS",
    "attribute_group_name": "Otros"
  }, {
    "id": "WITH_3_5_JACK",
    "name": "Con jack 3.5",
    "value_id": "242085",
    "value_name": "Sí",
    "value_struct": null,
    "values": [{
      "id": "242085",
      "name": "Sí",
      "struct": null
    }],
    "attribute_group_id": "OTHERS",
    "attribute_group_name": "Otros"
  }, {
    "id": "WITH_ACCELEROMETER",
    "name": "Con acelerómetro",
    "value_id": "242085",
    "value_name": "Sí",
    "value_struct": null,
    "values": [{
      "id": "242085",
      "name": "Sí",
      "struct": null
    }],
    "attribute_group_id": "OTHERS",
    "attribute_group_name": "Otros"
  }, {
    "id": "WITH_BAROMETER",
    "name": "Con barómetro",
    "value_id": "242085",
    "value_name": "Sí",
    "value_struct": null,
    "values": [{
      "id": "242085",
      "name": "Sí",
      "struct": null
    }],
    "attribute_group_id": "OTHERS",
    "attribute_group_name": "Otros"
  }, {
    "id": "WITH_BLUETOOTH",
    "name": "Con Bluetooth",
    "value_id": "242085",
    "value_name": "Sí",
    "value_struct": null,
    "values": [{
      "id": "242085",
      "name": "Sí",
      "struct": null
    }],
    "attribute_group_id": "OTHERS",
    "attribute_group_name": "Otros"
  }, {
    "id": "WITH_CAMERA",
    "name": "Con cámara",
    "value_id": "242085",
    "value_name": "Sí",
    "value_struct": null,
    "values": [{
      "id": "242085",
      "name": "Sí",
      "struct": null
    }],
    "attribute_group_id": "OTHERS",
    "attribute_group_name": "Otros"
  }, {
    "id": "WITH_COMPASS",
    "name": "Con brújula",
    "value_id": "242085",
    "value_name": "Sí",
    "value_struct": null,
    "values": [{
      "id": "242085",
      "name": "Sí",
      "struct": null
    }],
    "attribute_group_id": "OTHERS",
    "attribute_group_name": "Otros"
  }, {
    "id": "WITH_ESIM",
    "name": "Con eSIM",
    "value_id": "242084",
    "value_name": "No",
    "value_struct": null,
    "values": [{
      "id": "242084",
      "name": "No",
      "struct": null
    }],
    "attribute_group_id": "OTHERS",
    "attribute_group_name": "Otros"
  }, {
    "id": "WITH_FACIAL_RECOGNITION",
    "name": "Con reconocimiento facial",
    "value_id": "242085",
    "value_name": "Sí",
    "value_struct": null,
    "values": [{
      "id": "242085",
      "name": "Sí",
      "struct": null
    }],
    "attribute_group_id": "OTHERS",
    "attribute_group_name": "Otros"
  }, {
    "id": "WITH_FAST_CHARGING",
    "name": "Con carga rápida",
    "value_id": "242085",
    "value_name": "Sí",
    "value_struct": null,
    "values": [{
      "id": "242085",
      "name": "Sí",
      "struct": null
    }],
    "attribute_group_id": "OTHERS",
    "attribute_group_name": "Otros"
  }, {
    "id": "WITH_FINGERPRINT_READER",
    "name": "Con lector de huella digital",
    "value_id": "242085",
    "value_name": "Sí",
    "value_struct": null,
    "values": [{
      "id": "242085",
      "name": "Sí",
      "struct": null
    }],
    "attribute_group_id": "OTHERS",
    "attribute_group_name": "Otros"
  }, {
    "id": "WITH_FRONT_CAMERA_FLASH",
    "name": "Con flash en la cámara frontal",
    "value_id": "242084",
    "value_name": "No",
    "value_struct": null,
    "values": [{
      "id": "242084",
      "name": "No",
      "struct": null
    }],
    "attribute_group_id": "OTHERS",
    "attribute_group_name": "Otros"
  }, {
    "id": "WITH_GPS",
    "name": "Con GPS",
    "value_id": "242085",
    "value_name": "Sí",
    "value_struct": null,
    "values": [{
      "id": "242085",
      "name": "Sí",
      "struct": null
    }],
    "attribute_group_id": "OTHERS",
    "attribute_group_name": "Otros"
  }, {
    "id": "WITH_GYROSCOPE",
    "name": "Con giroscopio",
    "value_id": "242085",
    "value_name": "Sí",
    "value_struct": null,
    "values": [{
      "id": "242085",
      "name": "Sí",
      "struct": null
    }],
    "attribute_group_id": "OTHERS",
    "attribute_group_name": "Otros"
  }, {
    "id": "WITH_IMEI",
    "name": "Con IMEI",
    "value_id": "242085",
    "value_name": "Sí",
    "value_struct": null,
    "values": [{
      "id": "242085",
      "name": "Sí",
      "struct": null
    }],
    "attribute_group_id": "OTHERS",
    "attribute_group_name": "Otros"
  }, {
    "id": "WITH_MEMORY_CARD_SLOT",
    "name": "Con ranura para tarjeta de memoria",
    "value_id": "242085",
    "value_name": "Sí",
    "value_struct": null,
    "values": [{
      "id": "242085",
      "name": "Sí",
      "struct": null
    }],
    "attribute_group_id": "OTHERS",
    "attribute_group_name": "Otros"
  }, {
    "id": "WITH_MINI_HDMI",
    "name": "Con mini HDMI",
    "value_id": "242084",
    "value_name": "No",
    "value_struct": null,
    "values": [{
      "id": "242084",
      "name": "No",
      "struct": null
    }],
    "attribute_group_id": "OTHERS",
    "attribute_group_name": "Otros"
  }, {
    "id": "WITH_NFC",
    "name": "Con NFC",
    "value_id": "242085",
    "value_name": "Sí",
    "value_struct": null,
    "values": [{
      "id": "242085",
      "name": "Sí",
      "struct": null
    }],
    "attribute_group_id": "OTHERS",
    "attribute_group_name": "Otros"
  }, {
    "id": "WITH_PHYSICAL_QWERTY_KEYBOARD",
    "name": "Con teclado QWERTY físico",
    "value_id": "242084",
    "value_name": "No",
    "value_struct": null,
    "values": [{
      "id": "242084",
      "name": "No",
      "struct": null
    }],
    "attribute_group_id": "OTHERS",
    "attribute_group_name": "Otros"
  }, {
    "id": "WITH_PROXIMITY_SENSOR",
    "name": "Con sensor de proximidad",
    "value_id": "242085",
    "value_name": "Sí",
    "value_struct": null,
    "values": [{
      "id": "242085",
      "name": "Sí",
      "struct": null
    }],
    "attribute_group_id": "OTHERS",
    "attribute_group_name": "Otros"
  }, {
    "id": "WITH_RADIO",
    "name": "Con radio",
    "value_id": "242085",
    "value_name": "Sí",
    "value_struct": null,
    "values": [{
      "id": "242085",
      "name": "Sí",
      "struct": null
    }],
    "attribute_group_id": "OTHERS",
    "attribute_group_name": "Otros"
  }, {
    "id": "WITH_REMOVABLE_BATTERY",
    "name": "Con batería removible",
    "value_id": "242084",
    "value_name": "No",
    "value_struct": null,
    "values": [{
      "id": "242084",
      "name": "No",
      "struct": null
    }],
    "attribute_group_id": "OTHERS",
    "attribute_group_name": "Otros"
  }, {
    "id": "WITH_TOUCHSCREEN_DISPLAY",
    "name": "Con pantalla táctil",
    "value_id": "242085",
    "value_name": "Sí",
    "value_struct": null,
    "values": [{
      "id": "242085",
      "name": "Sí",
      "struct": null
    }],
    "attribute_group_id": "OTHERS",
    "attribute_group_name": "Otros"
  }, {
    "id": "WITH_TV_TUNER",
    "name": "Con sintonizador de TV",
    "value_id": "242084",
    "value_name": "No",
    "value_struct": null,
    "values": [{
      "id": "242084",
      "name": "No",
      "struct": null
    }],
    "attribute_group_id": "OTHERS",
    "attribute_group_name": "Otros"
  }, {
    "id": "WITH_USB_CONNECTOR",
    "name": "Con conector USB",
    "value_id": "242085",
    "value_name": "Sí",
    "value_struct": null,
    "values": [{
      "id": "242085",
      "name": "Sí",
      "struct": null
    }],
    "attribute_group_id": "OTHERS",
    "attribute_group_name": "Otros"
  }, {
    "id": "WITH_WIFI",
    "name": "Con Wi-Fi",
    "value_id": "242085",
    "value_name": "Sí",
    "value_struct": null,
    "values": [{
      "id": "242085",
      "name": "Sí",
      "struct": null
    }],
    "attribute_group_id": "OTHERS",
    "attribute_group_name": "Otros"
  }, {
    "id": "WITH_WIRELESS_CHARGING",
    "name": "Con carga inalámbrica",
    "value_id": "242085",
    "value_name": "Sí",
    "value_struct": null,
    "values": [{
      "id": "242085",
      "name": "Sí",
      "struct": null
    }],
    "attribute_group_id": "OTHERS",
    "attribute_group_name": "Otros"
  }],
  "warnings": [],
  "listing_source": "",
  "variations": [{
    "id": 84211047599,
    "price": 44999.00,
    "attribute_combinations": [{
      "id": "COLOR",
      "name": "Color",
      "value_id": "7834729",
      "value_name": "Prism black",
      "value_struct": null,
      "values": [{
        "id": "7834729",
        "name": "Prism black",
        "struct": null
      }]
    }],
    "available_quantity": 1,
    "sold_quantity": 5,
    "sale_terms": [],
    "picture_ids": ["616749-MLA45884118157_052021", "838679-MLA47498064921_092021", "893736-MLA45884037812_052021", "797600-MLA45884081485_052021", "981509-MLA45884126093_052021", "912306-MLA45884102358_052021", "661645-MLA45884061647_052021", "704120-MLA45884055686_052021", "905630-MLA45884009967_052021", "946262-MLA45884128110_052021"],
    "catalog_product_id": "MLA14186207"
  }],
  "status": "active",
  "sub_status": [],
  "tags": ["good_quality_picture", "good_quality_thumbnail", "loyalty_discount_eligible", "immediate_payment", "cart_eligible"],
  "warranty": "Garantía del vendedor: 3 meses",
  "catalog_product_id": "MLA14186206",
  "domain_id": "MLA-CELLPHONES",
  "parent_item_id": null,
  "differential_pricing": null,
  "deal_ids": ["MLA6500"],
  "automatic_relist": false,
  "date_created": "2021-05-10T20:47:38.000Z",
  "last_updated": "2021-10-06T19:30:34.777Z",
  "health": 0.9,
  "catalog_listing": false,
  "channels": ["marketplace", "mshops"]
}];
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (items);

/***/ }),

/***/ "./src/javascript/services/MeliProductEquivalence.js":
/*!***********************************************************!*\
  !*** ./src/javascript/services/MeliProductEquivalence.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  'MLA': 'es-ar',
  'MLB': 'pt-br'
});

/***/ }),

/***/ "./src/javascript/services/SearchItems.js":
/*!************************************************!*\
  !*** ./src/javascript/services/SearchItems.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants */ "./src/javascript/constants/index.js");
/* harmony import */ var _mocks_items__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../mocks/items */ "./src/javascript/mocks/items.js");

 // Remove this

function shuffleArray(array) {
  for (var i = array.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }

  return array;
}

class SearchItems {
  async searchByName(term) {
    return fetch(`${_constants__WEBPACK_IMPORTED_MODULE_0__["default"].API_URL + _constants__WEBPACK_IMPORTED_MODULE_0__["default"].SEARCH_ENDPOINT}?q=${term}`).then(data => data.json()).then(data => window.products = data); // return new Promise((resolve, reject) => {
    //     const result = shuffleArray(items)
    //     window.products = result
    //     setTimeout(() => resolve(result), 500 )
    // })
  }

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (new SearchItems());

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*********************************!*\
  !*** ./src/javascript/index.js ***!
  \*********************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "elements": () => (/* reexport safe */ _interface_domElements__WEBPACK_IMPORTED_MODULE_0__["default"]),
/* harmony export */   "toggleOffLoader": () => (/* binding */ toggleOffLoader),
/* harmony export */   "toggleOnLoader": () => (/* binding */ toggleOnLoader),
/* harmony export */   "updateCompareTable": () => (/* reexport safe */ _interface_actions_updateCompareTable__WEBPACK_IMPORTED_MODULE_9__["default"]),
/* harmony export */   "updateSearchResults": () => (/* reexport safe */ _interface_actions_updateSearchResults__WEBPACK_IMPORTED_MODULE_7__["default"]),
/* harmony export */   "getProductsIdsInSlot": () => (/* reexport safe */ _interface_helpers_getProductsIdsInSlot__WEBPACK_IMPORTED_MODULE_8__["default"]),
/* harmony export */   "constants": () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_1__["default"]),
/* harmony export */   "buildModalContent": () => (/* reexport safe */ _interface_builders_modal__WEBPACK_IMPORTED_MODULE_10__["default"])
/* harmony export */ });
/* harmony import */ var _interface_domElements__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./interface/domElements */ "./src/javascript/interface/domElements.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants */ "./src/javascript/constants/index.js");
/* harmony import */ var _interface_handlers_input__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./interface/handlers/input */ "./src/javascript/interface/handlers/input.js");
/* harmony import */ var _interface_handlers_compareButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./interface/handlers/compareButton */ "./src/javascript/interface/handlers/compareButton.js");
/* harmony import */ var _interface_handlers_removeFromSlot__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./interface/handlers/removeFromSlot */ "./src/javascript/interface/handlers/removeFromSlot.js");
/* harmony import */ var _interface_handlers_clearSearchResults__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./interface/handlers/clearSearchResults */ "./src/javascript/interface/handlers/clearSearchResults.js");
/* harmony import */ var _interface_handlers_addItensToSlot__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./interface/handlers/addItensToSlot */ "./src/javascript/interface/handlers/addItensToSlot.js");
/* harmony import */ var _interface_actions_updateSearchResults__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./interface/actions/updateSearchResults */ "./src/javascript/interface/actions/updateSearchResults.js");
/* harmony import */ var _interface_helpers_getProductsIdsInSlot__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./interface/helpers/getProductsIdsInSlot */ "./src/javascript/interface/helpers/getProductsIdsInSlot.js");
/* harmony import */ var _interface_actions_updateCompareTable__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./interface/actions/updateCompareTable */ "./src/javascript/interface/actions/updateCompareTable.js");
/* harmony import */ var _interface_builders_modal__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./interface/builders/modal */ "./src/javascript/interface/builders/modal.js");
/* harmony import */ var _interface_helpers_toggleLoader__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./interface/helpers/toggleLoader */ "./src/javascript/interface/helpers/toggleLoader.js");

 // Temporary use


 // Must be



 // Front-end interface handling






const [toggleOnLoader, toggleOffLoader] = _interface_helpers_toggleLoader__WEBPACK_IMPORTED_MODULE_11__["default"];
window.addEventListener('DOMContentLoaded', function () {
  (0,_interface_handlers_clearSearchResults__WEBPACK_IMPORTED_MODULE_5__["default"])();
  (0,_interface_handlers_addItensToSlot__WEBPACK_IMPORTED_MODULE_6__["default"])();
  (0,_interface_handlers_removeFromSlot__WEBPACK_IMPORTED_MODULE_4__["default"])(); // handleInput()
  // handleCompareButtonSubmit()
}); // Elements to expose


})();

/******/ 	return __webpack_exports__;
/******/ })()
;
});
//# sourceMappingURL=main.js.map