import Menu from './menu.js';

class Add extends Menu {

    constructor() {
        super();
        this.Header = $("header");
        this.ButtonPlus.addEventListener("click", this.goToAddCharacter.bind(this));
    }

    goToAddCharacter() {
        this.Header.classList.add("goToAddCharacterHeader");
        this.Main.classList.add("goToAddCharacterMain");

        setTimeout(function() { document.location.href = './next'; }, 650);
    }

}

export default Add;