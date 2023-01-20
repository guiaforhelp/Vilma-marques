<?php
function notificationSearchForm() {  
    if(sanitize_text_field($_GET['active'])){   
        
        if($_GET['searchm']){
                $get_search = $_GET['searchm'];
                $get_meta_value = '_preco-maximo';
        }        
        
        
        global $wpdb;        
        $result = $wpdb->get_results( "SELECT * FROM `wp_postmeta` WHERE `meta_value` LIKE '".$get_search."'" );

        $html_array = array(
                '_preco-maximo',
                '_codigo'
        );

        echo ' <div class="background-notice-form background-notice-active">
        <div class="container-notice">
        <div class="notice-menu">
        <p>Título</p>
        <p>Código</p>
        <p>Preço</p>
        </div>';

        if(count($result) < 1){
               echo '<p>Desculpe! não foi possivel encontrar</p>';
        }else {               
               foreach($result as $return_id){
                       echo '<div class="notice-search-form">';
       
                       $id_post = $wpdb->get_results( "SELECT * FROM `wp_postmeta` WHERE `post_id` = ".$return_id->post_id );
                       $id_title = $wpdb->get_results( "SELECT * FROM `wp_posts` WHERE `ID` = ".$return_id->post_id );
                       
                       $title_id_post = [''];
                       foreach($id_title as $id_titles){
                        $title_id_post = $id_titles->post_title;
                       }                       
                                   
       
                       foreach($id_post as $return_id_post){                               
                                if($return_id_post->meta_key == '_preco-maximo'){                                                                
                                        $price = '<div class="price">'.$return_id_post->meta_value.'</div>';
                                }
                                
                                if($return_id_post->meta_key == '_codigo'){
                                        $cod = '<div class="cod">'.$return_id_post->meta_value.'</div>';
                                }
 
                                if($return_id_post->meta_key == $get_meta_value){
                                        $title = '<a href="http://localhost/wp-admin/post.php?post='.$return_id_post->post_id.'&action=edit" class="title">'.$title_id_post.'</a>';   
                                        echo $title.$cod.$price.'</div>';                    
                                 }
                               
                             
                       }
               }
        }
        
        echo '</div>
        <div class="close">x</div>
        </div>';
    }
}