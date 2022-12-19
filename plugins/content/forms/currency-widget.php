<?php
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
		return 'caixa_pesquisa';
	}

	/**
	 * Dando o nome do titulo para o conteudo
	 */
	public function get_title() {
		return esc_html__( 'Caixa de pesquisa', 'elementor-currency-control' );
	}

	/**
	 * Inserindo o icone
	 */
	public function get_icon() {
		return 'eicon-button';
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
		return [ CONTENT_DEFINE_CATEGORY ];
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
				'label' => esc_html__( 'Caixa de pesquisa', 'elementor-currency-control' ),
				'tab' => \Elementor\Controls_Manager::TAB_CONTENT,
			]
		);

		$this->add_control(
			'text-control-name',
			[
				'type' => \Elementor\Controls_Manager::TEXT,
				'label' => esc_html__( 'ID do container', 'plugin-name' ),
				'description' => esc_html__( 'Insira o ID do container que deseja fazer a consulta', 'plugin-name' ),
				'label_block' => true,
				'separator' => 'after'
			]
		);	
		
		$this->add_control(
			'text-control-placeholder',
			[
				'type' => \Elementor\Controls_Manager::TEXT,
				'label' => esc_html__( 'Defina um nome para o placeholder', 'plugin-name' ),
				'description' => esc_html__( 'Defina um texto padrão para a caixa de pesquisa', 'plugin-name' ),
				'label_block' => true
			]
		);	
		
		$this->add_control(
			'text-control-class',
			[
				'type' => \Elementor\Controls_Manager::TEXT,
				'label' => esc_html__( 'Defina um nome para class', 'plugin-name' ),
				'description' => esc_html__( 'De um nome para class que será costumizada', 'plugin-name' ),
				'label_block' => true
			]
		);	
		

		$this->end_controls_section();

	}

	/**
	 * Setando o que será mostrado no frontend do widget
	 */
	protected function render() {		
		echo $this->content();
	}

	public function content(){
		$settings = $this->get_settings_for_display();
		if($settings['text-control-name'] == null) {			
			echo $this->inputTextValue(null, 'Defina um nome', null);						
		}else{
			echo $this->inputTextValue(
				$settings['text-control-name'],
				$settings['text-control-placeholder'],
				$settings['text-control-class']
			);	
		}	
	}


	/** Criando o input text */
	public function inputTextValue($name, $placeholder, $name_class){
		$div = array(
			'input' => '<input type="text"',
			'data_name' => 'data-define_value=',
			'placeholder' => 'placeholder=',
			'name_class' => 'class=',
		);

		return $div['input'].'id="define-data"'.$div['data_name'].'"'.$name.'"'
		.$div['placeholder'].'"'.$placeholder.'"'
		.$div['name_class'].'"'.$name_class.'">';

		/*$img_content = array();
		foreach($content as $contents){
			$img_content[] = $contents;
		}
		

		return $div['div_start'].' 
		'.$div['name_class'].
		$name_class.'">'
		.implode('', $img_content).$div['div_close'];*/
	}	

}