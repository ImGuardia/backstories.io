document.addEventListener('DOMContentLoaded', function() {
    const myButton = document.getElementById('myButton');
    const myDropdown = document.getElementById('myDropdown');
    if (myButton && myDropdown) {
        myButton.addEventListener('click', toggleDropDown);
    }
    function toggleDropDown() {
        if (myDropdown) {
            myDropdown.classList.toggle('show');
        }
    }
    document.addEventListener('click', function(event) {
        const myButton = document.getElementById('myButton');
        const myDropdown = document.getElementById('myDropdown');
        if (myDropdown && !event.target.matches('#myButton')) {
            myDropdown.classList.remove('show');
        }
    });
});