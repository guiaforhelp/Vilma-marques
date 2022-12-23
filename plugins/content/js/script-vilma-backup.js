/* Máscaras */
const price_value = document.querySelector('.elementor-element-cf2e743 input'); //pegando valor do text preço
const area_min = document.querySelector('.elementor-element-c9060ca input'); //pegando valor do text preço
const price_value_mobile = document.querySelector('.elementor-element-e8b216e input'); //pegando valor do text preço
const area_min_mobile = document.querySelector('.elementor-element-7f4baff input'); //pegando valor do text preço



/*---Preço máximo---*/
function priceValuecf2e743(){
    var convertInt = parseInt(price_value.value.length); //convertendo a string para int

    price_value.value=price_value.value.replace('.', ''); //setando o valor para o padrão

    //se for maior que 1 mil acrescenta um ponto depois do primeiro numero
    if(convertInt <= 4){    
    price_value.value=price_value.value.replace(/(\d{1})(\d{3})$/,"$1.$2"); //Coloca um ponto entre o terceiro 
   }else if(convertInt >= 5 && convertInt <=7) {
    var limpar = price_value.value=price_value.value.replace('.', ''); //removendo os pontos 
    var new_value = limpar.replace(/(\d{1})(\d{3})$/,"$1.$2"); //Coloca um ponto entre o terceiro
    price_value.value = new_value;    
   }else {
    price_value.value=price_value.value.replace(/(\d{1})(\d{3})(\d{3})$/,"$1.$2.$3"); //Coloca um ponto entre o primeiro e terceiro  
   }
}

/*---Preço máximo mobile---*/
function priceValuee8b216e(){
    var convertInt = parseInt(price_value_mobile.value.length); //convertendo a string para int

    price_value_mobile.value=price_value_mobile.value.replace('.', ''); //setando o valor para o padrão

    //se for maior que 1 mil acrescenta um ponto depois do primeiro numero
    if(convertInt <= 4){    
    price_value_mobile.value=price_value_mobile.value.replace(/(\d{1})(\d{3})$/,"$1.$2"); //Coloca um ponto entre o terceiro 
   }else if(convertInt >= 5 && convertInt <=7) {
    var limpar = price_value_mobile.value=price_value_mobile.value.replace('.', ''); //removendo os pontos 
    var new_value = limpar.replace(/(\d{1})(\d{3})$/,"$1.$2"); //Coloca um ponto entre o terceiro
    price_value_mobile.value = new_value;    
   }else {
    price_value_mobile.value=price_value_mobile.value.replace(/(\d{1})(\d{3})(\d{3})$/,"$1.$2.$3"); //Coloca um ponto entre o primeiro e terceiro  
   }
}


/*---Área minima---*/
function areaMinc9060ca(){
    var convertInt = parseInt(area_min.value.length); //convertendo a string para int

    area_min.value=area_min.value.replace('.', ''); //setando o valor para o padrão

    //se for maior que 1 mil acrescenta um ponto depois do primeiro numero
    if(convertInt <= 4){    
    area_min.value=area_min.value.replace(/(\d{1})(\d{3})$/,"$1.$2"); //Coloca um ponto entre o terceiro 
   }else if(convertInt >= 5 && convertInt <=7) {
    var limpar = area_min.value=area_min.value.replace('.', ''); //removendo os pontos 
    var new_value = limpar.replace(/(\d{1})(\d{3})$/,"$1.$2"); //Coloca um ponto entre o terceiro
    area_min.value = new_value;    
   }else {
    area_min.value=area_min.value.replace(/(\d{1})(\d{3})(\d{3})$/,"$1.$2.$3"); //Coloca um ponto entre o primeiro e terceiro  
   }
}

/*---Área minima mobile---*/
function areaMin7f4baff(){
    var convertInt = parseInt(area_min_mobile.value.length); //convertendo a string para int

    area_min_mobile.value=area_min_mobile.value.replace('.', ''); //setando o valor para o padrão

    //se for maior que 1 mil acrescenta um ponto depois do primeiro numero
    if(convertInt <= 4){    
    area_min_mobile.value=area_min_mobile.value.replace(/(\d{1})(\d{3})$/,"$1.$2"); //Coloca um ponto entre o terceiro 
   }else if(convertInt >= 5 && convertInt <=7) {
    var limpar = area_min_mobile.value=area_min_mobile.value.replace('.', ''); //removendo os pontos 
    var new_value = limpar.replace(/(\d{1})(\d{3})$/,"$1.$2"); //Coloca um ponto entre o terceiro
    area_min_mobile.value = new_value;    
   }else {
    area_min_mobile.value=area_min_mobile.value.replace(/(\d{1})(\d{3})(\d{3})$/,"$1.$2.$3"); //Coloca um ponto entre o primeiro e terceiro  
   }
}


//--Chamando o evento keyup--//
price_value.addEventListener('keyup', priceValuecf2e743);
area_min.addEventListener('keyup', areaMinc9060ca);
price_value_mobile.addEventListener('keyup', priceValuee8b216e);
area_min_mobile.addEventListener('keyup', areaMin7f4baff);




//--PAGINAÇÃO--//
/*
/ setando as paginações 
EXEMPLO: <div class="num-pag-item pag-item-active">1</div>
*/
let quant_post = 5;
let total_pages = cards.length / quant_post;
function paginationFunction(){
      
    for(let num_pg of num_pag_itens){
        let data_page_value = num_pg.getAttribute('data-page_value');

        for(let i=0; i<cards.length; i++){
            if(i < quant_post && data_page_value == pag_item_active){
                //console.log(data_page_value);
                cards[i].style.display = 'block';
            }else {
                cards[i].style.display = 'none';
            }

            if(quant_post > i){
                console.log('é maoir q ', quant_post);
            }
        }
    }
          
}

window.addEventListener('load', paginationFunction);


//const pag_item_container = document.querySelector('.num-pag-item');
const data_pg_container = pagination_itens.getAttribute('data-page_value');

//--Criando as paginações--//
//function PageNumeration(){
    document.cookie = 'pagination='+total_pages;
//   for(let n=0; n<=10; n++){
 //       console.log(num_pag_itens[n]);
 //       pagination_itens.innerHTML = num_pag_itens[n];
 //   }
//}

num_pag_itens[0].classList.add('pag-item-active');
[].forEach.call(num_pag_itens, num_pag_item => {
  num_pag_item.addEventListener('click', functionPageClick)
})

function functionPageClick() {
   //console.log(PageNumeration());

  // use a função Array para lexical this
  [].forEach.call(num_pag_itens, num_pag_item => {
    // exceto para o elemento clicado, remova a classe ativa
    if (num_pag_item !== this) {
        num_pag_item.classList.remove('pag-item-active');
    }
  });

  // alternar ativo no botão clicado
  this.classList.add('pag-item-active');
  pagination_itens.setAttribute('data-page_value', this.textContent);
}


/*
/ tratando botões next e prev
*/
const next_pag = document.querySelector('.next-pag');
const prev_pag = document.querySelector('.prev-pag');

//SETANDO BOTÃO NEXT
function functionNext(cont){
    // Obtém elemento da página atual
  var pagAtual = document.querySelector('.pag-item-active');
  
  // Removendo class da pg anterior
  if(pagination_itens.getAttribute('data-page_value') != num_pag_itens.length){
      pagAtual.classList.remove('pag-item-active');      
  }
  
  // Obtém o valor da prox pg
  var numNovaPagina = pagination_itens.getAttribute('data-page_value');
  
  // Seleciona a nova página
  if(num_pag_itens[numNovaPagina]){
      //console.log(num_pag_itens[numNovaPagina]);
      var novaPagina = num_pag_itens[numNovaPagina];
      novaPagina.classList.add('pag-item-active');
      pagination_itens.setAttribute('data-page_value', novaPagina.textContent);
  }  

  
}

//SETANDO BOTÃO PREV
function functionPrev(cont){
    // Obtém elemento da página atual
  var pagAtual = document.querySelector('.pag-item-active');
  
  // Removendo class da pg anterior
  if(pagination_itens.getAttribute('data-page_value') != 1){
      pagAtual.classList.remove('pag-item-active');      
      console.log(num_pag_itens[pagAtual.textContent]);
  }
  
  // Obtém o valor da anterior pg
  var numNovaPagina = pagination_itens.getAttribute('data-page_value')-2;
  
  // Seleciona a nova página
  if(num_pag_itens[numNovaPagina]){
      var novaPagina = num_pag_itens[numNovaPagina];
      novaPagina.classList.add('pag-item-active');
      pagination_itens.setAttribute('data-page_value', novaPagina.textContent);      
  }  

  
}

//next_pag.addEventListener('click', functionNext);
//prev_pag.addEventListener('click', functionPrev);