// Hàm tải template
function loadTemplate(id, fileName) {
    fetch(`/hazun_test/templates/${fileName}`)  // ← sửa: viết thường 'templates'
        .then(res => res.ok ? res.text() : Promise.reject(`Lỗi tải ${fileName}`))
        .then(html => document.getElementById(id).innerHTML = html)
        .catch(err => console.error(err));
}

// Tự động chạy khi trang tải xong
window.addEventListener('DOMContentLoaded', () => {
    loadTemplate('security-place', 'security.html');  // ← thêm '-place'
    loadTemplate('menu-place', 'menu.html');          // ← thêm '-place'
    loadTemplate('clock-place', 'clock.html');        // ← thêm '-place'
    loadTemplate('chat-place', 'chat.html');          // ← thêm '-place'
    loadTemplate('footer-place', 'footer.html');      // ← thêm dòng này
});
