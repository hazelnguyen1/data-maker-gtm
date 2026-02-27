// Xử lý form mở tài khoản
const openAccountForm = document.getElementById('openAccountForm');
if (openAccountForm) {
    openAccountForm.addEventListener('submit', function(e) {
        e.preventDefault();
        document.getElementById('message').textContent = 'Tài khoản đã được mở (giả lập)!';
        // Ở đây bạn có thể gắn tag GTM để track event, ví dụ: dataLayer.push({'event': 'open_account'});
    });
}

// Xử lý form đăng ký sản phẩm
const registerProductsForm = document.getElementById('registerProductsForm');
if (registerProductsForm) {
    registerProductsForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const selected = [];
        const checkboxes = document.querySelectorAll('input[type="checkbox"]:checked');
        checkboxes.forEach(cb => selected.push(cb.value));
        document.getElementById('message').textContent = `Đã đăng ký: ${selected.join(', ')} (giả lập)!`;
        // Gắn tag GTM: dataLayer.push({'event': 'register_product', 'products': selected});
    });
}