const define_data_id = document.querySelector('#define-data'); //--pegando id e inserindo no data_define
let data_define = define_data_id.getAttribute('data-define_value'); //--recebendo atributo data-define_value
var id_cards = '#' + data_define;

const filterElementPrice = document.querySelector('.filter_price'); //--pegando valor do input
const filterElementArea = document.querySelector('.filter_area'); //--pegando valor do input
const cards = document.querySelectorAll(id_cards + ' .jet-listing-grid__item'); //--pegando a class do elemento a ser buscado

filterElementPrice.addEventListener('keyup', filterCardsPrice);
filterElementArea.addEventListener('keyup', filterCardsAreaMin);


function filterCardsPrice(){
    if(filterElementPrice.value != null){
        for(let card of cards){      
            
            /*--pegando o valor do elemento filho--*/
            let price = card.querySelector('.price .jet-listing-dynamic-field__content');            
            //console.log(price);
            
            /*--removendo os pontos e R$ dos preços--*/
            let price_text = price.textContent.replace('R$ ', ''); 
            let price_int = price_text.replace('.', '');
            let price_int2 = price_int.replace('.', '');      
            
            /*--removendo os pontos dos preços--*/
            let filterText = filterElementPrice.value;
            filter_int = filterText.replace('.', '');
            filter_int2 = filter_int.replace('.', '');

            /* 
            setando o conteúdo buscado no input
            escondendo o restante que não foi buscado
            */            
            if(parseInt(price_int2) <= filter_int2){
               //console.log(parseInt(price_int2), ' = ', filter_int2);
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

function filterCardsAreaMin(){
    if(filterElementArea.value != null){
        for(let card of cards){      
            
            /*--pegando o valor do elemento filho--*/
            const area = card.querySelector('.area-minima');            ;
            
            /*--removendo os pontos e R$ dos preços--*/             
            if(area != null){
                   let area_text = area.innerText.replace('m²', ''); 
                   let area_int = area_text.replace('.', '');                                        
                    //console.log(parseInt(area_int));

                    /*--removendo os pontos dos preços--*/
                    let filterText = filterElementArea.value;
                    let filter_int = filterText.replace('.', '');
                    //filter_int2 = filter_int.replace(',', '');
                    
                    /* 
                    setando o conteúdo buscado no input
                    escondendo o restante que não foi buscado
                    */ 
                   
                    if(parseInt(area_int) >= parseInt(filter_int)){
                       //console.log(parseInt(area_int), ' = ', parseInt(filter_int));
                       card.style.display = 'block';               
                    }else {
                        card.style.display = 'none';
                    }                      
                    

                    /*--resete no campo quando o input está vazio--*/
                    if(filterText == false){                
                        card.style.display = 'block';                
                    }
            }else if(area == null){
                card.style.display = 'none';
            }
        }
    }
}


