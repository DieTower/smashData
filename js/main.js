class Main {

    constructor() {
        this.Main;
        this.MenuContainer;
        this.Button;
        this.Characters;
        this.attachmentEvents;

        this.attachmentEvents();
    }

    attachmentEvents() {
        this.Button.addEventListener("click",this.effect.bind(this));
    }

    effect() {
        if(this.Main.classList.contains("hiddenMenu")) {
            this.showEffect();
        } else if(this.Main.classList.contains("showMenu")) {
            this.hiddenEffect();
        }
    }

    showEffect() {
        console.log("show");
        this.Main.classList.add("showMenu");
            
        setTimeout(function() {
            this.Main.classList.remove("hiddenMenu");
        }.bind(this), 50);
    }

    hiddenEffect() {
        console.log("hidden");
        this.Main.classList.add("hiddenMenu");
            
        setTimeout(function() {
            this.Main.classList.remove("showMenu");
        }.bind(this), 50);
    }

    get Main() {
        return $("main");
    }

    get MenuContainer() {
        return $(".menuContainer");
    }

    get Button() {
        return $(".arrow");
    }

    get Characters() {
        return $("ul",$(".characterContainer"));
    }

}

export default Main;