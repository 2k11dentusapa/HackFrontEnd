(() => {
    const TARGET_WIDTH = 1280;
    const TARGET_HEIGHT = 720;
    const TOLERANCE = 100;
    setInterval(() => {
        if (Math.abs(window.innerWidth - TARGET_WIDTH) > TOLERANCE || Math.abs(window.innerHeight - TARGET_HEIGHT) > TOLERANCE) {
            alert("Cảnh báo: Phát hiện hành vi can thiệp hệ thống qua Console DevTools!");
            window.location.reload();
        }
    }, 100);
    document.addEventListener('contextmenu', e => e.preventDefault());
    document.addEventListener('keydown', e => {
        if (e.key === 'F12') return e.preventDefault();
        if ((e.ctrlKey || e.metaKey) && ['u', 'U', 'i', 'I', 'c', 'C', 'j', 'J', 's', 'S'].includes(e.key)) return e.preventDefault();
    });
    document.getElementById('check').onclick = async () => {
        const input = document.getElementById('submit').value;
        try {
            const response = await fetch("payload.json");
            const data = await response.json();
            const targetPointer = data["IlIlIlIl"]; 
            const finalPayload = data[targetPointer];
            const correctPassword = atob(finalPayload.split('').reverse().join(''));
            if (input === correctPassword) {
                alert('HUYỀN THOẠI! Bạn đã chính thức PHÁ ĐẢO toàn bộ chuỗi thử thách!');
            } else {
                alert('Mật khẩu tối cao không chính xác! Hãy kiểm tra lại script dò tìm của bạn.');
            }
        } catch (error) {
            alert('Lỗi đồng bộ dữ liệu tối cao!');
        }
    };
})();
