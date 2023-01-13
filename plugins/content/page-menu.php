<?php
function settingFilterVilma(){
    menuPrin();
 }

 function menuPrin(){
?>
<h1>Configurações de filtragem</h1>
<h2>Selecione o mode em que deseja</h2>

<div class="mode-switcher">
    <div class="setting-switcher">
        <h3>Modo Básico</h3>
        <span>Este é o modo padrão aonde o sistema mostra somente as configurações principais</span>
        <div class="text-switcher">Modo básico</div>
        <div id="switcher-basic" data-active="on" class="switcher-b">    
            <div class="switcher-active-text-b">ON</div>
            <div class="switcher-active-b"></div>
        </div>
    </div>

    <div class="setting-switcher">
        <h3>Modo Avançado</h3>
        <span>Este é o modo é apropriado para desenvolvedores aonde mostrar informações mais avançadas para as configurações de plugins, temas e outros</span>
        <div class="text-switcher">Modo Avançado</div>
        <div id="switcher-advanced" data-active="off" class="switcher-ad">    
            <div class="switcher-active-text-ad">ON</div>
            <div class="switcher-active-ad"></div>
        </div>
    </div>
</div>



<!--<div class="text-views"></div>-->
<?php
 }
 