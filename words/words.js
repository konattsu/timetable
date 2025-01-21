import FetchWords from "/words/fetch_words.js";
import CreateWordsElement from "/words/create_words_element.js";

addEventListener("DOMContentLoaded", () => {
    const fetchWords = new FetchWords();
    fetchWords
        .fetchThenStoreFilenames()
        .then(() => {
            fetchWords
                .fetchWordsListFilename()
                .then((words) => {
                    console.log("fetched words are following:");
                    console.log(words);
                    const wordListsElement = document.querySelector(".word-lists");
                    words.forEach((word) => {
                        const wordsElement = CreateWordsElement(word);
                        wordListsElement.appendChild(wordsElement);
                    });
                })
                .catch((err) => {
                    console.error(err);
                });
        })
        .catch((err) => {
            console.error(err);
        });
});
