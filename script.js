function showContent(hallId) {
    // 隱藏所有內容
    document.querySelectorAll('.info-content').forEach(el => {
        el.style.display = 'none';
    });
    
    // 顯示目標內容
    const target = document.getElementById(hallId);
    if(target) {
        target.style.display = 'block';
        target.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
}
