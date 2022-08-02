function displayClock() {
    const clockContainer = document.querySelector("#clockContainer");
    let date = new Date();
    let hrs = date.getHours();
    let min = date.getMinutes();
    if (hrs > 12) {
        hrs = hrs - 12
    }
    if (hrs < 10) {
        hrs = "0" + hrs
    }
    if (min < 10) {
        min = "0" + min
    }
    clockContainer.innerHTML = hrs + ':' + min;
}

function main() {

    // --- HEADING --- //

    const headingContainer = document.querySelector("#headingContainer");
    const headingContentSetting = document.querySelector("#headingContentSetting");
    const headingColorSetting = document.querySelector("#headingColorSetting");
    const headingFontSetting = document.querySelector("#headingFontSetting");
    const headingFontSizeSetting = document.querySelector("#headingFontSizeSetting");

    // Load User Prefs
    if (localStorage.getItem("headingContent") != null) {
        headingContainer.innerHTML = headingContentSetting.value = localStorage.getItem("headingContent");
    }
    if (localStorage.getItem("headingColor") != null) {
        headingContainer.style.color = headingColorSetting.value = localStorage.getItem("headingColor");
    }
    if (localStorage.getItem("headingFont") != null) {
        headingContainer.style.fontFamily = headingFontSetting.value = localStorage.getItem("headingFont");
    }
    if (localStorage.getItem("headingFontSize") != null) {
        headingContainer.style.fontSize = `${localStorage.getItem("headingFontSize")}vw`;
        headingFontSizeSetting.value = localStorage.getItem("headingFontSize");
    }

    // make settings work
    headingContentSetting.oninput = function () {
        var newValue = headingContentSetting.value;
        headingContainer.innerHTML = newValue;
        localStorage.setItem("headingContent", newValue);
    }
    headingColorSetting.oninput = function () {
        var newValue = headingColorSetting.value;
        headingContainer.style.color = newValue;
        localStorage.setItem("headingColor", newValue);
    }
    headingFontSetting.oninput = function () {
        var newValue = headingFontSetting.value;
        headingContainer.style.fontFamily = newValue;
        localStorage.setItem("headingFont", newValue);
    }
    headingFontSizeSetting.oninput = function () {
        var newValue = headingFontSizeSetting.value;
        headingContainer.style.fontSize = `${newValue}vw`;
        localStorage.setItem("headingFontSize", newValue);
    }

    // --- CLOCK --- //

    const clockContainer = document.querySelector("#clockContainer");
    const clockColorSetting = document.querySelector("#clockColorSetting");
    const clockFontSetting = document.querySelector("#clockFontSetting");
    const clockFontSizeSetting = document.querySelector("#clockFontSizeSetting");
    const clockLineHeightSetting = document.querySelector("#clockLineHeightSetting");

    // load user prefs
    if (localStorage.getItem("clockColor") != null) {
        clockContainer.style.color = clockColorSetting.value = localStorage.getItem("clockColor");
    }
    if (localStorage.getItem("clockFont") != null) {
        clockContainer.style.fontFamily = clockFontSetting.value = localStorage.getItem("clockFont");
    }
    if (localStorage.getItem("clockFontSize") != null) {
        clockContainer.style.fontSize = `${localStorage.getItem("clockFontSize")}vw`;
        clockFontSizeSetting.value = localStorage.getItem("clockFontSize");
    }
    if (localStorage.getItem("clockLineHeight") != null) {
        clockContainer.style.lineHeight = `${localStorage.getItem("clockLineHeight")}vw`;
        clockLineHeightSetting.value = localStorage.getItem("clockLineHeight");
    }

    // make settings work
    clockColorSetting.oninput = function () {
        var newValue = clockColorSetting.value;
        clockContainer.style.color = newValue;
        localStorage.setItem("clockColor", newValue);
    }
    clockFontSetting.oninput = function () {
        var newValue = clockFontSetting.value;
        clockContainer.style.fontFamily = newValue;
        localStorage.setItem("clockFont", newValue);
    }
    clockFontSizeSetting.oninput = function () {
        var newValue = clockFontSizeSetting.value;
        clockContainer.style.fontSize = `${newValue}vw`;
        localStorage.setItem("clockFontSize", newValue);
    }
    clockLineHeightSetting.oninput = function () {
        var newValue = clockLineHeightSetting.value;
        clockContainer.style.lineHeight = `${newValue}vw`;
        localStorage.setItem("clockLineHeight", newValue);
    }

    // display correct time and update it every 1000ms
    displayClock();
    setInterval(displayClock, 1000);

    // --- BOOKMARKS --- //

    const aB1 = document.querySelector("#aB1");
    const imgB1 = document.querySelector("#imgB1");
    const aB1Setting = document.querySelector("#aB1Setting");
    const imgB1Setting = document.querySelector("#imgB1Setting");

    const aB2 = document.querySelector("#aB2");
    const imgB2 = document.querySelector("#imgB2");
    const aB2Setting = document.querySelector("#aB2Setting");
    const imgB2Setting = document.querySelector("#imgB2Setting");

    const aB3 = document.querySelector("#aB3");
    const imgB3 = document.querySelector("#imgB3");
    const aB3Setting = document.querySelector("#aB3Setting");
    const imgB3Setting = document.querySelector("#imgB3Setting");

    const aB4 = document.querySelector("#aB4");
    const imgB4 = document.querySelector("#imgB4");
    const aB4Setting = document.querySelector("#aB4Setting");
    const imgB4Setting = document.querySelector("#imgB4Setting");

    // load user prefs
    if (localStorage.getItem("aB1") != null) {
        aB1.href = aB1Setting.value = localStorage.getItem("aB1");
    }
    if (localStorage.getItem("aB2") != null) {
        aB2.href = aB2Setting.value = localStorage.getItem("aB2");
    }
    if (localStorage.getItem("aB3") != null) {
        aB3.href = aB3Setting.value = localStorage.getItem("aB3");
    }
    if (localStorage.getItem("aB4") != null) {
        aB4.href = aB4Setting.value = localStorage.getItem("aB4");
    }
    if (localStorage.getItem("imgB1") != null) {
        imgB1.src = imgB1Setting.value = localStorage.getItem("imgB1");
    }
    if (localStorage.getItem("imgB2") != null) {
        imgB2.src = imgB2Setting.value = localStorage.getItem("imgB2");
    }
    if (localStorage.getItem("imgB3") != null) {
        imgB3.src = imgB3Setting.value = localStorage.getItem("imgB3");
    }
    if (localStorage.getItem("imgB4") != null) {
        imgB4.src = imgB4Setting.value = localStorage.getItem("imgB4");
    }

    // make settings work
    aB1Setting.oninput = function () {
        var newValue = aB1Setting.value;
        aB1.href = newValue;
        localStorage.setItem("aB1", newValue);
    }
    aB2Setting.oninput = function () {
        var newValue = aB2Setting.value;
        aB2.href = newValue;
        localStorage.setItem("aB2", newValue);
    }
    aB3Setting.oninput = function () {
        var newValue = aB3Setting.value;
        aB3.href = newValue;
        localStorage.setItem("aB3", newValue);
    }
    aB4Setting.oninput = function () {
        var newValue = aB4Setting.value;
        aB4.href = newValue;
        localStorage.setItem("aB4", newValue);
    }
    imgB1Setting.oninput = function () {
        var newValue = imgB1Setting.value;
        imgB1.src = newValue;
        localStorage.setItem("imgB1", newValue);
    }
    imgB2Setting.oninput = function () {
        var newValue = imgB2Setting.value;
        imgB2.src = newValue;
        localStorage.setItem("imgB2", newValue);
    }
    imgB3Setting.oninput = function () {
        var newValue = imgB3Setting.value;
        imgB3.src = newValue;
        localStorage.setItem("imgB3", newValue);
    }
    imgB4Setting.oninput = function () {
        var newValue = imgB4Setting.value;
        imgB4.src = newValue;
        localStorage.setItem("imgB4", newValue);
    }

    // --- GENERAL --- //

    const body = document.querySelector("body");
    const apexContainer = document.querySelector("#apexContainer");
    const generalBackgroundSetting = document.querySelector("#generalBackgroundSetting");
    const generalBlurIntensitySetting = document.querySelector("#generalBlurIntensitySetting");

    // load user prefs
    if (localStorage.getItem("generalBackground") != null) {
        body.style.backgroundImage = `url(${localStorage.getItem("generalBackground")})`;
        generalBackgroundSetting.value = localStorage.getItem("generalBackground");
    } else {
        body.style.backgroundImage = "url('assets/calvin.jpg')";
        generalBackgroundSetting.value = "assets/calvin.jpg";
    }
    if (localStorage.getItem("generalBlurIntensity") != null) {
        apexContainer.style.backdropFilter = `blur(${localStorage.getItem("generalBlurIntensity")}px)`;
        generalBlurIntensitySetting.value = localStorage.getItem("generalBlurIntensity");
    }

    // make settings work
    generalBackgroundSetting.oninput = function () {
        var newValue = generalBackgroundSetting.value;
        body.style.backgroundImage = `url(${newValue})`;
        localStorage.setItem("generalBackground", newValue);
    }
    generalBlurIntensitySetting.oninput = function () {
        var newValue = generalBlurIntensitySetting.value;
        apexContainer.style.backdropFilter = `blur(${newValue}px)`;
        localStorage.setItem("generalBlurIntensity", newValue);
    }

    // --- SETTINGS --- //

    const settingsIcon = document.querySelector("#b5");
    const settingsContainer = document.querySelector("#settingsContainer");
    const headingSettingsContainer = document.querySelector("#headingSettingsContainer");
    const clockSettingsContainer = document.querySelector("#clockSettingsContainer");
    const bookmarkSettingsContainer = document.querySelector("#bookmarkSettingsContainer");
    const generalSettingsContainer = document.querySelector("#generalSettingsContainer");

    // make settings icon display settings when clicked
    settingsIcon.onclick = function () {
        if (settingsContainer.style.display == 'none') {
            settingsContainer.style.display = 'grid';
        } else {
            settingsContainer.style.display = 'none';
        }
    }

    // make settings category container work
    document.querySelector("#headingSettingCategory").onclick = function () {
        headingSettingsContainer.style.display = 'grid';
        clockSettingsContainer.style.display = 'none';
        bookmarkSettingsContainer.style.display = 'none';
        generalSettingsContainer.style.display = 'none';
    }
    document.querySelector("#clockSettingCategory").onclick = function () {
        headingSettingsContainer.style.display = 'none';
        clockSettingsContainer.style.display = 'grid';
        bookmarkSettingsContainer.style.display = 'none';
        generalSettingsContainer.style.display = 'none';
    }
    document.querySelector("#bookmarkSettingCategory").onclick = function () {
        headingSettingsContainer.style.display = 'none';
        clockSettingsContainer.style.display = 'none';
        bookmarkSettingsContainer.style.display = 'grid';
        generalSettingsContainer.style.display = 'none';
    }
    document.querySelector("#generalSettingCategory").onclick = function () {
        headingSettingsContainer.style.display = 'none';
        clockSettingsContainer.style.display = 'none';
        bookmarkSettingsContainer.style.display = 'none';
        generalSettingsContainer.style.display = 'grid';
    }
}

// run main after window loads
window.onload = main;