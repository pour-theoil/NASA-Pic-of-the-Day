export const getNasaPic = () => {
    return fetch("https://api.nasa.gov/planetary/apod?api_key=9jqdCderkwsLIXN74D3DlZP5HBg2yqHPur8V7E0h")
    .then(response => response.json())
    .then(parsedResonse => {
        console.log("nasa data", parsedResonse)
        return parsedResonse;
    })
}