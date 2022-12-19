<?php
require 'include.php';

/**
 * Aqui é aonde será criado a estrutura do widget
 */

/*if ( ! defined( 'ABSPATH' ) ) {
	exit; // Sair se acessado diretamente.
}

/**
 * Criando a class que será o widget
 */
class Elementor_Currency_Flavia_translate extends \Elementor\Widget_Base {

	/**
	 * Dando nome para o conteúdo
	 */
	public function get_name() {
		return 'favoritos';
	}

	/**
	 * Dando o nome do titulo para o conteudo
	 */
	public function get_title() {
		return esc_html__( 'favoritos', 'elementor-currency-control' );
	}

	/**
	 * Inserindo o icone
	 */
	public function get_icon() {
		return 'eicon-table';
	}

	/**
	 * Setando url de ajuda
	 */
	public function get_custom_help_url() {
		return 'https://guiaforhelp.com.br';
	}

	/**
	 * Definindo para qual categoria o widget será criado
	 */
	public function get_categories() {
		return [ FLAVIA_DEFINE_CATEGORY ];
	}

	/**
	 * Definindo uma keyword para o widget ser chamado
	 */
	public function get_keywords() {
		return [ 'favoritos', 'currencies' ];
	}

	/**
	 * Definindo  control do elementor
     * para saber mais consultar a documentação do elementor
     * https://developers.elementor.com/docs/controls/simple-example/
	 */

	protected function register_controls() {

		$this->start_controls_section(
			'content_section',
			[
				'label' => esc_html__( 'Conteúdo', 'elementor-currency-control' ),
				'tab' => \Elementor\Controls_Manager::TAB_CONTENT,
			]
		);

		$this->add_control(
			'unique-control-name',
			[
				'type' => \Elementor\Controls_Manager::TEXT,
				'label' => esc_html__( 'Nome da lista', 'plugin-name' ),
				'description' => esc_html__( 'Lista de favoritos Woocommerce.', 'plugin-name' ),
				'label_block' => true,
				'separator' => 'after'
			]
		);

		
		$this->add_control(
			'price_currency',
			[
				'label' => esc_html__( 'Valor', 'elementor-currency-control' ),
				'type' => 'favoritos',
			]
		);

		$this->end_controls_section();

	}

	/**
	 * Setando o que será mostrado no frontend do widget
	 */
	protected function render() {
		$settings = $this->get_settings_for_display();

			global $wpdb;
			$results1 = $wpdb->get_results("SELECT * FROM `".$wpdb->prefix."postmeta` WHERE `meta_key` LIKE '__wishlist'");
			

			/** Cadastrar produtos aos favoritos */
			if(sanitize_text_field(@$_GET['id-product-wishlist'])){
				insertUserMeta(@$_GET['id-product-wishlist']);
			}			
	?>
		<div class="name-listen">
			<?php echo $settings['unique-control-name']; ?>
		</div>

		<div class="container-wishlist">
			<div class="type">
				<div class="name-product">
					<label>Nome do Produto</label>					
				</div>
				<div class="price-product">
					<label>Preço unitário</label>
				</div>
				<div class="button-type">
					<label>Ações</label>
				</div>
			</div>			
		

			<?php 
			foreach($results1 as $id_product_wishlist){
				$whislist_id = $wpdb->get_results("SELECT * FROM `".$wpdb->prefix."postmeta` WHERE `post_id` LIKE '".$id_product_wishlist->post_id."'"); 
				$results = $wpdb->get_results("SELECT * FROM `".$wpdb->prefix."posts` WHERE `ID` LIKE '".$id_product_wishlist->post_id."'");
				/*echo '<pre>';
				print_r($whislist_id);
				echo '</pre>';*/
?>
		<div class="content">
				<div class="button-close">
					<?php
					deleteUserMeta(sanitize_text_field(@$_GET['delete-wishlist']));
					foreach($results as $id_button) {
						echo '<a href="?delete-wishlist='.$id_button->ID.'">X</a>';
					}
					?>					
				</div>
				<div class="name-product">
					<span>
						<?php

						// setando a imagem thumbnail
						foreach($whislist_id as $image){
							if($image->meta_key == '_thumbnail_id'){
								$image_thumb = $wpdb->get_results("SELECT * FROM `".$wpdb->prefix."posts` WHERE `ID` LIKE ".$image->meta_value);
								foreach($image_thumb as $image_thumb1){
									echo '<img src="'.$image_thumb1->guid.'">';
								}								
							}
						}
						?>
						<?php /* setando o nome do produto */ 
						foreach($results as $title) {echo $title->post_title;} ?>
					</span>
				</div>
				<div class="price-product">
					<span>
						R$ <?php /* setando do preço */
						foreach($whislist_id as $result){if($result->meta_key == '_regular_price'){echo $result->meta_value;	}}?>
					</span>
					<!--<label>Nenhum produto adicionado à lista de desejos</label>-->
				</div>
				<div class="button-type">
					<?php
					$array_id_button = array();
					foreach($results as $id_button) {
					?>
						<a href="http://localhost/jeitodeserstore/cart/?add-to-cart=<?php echo $id_button->ID ?>">Adicionar ao carrinho</a>
					<?php	//$array_id_button[] = $id_button->ID;
					}
					//echo $array_id_button;
					?>
					
				</div>
			</div>

<?php
			}			
			?>
					
		</div>
	<?php
	}

}