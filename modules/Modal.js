export class Modal {
    constructor(modalId) {
        this.element = document.getElementById(modalId);
        this.instance = new bootstrap.Modal(this.element);
        this.title = this.element.querySelector('.modal-title');
        this.subtitle = this.element.querySelector('.modal-subtitle');
        this.body = this.element.querySelector('.modal-body');
    }

    show(title, subtitle, html) {
        this.title.textContent = title;
        this.subtitle.textContent = subtitle;
        this.body.innerHTML = html;
        this.instance.show();
    }
}