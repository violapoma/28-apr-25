console.log("hey there");
// EXTRA Crea con JavaScript la funzionalità per rimuovere il link "twitter" sotto alla sezione "Altro" nell'elemento "aside". Deve avvenire al caricamento della pagina, automticamente.
window.addEventListener("load", removeTwitter());
function removeTwitter() {
    const listElem = document.querySelector("aside div:nth-child(3) ol:last-of-type li:nth-child(2)");
    console.log(listElem.textContent);
    document.querySelector("aside div:nth-child(3) ol:last-of-type li:nth-child(2)").remove();
}
// EXTRA Crea con JavaScript la funzionalità per rimuovere il corrispondente elemento padre dal DOM cliccando sul link "Continua a leggere".
const keepReadingLink = document.querySelectorAll(".jumbotron a, .col.p-4 p+a ");
keepReadingLink.forEach (e => {
    e.addEventListener("click", removeFather);
})
function removeFather() {
    this.parentNode.parentNode.removeChild(this.parentNode);
}
// EXTRA Crea con JavaScript la funzionalità per creare un alert col nome dell'autore ogni volta che il cursore passa sopra l'autore del post.
const authors = document.querySelectorAll(".blog-post h2+p a");
authors.forEach( e => {
    e.addEventListener("mouseover", showAuthorAlert);
})
function showAuthorAlert() {
    console.log("on author name");
    alert(this.textContent);
}


