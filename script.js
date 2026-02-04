document.addEventListener('DOMContentLoaded', () => {
    const cells = document.querySelectorAll('.map-cell');
    const panels = document.querySelectorAll('.content-panel');

    cells.forEach(cell => {
        cell.addEventListener('click', () => {
            const targetId = cell.getAttribute('data-target');
            panels.forEach(p => p.classList.remove('active'));
            const target = document.getElementById(targetId);
            if(target) {
                target.classList.add('active');
                target.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }
        });
    });
});
