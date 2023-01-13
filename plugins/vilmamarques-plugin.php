<?php
/**
 * Plugin Name: Vilma Marques
 * Description: Plugin com todas funcionalidades para seu site
 * Plugin URI: 
 * Author: Miquéias Silva
 * Version: 1.0.0
 *
 * Text Domain: Vilma Marques
 *
 */

define('VERSION', '1.0.1');
define('VILMA_MARQUES__FILE__', __FILE__);
define('VILMA_MARQUES_PATH', plugin_dir_path(VILMA_MARQUES__FILE__));
define('VILMA_MARQUES_BASENAME', plugin_basename(VILMA_MARQUES__FILE__));
define('VILMA_MARQUES_PLUGIN_URL', plugin_dir_url(VILMA_MARQUES__FILE__). 'content/');
define('VILMA_MARQUES_CONTENT', VILMA_MARQUES_PATH. 'content/');

require VILMA_MARQUES_CONTENT .'function.php'; 
?>