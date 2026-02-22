export class UIController {
    constructor() {
        this.tabs = document.querySelectorAll('.tab-btn');
        this.addNewBtn = document.getElementById('btnAddNew');
        this.viewButtons = document.querySelectorAll('.v-btn');
    }

    init() {
        this._bindEvents();
        console.log('UI Vezérlő sikeresen inicializálva.');
    }

    _bindEvents() {
        // Fülváltás kezelése
        this.tabs.forEach(tab => {
            tab.addEventListener('click', (e) => {
                this.tabs.forEach(t => t.classList.remove('active'));
                e.currentTarget.classList.add('active');
            });
        });

        // Nézetváltás kezelése (rács/lista)
        this.viewButtons.forEach(btn => {
            btn.addEventListener('click', (e) => {
                this.viewButtons.forEach(b => b.classList.remove('active'));
                e.currentTarget.classList.add('active');
            });
        });

        // Új tárgy rögzítése
        this.addNewBtn?.addEventListener('click', () => {
            console.log('Action: Új tárgy rögzítése ablak megnyitása.');
        });
    }
}
