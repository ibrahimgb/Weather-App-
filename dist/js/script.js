import { setLocationObject } from "./dataFunctions.js";
import { addSpinner} from "./domFunctions.js";
import { displayError} from "./domFunctions.js";
import CurrentLocation from "./CurrentLocation.js";
//import { displayError } from "../../../../weather_app_tut-main/dist/js/domFunctions.js";
const CurrentLoc = new CurrentLocation();

const initApp = () => {
    //we will add listeners
    const geoButton = document.getElementById("getLocation");

    geoButton.addEventListener("click",getGeoWeather);
    //set up

    //load weather
}

document.addEventListener("DOMContentLoaded",initApp);

const getGeoWeather = (event) => {
    if (event){
        if(event.type === "click"){
            
            //add the spinner
            const mapicon = document.querySelector("#position");
            addSpinner(mapicon);
        }
    }
    if(!navigator.geolocation){
        return geoErrer();
    }
    navigator.geolocation.getCurrentPosition(geoSucsess,geoEror);
};

const geoEror = (ererObj) => {
    const ErerMsg = ererObj.message ? ererObj.message : "Geolocation not supported";
    displayError(errMsg,errMsg);
}

const geoSucsess = (position) => {
    const myCoordsObj = {
        lat : position.coords.latitude,
        lon : position.coords.longitude,
        name : `lat:${position.coords.latitude} long: ${position.coords.longitude}`
    };
    //set Location object
    setLocationObject(CurrentLoc,myCoordsObj);
    console.log("this is the current location: "+CurrentLoc);
    
    //update data and display
}