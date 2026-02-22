import { UIController } from './modules/UIController.js';
import { Modal } from './modules/Modal.js';

document.addEventListener('DOMContentLoaded', () => {
    const modalHandler = new Modal('generalModal');
    const app = new UIController(modalHandler);
    app.init();
});