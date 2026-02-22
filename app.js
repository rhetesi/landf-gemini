import { Modal } from './modules/Modal.js';
import { UIController } from './modules/UIController.js';

document.addEventListener('DOMContentLoaded', () => {
    const mainModal = new Modal('itemModal');
    const app = new UIController(mainModal);
    app.init();
});