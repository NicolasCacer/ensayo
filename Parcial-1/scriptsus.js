function getQueryParam(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
}
const text = getQueryParam('text');
const email = decodeURIComponent(text);
document.getElementById('card-text').innerHTML = `A confirmation email has been sent to <strong>${email}</strong>. Please open it and click the button inside to confirm your subscription.`;

function returnToSubcription(){
    window.location.assign('../Parcial-1/');
}