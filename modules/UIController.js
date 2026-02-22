export class UIController {
    constructor(modal) {
        this.modal = modal;
        this.addBtn = document.getElementById('btnAddNew');
    }

    init() {
        this.addBtn?.addEventListener('click', () => {
            const form = `
                <div class="row g-3">
                    <div class="col-md-6">
                        <label class="small fw-bold mb-1">Találó neve *</label>
                        <input type="text" class="form-control custom-input">
                    </div>
                    <div class="col-md-6">
                        <label class="small fw-bold mb-1">Dátum *</label>
                        <input type="date" class="form-control custom-input" value="2026-02-22">
                    </div>
                    <div class="col-12">
                        <label class="small fw-bold mb-1">Tárgy megnevezése *</label>
                        <input type="text" class="form-control custom-input" maxlength="50">
                    </div>
                    <div class="col-12">
                        <label class="small fw-bold mb-1">Leírás</label>
                        <textarea class="form-control custom-input" rows="4"></textarea>
                    </div>
                    <div class="col-12">
                        <div class="p-3 bg-light rounded-3 border-dashed border text-center">
                            <i class="bi bi-camera fs-2 d-block mb-2 text-secondary"></i>
                            <button class="btn btn-sm btn-outline-primary">Fénykép készítése</button>
                        </div>
                    </div>
                </div>
            `;
            this.modal.open('Új tárgy rögzítése', 'Kérjük, adja meg a részleteket.', form);
        });
    }
}