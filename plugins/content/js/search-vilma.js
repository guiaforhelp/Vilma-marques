const define_data_id = document.querySelector('#define-data'); //--pegando id e inserindo no data_define
let data_define = define_data_id.getAttribute('data-define_value'); //--recebendo atributo data-define_value
var id_cards = '#' + data_define;

const filterElement = document.querySelector('.filter_price'); //--pegando valor do input
const cards = document.querySelectorAll(id_cards + ' .jet-listing-grid__item'); //--pegando a class do elemento a ser buscado


filterElement.addEventListener('keyup', filterCards);

function filterCards(){
    if(filterElement.value != null){
        for(let card of cards){      
            
            /*--pegando o valor do elemento filho--*/
            let price = card.querySelector('.price .jet-listing-dynamic-field__content');
            //let price = card.querySelector('.area-minima .jet-listing-dynamic-field__content');
            
            /*--removendo os pontos e R$ dos preços--*/
            let price_text = price.textContent.replace('R$ ', ''); 
            let price_int = price_text.replace('.', '');
            let price_int2 = price_int.replace('.', '');      
            
            /*--removendo os pontos dos preços--*/
            let filterText = filterElement.value;
            filter_int = filterText.replace('.', '');
            filter_int2 = filter_int.replace('.', '');

            /* 
            setando o conteúdo buscado no input
            escondendo o restante que não foi buscado
            */            
            if(parseInt(price_int2) <= filter_int2){
               console.log(parseInt(price_int2), ' = ', filter_int2);
               card.style.display = 'block';
            }else {
                card.style.display = 'none';
            }
           
            //price_text.includes(filterText
           /* if(price_int != filter_int){
                card.style.display = 'none';
            }else {
                card.style.display = 'block';                           
            }*/

            
            /*--resete no campo quando o input está vazio--*/
            if(filterText == false){                
                card.style.display = 'block';
            }
        }
    }
}