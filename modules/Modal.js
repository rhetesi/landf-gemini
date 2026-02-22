export class Modal {
    constructor(modalId) {
        this.element = document.getElementById(modalId);
        this.instance = new bootstrap.Modal(this.element);
        this.body = this.element.querySelector('.modal-body');
    }

    show(content) {
        this.body.innerHTML = content;
        this.instance.show();
    }

    hide() {
        this.instance.hide();
    }
}