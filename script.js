// Xử lý toggle details cho sản phẩm (test click)
const toggleButtons = document.querySelectorAll('.toggle-details');
toggleButtons.forEach(button => {
    button.addEventListener('click', function() {
        const targetId = this.getAttribute('data-target');
        const details = document.getElementById(targetId);
        details.style.display = details.style.display === 'none' ? 'block' : 'none';
        // Push event cho GTM để track click
        window.dataLayer = window.dataLayer || [];
        dataLayer.push({'event': 'product_details_click', 'product': targetId});
    });
});

// Xử lý modal newsletter (test click)
const newsletterBtn = document.getElementById('newsletter-btn');
const modal = document.getElementById('modal');
const closeModal = document.getElementById('close-modal');

if (newsletterBtn) {
    newsletterBtn.addEventListener('click', function() {
        modal.style.display = 'block';
        // Push event cho GTM
        dataLayer.push({'event': 'newsletter_open'});
    });
}

if (closeModal) {
    closeModal.addEventListener('click', function() {
        modal.style.display = 'none';
        // Push event cho GTM
        dataLayer.push({'event': 'newsletter_close'});
    });
}

// Track scroll depth (test scroll)
window.addEventListener('scroll', function() {
    const marker = document.getElementById('scroll-marker');
    if (marker) {
        const markerTop = marker.getBoundingClientRect().top;
        if (markerTop < window.innerHeight && !window.scrollTracked) {
            window.scrollTracked = true; // Chỉ track 1 lần
            dataLayer.push({'event': 'scroll_to_faq_end'});
        }
    }
});

// Các phần cũ cho form (nếu có ở các trang khác)
const openAccountForm = document.getElementById('openAccountForm');
if (openAccountForm) {
    openAccountForm.addEventListener('submit', function(e) {
        e.preventDefault();
        document.getElementById('message').textContent = 'Tài khoản đã được mở (giả lập)!';
        dataLayer.push({'event': 'open_account'});
    });
}

const registerProductsForm = document.getElementById('registerProductsForm');
if (registerProductsForm) {
    registerProductsForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const selected = [];
        const checkboxes = document.querySelectorAll('input[type="checkbox"]:checked');
        checkboxes.forEach(cb => selected.push(cb.value));
        document.getElementById('message').textContent = `Đã đăng ký: ${selected.join(', ')} (giả lập)!`;
        dataLayer.push({'event': 'register_product', 'products': selected});
    });
}