const price_value_vender = document.querySelectorAll('input[type="text"]');


for(let price_val_v of price_value_vender){

    function priceValue2dcd0ad(){
        var convertInt = parseInt(price_val_v.value.length); //convertendo a string para int

        price_val_v.value=price_val_v.value.replace('.', ''); //setando o valor para o padrão
    
        //se for maior que 1 mil acrescenta um ponto depois do primeiro numero
        if(convertInt <= 4){    
        price_val_v.value=price_val_v.value.replace(/(\d{1})(\d{3})$/,"$1.$2"); //Coloca um ponto entre o terceiro 
       }else if(convertInt >= 5 && convertInt <=7) {
        var limpar = price_val_v.value=price_val_v.value.replace('.', ''); //removendo os pontos 
        var new_value = limpar.replace(/(\d{1})(\d{3})$/,"$1.$2"); //Coloca um ponto entre o terceiro
        price_val_v.value = new_value;    
       }else {
        price_val_v.value=price_val_v.value.replace(/(\d{1})(\d{3})(\d{3})$/,"$1.$2.$3"); //Coloca um ponto entre o primeiro e terceiro  
       }
    }

    price_val_v.addEventListener('keyup', priceValue2dcd0ad);
}    

const result_outros = document.querySelector('#result-outros');


result_outros.addEventListener('load', (event)=>{
    console.log(event);
});


const order_details = document.querySelector('.order_details');
const btn_acompanhar_pedido = document.querySelector('.btn-acompanhar-pedido');

if(order_details){
    btn_acompanhar_pedido.style.display = 'block';
}else {
    btn_acompanhar_pedido.style.display = 'none';
}


