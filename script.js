document.addEventListener('DOMContentLoaded', () => {
    const hallEntrances = document.querySelectorAll('.hall-entrance');
    const hallContents = document.querySelectorAll('.hall-content');
    const energyCountSpan = document.getElementById('energy-count');
    const addEnergyBtn = document.getElementById('add-energy-btn');

    let energyCount = localStorage.getItem('angelEnergy') ? parseInt(localStorage.getItem('angelEnergy')) : 0;
    energyCountSpan.textContent = energyCount;

    // 展廳切換邏輯
    hallEntrances.forEach(entrance => {
        entrance.addEventListener('click', () => {
            const targetId = entrance.dataset.target; // 獲取點擊的展廳ID
            
            // 隱藏所有展廳內容
            hallContents.forEach(content => {
                content.classList.remove('active');
            });

            // 顯示目標展廳內容
            const targetHall = document.getElementById(targetId);
            if (targetHall) {
                targetHall.classList.add('active');
                // 平滑捲動到目標展廳
                targetHall.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });

    // 能量瓶功能 (範例，可擴展)
    if (addEnergyBtn) {
        addEnergyBtn.addEventListener('click', () => {
            energyCount++;
            energyCountSpan.textContent = energyCount;
            localStorage.setItem('angelEnergy', energyCount);
            alert('能量+1！感謝您的用心。');
        });
    }

    // 智多星按鈕 (可連結到外部或彈出式扭蛋機)
    const mastermindBtn = document.querySelector('.mastermind-btn');
    if (mastermindBtn) {
        mastermindBtn.addEventListener('click', () => {
            alert('智多星正在為您抽選幸福啟示...');
            // 未來可在此處添加 AI 匹配邏輯或導向智多星頁面
        });
    }

    // 浮動工具按鈕 (未來可連結到對應的內容區塊或彈出視窗)
    const floatingEnergyTool = document.querySelector('.energy-tool');
    const floatingMastermindTool = document.querySelector('.mastermind-tool');

    if (floatingEnergyTool) {
        floatingEnergyTool.addEventListener('click', () => {
            document.querySelector('.energy-bottle').scrollIntoView({ behavior: 'smooth', block: 'start' });
        });
    }

    if (floatingMastermindTool) {
        floatingMastermindTool.addEventListener('click', () => {
            document.querySelector('.happiness-mastermind').scrollIntoView({ behavior: 'smooth', block: 'start' });
        });
    }

    // 初始載入時，預設顯示第一個展廳（教養幸福經）
    if (hallContents.length > 0) {
        hallContents[0].classList.add('active');
    }

    // PWA 註冊服務工作者 (確保在 script.js 中也有，便於管理)
    if ('serviceWorker' in navigator) {
        window.addEventListener('load', () => {
            navigator.serviceWorker.register('sw.js')
                .then(registration => {
                    console.log('SW registered: ', registration);
                }).catch(registrationError => {
                    console.log('SW registration failed: ', registrationError);
                });
        });
    }
});

