const darkTheme = window.matchMedia("(prefers-color-scheme: dark)");
const searchIcon = document.querySelector('#searchIcon');
const bellIcon = document.querySelector('#bellIcon');
const lightIcon = document.querySelector('#lightIcon');
const darkIcon = document.querySelector('#darkIcon');
const themeSwitch = document.querySelector('#themeSwitch');
const starIcons = document.querySelectorAll('#starIcon');
const eyeIcons = document.querySelectorAll('#eyeIcon');
const codeIcons = document.querySelectorAll('#codeIcon');

let darkModeSet = false;

function checkCurrentTheme(){
    if (darkTheme.matches){
        setDarkMode();
    }
    else{
        setLightMode();
    }
}

themeSwitch.addEventListener('change', e => {
    if(!themeSwitch.checked){
        setLightMode();
    }
    else {
        setDarkMode();
    }
})

function setLightMode(){
    document.body.classList.remove("dark");
    document.body.classList.add("light");
    searchIcon.src = "Icons/magnify.svg";
    bellIcon.src = "Icons/bell-ring-outline.svg";
    lightIcon.src = "Icons/light-theme.png";
    darkIcon.src = "Icons/dark-theme.png";

    starIcons.forEach(starIcon => {
        starIcon.src = "Icons/star-plus-outline.svg";
    });
    eyeIcons.forEach(eyeIcon => {
        eyeIcon.src = "Icons/eye-plus-outline.svg";
    });
    codeIcons.forEach(codeIcon => {
        codeIcon.src = "Icons/code-tags.svg";
    });
}

function setDarkMode(){
    document.body.classList.remove("light");
    document.body.classList.add("dark");
    themeSwitch.checked = true;
    searchIcon.src = "Icons/magnify-dark.png";
    bellIcon.src = "Icons/bell-ring-outline-dark.png";
    lightIcon.src = "Icons/light-theme-dark.png";
    darkIcon.src = "Icons/dark-theme-dark.png";

    starIcons.forEach(starIcon => {
        starIcon.src = "Icons/star-plus-outline-dark.png";
    });
    eyeIcons.forEach(eyeIcon => {
        eyeIcon.src = "Icons/eye-plus-outline-dark.png";
    });
    codeIcons.forEach(codeIcon => {
        codeIcon.src = "Icons/code-tags-dark.png";
    });
}

window.onload = checkCurrentTheme;