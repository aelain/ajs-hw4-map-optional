export default class Settings {
    constructor() {
        this.defaultSettings = new Map([
            [ 'theme', 'dark' ],
            [ 'music', 'trance' ],
            [ 'difficulty', 'easy' ],
        ]);

        this.userSettings = new Map();
    }

    changeSettings(key, value) {
        this.userSettings.set(key, value);
    }

    get settings() {
        const settingsOverlay = new Map([
            [ 'theme', 'dark' ],
            [ 'music', 'trance' ],
            [ 'difficulty', 'easy' ],
        ]);
        this.userSettings.forEach((item, index) => settingsOverlay.set(index, item));
        return settingsOverlay;
    }
}
