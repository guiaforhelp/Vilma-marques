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


//--Formulario de IMOVEIS painel wordpress--//
const form_cod = jQuery('#_codigo');
const form_finalidade_Venda = jQuery('#_finalidade-Venda');
const form_finalidade_Aluguel = jQuery('#_finalidade-Aluguel');

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
    switcher_init = false;
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
        switcher_init = true;   
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
        plugins.css({'display': 'block'}); /*--plugins do wordpress--*/
        ferramentas_wordpress.css({'display': 'none'}); 
        menu_modelos_elementor.css({'display': 'none'});
        essential_addons.css({'display': 'none'});
        crocloblock.css({'display': 'block'}); /*--plugins do crocloblock--*/
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