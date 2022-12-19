<?php
/**
 * Aqui é aonde será criado o conteúdo que será exibido dentro do widget
 * 
 * Criando uma classe para o conteúdo do widget e extendendo a classe padrão do elementor
 */
class Elementor_Currency_Control_Flavia_translate extends \Elementor\Base_Data_Control {

	/**
	 * Definindo o tipo de conteúdo
	 */
	public function get_type() {
		return 'miqueias';
	}

	/**
	 * Criando conteúdo personalizado
	 */
	public static function get_currencies() {
		return [
			'content' => 'setando o código aqui'
		];
	}

	/**
	 * Setando as configurações padrões do widget
	 */
	protected function get_default_settings() {
		return [
			'currencies' => self::get_currencies()
		];
	}

	/**
	 * Setando o valor padrão que será exibido no widget
	 */
	public function get_default_value() {
		return 'R$';
	}

	/**
	 * Conteúdo que será renderizado no widget
	 */
	public function content_template() {
		$control_uid = $this->get_control_uid();
		?>
		<div class="elementor-control-field">

			<# if ( data.label ) {#>
			<label for="<?php echo $control_uid; ?>" class="elementor-control-title">{{{ data.label }}}</label>
			<# } #>

			<div class="elementor-control-input-wrapper">
				<select id="<?php echo $control_uid; ?>" data-setting="{{ data.name }}">
					<option value=""><?php echo esc_html__( 'Selecione um opção', 'elementor-currency-control' ); ?></option>
					<# _.each( data.currencies, function( currency_label, currency_value ) { #>
					<option value="{{ currency_value }}">{{{ currency_label }}}</option>
					<# } ); #>
				</select>
			</div>

		</div>

		<# if ( data.description ) { #>
		<div class="elementor-control-field-description">{{{ data.description }}}</div>
		<# } #>
		<?php
	}

}