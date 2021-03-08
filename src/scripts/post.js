export const postCard = (postObj) => {
    return`
    <article>
        <h2>${postObj.title}</h2>
        <img src="${postObj.url}" alt="Provided by ${postObj.copyright}">
        <p> ${postObj.explanation}</p>
    </article>
    `
}