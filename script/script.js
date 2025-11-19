const handleSignup = () => {
    let firstName = document.getElementById("firstname").value.trim();
    let lastName = document.getElementById("lastname").value.trim();
    let email = document.getElementById("email").value.trim();
    let mobile = document.getElementById("phone").value.trim();
    let password = document.getElementById("password").value.trim();

    if (firstName.length >= 2 && lastName.length >= 2) {
        if (email.includes("@") && email.includes(".")) {
            if (mobile.length == 8 && !isNaN(mobile)) {
                if (password.length >= 8) {
                    showNotification("Your account has been created successfully!", true);
                    document.getElementById("form").reset();
                } else {
                    showNotification("Password must be at least 8 characters", false);
                }
            } else {
                showNotification("Phone number must be exactly 8 digits", false);
            }
        } else {
            showNotification("Enter a valid email address", false);
        }
    } else {
        showNotification("First and last name must be at least 2 letters", false);
    }
};

const showNotification = (message, isSuccess = true) => {
    const notification = document.getElementById("notification");
    const messageElement = document.getElementById("notification-message");
    messageElement.innerText = message;
    notification.style.backgroundColor = isSuccess ? "#4caf50" : "#f44336";
    notification.classList.remove("hidden");
    setTimeout(() => {
        notification.style.opacity = "1";
        notification.style.top = "1.25em";
    }, 10);
    setTimeout(() => {
        hideNotification();
    }, 3000);
};

const hideNotification = () => {
    const notification = document.getElementById("notification");
    notification.style.opacity = "0";
    notification.style.top = "0em";
    setTimeout(() => {
        notification.classList.add("hidden");
    }, 300);
};

document.getElementById("close-notification").addEventListener("click", hideNotification);
