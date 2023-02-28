//pegando o elemento class e id 
const head = {
    get(element){
        return document.querySelector(element);
    }, 
    
    getAll(element){
        return document.querySelectorAll(element);
    },

    formInput(){    
        var html_head = '<div class="input-form-vilma"><input type="search" autocomplete="off" placeholder="Digite código" class="search-cod" id="post-search-input" name="searchm" value=""><input type="submit" id="search-submit" class="button buttonv" value="Pesquisar por código"></div>';
        var html_head_2 = '<div class="input-form-vilma"><input type="search" autocomplete="off" placeholder="Digite o preço" class="search-price" id="post-search-input" name="searchp" value=""><input type="submit" id="search-submit" class="button buttonv" value="Pesquisar por preço"></div>';   
        var html_head_hidden = '<input type="hidden" name="active" value="true">';         
                       
        if(head.get('.search-box') !== null){
            head.get('.search-box').innerHTML = html_head_hidden + html_head + html_head_2;
        }
    },
    
    update(){
        if(head.get('.search-box') !== null){
            head.get('.search-box').classList.add('search-box-active');              
        }
    },

    mask(searchpes){
        var convertInt = parseInt(searchpes.value.length); //convertendo a string para int

        searchpes.value=searchpes.value.replace('.', ''); //setando o valor para o padrão
                
        //se for maior que 1 mil acrescenta um ponto depois do primeiro numero
        if(convertInt <= 4){    
            searchpes.value=searchpes.value.replace(/(\d{1})(\d{3})$/,"$1.$2"); //Coloca um ponto entre o terceiro 
        }else if(convertInt >= 5 && convertInt <=7) {
            var limpar = searchpes.value=searchpes.value.replace('.', ''); //removendo os pontos 
            var new_value = limpar.replace(/(\d{1})(\d{3})$/,"$1.$2"); //Coloca um ponto entre o terceiro
            searchpes.value = new_value;    
        }else if(convertInt >= 7 && convertInt <= 9){
            var limpar = searchpes.value=searchpes.value.replace('.', ''); //removendo os pontos 
            var new_value = limpar.replace(/(\d{1})(\d{3})(\d{3})$/,"$1.$2.$3"); //Coloca um ponto entre o terceiro
            searchpes.value = new_value;
        }else {
            var limpar = searchpes.value=searchpes.value.replace('.', ''); //removendo os pontos 
            var new_value = limpar.replace(/(\d{1})(\d{3})(\d{3})$/,"$1.$2.$3"); //Coloca um ponto entre o terceiro  
            searchpes.value = new_value;         
        }      
    },

    maskTd(date){
        for(let date_values of date){
            
            var convertInt = parseInt(date_values.textContent.length); //convertendo a string para int   

            if(convertInt >= 4 && convertInt <= 6){
                date_values.textContent = date_values.textContent.replace(/(\d{1})(\d{3})$/,"$1.$2");
            }else if(convertInt >= 7){
                date_values.textContent = date_values.textContent.replace(/(\d{1})(\d{3})(\d{3})$/,"$1.$2.$3");
            }
        }
    },

    maskValue(date){
        for(let date_values of date){
            
            var convertInt = parseInt(date_values.value.length); //convertendo a string para int   

            if(convertInt >= 4 && convertInt <= 6){
                date_values.value = date_values.value.replace(/(\d{1})(\d{3})$/,"$1.$2");
            }else if(convertInt >= 7){
                date_values.value = date_values.value.replace(/(\d{1})(\d{3})(\d{3})$/,"$1.$2.$3");
            }
        }
    }
}

const buttonv = {
    close(){
        
        if(head.get('.close') != null){
            head.get('.close').addEventListener('click', ()=>{
                head.get('.background-notice-form').classList.remove('background-notice-active');
            });            
        }
    },

    bigLetter(input_type){
        for(let input_types of input_type){
            input_types.addEventListener('keyup', (event)=>{
                var input = event.target;
                input.value = input.value.toUpperCase();
            });
        }
    },

    search(post_search){
        for(let post_search_input of post_search){

            post_search_input.addEventListener('keyup', (e)=>{ 
                
                var input = e.target;
                input.value = input.value.toUpperCase();  
                         
                head.mask(post_search_input);  
            });
        }
    },

    maskInput(input_type){   
        if(input_type !== null){
            head.maskValue(input_type);

            for(let input_type_input of input_type){                
    
                input_type_input.addEventListener('keyup', ()=>{                          
                    head.mask(input_type_input);  
                });
            }
        }   
    },

    public(){
        if(head.get('#post') !== null){
            head.get('#post').addEventListener('submit', (event)=>{
                const reset_type_text = head.get('#_preco-maximo');
                reset_type_text.value = reset_type_text.value.replace('.', '');     

                var limpar = reset_type_text.value=reset_type_text.value.replace('.', ''); //removendo os pontos 
                var new_value = limpar.replace(/(\d{1})(\d{3})(\d{3})$/,"$1$2$3"); //Coloca um ponto entre o terceiro
                reset_type_text.value = new_value; 
               
            });
        }
    },

    searchPrice(){      
        const reset_type_text = head.getAll('.notice-search-form .price');

        head.maskTd(reset_type_text);          
    }
}

function init() {  
    if(head.get('.wp-menu-open').id == 'menu-posts-_add_imovel'){      
        head.update();
        head.formInput();  
        //buttonv.update();          
        buttonv.close(); 
        buttonv.search(head.getAll('#post-search-input'));        
    }

    buttonv.maskInput(head.getAll('.widefat.cx-ui-text'));      
    buttonv.bigLetter(head.getAll('#_codigo'));
    buttonv.public();   
    buttonv.searchPrice();   
    head.maskTd(head.getAll('.preco.column-preco'));
}
init();  
