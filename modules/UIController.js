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
            <div class="row g-4">
                <div class="col-12"><div class="section-title mt-0">Találó adatai</div></div>
                <div class="col-md-6">
                    <label class="form-label-small">Találó neve *</label>
                    <input type="text" class="form-control custom-field" value="Kovács János">
                </div>
                <div class="col-md-6">
                    <label class="form-label-small">Elérhetőség</label>
                    <input type="text" class="form-control custom-field" placeholder="+36 30 123 4567">
                </div>

                <div class="col-12"><div class="section-title">Találás körülményei</div></div>
                <div class="col-md-6">
                    <label class="form-label-small">Találás dátuma *</label>
                    <input type="date" class="form-control custom-field" value="2026-02-22">
                </div>
                <div class="col-md-6">
                    <label class="form-label-small">Találás helye *</label>
                    <input type="text" class="form-control custom-field" placeholder="Helyszín megadása...">
                </div>

                <div class="col-12"><div class="section-title">Tárgy adatai</div></div>
                <div class="col-md-8">
                    <label class="form-label-small">Tárgy megnevezése * (max. 50 karakter)</label>
                    <input type="text" class="form-control custom-field" value="Kulcscsomó" maxlength="50">
                    <div class="char-counter">10 / 50</div>
                </div>
                <div class="col-md-4">
                    <label class="form-label-small">Márka</label>
                    <input type="text" class="form-control custom-field">
                </div>
                <div class="col-12">
                    <label class="form-label-small">Részletes leírás</label>
                    <textarea class="form-control custom-field" rows="3"></textarea>
                </div>

                <div class="col-md-3">
                    <label class="form-label-small">Anyag</label>
                    <input type="text" class="form-control custom-field">
                </div>
                <div class="col-md-3">
                    <label class="form-label-small">Forma</label>
                    <input type="text" class="form-control custom-field">
                </div>
                <div class="col-md-3">
                    <label class="form-label-small">Szín</label>
                    <input type="text" class="form-control custom-field">
                </div>
                <div class="col-md-3">
                    <label class="form-label-small">Méret</label>
                    <input type="text" class="form-control custom-field">
                </div>

                <div class="col-12"><div class="section-title">Fénykép</div></div>
                <div class="col-12 d-flex gap-2">
                    <button class="btn btn-outline-secondary px-4 py-2"><i class="bi bi-camera me-2"></i>Fénykép készítése</button>
                    <button class="btn btn-outline-secondary px-4 py-2"><i class="bi bi-upload me-2"></i>Feltöltés</button>
                </div>

                <div class="col-12 pt-3">
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" id="pdfCheck" checked>
                        <label class="form-check-label fw-bold" for="pdfCheck">
                            <i class="bi bi-file-earmark-pdf text-danger me-1"></i> Nyilvántartó lap készítése (PDF)
                        </label>
                    </div>
                </div>
            </div>
        `;
        this.modal.show('Új talált tárgy rögzítése', 'Adja meg a talált tárgy adatait. A *-gal jelölt mezők kötelezőek.', formHtml);
    }
}