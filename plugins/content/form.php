<?php
function searchCod(){
    global $wpdb;
    $resultado = $wpdb->get_results ("SELECT * FROM `{$wpdb->prefix}postmeta` WHERE `meta_key` LIKE '_codigo' ORDER BY `meta_value` DESC" );	
   
    $ver_array = array('AA', 'AV');

    foreach($resultado as $result){
      $ver = $result->meta_value;
      $ver_replace = str_replace($ver_array, '', $ver);      
    }

   // echo $ver;
    setcookie("codVilmaMarques", $ver_replace);
    setcookie("codVilmaMarquesDefault", $ver);
}