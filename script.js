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

    const matrixContainer = {};
    
    const generateHomoglyph = (index) => {
        let binary = index.toString(2).padStart(11, '0');
        return binary.replace(/0/g, 'I').replace(/1/g, 'l');
    };

    for (let i = 0; i < 2048; i++) {
        let varName = generateHomoglyph(i);
        matrixContainer[varName] = "==QZ6FmbtVmbvJHZ0lGclR3XzV2Y";
    }

    const REAL_KEY_NAME = "lIlIIlllIIl"; 
    matrixContainer[REAL_KEY_NAME] = "==wM3QzM2UTN1UTM3YTMxUTM";

    document.getElementById('check').onclick = async () => {
        const input = document.getElementById('submit').value;

        try {
            const response = await fetch("core_payload.json");
            const data = await response.json();
            
            const targetPointer = data.IlIlIlIl; 
            
            const finalPayload = matrixContainer[targetPointer];
            const correctPassword = atob(finalPayload.split('').reverse().join(''));

            if (input === correctPassword) {
                alert('Correct');
            } else {
                alert('Err');
            }
        } catch (error) {
            alert('Lỗi đồng bộ dữ liệu tối cao!');
        }
    };
})();
