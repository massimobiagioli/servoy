/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @protected
 *
 * @properties={typeid:24,uuid:"2E860EE3-8F04-44D2-AA15-385F60CC7EE3"}
 */
function onShow(firstShow, event) {
	
	if (parameters['modoApertura'] === 'nuovo') {
		preparaInserimento();
	}
	
	abilitaControlli();
	
	databaseManager.setAutoSave(false);
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @protected
 *
 * @properties={typeid:24,uuid:"4A6F3002-4EF9-4BE7-8523-97E080443C30"}
 */
function onAction(event) {
	switch (event.getElementName()) {
	case 'btnOk':
		conferma();
		break;
	case 'btnAnnulla':
		annulla();
		break;
	default:
		break;
	}
}

/**
 * @properties={typeid:24,uuid:"7DB4EF30-A520-4E1D-BCC6-61E6519B7E4A"}
 */
function abilitaControlli() {	
	var editable = parameters['modoApertura'] !== 'visualizza';
	elements.txtNome.editable = editable;	
	elements.txtCognome.editable = editable;
	elements.txtIndirizzo.editable = editable;
}

/**
 * @properties={typeid:24,uuid:"733C69DC-B6F9-4B8D-AFE5-7F6E5712C4DB"}
 */
function preparaInserimento() {
	controller.newRecord();
	elements.txtNome.requestFocus();
}

/**
 * @properties={typeid:24,uuid:"78EABFC1-671F-432E-8EA4-C146E32E70D2"}
 */
function conferma() {
	databaseManager.saveData();
	parameters['onOk']();
}

/**
 * @properties={typeid:24,uuid:"0CEDBE3F-F0F9-4B2B-B046-4C99E7E017AD"}
 */
function annulla() {
	parameters['onAnnulla']();
}