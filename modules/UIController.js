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
            <div class="registration-form">
                <div class="form-section-title">Találó adatai</div>
                <div class="row g-3 mb-4">
                    <div class="col-md-6">
                        <label class="form-label-custom">Találó neve *</label>
                        <input type="text" class="form-control custom-input" placeholder="Kovács János">
                    </div>
                    <div class="col-md-6">
                        <label class="form-label-custom">Elérhetőség</label>
                        <input type="text" class="form-control custom-input" placeholder="+36 30 123 4567">
                    </div>
                </div>

                <div class="form-section-title">Találás körülményei</div>
                <div class="row g-3 mb-4">
                    <div class="col-md-6">
                        <label class="form-label-custom">Találás dátuma *</label>
                        <div class="input-group">
                            <input type="text" class="form-control custom-input" value="2026. 02. 22.">
                            <span class="input-group-text bg-white custom-input-icon"><i class="bi bi-calendar3"></i></span>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <label class="form-label-custom">Találás helye *</label>
                        <input type="text" class="form-control custom-input" placeholder="Válasszon vagy gépeljen...">
                    </div>
                </div>

                <div class="form-section-title">Tárgy adatai</div>
                <div class="row g-3 mb-3">
                    <div class="col-md-6">
                        <label class="form-label-custom">Tárgy megnevezése * (max. 50 karakter)</label>
                        <input type="text" class="form-control custom-input" placeholder="Kulcscsomó" maxlength="50">
                        <div class="char-counter">0/50</div>
                    </div>
                    <div class="col-md-6">
                        <label class="form-label-custom">Márka</label>
                        <input type="text" class="form-control custom-input" placeholder="Adidas, Nike, stb.">
                    </div>
                </div>

                <div class="mb-3">
                    <label class="form-label-custom">Részletes leírás</label>
                    <textarea class="form-control custom-input" rows="3" placeholder="A tárgy részletes leírása..."></textarea>
                </div>

                <div class="row g-2 mb-4">
                    <div class="col-md-3">
                        <label class="form-label-custom">Anyag</label>
                        <input type="text" class="form-control custom-input" placeholder="Fém, bőr...">
                    </div>
                    <div class="col-md-3">
                        <label class="form-label-custom">Forma</label>
                        <input type="text" class="form-control custom-input" placeholder="Kerek, négyzet...">
                    </div>
                    <div class="col-md-3">
                        <label class="form-label-custom">Szín</label>
                        <input type="text" class="form-control custom-input" placeholder="Fekete, piros...">
                    </div>
                    <div class="col-md-3">
                        <label class="form-label-custom">Méret</label>
                        <input type="text" class="form-control custom-input" placeholder="10x5 cm">
                    </div>
                </div>

                <div class="form-section-title">Fénykép</div>
                <div class="d-flex gap-2 mb-4">
                    <button class="btn btn-upload"><i class="bi bi-camera"></i> Fénykép készítése</button>
                    <button class="btn btn-upload"><i class="bi bi-upload"></i> Feltöltés</button>
                </div>

                <div class="form-check d-flex align-items-center gap-2 mb-2">
                    <input class="form-check-input" type="checkbox" id="pdfCheck" checked>
                    <label class="custom-checkbox-label" for="pdfCheck">
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