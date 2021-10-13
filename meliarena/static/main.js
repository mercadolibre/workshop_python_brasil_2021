const API_URL = 'http://127.0.0.1:5000/api/'
const ITEMS_PREFIX = 'meli-items'
const COMPARE_ENDPOINT = `${ITEMS_PREFIX}/compare`
const SEARCH_ENDPOINT = `${ITEMS_PREFIX}/search`

// Search handler
interface.elements.search.searchForm.addEventListener('submit', (ev) => {
    ev.preventDefault();
    const inputValue = interface.elements.search.input.value

    if(inputValue.length === 0) {
        return
    }

    interface.toggleOnLoader()

    fetch(`${API_URL + SEARCH_ENDPOINT}?q=${inputValue}`).then(data => data.json()).then(data => window.products = data).then(data => {
        interface.updateSearchResults(data)
        interface.toggleOffLoader()
    })
})


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
