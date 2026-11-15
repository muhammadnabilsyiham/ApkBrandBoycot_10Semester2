// Halaman
document.addEventListener('DOMContentLoaded', function() {
    displayAllBrands();
    
    document.getElementById('searchInput').addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            searchBrands();
        }
    });
});

// Display Semua Brand
function displayAllBrands() {
    const brandsGrid = document.getElementById('brandsGrid');
    brandsGrid.innerHTML = '';
    
    brands.forEach(brand => {
        createBrandCard(brand, brandsGrid);
    });
}

function createBrandCard(brand, parentElement) {
    const brandCard = document.createElement('div');
    brandCard.className = 'brand-card';
    
    // Sorce Gambar
    const imageSrc = brand.image ? brand.image : `https://via.placeholder.com/150?text=${encodeURIComponent(brand.name)}`;
    const imageAlt = brand.name;
    
    brandCard.innerHTML = `
        <div class="brand-image">
            <img src="${imageSrc}" alt="${imageAlt}" onerror="this.onerror=null;this.src='https://via.placeholder.com/150?text=${encodeURIComponent(brand.name)}'">
        </div>
        <div class="brand-name">${brand.name}</div>
        <div class="brand-info">
            <p>${brand.origin}</p>
        </div>
    `;
    
    brandCard.addEventListener('click', function() {
        showBrandModal(brand, imageSrc);
    });
    
    parentElement.appendChild(brandCard);
}

// Mencari Manual
function searchBrands() {
    const searchInput = document.getElementById('searchInput').value.toLowerCase();
    const brandsGrid = document.getElementById('brandsGrid');
    brandsGrid.innerHTML = '';
    
    if (searchInput.trim() === '') {
        displayAllBrands();
        return;
    }
    
    const filteredBrands = brands.filter(brand => 
        brand.name.toLowerCase().includes(searchInput) ||
        (brand.origin && brand.origin.toLowerCase().includes(searchInput))
    );
    
    if (filteredBrands.length === 0) {
        brandsGrid.innerHTML = '<p style="grid-column: 1/-1; text-align: center;">Tidak ada brand yang ditemukan</p>';
        return;
    }
    
    filteredBrands.forEach(brand => {
        createBrandCard(brand, brandsGrid);
    });
}

// Menunjukan Brand Modal
function showBrandModal(brand, imageSrc) {
    document.getElementById('modalBrandName').textContent = brand.name;
    
    const modalImageSrc = brand.image ? brand.image : `https://via.placeholder.com/300?text=${encodeURIComponent(brand.name)}`;
    
    document.getElementById('modalBrandContent').innerHTML = `
        <div style="text-align: center; margin-bottom: 1rem;">
            <img src="${modalImageSrc}" alt="${brand.name}" style="max-width: 200px; border-radius: 8px;" 
                 onerror="this.onerror=null;this.src='https://via.placeholder.com/300?text=${encodeURIComponent(brand.name)}'">
        </div>
        <p><strong>Asal:</strong> ${brand.origin}</p>
        <p style="margin-top: 1rem;">${brand.description || 'Dengan tidak membeli produk ini, Anda turut berkontribusi dalam gerakan boikot terhadap perusahaan yang mendukung pendudukan ilegal Israel di Palestina.'}</p>
    `;
    document.getElementById('brandModal').style.display = 'flex';
}

// Scroll Ke Atas
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// Melihat Kembali Keatas Ketika Scroll
window.addEventListener('scroll', function() {
    const backToTopButton = document.getElementById('backToTop');
    if (window.scrollY > 300) {
        backToTopButton.style.display = 'block';
    } else {
        backToTopButton.style.display = 'none';
    }
});