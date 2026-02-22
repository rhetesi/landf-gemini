export class UIController {
    constructor(modalHandler) {
        this.modal = modalHandler;
        this.addBtn = document.getElementById('btnAddNew');
    }

    init() {
        this.addBtn?.addEventListener('click', () => this.openNewItemForm());
    }

    openNewItemForm() {
        const formHtml = `
            <div class="container-fluid p-0">
                <div class="form-section-title mb-3 fw-bold border-bottom pb-2 text-primary">Találó adatai</div>
                <div class="row g-3 mb-4">
                    <div class="col-12 col-md-6">
                        <label class="form-label-custom">Találó neve *</label>
                        <input type="text" class="form-control custom-input" placeholder="Név...">
                    </div>
                    <div class="col-12 col-md-6">
                        <label class="form-label-custom">Elérhetőség</label>
                        <input type="text" class="form-control custom-input" placeholder="Telefon/Email...">
                    </div>
                </div>

                <div class="form-section-title mb-3 fw-bold border-bottom pb-2 text-primary">Találás körülményei</div>
                <div class="row g-3 mb-4">
                    <div class="col-12 col-md-6">
                        <label class="form-label-custom">Találás dátuma *</label>
                        <input type="date" class="form-control custom-input" value="2026-02-22">
                    </div>
                    <div class="col-12 col-md-6">
                        <label class="form-label-custom">Találás helye *</label>
                        <input type="text" class="form-control custom-input" placeholder="Helyszín...">
                    </div>
                </div>

                <div class="form-section-title mb-3 fw-bold border-bottom pb-2 text-primary">Tárgy adatai</div>
                <div class="row g-3 mb-3">
                    <div class="col-12 col-md-8">
                        <label class="form-label-custom">Megnevezés *</label>
                        <input type="text" class="form-control custom-input" maxlength="50">
                        <div class="char-counter text-end small opacity-50">0/50</div>
                    </div>
                    <div class="col-12 col-md-4">
                        <label class="form-label-custom">Márka</label>
                        <input type="text" class="form-control custom-input">
                    </div>
                </div>

                <div class="mb-4">
                    <label class="form-label-custom">Részletes leírás</label>
                    <textarea class="form-control custom-input" rows="3"></textarea>
                </div>

                <div class="row g-2 mb-4">
                    <div class="col-6 col-md-3"><label class="form-label-custom small">Anyag</label><input type="text" class="form-control custom-input"></div>
                    <div class="col-6 col-md-3"><label class="form-label-custom small">Forma</label><input type="text" class="form-control custom-input"></div>
                    <div class="col-6 col-md-3"><label class="form-label-custom small">Szín</label><input type="text" class="form-control custom-input"></div>
                    <div class="col-6 col-md-3"><label class="form-label-custom small">Méret</label><input type="text" class="form-control custom-input"></div>
                </div>

                <div class="d-grid d-md-flex gap-2 mb-3">
                    <button class="btn btn-upload w-100 border text-secondary"><i class="bi bi-camera me-2"></i>Kamera</button>
                    <button class="btn btn-upload w-100 border text-secondary"><i class="bi bi-upload me-2"></i>Feltöltés</button>
                </div>
            </div>
        `;

        this.modal.show(
            'Új talált tárgy rögzítése',
            'Kérjük, töltse ki a kötelező mezőket.',
            formHtml
        );
    }
}