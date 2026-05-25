// pdf-utils.js - Tổng hợp các chức năng xử lý PDF

// Cách 1: Gọi cửa sổ in (Ctrl+P)
function printPage() {
    window.print();
}

// Cách 2: Tải PDF tự động (dùng html2pdf)
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

// Cách 3: Tải PDF chỉ một vùng cụ thể (ví dụ: id="noi-dung-chinh")
function downloadRegionAsPDF(elementId, fileName = 'vung_web.pdf') {
    if (typeof html2pdf === 'undefined') {
        console.error('Thư viện html2pdf chưa được nạp.');
        return;
    }
    
    const element = document.getElementById(elementId);
    if (!element) {
        alert('Không tìm thấy vùng nội dung cần in.');
        return;
    }
    
    const opt = {
        margin: [0.5, 0.5, 0.5, 0.5],
        filename: fileName,
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 2 },
        jsPDF: { unit: 'in', format: 'a4', orientation: 'portrait' }
    };
    
    html2pdf().set(opt).from(element).save();
}
