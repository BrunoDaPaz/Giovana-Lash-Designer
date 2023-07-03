function openTab(event, tabName) {
    var i, tabButton;

    tabButton = document.getElementsByClassName("tab-button");
    for (i = 0; i < tabButton.length; i++) {
        tabButton[i].classList.remove("active");
    }

    document.getElementById(tabName).style.display = "block";
    event.currentTarget.classList.add("active");
}

function scrollToElement(elementId) {
    var element = document.getElementById(elementId);
    if (element) {
        element.scrollIntoView({
            behavior: 'smooth'
        });
    }
}

function redirecionar() {
    window.open("https://api.whatsapp.com/message/QLVVFV3RGK33K1?autoload=1&app_absent=0", "_blank");
}