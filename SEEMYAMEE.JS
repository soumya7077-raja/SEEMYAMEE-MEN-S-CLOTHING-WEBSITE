// JavaScript to handle navigation
document.getElementById("shirt").addEventListener("click", function () {
  window.location.href = "shirt.html"; // Navigate shirt page
});
document.getElementById("t-shirt").addEventListener("click", function () {
  window.location.href = "tshirt.html"; // Navigate to tshirt page
});
document.getElementById("innerwear").addEventListener("click", function () {
  window.location.href = "innerwear.html"; // Navigate to innerwear page
});
document.getElementById("shorts").addEventListener("click", function () {
  window.location.href = "shorts.html"; // Navigate to shorts Page 
});
document.getElementById("jogger").addEventListener("click", function () {
  window.location.href = "jogger.html"; // Navigate to jogger Page
});
document.getElementById("suits").addEventListener("click", function () {
  window.location.href = "suits.html"; // Navigate to suits Page
});
document.getElementById("winterwear").addEventListener("click", function () {
  window.location.href = "winter_wear.html"; // Navigate to winter_wear Page
});
document.getElementById("jeans").addEventListener("click", function () {
  window.location.href = "jeans.html"; // Navigate to jeans Page
});
document.getElementById("trouser").addEventListener("click", function () {
  window.location.href = "trouser.html"; // Navigate to trouser Page
});
document.getElementById("cargopant").addEventListener("click", function () {
  window.location.href = "cargo_pants.html"; // Navigate to cargo pants Page
});



document.getElementById("btn1").addEventListener("click", function () {
    window.location.href = "pagetest2.html"; // Navigate to sweater Page 1
});

document.getElementById("btn2").addEventListener("click", function () {
    window.location.href = "pagetest3.html"; // Navigate to sweat-shirt Page 
});

document.getElementById("btn3").addEventListener("click", function () {
    window.location.href = "pagetest4.html"; // Navigate to jacket Page 
});


document.getElementById("offer").addEventListener("click", function () {
    window.location.href = "SEEMYAMEE_OFFERS.html"; // Navigate to Offer Page
});

document.getElementById("cart").addEventListener("click", function () {
    window.location.href = "cart2.html"; // Navigate to cart Page
});

// const cartButton = document.querySelectorAll("#ATB");
// cartButton.forEach(button=>{
//     button.addEventListener("click",()=>{
//         alert("Item Added To Cart")
//     })
// })


// Initialize cart in localStorage
const cart = JSON.parse(localStorage.getItem('cart')) || [];

// Update cart count in the navbar or page if needed
function updateCartCount() {
  const cartCount = document.getElementById('cart-count');
  if (cartCount) {
    cartCount.textContent = cart.length;
  }
}

// Add event listeners to all "Add to Bag" buttons
document.querySelectorAll('#ATB').forEach(button => {
    button.addEventListener('click', () => {
      const product = {
        name: button.getAttribute('data-name') || 'Unnamed Product', // Dynamically get product name
        price: button.getAttribute('data-price') || '0', // Dynamically get product price
      };

      // Add the product to the cart
      cart.push(product);
      localStorage.setItem('cart', JSON.stringify(cart));

      // Update cart count and show a success message
      updateCartCount();
      alert(`${product.name} has been added to the cart successfully!`);
    });
  });

  // Update cart count on page load
  updateCartCount();