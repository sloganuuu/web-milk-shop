const cartOverlay = document.querySelector('.cart-overlay');
const cart = document.querySelector('.cart');
const closeCart = document.querySelector('.close-cart');

// Обработчик клика на кнопку "Add to Cart"
const productButtons = document.querySelectorAll('.product-button');
productButtons.forEach(button => {
    button.addEventListener('click', function() {
        cartOverlay.style.display = 'block';
        cart.style.display = 'block';
    });
});

// Обработчик клика на кнопку "Close Cart"
closeCart.addEventListener('click', function() {
    cartOverlay.style.display = 'none';
    cart.style.display = 'none';
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

function smoothScroll() {
    const startingY = window.pageYOffset;
    const targetY = (startingY === document.body.scrollHeight - window.innerHeight) ? 0 : document.body.scrollHeight - window.innerHeight;
    const diff = targetY - startingY;
    const duration = 1000; // milliseconds

    let start;

    window.requestAnimationFrame(function step(timestamp) {
        if (!start) start = timestamp;
        const time = timestamp - start;
        const percent = Math.min(time / duration, 1);

        window.scrollTo(0, startingY + diff * percent);

        if (time < duration) {
            window.requestAnimationFrame(step);
        } else {
            // Change button text when reaching the bottom
            const scrollButton = document.getElementById("scrollButton");
            if (targetY === 0) {
                scrollButton.textContent = "Вниз";
            } else {
                scrollButton.textContent = "Вверх";
            }
        }
    });
}


function scrollDown() {
    window.scrollBy(0, window.innerHeight);
}

document.addEventListener("DOMContentLoaded", function() {
    const cartIcon = document.getElementById('cart-icon');
    const addButton = document.querySelector('.product-button');

    let itemCount = 0;

    addButton.addEventListener('click', function() {
        itemCount++;
        cartIcon.textContent = itemCount;
    });
});





