export class UIController {
    constructor(modal) {
        this.modal = modal;
        this.btnAddNew = document.getElementById('btnAddNew');
    }

    init() {
        this.btnAddNew.addEventListener('click', () => this.showItemForm());
    }

    showItemForm() {
        const formHtml = `
            <div class="form-container">
                <div class="section-title mb-3">Találó adatai</div>
                <div class="row g-3">
                    <div class="col-md-6">
                        <label class="small fw-bold mb-1">Találó neve *</label>
                        <input type="text" class="form-control custom-input" value="Kovács János">
                    </div>
                    <div class="col-md-6">
                        <label class="small fw-bold mb-1">Elérhetőség</label>
                        <input type="text" class="form-control custom-input" placeholder="+36 30 123 4567">
                    </div>
                </div>

                <div class="section-title mb-3">Találás körülményei</div>
                <div class="row g-3">
                    <div class="col-md-6">
                        <label class="small fw-bold mb-1">Találás dátuma *</label>
                        <input type="date" class="form-control custom-input" value="2026-02-22">
                    </div>
                    <div class="col-md-6">
                        <label class="small fw-bold mb-1">Találás helye *</label>
                        <input type="text" class="form-control custom-input" placeholder="Válasszon vagy gépeljen...">
                    </div>
                </div>

                <div class="section-title mb-3">Tárgy adatai</div>
                <div class="row g-3">
                    <div class="col-md-8">
                        <label class="small fw-bold mb-1">Tárgy megnevezése * (max. 50 karakter)</label>
                        <input type="text" class="form-control custom-input" maxlength="50" value="Kulcscsomó">
                    </div>
                    <div class="col-md-4">
                        <label class="small fw-bold mb-1">Márka</label>
                        <input type="text" class="form-control custom-input" placeholder="Adidas, Nike, stb.">
                    </div>
                    <div class="col-12">
                        <label class="small fw-bold mb-1">Részletes leírás</label>
                        <textarea class="form-control custom-input" rows="3" placeholder="A tárgy részletes leírása..."></textarea>
                    </div>
                </div>

                <div class="row g-2 mt-3">
                    <div class="col-3"><label class="x-small">Anyag</label><input type="text" class="form-control custom-input form-control-sm"></div>
                    <div class="col-3"><label class="x-small">Forma</label><input type="text" class="form-control custom-input form-control-sm"></div>
                    <div class="col-3"><label class="x-small">Szín</label><input type="text" class="form-control custom-input form-control-sm"></div>
                    <div class="col-3"><label class="x-small">Méret</label><input type="text" class="form-control custom-input form-control-sm"></div>
                </div>

                <div class="section-title mb-3">Fénykép</div>
                <div class="d-flex gap-2">
                    <button class="btn btn-outline-secondary btn-sm px-3"><i class="bi bi-camera me-2"></i>Fénykép készítése</button>
                    <button class="btn btn-outline-secondary btn-sm px-3"><i class="bi bi-upload me-2"></i>Feltöltés</button>
                </div>

                <div class="form-check mt-4">
                    <input class="form-check-input" type="checkbox" id="pdfCheck" checked>
                    <label class="form-check-label small fw-bold" for="pdfCheck">
                        <i class="bi bi-file-earmark-pdf text-danger me-1"></i> Nyilvántartó lap készítése (PDF)
                    </label>
                </div>
            </div>
        `;
        this.modal.show(formHtml);
    }
}