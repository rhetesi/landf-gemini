export class Modal {
    constructor(modalId) {
        this.element = document.getElementById(modalId);
        this.bsModal = new bootstrap.Modal(this.element);
        this.title = this.element.querySelector('.modal-title');
        this.subtitle = this.element.querySelector('.modal-subtitle');
        this.body = this.element.querySelector('.modal-body');
    }

    show(title, subtitle, content) {
        this.title.innerText = title;
        this.subtitle.innerText = subtitle;
        this.body.innerHTML = content;
        this.bsModal.show();
    }
}