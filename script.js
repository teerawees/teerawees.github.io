// Function to check the current language of the HTML file and attach the appropriate event listener
function setupLanguageSwitch() {
    const currentLanguage = document.documentElement.lang;

    console.log("currentLanguage:", currentLanguage);
    console.log("setupLanguageSwitch called with current language:", currentLanguage);

    if (currentLanguage === 'en') {
        console.log("Attaching event listener to switchToItalian button");
        document.getElementById("switchToItalian").addEventListener("click", function () {
            switchLanguage("it");
        });
    } else if (currentLanguage === 'it') {
        console.log("Attaching event listener to switchToItalian button");
        document.getElementById("switchToEnglish").addEventListener("click", function () {
            switchLanguage("en");
        });
    }
}

// Function to change the language by redirecting to the appropriate HTML page
function switchLanguage(language) {
    if (language === 'en') {
        window.location.href = "index-en.html";
    } else if (language === 'it') {
        window.location.href = "index-it.html";
    }
}

// Call the function to set up the language switch
setupLanguageSwitch();