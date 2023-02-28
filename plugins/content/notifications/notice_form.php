<?php
function notificationSearchForm(){
      
        if (sanitize_text_field($_GET['active'])) {
                 
                                
                if(!empty($_GET['searchm'])){
                        $value_search = $_GET['searchm'];

                }elseif(!empty($_GET['searchp'])){
                        $replace_value_search = $_GET['searchp'];
                        $value_search = str_replace('.', '', $replace_value_search);
                       // $value_search = $_GET['searchp'];
                }


                $connect_table_wp_postmeta = searchContent(
                        TABLE_WP_POSTMETA, 
                        'meta_value', 
                        $value_search
                );
                              

                echo ' <div class="background-notice-form background-notice-active">
                <div class="container-notice">
                <div class="notice-menu">
                <p>Título</p>
                <p>Código</p>
                <p>Preço</p>
                </div>';


                if (count($connect_table_wp_postmeta) < 1) {
                        echo '<p>Desculpe! não foi possivel encontrar</p> ';
                } else {

                        
                        foreach ($connect_table_wp_postmeta as $return_id) {                                                           
                                
                                $title_id_post = [''];
                                $content_id_post_price = [''];
                                $content_id_post_cod = [''];

                                

                                foreach (searchContent(TABLE_WP_POSTS, COLUMN_ID, $return_id->post_id) as $id_titles) {
                                        $title_id_post = $id_titles->post_title;
                                }

                                foreach (searchContent(TABLE_WP_POSTMETA, COLUMN_POST_ID, $return_id->post_id) as $return_id_post) {
                                        if ($return_id_post->meta_key == '_preco-maximo') {
                                                $content_id_post_price = $return_id_post->meta_value;
                                        }

                                        if ($return_id_post->meta_key == '_codigo') {
                                                $content_id_post_cod = $return_id_post->meta_value;
                                        }
                                }

                                
                                echo '<div class="notice-search-form">
                                <a href="'.get_site_url().'/wp-admin/post.php?post=' . $return_id_post->post_id . '&action=edit" class="title">' . $title_id_post . '</a>
                                <div class="cod">' . $content_id_post_cod . '</div>                      
                                <div class="price">' . $content_id_post_price . '</div></div>';


                        }
                }

                echo '</div>
                <div class="close">x</div>
                </div>';
        }        
}