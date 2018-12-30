import Container from './container.js';

class Form extends Container {

    constructor() {
        super();
        this.Form;
        this.Title;
    }

    goTo(url) {
        document.location.href = url;
    }

    get Form() {
        return $("form", this.Container);
    }

    get Title() {
        return $("h1", this.Container);
    }

}

export default Form;