const express = require('express');
const app = express();

const a = app.use('/api', apiRouter);
a.get('/notes', actionType.getAllNotes)


let showList;



const main =() => {
    prepare_Elements()
    prepare_Events()
}



const prepare_Elements =() => {
    showList = document.querySelector('.show');
}


const prepare_Events =() => {
    showList.addEventListener('click', a.get('/notes', actionType.getAllNotes))

}







document.addEventListener('DOMContentLoaded',main)