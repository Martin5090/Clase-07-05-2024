import { getCharacters } from "./peticiones/getCharacter.js";



let currentPage = 1;
let loadedCharacters = [];
let isLoading = false;




getCharacters()
    .then(data=> console.log(data))

    .catch(error=> console.log(error))



window.onload = loadInitialCharacters;

window.addEventListener('scroll', () => {
        const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
    
        if (scrollTop + clientHeight >= scrollHeight - 5 && !isLoading) {
            loadMoreCharacters();
        }
    });







    