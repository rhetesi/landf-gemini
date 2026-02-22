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
            <div class="item-form">
                <div class="section-title">Találó adatai</div>
                <div class="row g-3 mb-4">
                    <div class="col-md-6">
                        <label class="form-label-small">Találó neve *</label>
                        <input type="text" class="form-control custom-field" value="Kovács János">
                    </div>
                    <div class="col-md-6">
                        <label class="form-label-small">Elérhetőség</label>
                        <input type="text" class="form-control custom-field" placeholder="+36 30 123 4567">
                    </div>
                </div>

                <div class="section-title">Találás körülményei</div>
                <div class="row g-3 mb-4">
                    <div class="col-md-6">
                        <label class="form-label-small">Találás dátuma *</label>
                        <input type="text" class="form-control custom-field" value="2026. 02. 22.">
                    </div>
                    <div class="col-md-6">
                        <label class="form-label-small">Találás helye *</label>
                        <input type="text" class="form-control custom-field" placeholder="Válasszon vagy gépeljen...">
                    </div>
                </div>

                <div class="section-title">Tárgy adatai</div>
                <div class="row g-3 mb-3">
                    <div class="col-md-8">
                        <label class="form-label-small">Tárgy megnevezése * (max. 50 karakter)</label>
                        <input type="text" class="form-control custom-field" value="Kulcscsomó" maxlength="50">
                        <div class="char-counter">10/50</div>
                    </div>
                    <div class="col-md-4">
                        <label class="form-label-small">Márka</label>
                        <input type="text" class="form-control custom-field" placeholder="Adidas, Nike, stb.">
                    </div>
                </div>

                <div class="mb-4">
                    <label class="form-label-small">Részletes leírás</label>
                    <textarea class="form-control custom-field" rows="3" placeholder="A tárgy részletes leírása..."></textarea>
                </div>

                <div class="row g-2 mb-4">
                    <div class="col-md-3"><label class="form-label-small">Anyag</label><input type="text" class="form-control custom-field"></div>
                    <div class="col-md-3"><label class="form-label-small">Forma</label><input type="text" class="form-control custom-field"></div>
                    <div class="col-md-3"><label class="form-label-small">Szín</label><input type="text" class="form-control custom-field"></div>
                    <div class="col-md-3"><label class="form-label-small">Méret</label><input type="text" class="form-control custom-field"></div>
                </div>

                <div class="section-title">Fénykép</div>
                <div class="d-flex gap-2 mb-4">
                    <button class="btn btn-outline-secondary btn-sm"><i class="bi bi-camera me-1"></i> Fénykép készítése</button>
                    <button class="btn btn-outline-secondary btn-sm"><i class="bi bi-upload me-1"></i> Feltöltés</button>
                </div>

                <div class="form-check pb-3">
                    <input class="form-check-input" type="checkbox" id="pdfCheck" checked>
                    <label class="form-check-label small fw-bold" for="pdfCheck">
                        <i class="bi bi-file-earmark-pdf me-1"></i> Nyilvántartó lap készítése (PDF)
                    </label>
                </div>
            </div>
        `;

        this.modal.show(
            'Új talált tárgy rögzítése',
            'Adja meg a talált tárgy adatait az alábbi űrlapon. A *-gal jelölt mezők kitöltése kötelező.',
            formHtml
        );
    }
}