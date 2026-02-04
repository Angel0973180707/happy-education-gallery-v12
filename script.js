function showContent(id) {
    // 隱藏所有
    document.querySelectorAll('.hall-content').forEach(c => c.style.display = 'none');
    
    // 顯示目標
    const target = document.getElementById(id);
    if(target) {
        target.style.display = 'block';
        target.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
}
