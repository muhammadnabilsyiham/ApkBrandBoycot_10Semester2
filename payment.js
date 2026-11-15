// Fungsi Buat Bayar
let selectedAmount = 0;

function selectAmount(element, amount) {
    // Hapus Pilihan
    document.querySelectorAll('.payment-option').forEach(opt => {
        opt.classList.remove('selected');
    });
    
    // Tambahkan Pilihan
    element.classList.add('selected');
    selectedAmount = amount;
    document.getElementById('customAmount').value = amount;
}

function processDonation() {
    const customAmountInput = document.getElementById('customAmount');
    let amount = selectedAmount || parseInt(customAmountInput.value);
    
    if (!amount || isNaN(amount)) {
        alert('Silakan pilih nominal atau masukkan jumlah donasi');
        return;
    }
    
    if (amount < 75000) {
        alert('Minimal donasi adalah Rp75.000');
        return;
    }
    
    alert(`Terima kasih! Anda akan mendonasikan Rp${amount.toLocaleString()}.`);

    resetPaymentForm();
    
    closeModal('supportModal');
}

function resetPaymentForm() {
    selectedAmount = 0;
    const customAmountInput = document.getElementById('customAmount');
    if (customAmountInput) customAmountInput.value = '';
    document.querySelectorAll('.payment-option').forEach(opt => {
        opt.classList.remove('selected');
    });
}

document.addEventListener('DOMContentLoaded', function() {

});