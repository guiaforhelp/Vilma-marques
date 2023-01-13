/*const data_itens = document.querySelectorAll('#result-outros .jet-listing-grid__item');
const data = Array.from({ length: data_itens.length })
   .map((_, i) => `conteúdo aqui`);

//--trabalhando os botões Next, Prev, first, last

let perPage = 5 //quantidade de itens por página
const state = {
    page: 1,
    perPage,
    totalPage: Math.ceil(data_itens.length / perPage),
    maxVisibleButtons: 5
}
const html = {
    get(element){
        return document.querySelector(element);
    }
}

const controls = {
    next() {
        state.page++;

        if(state.page > state.totalPage){
            state.page--
        }
    },
    prev() {
        state.page--

        if(state.page < 1){
            state.page++
        }
    },
    goTo(page) {
        if(page < 1){
            page = 1;
        }

        state.page = +page;

        if(page >state.totalPage){
            state.page = state.totalPage;
        }
    },
    createListeners() {
        html.get('.next-pag').addEventListener('click', () => {
            controls.next();
            update();
        });

        html.get('.prev-pag').addEventListener('click', () => {
            controls.prev();
            update();
        });
    }
}

const list = {
    create(item) {
        const div = document.createElement('div');
        div.classList.add('item');
        div.innerHTML = item;

        html.get('#result-outros').appendChild(div);
    },
    update() {
        html.get('#result-outros').innerHTML = "";        

        let page = state.page -1;
        let start = page * state.perPage;
        let end = start + state.perPage;
        
        const paginatedItems = data.slice(start, end);

        paginatedItems.forEach(list.create);        
    }
}

const buttons = {
    element: html.get('.num-pag-item'),
    create(number) {
        const button = document.createElement('div');

        button.innerHTML = number;

        if(state.page == number){
            button.classList.add('pag-item-active');
        }

        button.addEventListener('click', (event)=>{
            const page = event.target.innerText;

            controls.goTo(page);
            update();
        });

        buttons.element.appendChild(button);
    },

    update() {
        buttons.element.innerHTML = "";
        const {maxLeft, maxRight} = buttons.calculateMaxVisible();

        for(let page = maxLeft; page <= maxRight; page++){
            buttons.create(page);
        }
    },

    calculateMaxVisible() {
        const { maxVisibleButtons } = state;
        let maxLeft = (state.page - Math.floor(maxVisibleButtons / 2));
        let maxRight = (state.page + Math.floor(maxVisibleButtons / 2));

        if(maxLeft < 1){
            maxLeft = 1;
            maxRight = maxVisibleButtons;
        }

        if(maxRight > state.totalPage){
            maxLeft = state.totalPage - (maxVisibleButtons - 1);
            maxRight = state.totalPage;

            if(maxLeft < 1){
                maxLeft = 1;
            }
        }

        return {maxLeft, maxRight};
    }
}

function update(){
    list.update();
    buttons.update();
}

function init() {
    update();
    controls.createListeners();
}

init();
*/

const filter_price = document.querySelector('.filter_price');
const filter_area = document.querySelector('.filter_area');
const filter_quartos = document.querySelector('.filter_quartos');
const select_fiters = document.querySelector('.select_fiters');

var filters = [
    '.filter_price',
    '.filter_area',
    '.filter_quartos',
    '.select_fiters'
];

for(let filter of filters) {
    document.querySelector(filter).addEventListener('keyup', ()=>{
    
        const bloco_1 = document.querySelector('#bloco-1');
        const bloco_2 = document.querySelector('#bloco-2');
        if(document.querySelector(filter).value == ''){
            bloco_1.style.display = 'flex';
            bloco_2.style.display = 'none';
            console.log('bloco 2 vazio', filter.value);
        }else {
            bloco_1.style.display = 'none';
            bloco_2.style.display = 'flex';
            console.log('bloco 1 vazio', filter.value);
        }
    });
}

