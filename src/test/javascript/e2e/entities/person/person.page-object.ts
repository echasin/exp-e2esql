import { element, by, ElementFinder } from 'protractor';

export class PersonComponentsPage {
    createButton = element(by.id('jh-create-entity'));
    deleteButtons = element.all(by.css('jhi-person div table .btn-danger'));
    title = element.all(by.css('jhi-person div h2#page-heading span')).first();

    async clickOnCreateButton() {
        await this.createButton.click();
    }

    async clickOnLastDeleteButton() {
        await this.deleteButtons.last().click();
    }

    async countDeleteButtons() {
        return this.deleteButtons.count();
    }

    async getTitle() {
        return this.title.getAttribute('jhiTranslate');
    }
}

export class PersonUpdatePage {
    pageTitle = element(by.id('jhi-person-heading'));
    saveButton = element(by.id('save-entity'));
    cancelButton = element(by.id('cancel-save'));
    name_lastInput = element(by.id('field_name_last'));
    name_firstInput = element(by.id('field_name_first'));

    async getPageTitle() {
        return this.pageTitle.getAttribute('jhiTranslate');
    }

    async setName_lastInput(name_last) {
        await this.name_lastInput.sendKeys(name_last);
    }

    async getName_lastInput() {
        return this.name_lastInput.getAttribute('value');
    }

    async setName_firstInput(name_first) {
        await this.name_firstInput.sendKeys(name_first);
    }

    async getName_firstInput() {
        return this.name_firstInput.getAttribute('value');
    }

    async save() {
        await this.saveButton.click();
    }

    async cancel() {
        await this.cancelButton.click();
    }

    getSaveButton(): ElementFinder {
        return this.saveButton;
    }
}

export class PersonDeleteDialog {
    private dialogTitle = element(by.id('jhi-delete-person-heading'));
    private confirmButton = element(by.id('jhi-confirm-delete-person'));

    async getDialogTitle() {
        return this.dialogTitle.getAttribute('jhiTranslate');
    }

    async clickOnConfirmButton() {
        await this.confirmButton.click();
    }
}
