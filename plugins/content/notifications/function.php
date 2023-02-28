<?php
require 'notice_form.php';

define('TABLE_WP_POSTS', 'posts');
define('TABLE_WP_POSTMETA', 'postmeta');
define('COLUMN_POST_ID', 'post_id');
define('COLUMN_ID', 'ID'); 

function searchContent($table, $column, $content)
{
        global $wpdb;
        return $wpdb->get_results("SELECT * FROM ".
        $wpdb->prefix.$table." WHERE ".$column." LIKE '" .$content. "'");
}
