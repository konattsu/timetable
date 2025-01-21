function CreateWordsElement(jsonData) {
    function createInfoElement(jsonData) {
        const infoElement = document.createElement("div");
        const infoInnerElement = document.createElement("div");
        const descriptionElement = document.createElement("div");
        const urlElement = document.createElement("div");
        const updatedAtElement = document.createElement("div");

        console.log(jsonData);

        infoElement.classList.add("info");
        infoInnerElement.classList.add("info-inner");
        descriptionElement.classList.add("description");
        urlElement.classList.add("url");
        updatedAtElement.classList.add("updated-at");

        descriptionElement.textContent = jsonData.description;
        urlElement.textContent = jsonData.url;
        updatedAtElement.textContent = jsonData.updated_at;
        infoInnerElement.appendChild(descriptionElement);
        infoInnerElement.appendChild(urlElement);
        infoInnerElement.appendChild(updatedAtElement);
        infoElement.appendChild(infoInnerElement);
        return infoElement;
    }
    function createWordsElement(jsonData) {
        const wordsElement = document.createElement("div");
        wordsElement.classList.add("words");

        jsonData.forEach((word) => {
            const innerWordsElement = document.createElement("div");
            const enElement = document.createElement("div");
            const meaningsElement = document.createElement("div");
            innerWordsElement.classList.add("word");
            enElement.classList.add("en");
            meaningsElement.classList.add("meanings");
            enElement.textContent = word.en;

            word.meanings.forEach((meaning) => {
                const meaningElement = document.createElement("div");
                const jaElement = document.createElement("div");
                const exampleElement = document.createElement("div");
                meaningElement.classList.add("meaning");
                jaElement.classList.add("ja");
                exampleElement.classList.add("example");
                jaElement.textContent = meaning.ja;
                exampleElement.textContent = meaning.example;
                meaningElement.appendChild(jaElement);
                meaningElement.appendChild(exampleElement);
                meaningsElement.appendChild(meaningElement);
            });

            innerWordsElement.appendChild(enElement);
            innerWordsElement.appendChild(meaningsElement);
            wordsElement.appendChild(innerWordsElement);
        });

        return wordsElement;
    }

    const info = jsonData.info;
    const words = jsonData.words;
    const wordsListElement = document.createElement("div");

    const infoElement = createInfoElement(info);
    const wordsElement = createWordsElement(words);

    wordsListElement.classList.add("word-list");
    wordsListElement.appendChild(infoElement);
    wordsListElement.appendChild(wordsElement);
    return wordsListElement;
}

export default CreateWordsElement;
