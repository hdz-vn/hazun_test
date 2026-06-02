// Hàm tải template
function loadTemplate(id, fileName) {
    fetch(`/hazun_test/Templates/${fileName}`)
        .then(res => res.ok ? res.text() : Promise.reject(`Lỗi tải ${fileName}`))
        .then(html => document.getElementById(id).innerHTML = html)
        .catch(err => console.error(err));
}

// Tự động chạy khi trang tải xong
window.addEventListener('DOMContentLoaded', () => {
    loadTemplate('security-place', 'security.html');
    loadTemplate('menu-place', 'menu.html');
    loadTemplate('clock-place', 'clock.html');
    loadTemplate('chat-place', 'chat.html');
});
