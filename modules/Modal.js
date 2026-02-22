export class Modal {
    constructor(id) {
        this.el = document.getElementById(id);
        this.bs = new bootstrap.Modal(this.el);
        this.title = this.el.querySelector('.modal-title');
        this.subtitle = this.el.querySelector('.modal-subtitle');
        this.body = this.el.querySelector('.modal-body');
    }

    open(title, subtitle, content) {
        this.title.textContent = title;
        this.subtitle.textContent = subtitle;
        this.body.innerHTML = content;
        this.bs.show();
    }
}