
const toggleIcons = document.querySelectorAll('#user-icon, #cart-icon');

toggleIcons.forEach(icon => {
    icon.addEventListener('click', () => {
        const popover = icon.closest('div').querySelector('.popover');
        
        if (popover) {
            popover.classList.toggle('show');
        }
        else{
            popover.classList.remove('show');
        }
    });
});


document.addEventListener('click', (event) => {
    if (!event.target.closest('.navbar-right')) {
        toggleIcons.forEach(icon => {
            const popover = icon.closest('div').querySelector('.popover');
            if (popover) {
                popover.classList.remove('show');
            }
        });
    }
});

