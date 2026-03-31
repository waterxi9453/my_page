// JavaScript：這裡負責邏輯
function changeMood() {
    const moods = [
        { msg: "Code 一次就過！", color: "#2ecc71" },
        { msg: "Bug 正在路上...", color: "#e74c3c" },
        { msg: "今晚又要熬夜了？", color: "#3498db" },
        { msg: "編譯器愛你！", color: "#9b59b6" },
        { msg: "咖啡因不足...", color: "#f39c12" },
        { msg: "愛中原", color: "#ff44aa" },
        { msg: "愛夏老大", color: "#e38eff" }
    ];

    const randomIndex = Math.floor(Math.random() * moods.length);
    const selected = moods[randomIndex];

    document.getElementById('message').innerText = selected.msg;
    document.body.style.backgroundColor = selected.color;
}
