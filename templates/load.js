// templates/load.js
function loadTemplate(id, fileName) {
    fetch(`/hazun_test/templates/${fileName}`)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status} for ${fileName}`);
            }
            return response.text();
        })
        .then(html => {
            const element = document.getElementById(id);
            if (element) {
                element.innerHTML = html;
            } else {
                console.error(`Không tìm thấy phần tử với id: ${id}`);
            }
        })
        .catch(error => console.error(`Lỗi khi tải template ${fileName}:`, error));
}

// Tự động chạy khi trang tải xong
window.addEventListener('DOMContentLoaded', () => {
    loadTemplate('security', 'security.html');
    loadTemplate('menu', 'menu.html');
    loadTemplate('clock', 'clock.html');
    loadTemplate('chat', 'chat.html');
});
