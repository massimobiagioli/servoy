
/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @protected
 *
 * @properties={typeid:24,uuid:"464FE3B2-01FD-4B7D-ABA8-36F8491188E6"}
 */
function onAction(event) {
	switch (event.getElementName()) {
	case 'btnDettaglio':
		visualizzaDettaglio();
		break;
	case 'btnNuovo':
		aggiungi();
		break;
	default:
		break;
	}
}

/**
 * @properties={typeid:24,uuid:"4FF7F656-290E-40E4-A344-9136BEF08720"}
 */
function visualizzaDettaglio() {
	apriDettaglio('visualizza');
}

/**
 * @properties={typeid:24,uuid:"C2673C41-FFB5-44E8-8073-10394A4A144B"}
 */
function aggiungi() {
	apriDettaglio('nuovo');
}

/**
 * @properties={typeid:24,uuid:"04B92237-4677-4402-A683-30C0793A2563"}
 */
function apriDettaglio(modoApertura) {
	var win = application.createWindow("win", JSWindow.DIALOG);
	win.title = "Dettaglio";
	var f = forms.soggetto_dettaglio;	
	
	// Imposta parametri
	f['parameters'] = {
		pk: id,
		modoApertura: modoApertura,
		onOk: onOk,
		onAnnulla: onAnnulla
	};
	
	f['controller'].show(win);	
}

/**
 * @properties={typeid:24,uuid:"9EAE4CB3-564D-483B-A832-720A96E50BC4"}
 */
function chiudiDettalio() {
	application.getWindow('win').destroy();
}

/**
 * @properties={typeid:24,uuid:"57666AFC-7F2A-48EB-B1D9-B5452F8F3969"}
 */
function onOk() {
	application.output("ok...");
	chiudiDettalio();
}

/**
 * @properties={typeid:24,uuid:"0E92EED4-3817-4FB1-86F0-1772DFE1A0EF"}
 */
function onAnnulla() {
	application.output("annulla...");
	chiudiDettalio();
}
