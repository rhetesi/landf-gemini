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
                        <label>Találó neve *</label>
                        <input type="text" class="form-control custom-field" value="Kovács János">
                    </div>
                    <div class="col-md-6">
                        <label>Elérhetőség</label>
                        <input type="text" class="form-control custom-field" placeholder="+36 30 123 4567">
                    </div>
                </div>

                <div class="section-title">Találás körülményei</div>
                <div class="row g-3 mb-4">
                    <div class="col-md-6">
                        <label>Találás dátuma *</label>
                        <div class="input-group">
                            <input type="text" class="form-control custom-field" value="2026. 02. 22.">
                            <span class="input-group-text bg-white border-start-0"><i class="bi bi-calendar3"></i></span>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <label>Találás helye *</label>
                        <input type="text" class="form-control custom-field" placeholder="Válasszon vagy gépeljen...">
                    </div>
                </div>

                <div class="section-title">Tárgy adatai</div>
                <div class="row g-3 mb-3">
                    <div class="col-md-8">
                        <label>Tárgy megnevezése * (max. 50 karakter)</label>
                        <input type="text" class="form-control custom-field" value="Kulcscsomó" maxlength="50">
                        <div class="char-counter">0/50</div>
                    </div>
                    <div class="col-md-4">
                        <label>Márka</label>
                        <input type="text" class="form-control custom-field" placeholder="Adidas, Nike, stb.">
                    </div>
                </div>

                <div class="mb-4">
                    <label>Részletes leírás</label>
                    <textarea class="form-control custom-field" rows="3" placeholder="A tárgy részletes leírása..."></textarea>
                </div>

                <div class="row g-2 mb-4">
                    <div class="col-md-3"><label>Anyag</label><input type="text" class="form-control custom-field" placeholder="Fém, bőr..."></div>
                    <div class="col-md-3"><label>Forma</label><input type="text" class="form-control custom-field" placeholder="Kerek, négyzet..."></div>
                    <div class="col-md-3"><label>Szín</label><input type="text" class="form-control custom-field" placeholder="Fekete, piros..."></div>
                    <div class="col-md-3"><label>Méret</label><input type="text" class="form-control custom-field" placeholder="10x5 cm"></div>
                </div>

                <div class="section-title">Fénykép</div>
                <div class="d-flex gap-2 mb-4">
                    <button class="btn btn-outline-secondary btn-sm px-3 py-2"><i class="bi bi-camera me-2"></i>Fénykép készítése</button>
                    <button class="btn btn-outline-secondary btn-sm px-3 py-2"><i class="bi bi-upload me-2"></i>Feltöltés</button>
                </div>

                <div class="form-check">
                    <input class="form-check-input" type="checkbox" id="pdfCheck" checked>
                    <label class="form-check-label fw-bold" for="pdfCheck">
                        <i class="bi bi-file-earmark-pdf me-1 text-primary"></i> Nyilvántartó lap készítése (PDF)
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