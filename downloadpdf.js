function downloadAsPDF() {
    // Kiểm tra xem thư viện html2pdf đã được tải chưa
    if (typeof html2pdf === 'undefined') {
        console.error('Thư viện html2pdf chưa được nạp. Vui lòng thêm script vào trang.');
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
