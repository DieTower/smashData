class Container {

    constructor() {
        this.Container;
        this.Title;
        this.AttachmentEvents;
    }

    get Container() {
        return $("#container #formContainer");
    }

    get attachmentEvents() {
        return AttachmentEvents;
    }

    set attachmentEvents(value) {
        this.AttachmentEvents = value;
    }

}

export default Container;