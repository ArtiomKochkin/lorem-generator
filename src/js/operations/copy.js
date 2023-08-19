export function copyText() {
    const textResult = document.getElementById("textResult");
    const btnCopy = document.getElementById("btnCopy");
    const infoCopy = document.getElementById("infoCopy");

    btnCopy.addEventListener("click", () => {
        let resultCopy = textResult.innerText;
        navigator.clipboard.writeText(resultCopy)
            .then(() => {
                infoCopy.classList.add("show")
            })
            .catch(err => {
                infoCopy.innerHTML = "Произошла ошибка при копировании текста";
                console.error("Error in copying text: ", err);
            })
    });
}