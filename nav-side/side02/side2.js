const btn = document.querySelector('#btn');
const bxSearch = document.querySelector('.bx-search-alt');
const sidebar = document.querySelector('.sidebar');
const card = document.querySelector('.card');

btn.addEventListener('click',()=>{
    sidebar.classList.toggle('active');
    card.classList.toggle('active');
});

bxSearch.addEventListener('click',()=>{
    sidebar.classList.toggle('active');
    card.classList.toggle('active');
})