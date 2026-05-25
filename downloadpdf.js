// Hàm tải PDF
function downloadAsPDF() {
    if (typeof html2pdf === 'undefined') {
        console.error('Thư viện downloadpdf.js chưa được nạp.');
        alert('Đang tải công cụ... Hãy thử lại sau vài giây.');
        return;
    }
    
    const element = document.body;
    const opt = {
        margin: [0.5, 0.5, 0.5, 0.5],
        filename: 'trang_web.pdf',
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 2 },
        jsPDF: { unit: 'in', format: 'a4', orientation: 'portrait' }
    };
    
    html2pdf().set(opt).from(element).save();
}

// Tự động tạo và chèn nút tải PDF vào trang khi file JS được tải
window.addEventListener('DOMContentLoaded', function() {
    // Tạo nút
    const button = document.createElement('button');
    button.innerHTML = '📥 Tải PDF tự động';
    button.onclick = downloadAsPDF;
    
    // Tùy chọn: thêm style cho nút (để đẹp)
    button.style.margin = '20px 0';
    button.style.padding = '10px 20px';
    button.style.backgroundColor = '#2563eb';
    button.style.color = 'white';
    button.style.border = 'none';
    button.style.borderRadius = '8px';
    button.style.cursor = 'pointer';
    button.style.fontSize = '16px';
    
    // Thêm nút vào đầu trang (có thể đổi vị trí tùy thích)
    document.body.insertBefore(button, document.body.firstChild);
});
