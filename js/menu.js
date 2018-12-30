import Main from './main.js';

class Menu extends Main {

    constructor() {
        super();

        this.ButtonSearch = $(".ButtonSearch");
        this.ButtonPlus = $(".ButtonPlus");
        this.ButtonBack = $(".comeBackMenu");
        this.attachmentEvents = this.attachmentEventsMenu;
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