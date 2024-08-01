// document.addEventListener('DOMContentLoaded', () => {
//     const buttons = document.querySelectorAll('.product-item button, .product-detail button');
//     buttons.forEach(button => {
//         button.addEventListener('click', addToCart);
//     });

//     // Retrieve cart items from local storage
//     const cart = JSON.parse(localStorage.getItem('cart')) || [];
//     updateCart();

//     function addToCart(event) {
//         const product = event.target.closest('.product-item') || event.target.closest('.product-detail');
//         const productName = product.querySelector('h3') ? product.querySelector('h3').textContent : product.querySelector('h2').textContent;
//         const productPrice = product.querySelector('p').textContent;

//         const cartItem = { name: productName, price: productPrice };
//         cart.push(cartItem);
//         localStorage.setItem('cart', JSON.stringify(cart));

//         updateCart();
//         alert(`Added ${productName} - ${productPrice} to the cart`);
//     }

//     function updateCart() {
//         const cartItemsContainer = document.querySelector('.cart-items');
//         const cartTotalElement = document.getElementById('cart-total');
//         cartItemsContainer.innerHTML = '';

//         let total = 0;
//         cart.forEach(item => {
//             const cartItemElement = document.createElement('div');
//             cartItemElement.classList.add('cart-item');

//             cartItemElement.innerHTML = `
//                 <div class="cart-item-info">
//                     <h3>${item.name}</h3>
//                     <p>${item.price}</p>
//                 </div>
//                 <button class="remove-item">Remove</button>
//             `;

//             const price = parseFloat(item.price.replace('$', ''));
//             total += price;

//             cartItemsContainer.appendChild(cartItemElement);

//             cartItemElement.querySelector('.remove-item').addEventListener('click', () => {
//                 removeFromCart(item);
//             });
//         });

//         cartTotalElement.textContent = total.toFixed(2);
//     }

//     function removeFromCart(itemToRemove) {
//         const index = cart.findIndex(item => item.name === itemToRemove.name && item.price === itemToRemove.price);
//         if (index !== -1) {
//             cart.splice(index, 1);
//             localStorage.setItem('cart', JSON.stringify(cart));
//             updateCart();
//         }
//     }

//     // Account form handling
//     const loginForm = document.querySelector('.login-form');
//     const registerForm = document.querySelector('.register-form');

//     loginForm.addEventListener('submit', handleLogin);
//     registerForm.addEventListener('submit', handleRegister);

//     function handleLogin(event) {
//         event.preventDefault();
//         const email = loginForm.querySelector('#login-email').value;
//         const password = loginForm.querySelector('#login-password').value;
        
//         // Implement login functionality here
        
//         alert(`Logged in with email: ${email}`);
//     }

//     function handleRegister(event) {
//         event.preventDefault();
//         const name = registerForm.querySelector('#register-name').value;
//         const email = registerForm.querySelector('#register-email').value;
//         const password = registerForm.querySelector('#register-password').value;

//         // Implement registration functionality here
        
//         alert(`Registered with name: ${name}, email: ${email}`);
//     }

//     // Form validation
//     const forms = document.querySelectorAll('form');
//     forms.forEach(form => {
//         form.addEventListener('submit', validateForm);
//     });

//     function validateForm(event) {
//         const form = event.target;
//         const inputs = form.querySelectorAll('input[required], select[required]');
//         let isValid = true;

//         inputs.forEach(input => {
//             if (!input.value) {
//                 isValid = false;
//                 input.classList.add('invalid');
//             } else {
//                 input.classList.remove('invalid');
//             }
//         });

//         if (!isValid) {
//             event.preventDefault();
//             alert('Please fill in all required fields.');
//         }
//     }

//     // Product categories filtering
//     const categoryButtons = document.querySelectorAll('.product-categories button');
//     categoryButtons.forEach(button => {
//         button.addEventListener('click', filterProducts);
//     });

//     function filterProducts(event) {
//         const category = event.target.getAttribute('data-category');
//         const products = document.querySelectorAll('.product-item');

//         products.forEach(product => {
//             if (category === 'all' || product.getAttribute('data-category') === category) {
//                 product.style.display = 'block';
//             } else {
//                 product.style.display = 'none';
//             }
//         });
//     }
// });


// JavaScript for dynamic functionalities

document.addEventListener("DOMContentLoaded", () => {
    const cart = [];

    document.querySelectorAll(".product-item button").forEach(button => {
        button.addEventListener("click", () => {
            const product = button.closest(".product-item");
            const productName = product.querySelector("h3").textContent;
            const productPrice = parseFloat(product.querySelector("p").textContent.replace('$', ''));

            cart.push({ name: productName, price: productPrice });

            updateCartTotal();
            alert(`${productName} added to cart!`);
        });
    });

    function updateCartTotal() {
        let total = 0;
        cart.forEach(item => {
            total += item.price;
        });

        const cartTotalElement = document.getElementById("cart-total");
        if (cartTotalElement) {
            cartTotalElement.textContent = total.toFixed(2);
        }
    }
});
