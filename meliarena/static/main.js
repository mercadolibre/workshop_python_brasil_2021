const API_URL = 'http://127.0.0.1:5000/api/'
const ITEMS_PREFIX = 'items'
const COMPARE_ENDPOINT = `${ITEMS_PREFIX}/compare`
const SEARCH_ENDPOINT = `${ITEMS_PREFIX}/search`
const REVIEWS_ENDPOINT = `/reviews`
const QUESTIONS_ENDPOINT = `/questions`

// Search handler
interface.elements.search.searchForm.addEventListener('submit', (ev) => {
    ev.preventDefault();
    const inputValue = interface.elements.search.input.value

    if(inputValue.length === 0) {
        return
    }

    interface.toggleOnLoader()

    fetch(`${API_URL + SEARCH_ENDPOINT}?q=${inputValue}`)
        .then(data => data.json())
        .then(data => window.products = data)
        .then(data => {
            interface.updateSearchResults(data)
            interface.toggleOffLoader()
        })
})

// Compare button
interface.elements.comparation.compareButton.addEventListener('click', () => {
    const selectedProductIds = interface.getProductsIdsInSlot()

    if(!selectedProductIds.length) {
        alert("Ops! Parece que você não adicionou nenhum produto para comparar")
        return;
    }

    if(selectedProductIds.length === 1) {
        alert("Adicione dois produtos para realizar a comparação")
        return;
    }
    
    interface.toggleOnLoader()
    fetch(`${API_URL + COMPARE_ENDPOINT}?ids=${selectedProductIds.join(',')}`)
        .then(response => {
            if(response.status !== 200) throw Error(response.statusText)
            return response
        })
        .then(data => data.json())
        .then(data => interface.updateCompareTable(data))
        .catch(_ => alert("A categoria dos produtos é distinta, compare produtos de mesmo tipo"))
        .finally(_ => interface.toggleOffLoader())
})

// Card click callback
const cardClickCallback = function(ev) {
    const card = this

    // Ignore clicks to the card remove icon and product information
    if(ev.target.closest('button#remove-item') || ev.target.closest('.product-card--info')) {
        return
    }
    
    const productId = card.getAttribute('data-product-id')
    interface.toggleOnLoader()

    Promise.all([fetch(`${API_URL + ITEMS_PREFIX}/${productId}/${REVIEWS_ENDPOINT}`), fetch(`${API_URL + ITEMS_PREFIX}/${productId}/${QUESTIONS_ENDPOINT}`)])
        .then(([reviewsStream, questionsStream])  => Promise.all([reviewsStream.json(), questionsStream.json()]))
        .then(([{reviews, rating_levels, rating_average}, questions]) => {
            if(!reviews.length && !questions.length ) {
                alert("Esse produto ainda não possui avaliações ou perguntas")
                return
            }

            interface.buildModalContent({baseElement: interface.elements.modal, reviews, rating_levels, questions, rating_average})
            window.scrollTo(0, 0);
        })
        .finally(() => interface.toggleOffLoader())


    interface.elements.modal.classList.add('show')
}

// Modal logic
document.querySelector('.comparation').addEventListener('DOMSubtreeModified', () => {
    document.querySelectorAll('.comparation .product-card').forEach(card => {
        cardClickCallback.bind(card)
        card.addEventListener('click', cardClickCallback)
    })
})



// Star item callback
const starItemAction = function(ev) {
    const button = this
    const productId = interface.getProductIdFromStarButton(button)

    if(productId) {
        fetch(`${API_URL + ITEMS_PREFIX}/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                id: productId,
                is_favourite: true,
            }) 
          });
    } else {
        alert("Selecione um produto primeiro, depois marque-o como favorito :)")
    }
}

// Star item
document.querySelectorAll('.comparation button#evaluate-star').forEach(button => {
    starItemAction.bind(button)
    button.addEventListener('click', starItemAction)
})
