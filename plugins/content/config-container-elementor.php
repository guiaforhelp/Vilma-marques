<?php
//--Configurações--//
$pasta_container = 'forms';
$nome_category = 'Vilma Marques';

//Caminhos para criação de widgets para elementor
define('CONTENT__FILE__', __FILE__);
define('CONTENT_CONTAINER__DIR__', __DIR__ );
define('CONTENT_PATH', plugin_dir_path(CONTENT__FILE__));
define( 'CONTENT_WIDGETS_ELEMENTOR', CONTENT_CONTAINER__DIR__. '/'.$pasta_container.'/' );
define( 'CONTENT_DEFINE_CATEGORY', $nome_category );

require CONTENT_PATH .$pasta_container. '/function.php';
?>