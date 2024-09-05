document.addEventListener('DOMContentLoaded', function() {
    const orderButton = document.getElementById('orderButton');
    const confirmationMessage = document.getElementById('confirmationMessage');
    const appleItems = document.querySelectorAll('input[name="apple"]');
    const appleQuantityInput = document.getElementById('apple-quantity');

    // Handle the order button click event
    orderButton.addEventListener('click', () => {
        let selectedApple = null;
        let appleQuantity = appleQuantityInput.value;

        // Check which apple is selected
        appleItems.forEach(item => {
            if (item.checked) {
                selectedApple = item.value;
            }
        });

        if (selectedApple && appleQuantity > 0) {
            // Show confirmation message with apple type and quantity
            confirmationMessage.style.display = 'block';
            confirmationMessage.innerHTML = `<h2>Your order for ${appleQuantity} ${selectedApple} apple(s) is placed!</h2>`;
        } else {
            alert('Please select an apple type and enter a valid quantity before placing your order.');
        }
    });
});
