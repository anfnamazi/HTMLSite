const searchInput = document.getElementById('search-input')
const searchBtn = document.getElementById('nav-search')
searchBtn.addEventListener('click', toggleSearch)

function toggleSearch() {
    if (searchBtn.classList.contains('fa-search')) {
        searchBtn.classList.remove('fa-search')
        searchBtn.classList.add('fa-close')
        searchInput.classList.remove('d-none')
    }else{
        searchBtn.classList.remove('fa-close')
        searchBtn.classList.add('fa-search')
        searchInput.classList.add('d-none')
    }
}