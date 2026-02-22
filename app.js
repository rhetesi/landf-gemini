import { UIController } from './modules/UIController.js';

/**
 * Alkalmazás indítása moduláris felépítéssel
 */
document.addEventListener('DOMContentLoaded', () => {
    const app = new UIController();
    app.init();
});
