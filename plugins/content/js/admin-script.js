// //pegando o elemento class e id 
// const html = {
//     get(element){
//         return document.querySelector(element);
//     },
//     getAll(element){
//         return document.querySelectorAll(element);
//     },
//     load(){
//         window.addEventListener('load', ()=>{
//             buttons.defult(); //-MUDAR DEPOIS
//             //--Lendo cookie--//
//             function getCookie(nome) {
//                 var nomeCookie = nome + "=";
//                 var ca = document.cookie.split(';');
//                 for(var i=0; i<ca.length; i++){
//                     var c = ca[i];
//                     while(c.charAt(0)== ' ') c = c.substring(1,c.length);
//                     if(c.indexOf(nomeCookie) == 0) return c.substring(nomeCookie.length, c.length);
//                 }
//                 return null;
//             }

//             var get_cookies_basic = getCookie(document.cookie = 'data-switcher-basic');

//             if(get_cookies_basic == 'on'){
//                 controls.painel(html.getAll('.wp-has-submenu'));                
//                 console.log('carregou');
//             }            
//         });
//     }
// }

// //definindo quais serão os elementos que irão se mostrados no painel
// const controls = {
//     painelOpenActive(elements){
//         for(let element of elements){
//             element.style.display = 'block';
//         }
//     },
//     painelHidden(elements){
//         for(let element of elements){
//             element.style.display = 'none';
//         }
//     },
//     painel(wp_has_submenu){
//         for(let has_submenu of wp_has_submenu){
//             // for(let i=0; i<=link_painel.length; i++){
//                 if(has_submenu.classList[3] == 'menu-icon-_add_imovel'){                   
//                     has_submenu.style.display = 'block';
//                 }else if(has_submenu.classList[3] == 'menu-icon-media'){
//                     has_submenu.style.display = 'block';                    
//                 }else if(has_submenu.classList[3] == 'menu-icon-users'){
//                     has_submenu.style.display = 'block';                    
//                 }else if(has_submenu.classList[3] == 'menu-icon-settings'){
//                     has_submenu.style.display = 'block';                    
//                 }else {
//                     has_submenu.style.display = 'none';
//                 }                
//             // }
//         }        
//     },

//     //pegando class e div do elementos
//     createListeners(value) {
//         if(value == true){
//             controls.painel(html.getAll('.wp-has-submenu')); 
//             controls.painelOpenActive(html.getAll('.wp-menu-open'));
//             controls.painelHidden(html.getAll('.toplevel_page_essential-blocks'));
//             controls.painelHidden(html.getAll('.toplevel_page_eael-settings'));
//             controls.painelHidden(html.getAll('.menu-icon-comments'));
//         }else if(value == false){
//             controls.painelOpenActive(html.getAll('.wp-has-submenu'));            
//             console.log('é false');
//         } 
//     }
// }

// const buttons = {
//     defult(){
//         document.cookie = "data-switcher-basic=on";
//         document.cookie = "data-switcher-advanced=off";     
        
//     },
//     switcher(){    
//         const switcher_basic_data = html.get('.switcher-b').getAttribute('data-active');
//         const switcher_advance_data = html.get('.switcher-ad').getAttribute('data-active');

//         if(switcher_basic_data == 'off'){            
//             html.get('.switcher-b').classList.add('switcher-disable');
//             html.get('.switcher-ad').classList.remove('switcher-disable');
//             html.get('.switcher-active-text-ad').innerText = 'OFF';            
//         }
        
//         if(switcher_basic_data == 'on'){
//             html.get('.switcher-active-text-b').innerText = 'ON';
//             html.get('.switcher-active-text-ad').innerText = 'OFF';            
//         }else if(switcher_advance_data == 'on'){
//             html.get('.switcher-active-text-ad').innerText = 'ON';
//             html.get('.switcher-active-text-b').innerText = 'OFF';            
//         }

//         if(switcher_advance_data == 'off'){
//             html.get('.switcher-ad').classList.add('switcher-disable');
//             html.get('.switcher-b').classList.remove('switcher-disable');
//             html.get('.switcher-active-text-ad').innerText = 'OFF';
//         }
//     },
//     dataActive(element){
//         const data_active = element.getAttribute('data-active');

//         if(data_active == 'off' && element.id == 'switcher-basic'){
//             element.setAttribute('data-active', 'on'); 
//             document.cookie = "data-switcher-basic=on"; 
//             document.cookie = "data-switcher-advanced=off";                  
//             html.get('.switcher-ad').setAttribute('data-active', 'off');    
//         }

//         if(data_active == 'off' && element.id == 'switcher-advanced'){
//             element.setAttribute('data-active', 'on');
//             document.cookie = "data-switcher-advanced=on";
//             document.cookie = "data-switcher-basic=off"; 
//             html.get('.switcher-b').setAttribute('data-active', 'off');
//         }
//     },
//     createButton(){
//         html.get('.switcher-b').addEventListener('click', ()=>{
//             buttons.dataActive(html.get('.switcher-b'));
//             buttons.switcher();
//             controls.createListeners(true);
//         });
//         html.get('.switcher-ad').addEventListener('click', ()=>{
//             buttons.dataActive(html.get('.switcher-ad'));
//             buttons.switcher();
//             controls.createListeners(false);
//         });
//     },
//     update(){
//         window.addEventListener('load', ()=>{
//              //--Lendo cookie--//
//         function getCookie(nome) {
//             var nomeCookie = nome + "=";
//             var ca = document.cookie.split(';');
//             for(var i=0; i<ca.length; i++){
//                 var c = ca[i];
//                 while(c.charAt(0)== ' ') c = c.substring(1,c.length);
//                 if(c.indexOf(nomeCookie) == 0) return c.substring(nomeCookie.length, c.length);
//             }
//             return null;
//         }

//         var get_cookies_basic = getCookie(document.cookie = 'data-switcher-basic');
//         var get_cookies_advanced = getCookie(document.cookie = 'data-switcher-advanced');

//         html.get('.switcher-b').setAttribute('data-active', get_cookies_basic);
//         html.get('.switcher-ad').setAttribute('data-active', get_cookies_advanced);
//         });     
        
//         buttons.switcher();
//         buttons.dataActive();
//         controls.createListeners(true);
//     }
// }

// function init() {  
//     html.load();  
//     buttons.createButton();
//     buttons.update();
//     buttons.defult();    
// }
// init();


const text_views = jQuery('.text-views');
const text_switcher = jQuery('.text-switcher');
const adminmenu = jQuery('#adminmenu');
const wp_menu_name = jQuery('.wp-menu-name');
const switcher = jQuery('.switcher-ad');
const switcher_b = jQuery('.switcher-b');
const switcher_active = jQuery('.switcher-active-ad');
const switcher_active_b = jQuery('.switcher-active-b');
const switcher_advanced = jQuery('#switcher-advanced');
const switcher_basic= jQuery('#switcher-basic');
const switcher_active_text = jQuery('.switcher-active-text-ad');
const switcher_active_text_b = jQuery('.switcher-active-text-b');
var switcher_init = true;


//--Menu padrão do wordpress--//
const menu_post = jQuery('.menu-icon-post');
const menu_media = jQuery('.menu-icon-media');
const menu_pages = jQuery('.menu-icon-page');
const menu_coments = jQuery('.menu-icon-comments');
const menu_elementor = jQuery('.menu-icon-generic');
const aparencias = jQuery('.menu-icon-appearance');
const plugins = jQuery('.menu-icon-plugins');
const ferramentas_wordpress = jQuery('.menu-icon-tools');

//--Menu instalado no wordpress--/
const menu_modelos_elementor = jQuery('.menu-icon-elementor_library');
const essential_addons = jQuery('.toplevel_page_eael-settings');
const crocloblock = jQuery('.toplevel_page_jet-dashboard');
const yoast_seo = jQuery('.toplevel_page_wpseo_dashboard');
const essential_block = jQuery('.toplevel_page_essential-blocks');
const smart_filters = jQuery('.menu-icon-jet-smart-filters');
const sucuri_antivirus = jQuery('.toplevel_page_sucuriscan');
const cache_w3tc = jQuery('.toplevel_page_w3tc_dashboard');
const jet_engine = jQuery('.toplevel_page_jet-engine');


//--setado quando o paniel do wordpress é carregado--//
jQuery(window).load(()=>{
    //modo basic
    switcher_init = true;
    switcher_b.css({'background': '#49c66a'});
    switcher_active_b.css({'transform': 'translateX(0px)'});
    switcher_active_text_b.css({'transform': 'translateX(0px)'});
    switcher_active_text_b.text('ON'); 

    //modo avanced
    switcher_init = false;   
    switcher.css({'background': '#acc9b4'});     
    switcher_active.css({'transform': 'translateX(-31px)'});
    switcher_active_text.css({'transform': 'translateX(25px)'});
    switcher_active_text.text('OFF');
    
    //setando menu wordpress
    menu_post.css({'display': 'none'});
    menu_pages.css({'display': 'none'});
    menu_coments.css({'display': 'none'});
    menu_elementor.css({'display': 'none'});
    aparencias.css({'display': 'none'});
    plugins.css({'display': 'none'});
    ferramentas_wordpress.css({'display': 'none'});
    menu_modelos_elementor.css({'display': 'none'});
    essential_addons.css({'display': 'none'});
    crocloblock.css({'display': 'none'});
    yoast_seo.css({'display': 'none'});
    essential_block.css({'display': 'none'});
    smart_filters.css({'display': 'none'});
    sucuri_antivirus.css({'display': 'none'});
    cache_w3tc.css({'display': 'none'});
    jet_engine.css({'display': 'none'});
});



switcher_basic.click(()=>{    
    if(switcher_init == true){
        //modo basic
        switcher_init = false;   
        switcher_b.css({'background': '#acc9b4'});     
        switcher_active_b.css({'transform': 'translateX(-31px)'});
        switcher_active_text_b.css({'transform': 'translateX(25px)'});
        switcher_active_text_b.text('OFF');

       /* //modo avanced
        switcher_init = true;
        switcher.css({'background': '#49c66a'});
        switcher_active.css({'transform': 'translateX(0px)'});
        switcher_active_text.css({'transform': 'translateX(0px)'});
        switcher_active_text.text('ON'); */

        //setando menu wordpress
        menu_post.css({'display': 'block'});
        menu_pages.css({'display': 'block'});
        menu_coments.css({'display': 'block'});
        menu_elementor.css({'display': 'block'});
        aparencias.css({'display': 'block'});
        plugins.css({'display': 'block'});
        ferramentas_wordpress.css({'display': 'block'});
        menu_modelos_elementor.css({'display': 'block'});
        essential_addons.css({'display': 'block'});
        crocloblock.css({'display': 'block'});
        yoast_seo.css({'display': 'block'});
        essential_block.css({'display': 'block'});
        smart_filters.css({'display': 'block'});
        sucuri_antivirus.css({'display': 'block'});
        cache_w3tc.css({'display': 'block'});
        jet_engine.css({'display': 'block'});
        
    }else{
        //modo basic
        switcher_init = true;
        switcher_b.css({'background': '#49c66a'});
        switcher_active_b.css({'transform': 'translateX(0px)'});
        switcher_active_text_b.css({'transform': 'translateX(0px)'});
        switcher_active_text_b.text('ON'); 

        //modo avanced
        switcher_init = false;   
        switcher.css({'background': '#acc9b4'});     
        switcher_active.css({'transform': 'translateX(-31px)'});
        switcher_active_text.css({'transform': 'translateX(25px)'});
        switcher_active_text.text('OFF');
        
        //setando menu wordpress
        menu_post.css({'display': 'none'});
        menu_pages.css({'display': 'none'});
        menu_coments.css({'display': 'none'});
        menu_elementor.css({'display': 'none'});
        aparencias.css({'display': 'none'});
        plugins.css({'display': 'none'});
        ferramentas_wordpress.css({'display': 'none'});
        menu_modelos_elementor.css({'display': 'none'});
        essential_addons.css({'display': 'none'});
        crocloblock.css({'display': 'none'});
        yoast_seo.css({'display': 'none'});
        essential_block.css({'display': 'none'});
        smart_filters.css({'display': 'none'});
        sucuri_antivirus.css({'display': 'none'});
        cache_w3tc.css({'display': 'none'});
        jet_engine.css({'display': 'none'});
    }
});

switcher_advanced.click(()=>{    
    if(switcher_init == true){
        switcher_init = false;   
        switcher.css({'background': '#acc9b4'});     
        switcher_active.css({'transform': 'translateX(-31px)'});
        switcher_active_text.css({'transform': 'translateX(25px)'});
        switcher_active_text.text('OFF');
    }else{

        //modo advanced
        switcher_init = true;
        switcher.css({'background': '#49c66a'});
        switcher_active.css({'transform': 'translateX(0px)'});
        switcher_active_text.css({'transform': 'translateX(0px)'});
        switcher_active_text.text('ON');  

        //modo basic
        switcher_init = false;   
        switcher_b.css({'background': '#acc9b4'});     
        switcher_active_b.css({'transform': 'translateX(-31px)'});
        switcher_active_text_b.css({'transform': 'translateX(25px)'});
        switcher_active_text_b.text('OFF');


        //setando menu wordpress
        menu_post.css({'display': 'block'});
        menu_pages.css({'display': 'block'});
        menu_coments.css({'display': 'block'});
        menu_elementor.css({'display': 'block'});
        aparencias.css({'display': 'block'});
        plugins.css({'display': 'block'});
        ferramentas_wordpress.css({'display': 'block'});
        menu_modelos_elementor.css({'display': 'block'});
        essential_addons.css({'display': 'block'});
        crocloblock.css({'display': 'block'});
        yoast_seo.css({'display': 'block'});
        essential_block.css({'display': 'block'});
        smart_filters.css({'display': 'block'});
        sucuri_antivirus.css({'display': 'block'});
        cache_w3tc.css({'display': 'block'});
        jet_engine.css({'display': 'block'});
    }
});

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
// function mascara(o,f){
//     v_obj=o
//     v_fun=f
//     setTimeout("execmascara()",1)
// }
// function execmascara(){
//     v_obj.value=v_fun(v_obj.value)
// }
// function mtel(v){
//     v=v.replace(/\D/g,"");     //Remove tudo o que não é dígito       
//     v=v.replace(/(\d{1})(\d{3})$/,"$1.$2");  //Coloca um ponto entre o terceiro
    
//     //se for maior que 1 milhão acrescenta um ponto depois do primeiro numero
//     if(v >= 1000){
//         //console.log('maior q 1 milhão');
//         v=v.replace(/^(\d{1})(\d)/g,"$1.$2"); //Coloca um ponto depois do primeiro numero
//     }
//     return v;
// }
// function id( el ){
//     return document.querySelector( el );
// }

// window.onload = function(){
   
//     document.querySelector('#_preco-maximo').onkeypress = function(){
//         mascara( this, mtel ); 
//     }  
	
// 	document.querySelector('#_condominio').onkeypress = function(){
//         mascara( this, mtel ); 
//     }   
	
// 	document.querySelector('#_iptu').onkeypress = function(){
//         mascara( this, mtel ); 
//     } 
	
// 	document.querySelector('#_area-imovel').onkeypress = function(){
//         mascara( this, mtel ); 
//     }   
	
// 	document.querySelector('#_terreno').onkeypress = function(){
//         mascara( this, mtel ); 
//     }     
         
// }

