// Fungsi Ad
function showAd() {
    const adContainer = document.getElementById('adContainer');
    const adContent = document.getElementById('adContent');
    
    // Loading
    adContent.innerHTML = '<p>Memuat iklan...</p>';
    adContainer.style.display = 'flex';
    
    // Simulasi
    setTimeout(() => {
        loadExampleAd();
    }, 1000);
}

function closeAd() {
    document.getElementById('adContainer').style.display = 'none';
}

function loadExampleAd() {
    const adContent = document.getElementById('adContent');
    adContent.innerHTML = `
        <img src="https://via.placeholder.com/300x250?text=Contoh+Iklan" 
             alt="Iklan" style="max-width: 100%;">
        <p>Ini adalah contoh iklan. Dalam implementasi nyata, ini akan menjadi iklan nyata dari jaringan iklan.</p>
    `;
}
