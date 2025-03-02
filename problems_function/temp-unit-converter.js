function convertTemperature() {
    let choice = prompt("Enter 1 to convert Celsius to Fahrenheit, 2 to convert Fahrenheit to Celsius:");
    choice = parseInt(choice);

    switch (choice) {
        case 1:
            let degC = parseFloat(prompt("Enter temperature in Celsius (0°C - 100°C):"));
            if (degC >= 0 && degC <= 100) {
                let degF = (degC * 9/5) + 32;
                console.log(`${degC}°C is equal to ${degF.toFixed(2)}°F`);
            } else {
                console.log("Please enter a value between 0°C and 100°C.");
            }
            break;
        case 2:
            let degF = parseFloat(prompt("Enter temperature in Fahrenheit (32°F - 212°F):"));
            if (degF >= 32 && degF <= 212) {
                let degC = (degF - 32) * 5/9;
                console.log(`${degF}°F is equal to ${degC.toFixed(2)}°C`);
            } else {
                console.log("Please enter a value between 32°F and 212°F.");
            }
            break;
        default:
            console.log("Invalid choice. Please enter 1 or 2.");
    }
}

convertTemperature();
