export function changeSettings() {
    const settings = document.querySelector(".settings");

    settings.onclick = function(event) {
        let target = event.target;
        if (target.className == "settings__item") {
            let settingsBlock = target.parentNode;
            let items = settingsBlock.querySelectorAll(".settings__item");
            for (let i = 0; i < items.length; i++) {
                if (items[i].classList.contains("active") && target != items[i]) {
                    items[i].classList.remove("active");
                }
            }
            target.classList.add("active");
        }
    }
}