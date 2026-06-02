function loadTemplate(id, fileName) {
    fetch(`/hazun_test/templates/${fileName}`)
        .then(res => {
            if (!res.ok) throw new Error(`HTTP ${res.status}`);
            return res.text();
        })
        .then(html => {
            const target = document.getElementById(id);
            if (!target) return;
            
            // Bước 1: Gán HTML (có thể chứa script)
            target.innerHTML = html;
            
            // Bước 2: Tìm tất cả script vừa được chèn
            const scripts = target.querySelectorAll('script');
            
            // Bước 3: Kích hoạt từng script
            scripts.forEach(oldScript => {
                const newScript = document.createElement('script');
                if (oldScript.src) {
                    newScript.src = oldScript.src; // script từ file ngoài
                } else {
                    newScript.textContent = oldScript.textContent; // script viết inline
                }
                document.head.appendChild(newScript); // thêm vào head để chạy
                oldScript.remove(); // xóa script cũ đi
            });
        })
        .catch(err => console.error(`Lỗi tải ${fileName}:`, err));
}
