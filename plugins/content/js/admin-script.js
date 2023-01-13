//pegando o elemento class e id 
const html = {
    get(element){
        return document.querySelector(element);
    },
    getAll(element){
        return document.querySelectorAll(element);
    }
}

//definindo quais serão os elementos que irão se mostrados no painel
const controls = {
    painelOpenActive(elements){
        for(let element of elements){
            element.style.display = 'block';
        }
    },
    painelHidden(elements){
        for(let element of elements){
            element.style.display = 'none';
        }
    },
    painel(wp_has_submenu){
        for(let has_submenu of wp_has_submenu){
            // for(let i=0; i<=link_painel.length; i++){
                if(has_submenu.classList[3] == 'menu-icon-_add_imovel'){                   
                    has_submenu.style.display = 'block';
                }else if(has_submenu.classList[3] == 'menu-icon-media'){
                    has_submenu.style.display = 'block';                    
                }else if(has_submenu.classList[3] == 'menu-icon-users'){
                    has_submenu.style.display = 'block';                    
                }else if(has_submenu.classList[3] == 'menu-icon-settings'){
                    has_submenu.style.display = 'block';                    
                }else {
                    has_submenu.style.display = 'none';
                }                
            // }
        }        
    },

    //pegando class e div do elementos
    createListeners(value) {
        if(value == true){
            controls.painel(html.getAll('.wp-has-submenu')); 
            controls.painelOpenActive(html.getAll('.wp-menu-open'));
            controls.painelHidden(html.getAll('.toplevel_page_essential-blocks'));
            controls.painelHidden(html.getAll('.toplevel_page_eael-settings'));
            controls.painelHidden(html.getAll('.menu-icon-comments'));
        }else if(value == false){
            controls.painelOpenActive(html.getAll('.wp-has-submenu'));            
            console.log('é false');
        } 
    }
}

const buttons = {
    defult(){
        document.cookie = "data-switcher-basic=on";
        document.cookie = "data-switcher-advanced=off";        
    },
    switcher(){    
        const switcher_basic_data = html.get('.switcher-b').getAttribute('data-active');
        const switcher_advance_data = html.get('.switcher-ad').getAttribute('data-active');

        if(switcher_basic_data == 'off'){            
            html.get('.switcher-b').classList.add('switcher-disable');
            html.get('.switcher-ad').classList.remove('switcher-disable');
            html.get('.switcher-active-text-ad').innerText = 'OFF';            
        }
        
        if(switcher_basic_data == 'on'){
            html.get('.switcher-active-text-b').innerText = 'ON';
            html.get('.switcher-active-text-ad').innerText = 'OFF';            
        }else if(switcher_advance_data == 'on'){
            html.get('.switcher-active-text-ad').innerText = 'ON';
            html.get('.switcher-active-text-b').innerText = 'OFF';            
        }

        if(switcher_advance_data == 'off'){
            html.get('.switcher-ad').classList.add('switcher-disable');
            html.get('.switcher-b').classList.remove('switcher-disable');
            html.get('.switcher-active-text-ad').innerText = 'OFF';
        }
    },
    dataActive(element){
        const data_active = element.getAttribute('data-active');

        if(data_active == 'off' && element.id == 'switcher-basic'){
            element.setAttribute('data-active', 'on'); 
            document.cookie = "data-switcher-basic=on"; 
            document.cookie = "data-switcher-advanced=off";                  
            html.get('.switcher-ad').setAttribute('data-active', 'off');    
        }

        if(data_active == 'off' && element.id == 'switcher-advanced'){
            element.setAttribute('data-active', 'on');
            document.cookie = "data-switcher-advanced=on";
            document.cookie = "data-switcher-basic=off"; 
            html.get('.switcher-b').setAttribute('data-active', 'off');
        }
    },
    createButton(){
        html.get('.switcher-b').addEventListener('click', ()=>{
            buttons.dataActive(html.get('.switcher-b'));
            buttons.switcher();
            controls.createListeners(true);
        });
        html.get('.switcher-ad').addEventListener('click', ()=>{
            buttons.dataActive(html.get('.switcher-ad'));
            buttons.switcher();
            controls.createListeners(false);
        });
    },
    update(){
        window.addEventListener('load', ()=>{
             //--Lendo cookie--//
        function getCookie(nome) {
            var nomeCookie = nome + "=";
            var ca = document.cookie.split(';');
            for(var i=0; i<ca.length; i++){
                var c = ca[i];
                while(c.charAt(0)== ' ') c = c.substring(1,c.length);
                if(c.indexOf(nomeCookie) == 0) return c.substring(nomeCookie.length, c.length);
            }
            return null;
        }

        var get_cookies_basic = getCookie(document.cookie = 'data-switcher-basic');
        var get_cookies_advanced = getCookie(document.cookie = 'data-switcher-advanced');

        html.get('.switcher-b').setAttribute('data-active', get_cookies_basic);
        html.get('.switcher-ad').setAttribute('data-active', get_cookies_advanced);
        });     
        
        buttons.switcher();
        controls.createListeners(true);
    }
}

function init() {    
    buttons.createButton();
    buttons.update();
    buttons.defult();    
}
init();

///-------------------------------------------------------------------------------------///


//--Formulario de IMOVEIS painel wordpress--//
const form_cod = jQuery('#_codigo');
const form_finalidade_Venda = jQuery('#_finalidade-Venda');
const form_finalidade_Aluguel = jQuery('#_finalidade-Aluguel');



//--Lendo cookie--//
function getCookie(nome) {
    var nomeCookie = nome + "=";
    var ca = document.cookie.split(';');
    for(var i=0; i<ca.length; i++){
        var c = ca[i];
        while(c.charAt(0)== ' ') c = c.substring(1,c.length);
        if(c.indexOf(nomeCookie) == 0) return c.substring(nomeCookie.length, c.length);
    }
    return null;
}

//--inserindo código de Imóvel cadastrado automaticamente no formulario IMOVEL--//
jQuery(window).load(()=>{

    var str = getCookie(document.cookie = 'codVilmaMarques');
    var str_v = str.replace("V", "");  

    if(!form_cod.val()){
        form_cod.val(getCookie(document.cookie = 'codVilmaMarquesDefault'));
        // console.log(getCookie(document.cookie = 'codVilmaMarques'));

    
        //--finalidade-Venda--//
        form_finalidade_Venda.click(()=>{
            form_cod.val("AV" + (parseInt(str_v)+1) + "V");
        });

        form_finalidade_Aluguel.click(()=>{
            form_cod.val("AA" + (parseInt(str_v)+1) + "V");
        });
    }
});


//---MASCARAS NO PAINEL ADMIN--//

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
   
    document.querySelector('#_preco-maximo').onkeypress = function(){
        mascara( this, mtel ); 
    }  
	
	document.querySelector('#_condominio').onkeypress = function(){
        mascara( this, mtel ); 
    }   
	
	document.querySelector('#_iptu').onkeypress = function(){
        mascara( this, mtel ); 
    } 
	
	document.querySelector('#_area-imovel').onkeypress = function(){
        mascara( this, mtel ); 
    }   
	
	document.querySelector('#_terreno').onkeypress = function(){
        mascara( this, mtel ); 
    }   
         
}