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


