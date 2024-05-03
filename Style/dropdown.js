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
    myDropdown.addEventListener('mouseleave', function() {
        myDropdown.classList.remove('show');
    });
    
});




// window.onscroll = function() {
        // var header = document.querySelector('.header');
        // if (window.scrollY > 100) {
            // header.classList.add('small');
        // } else {
            // header.classList.remove('small');
        // }
// };
// 