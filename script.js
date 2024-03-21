document.addEventListener('DOMContentLoaded', function () {
    const adminBtn = document.getElementById('adminBtn');
    const guestBtn = document.getElementById('guestBtn');
    const adminForm = document.getElementById('adminForm');
    const guestForm = document.getElementById('guestForm');

    adminBtn.addEventListener('click', function () {
        adminBtn.classList.add('active');
        guestBtn.classList.remove('active');
        adminForm.style.transform = 'translateX(0)';
        guestForm.style.transform = 'translateX(100%)';
    });

    guestBtn.addEventListener('click', function () {
        guestBtn.classList.add('active');
        adminBtn.classList.remove('active');
        guestForm.style.transform = 'translateX(0)';
        adminForm.style.transform = 'translateX(-100%)';
    });
});
