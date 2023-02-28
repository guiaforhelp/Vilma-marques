<?php
/**
 * 
 * Definindo  control do elementor
 * para saber mais consultar a documentação do elementor
 * https://developers.elementor.com/docs/controls/simple-example/
 * https://elementor.github.io/elementor-icons/
 * ---ELEMENTOR WIDGETS---
 * Registrando os grupos de controls no elementor
 */

function register_currency_control( $controls_manager ) {

    //--Wishlist
    require CONTENT_WIDGETS_ELEMENTOR . 'currency.php';    
    $controls_manager->register( new \Elementor_Currency_Control_Vilma_forms() );
	$controls_manager->register( new \Elementor_Currency_Control_Vilma_pagination() );
}

 
/**
 * Registrando os grupos de widgets no elementor
 */
function register_currency_widget( $widgets_manager ) {
    
    //--Widget de teste
	require CONTENT_WIDGETS_ELEMENTOR . 'currency-widget.php';
    $widgets_manager->register( new \Elementor_Currency_Vilma_forms() );   
	$widgets_manager->register( new \Elementor_Currency_Vilma_pagination() ); 
}

/**
 * Definindo uma nova categoria
 */
function add_elementor_widget_categories( $elements_manager ){
	$elements_manager->add_category(
		CONTENT_DEFINE_CATEGORY,
		[
			'title' => esc_html__( CONTENT_DEFINE_CATEGORY, 'plugin-name' )
		]
	);
}



