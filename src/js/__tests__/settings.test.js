import Settings from '../settings';

const settingsTest = new Settings();
settingsTest.changeSettings('music', 'rock');
settingsTest.changeSettings('theme', 'light');
const result = settingsTest.settings;

test('Checking selected theme', () => {
    expect(result.get('theme')).toBe('light');
});

test('Checking selected music', () => {
    expect(result.get('music')).toBe('rock');
});

test('Checking selected difficulty', () => {
    expect(result.get('difficulty')).toBe('easy');
});
