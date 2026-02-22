export class Modal {
    constructor(modalId) {
        this.modalElement = document.getElementById(modalId);
        this.bootstrapModal = new bootstrap.Modal(this.modalElement);
        
        this.titleElem = this.modalElement.querySelector('.modal-title');
        this.subtitleElem = this.modalElement.querySelector('.modal-subtitle');
        this.bodyElem = this.modalElement.querySelector('.modal-body');
    }

    show(title, subtitle, htmlContent) {
        this.titleElem.textContent = title;
        this.subtitleElem.textContent = subtitle;
        this.bodyElem.innerHTML = htmlContent;
        this.bootstrapModal.show();
    }

    hide() {
        this.bootstrapModal.hide();
    }
}