//pegando o elemento class e id 
const head = {
    get(element){
        return document.querySelector(element);
    }, 
    
    getAll(element){
        return document.querySelectorAll(element);
    },

    formInput(){    
        var html_head = '<div class="input-form-vilma"><input type="search" id="post-search-input" name="searchm" value=""><input type="button" id="search-submit" class="button buttonv" value="Pesquisar por código"></div>';
        var html_head_2 = '<div class="input-form-vilma"><input type="search" id="post-search-input" name="searchp" value=""><input type="button" id="search-submit" class="button buttonv" value="Pesquisar por preço"></div>';            
                       
       head.get('.search-box').innerHTML = html_head_2 + html_head;
    },
    
    update(){
        head.get('.search-box').classList.add('search-box-active');
    }
}

const buttonv = {
    update(){
        for(let button_click of head.getAll('.buttonv')){
            button_click.addEventListener('click', ()=>{    
                for(let post_search_input of head.getAll('#post-search-input')){

                    if(post_search_input.value != false){                         
                        head.get('.background-notice-form').classList.add('background-notice-active');
                    }
                }
            });
        }
    },

    close(){
        head.get('.close').addEventListener('click', ()=>{
            head.get('.background-notice-form').classList.remove('background-notice-active');
        });
    }
}

function init() {  
    if(head.get('.wp-menu-open').id == 'menu-posts-_add_imovel'){      
        head.update();
        head.formInput();  
        buttonv.update();     
        buttonv.close();    
    }
}
init();
