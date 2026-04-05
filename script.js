// 1. Kịch bản Animation & Autoplay Nhạc
const startScreen = document.getElementById('start-screen');
const greetingCard = document.getElementById('greeting-card');
const bgMusic = document.getElementById('bgMusic');

startScreen.addEventListener('click', () => {
    // Bước 1: Phát nhạc ngay lập tức khi người dùng chạm vào màn hình
    bgMusic.play();

    // Bước 2: Ẩn màn hình "Mở quà"
    startScreen.classList.add('hidden');

    // Bước 3: Đợi một khoảnh khắc nhỏ (0.5s) rồi hiện lời chúc lên cho "nghệ"
    setTimeout(() => {
        greetingCard.classList.add('show-card');
    }, 500);
});

// 2. Tạo Icon nền IT
const iconClasses = [
    'fa-brands fa-java', 'fa-solid fa-network-wired', 'fa-solid fa-database', 
    'fa-solid fa-server', 'fa-solid fa-robot', 'fa-solid fa-gamepad', 
    'fa-solid fa-microchip', 'fa-solid fa-code', 'fa-solid fa-laptop-code'
];

function createBackgroundIcons() {
    const container = document.getElementById('background-icons');
    for (let i = 0; i < 20; i++) {
        const iconEl = document.createElement('i');
        iconEl.className = `${iconClasses[Math.floor(Math.random() * iconClasses.length)]} icon-bg`;
        iconEl.style.fontSize = Math.random() * 20 + 20 + 'px';
        iconEl.style.left = Math.random() * 100 + 'vw';
        iconEl.style.animationDuration = Math.random() * 15 + 10 + 's';
        iconEl.style.animationDelay = Math.random() * 10 + 's';
        container.appendChild(iconEl);
    }
}

// 3. Tạo hoa anh đào rơi
function createSakura() {
    const leaf = document.createElement('div');
    leaf.classList.add('sakura');
    leaf.style.width = leaf.style.height = Math.random() * 12 + 8 + 'px';
    leaf.style.left = Math.random() * 100 + 'vw';
    leaf.style.animationDuration = Math.random() * 4 + 3 + 's';
    document.body.appendChild(leaf);
    setTimeout(() => leaf.remove(), 7000);
}

// Khởi chạy Icon và Hoa
createBackgroundIcons();
setInterval(createSakura, 250);