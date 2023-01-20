//pegando o elemento class e id 
const head = {
    get(element){
        return document.querySelector(element);
    }, 
    
    getAll(element){
        return document.querySelectorAll(element);
    },

    formInput(){    
        var html_head = '<div class="input-form-vilma"><input type="search" placeholder="Digite código ou preço" class="search-cod" id="post-search-input" name="searchm" value=""><input type="submit" id="search-submit" class="button buttonv" value="Pesquisar"></div>';
        var html_head_2 = '<div class="input-form-vilma"><input type="search" class="search-price" id="post-search-input" name="searchp" value=""><input type="submit" id="search-submit" class="button buttonv" value="Pesquisar por preço"></div>';   
        var html_head_hidden = '<input type="hidden" name="active" value="true">';         
                       
       head.get('.search-box').innerHTML = html_head_hidden + html_head;
    },
    
    update(){
        head.get('.search-box').classList.add('search-box-active');       
    }
}

const buttonv = {
    update(){  

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
        // buttonv.update();          
        buttonv.close();         
    }
}
init();