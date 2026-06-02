// Hàm tải template
function loadTemplate(id, fileName) {
    fetch(`/hazun_test/templates/${fileName}`)
        .then(res => res.ok ? res.text() : Promise.reject(`Lỗi tải ${fileName}`))
        .then(html => document.getElementById(id).innerHTML = html)
        .catch(err => console.error(err));
}

// Tự động chạy khi trang tải xong
window.addEventListener('DOMContentLoaded', () => {
    loadTemplate('security', 'security.html');
    loadTemplate('menu', 'menu.html');
    loadTemplate('clock', 'clock.html');
    loadTemplate('chat', 'chat.html');
});
