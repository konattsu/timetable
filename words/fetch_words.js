class FetchWords {
    constructor() {
        this.filenameStoredFileData = "file_names.json";
        this.baseUrl =
            "https://raw.githubusercontent.com/konattsu/unknown_words/refs/heads/main";
        this.wordsDirPath = null;
        this.wordsFilenames = null;
    }

    async fetchThenStoreFilenames() {
        const response = await fetch(`${this.baseUrl}/${this.filenameStoredFileData}`);
        const respJson = await response.json();

        this.wordsDirPath = respJson.dir;
        this.wordsFilenames = respJson.files;

        if (this.wordsDirPath == undefined || this.wordsFilenames == undefined) {
            console.error("Failed to fetch filenames");
            return false;
        } else {
            console.log(this);
            return true;
        }
    }

    async fetchWordsWithFilename(filename) {
        const response = await fetch(
            `${this.baseUrl}/${this.wordsDirPath}/${filename}`
        );
        const resp = await response.json();
        return resp;
    }

    async fetchWordsListFilename() {
        const words = [];
        for (const filename of this.wordsFilenames) {
            const wordsJson = await this.fetchWordsWithFilename(filename);
            words.push(wordsJson);
        }
        return words;
    }
}

export default FetchWords;
