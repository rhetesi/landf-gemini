import { UIController } from './modules/UIController.js';
import { Modal } from './modules/Modal.js';

document.addEventListener('DOMContentLoaded', () => {
    const modal = new Modal('generalModal');
    const ui = new UIController(modal);
    ui.init();
});