document.addEventListener('DOMContentLoaded', () => {
    const entrances = document.querySelectorAll('.hall-entrance');
    entrances.forEach(btn => {
        btn.addEventListener('click', () => {
            const targetId = btn.getAttribute('data-target');
            document.querySelectorAll('.hall-content').forEach(c => c.classList.remove('active'));
            const target = document.getElementById(targetId);
            if(target) {
                target.classList.add('active');
                target.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }
        });
    });
});
