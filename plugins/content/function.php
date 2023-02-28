<?php
require VILMA_MARQUES_CONTENT .'page-menu.php';
require VILMA_MARQUES_CONTENT .'form.php';
require VILMA_MARQUES_CONTENT .'config-container-elementor.php';
require VILMA_MARQUES_CONTENT .'notifications/function.php';

/** Style CSS e JS */

/** acesso ao styles admin */
function load_admin_style() {
   wp_enqueue_style( 'vilma-css', VILMA_MARQUES_PLUGIN_URL. 'css/admin-style.css', false, VERSION, 'all');
   wp_enqueue_style( 'notifications-css', VILMA_MARQUES_PLUGIN_URL. 'css/notifications.css', false, VERSION, 'all');
   wp_enqueue_script('vilma-js', VILMA_MARQUES_PLUGIN_URL. 'js/admin-script.js', array('jquery'), VERSION, true);
   wp_enqueue_script('teste-vilma-js', VILMA_MARQUES_PLUGIN_URL. 'js/teste.js', array('jquery'), VERSION, true);   
}

function load_style(){
   wp_enqueue_script('script-vilma-js', VILMA_MARQUES_PLUGIN_URL. 'js/script-vilma.js', array('jquery'), VERSION, true);
   wp_enqueue_script('search-vilma-js', VILMA_MARQUES_PLUGIN_URL. 'js/search-vilma.js', array('jquery'), VERSION, true);
   wp_enqueue_script('pagination-vilma-js', VILMA_MARQUES_PLUGIN_URL. 'js/pagination-vilma.js', array('jquery'), VERSION, true);
}


/**
 * Registra um submenu nas configurações do painel wordpress.
*/ 

function vilma_menu_add_admin_page() {
	add_options_page(
		__( 'Filtra qual tipo de menu será exibido nas configurações', 'textdomain' ),
		__( 'Filtro de exibição', 'textdomain' ),
		'manage_options',
		'filtrar-setting',
		'settingFilterVilma'
	);
}



/**
 * Register a custom menu page.
*/ 
/*function wpdocs_register_my_custom_menu_page() {
   add_menu_page(
       __( 'Configurações Vilma Marques', 'textdomain' ),
       'Vilma Marques',
       'manage_options',
       'vilma-marques',
       'vilmaMarquesMenu',        
       plugins_url('vilmamarques-plugin/content/img/logo.svg'),
       6
   );

   add_submenu_page( 'fd-sales', 
   'Gerenciamento de paginas', 
   'Gerenciamento de paginas', 
   'manage_options', 
   'gerenciamento-paginas', 
   'pg_submenu');
}

function pg_submenu(){
   echo selectUserPg();
}*/

/** Notificações */
add_action( 'admin_notices', 'notificationSearchForm' );

/** criando menu */
add_action( 'admin_menu', 'vilma_menu_add_admin_page' );

/** chamando arquivos CSS e JS */
add_action( 'admin_enqueue_scripts', 'load_admin_style' );
add_action( 'wp_enqueue_scripts', 'load_style' );

add_action( 'admin_head', 'searchCod' );


/*--Criando icone no elementor--*/
add_action( 'elementor/controls/register', 'register_currency_control' );
add_action( 'elementor/widgets/register', 'register_currency_widget' );
add_action( 'elementor/elements/categories_registered', 'add_elementor_widget_categories' );
