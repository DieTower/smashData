import Form from './form.js';

class ArrowButton extends Form {

    constructor() {
        super();
        this.ComeBackButton;

        this.attachmentEvents = this.Events();
    }

    Events() {
        this.ComeBackButton.addEventListener("click", this.ComeBack.bind(this));
    }

    ComeBack() {

        if(this.Container.classList.contains("firstEffect")) {
            this.Container.classList.remove("firstEffect");
        }

        this.Container.classList.add("containerUp");
        setTimeout(function() {this.goTo('../index.html')}.bind(this), 650);
    }
    
    get ComeBackButton() {
        return $("#arrowComeBackContainer #arrowComeBack", this.Container);
    }

}

export default ArrowButton;