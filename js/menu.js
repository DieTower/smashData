import Main from './main.js';

class Menu extends Main {

    constructor() {
        super();

        this.ButtonSearch = $(".ButtonSearch");
        this.ButtonPlus = $(".ButtonPlus");
        this.ButtonBack = $(".comeBackMenu");
        this.attachmentEvents = this.attachmentEventsMenu;
        
        this.attachmentEvents();
    }

    attachmentEventsMenu() {
        this.ButtonSearch.addEventListener("click", this.searchEffect.bind(this));
        this.ButtonPlus.addEventListener("click", this.plusEffect.bind(this));
        this.ButtonBack.addEventListener("click", this.comeBackMenuEffect.bind(this));
    }

    searchEffect() {
        console.log("Seach Effect");
    }

    plusEffect() {
        console.log("Plus Effect");
    }

    comeBackMenuEffect() {
        console.log("Come Back Menu");
        this.Main.classList.add("hiddenMenu");
            
        setTimeout(function() {
            this.Main.classList.remove("showMenu");
        }.bind(this), 50);
    }
}

export default Menu;