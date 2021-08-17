export { updateScreenReaderConfirmation } from "../../../../weather_app_tut-main/dist/js/domFunctions";

export const addSpinner = (element) => {
    animateButton(element);
    setTimeout(animateButton, 1000 , element);
}

const animateButton = (element) => {
    element.classList.toggle("none");
    element.nextElementSibling.classList.toggle("block");
    element.nextElementSibling.classList.toggle("none");
};

export const displayError = (headerMsg , srMsg) => {
    updateWeatherLocationHeader(headerMsg);
    updateScreenReaderConfirmation(srMsg);
};

const updateWeatherLocationHeader = (messge) => {
    const h1 = document.getElementById("currentForecast__location");
    h1.textContent = messge;
};

const updateScreenReaderConfirmation = (messge) => {
    document.getElementById("confirmation").textContent = messge;
};