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
                <h6 class="fw-bold mb-3 border-bottom pb-2">Találó adatai</h6>
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

                <h6 class="fw-bold mb-3 border-bottom pb-2">Találás körülményei</h6>
                <div class="row g-3 mb-4">
                    <div class="col-md-6">
                        <label class="form-label-small">Találás dátuma *</label>
                        <input type="date" class="form-control custom-field" value="2026-02-22">
                    </div>
                    <div class="col-md-6">
                        <label class="form-label-small">Találás helye *</label>
                        <input type="text" class="form-control custom-field" placeholder="Helyszín megadása...">
                    </div>
                </div>

                <h6 class="fw-bold mb-3 border-bottom pb-2">Tárgy adatai</h6>
                <div class="row g-3 mb-3">
                    <div class="col-md-8">
                        <label class="form-label-small">Tárgy megnevezése * (max. 50 karakter)</label>
                        <input type="text" class="form-control custom-field" value="Kulcscsomó" maxlength="50">
                    </div>
                    <div class="col-md-4">
                        <label class="form-label-small">Márka</label>
                        <input type="text" class="form-control custom-field" placeholder="Adidas, Nike, stb.">
                    </div>
                </div>

                <div class="mb-4">
                    <label class="form-label-small">Részletes leírás</label>
                    <textarea class="form-control custom-field" rows="3"></textarea>
                </div>

                <div class="row g-2 mb-4">
                    <div class="col-md-3"><label class="form-label-small text-muted">Anyag</label><input type="text" class="form-control custom-field form-control-sm"></div>
                    <div class="col-md-3"><label class="form-label-small text-muted">Forma</label><input type="text" class="form-control custom-field form-control-sm"></div>
                    <div class="col-md-3"><label class="form-label-small text-muted">Szín</label><input type="text" class="form-control custom-field form-control-sm"></div>
                    <div class="col-md-3"><label class="form-label-small text-muted">Méret</label><input type="text" class="form-control custom-field form-control-sm"></div>
                </div>

                <div class="form-check mt-3">
                    <input class="form-check-input" type="checkbox" id="pdfCheck" checked>
                    <label class="form-check-label fw-bold" for="pdfCheck">
                        <i class="bi bi-file-earmark-pdf text-danger me-1"></i> Nyilvántartó lap készítése (PDF)
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