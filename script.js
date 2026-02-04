document.addEventListener('DOMContentLoaded', () => {
    const entrances = document.querySelectorAll('.hall-entrance');
    const contents = document.querySelectorAll('.hall-content');

    entrances.forEach(btn => {
        btn.addEventListener('click', () => {
            const targetId = btn.getAttribute('data-target');
            
            // 隱藏所有，顯示目標
            contents.forEach(c => c.classList.remove('active'));
            const target = document.getElementById(targetId);
            if(target) {
                target.classList.add('active');
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });
});
