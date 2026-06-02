// Hàm tải template
function loadTemplate(id, fileName) {
    fetch(`/hazun_test/templates/${fileName}`)  // ← sửa: viết thường 'templates'
        .then(res => res.ok ? res.text() : Promise.reject(`Lỗi tải ${fileName}`))
        .then(html => document.getElementById(id).innerHTML = html)
        .catch(err => console.error(err));
}

// Tự động chạy khi trang tải xong
window.addEventListener('DOMContentLoaded', () => {
    loadTemplate('security', 'security.html');  // ← thêm '-place'
    loadTemplate('menu', 'menu.html');          // ← thêm '-place'
    loadTemplate('clock', 'clock.html');        // ← thêm '-place'
    loadTemplate('chat', 'chat.html');          // ← thêm '-place'
});
