import Menu from './menu.js';

class Search extends Menu {

    constructor() {
        super();

        this.header = $("header");
        this.input = $("#inputSearch",this.header);
        this.buttonSearch = $(".ButtonSearch");
        this.searchArrow = $(".searchArrow");

        this.attachmentEvents = this.attachmentEventsSearch;
        this.attachmentEvents();
    }

    attachmentEventsSearch() {
        this.buttonSearch.addEventListener("click", this.showSearchEffect.bind(this));
        this.searchArrow.addEventListener("click", this.showSearchEffect.bind(this));
    }

    showSearchEffect() {
        if(!this.header.classList.contains("showSearch")) {

            this.header.classList.add("showSearch");
            this.comeBackMenuEffect();
            this.Button.classList.add("hidden");
            this.Characters.classList.add("dragCharacters");

            this.Main.classList.add("gridColumnExtend");
        
        } else {

            this.header.classList.add("hiddenSearch");

            setTimeout(function() {
                this.header.classList.remove("showSearch");
                this.header.classList.remove("hiddenSearch");

                this.input.value = "";

                this.Button.classList.remove("hidden");
                this.Button.classList.add("showArrowComeBackEffect");
                
                this.Characters.classList.remove("dragCharacters");
                this.Main.classList.remove("gridColumnExtend");
            }.bind(this), 400);

        }
    }

}

export default Search;