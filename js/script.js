
let startValue;
// modal load //
let modal = document.getElementById("priceModal");
let modalInput = document.getElementById("modalInput");
let modalSubmit = document.getElementById("modalSubmit");
// alert load //
let alertModal = document.getElementById("alertModal");
let alertMessage = document.getElementById("alertMessage");
let alertClose = document.getElementById("alertClose");

// alert management //

function showAlert(message) {
    alertMessage.textContent = message;
    alertModal.style.display = "flex";
}

alertClose.addEventListener("click", function () {
    alertModal.style.display = "none";
});

window.addEventListener("click", function (event) {
    if (event.target === alertModal) {
        alertModal.style.display = "none";
    }
});

document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
        alertModal.style.display = "none";
    }
});

document.addEventListener("keydown", function (event) {
    if (event.key === "Enter" && alertModal.style.display === "flex") {
        event.preventDefault();
        alertClose.click();
    }
});

alertModal.style.display = "none";

// modal management + price insert function //

document.getElementById("start").addEventListener("click", function() {
    modal.style.display = "flex";
    modalInput.focus();
});

modalSubmit.addEventListener("click", function() {
    let inputVal = modalInput.value.trim();
    let numericValue = Number(inputVal);

    if (!isNaN(numericValue) && inputVal !== "") {
            startValue = numericValue;
            modal.style.display = "none";
            modalInput.value = "";
            setTimeout(() => {
                showAlert("The Chopped fish value is set to " + startValue + " silver.");
            }, 100);
        } else {
            showAlert("This is not a valid number!");
        }
    });

    modalInput.addEventListener("keydown", function(event) {
        if (event.key === "Enter") {
            event.preventDefault();
            modalSubmit.click();
        }
    })

    window.addEventListener("click", function (event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });

    document.addEventListener("keydown", function (event) {
        if (event.key === "Escape") {
            modal.style.display = "none";
        }
    });

    modal.style.display = "none";

// few loads for math behind function //

let fish = document.getElementById("fish");
let price = document.getElementById("price");
let check = document.getElementById("submit");

// input validation with enter //

price.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        event.preventDefault();
        check.click();
    }
});

// main function that calculate inputs //

check.addEventListener("click", function() {
    let priceValue = Number(price.value);
    let fishValue = Number(startValue) * Number(fish.value);
    if (!priceValue === null || priceValue >= 0) {
        profit = priceValue - fishValue;
    } else {
        showAlert("The following value is not correct!");
        return;
    }

    let myProfit = document.createElement("h3");
    let result = document.getElementById("result");

    if (profit >= 1) {
        myProfit.textContent = ("You should definately sell the fish! Your profit based on current market is : " + profit + " silver per fish.");
    } else if (profit === 0) {
        myProfit.textContent = ("Both processing and selling the fish gives same silver value.");
    } else {
        myProfit.textContent = ("You should process the fish. If you sell the fish you'd be losing : " + profit + " silver per fish.")
    }
    result.appendChild(myProfit);
    check.disabled = true;
});

// reset page //

let reset = document.getElementById("reset");

reset.addEventListener("click", function() {
    document.getElementById("result").innerHTML = '';
    price.value = '';
    check.disabled = false;
});




