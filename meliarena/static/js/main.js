const API_ENDPOINT = "/api/search"

const searchForm = document.querySelector("form#search")

searchForm.addEventListener("submit", (e) => {
    e.preventDefault()
    const inputValue = document.querySelector("input[type=text]").value

    fetch(`${API_ENDPOINT}/?q=${inputValue}`)
        .then(response => response.json())
        .then(data => console.log(data));
})
