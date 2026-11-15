// Fungsi Modal
function showModal(modalType) {
    let modalId;
    switch(modalType) {
        case 'about':
            modalId = 'aboutModal';
            break;
        case 'support':
            modalId = 'supportModal';
            break;
        case 'donate':
            modalId = 'donateModal';
            break;
        default:
            return;
    }
    document.getElementById(modalId).style.display = 'flex';
}

function closeModal(modalId) {
    document.getElementById(modalId).style.display = 'none';
}

// Tutup
window.addEventListener('click', function(event) {
    if (event.target.className === 'modal') {
        event.target.style.display = 'none';
    }
});