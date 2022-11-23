/* Máscaras ER */
function mascara(o,f){
    v_obj=o
    v_fun=f
    setTimeout("execmascara()",1)
}
function execmascara(){
    v_obj.value=v_fun(v_obj.value)
}
function mtel(v){
    v=v.replace(/\D/g,"");     //Remove tudo o que não é dígito       
    v=v.replace(/(\d{1})(\d{3})$/,"$1.$2");  //Coloca um ponto entre o terceiro
    
    //se for maior que 1 milhão acrescenta um ponto depois do primeiro numero
    if(v >= 1000){
        //console.log('maior q 1 milhão');
        v=v.replace(/^(\d{1})(\d)/g,"$1.$2"); //Coloca um ponto depois do primeiro numero
    }
    return v;
}
function id( el ){
    return document.querySelector( el );
}
window.onload = function(){
    for(let i=0; i<=1; i++){
        document.querySelectorAll('.jet-search-filter__input')[i].onkeypress = function(){
            mascara( this, mtel );
        }

        //console.log(document.querySelectorAll('.jet-search-filter__input')[i]);
    }        
}
///<input type="text" name="telefone" id="telefone" maxlength="15" />