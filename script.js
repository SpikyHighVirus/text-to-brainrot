const brainrotWords = [
    "skibidi", "gyatt", "rizz", "only in ohio", "duke dennis", "did you pray today", "livvy dunne", 
    "rizzing up", "baby gronk", "sussy imposter", "pibby glitch", "in real life", "sigma", 
    "alpha omega male grindset", "andrew tate", "goon cave", "freddy fazbear", "colleen ballinger", 
    "smurf cat vs strawberry elephant", "blud", "dawg", "shmlawg", "ishowspeed", 
    "a whole bunch of turbulence", "ambatukam", "bro really thinks he's carti", 
    "literally hitting the griddy", "the ocky way", "kai cenat", "fanum tax", "garten of banban", 
    "no edging in class", "not the mosquito again", "bussing", "axel in harlem", 
    "whopper whopper whopper whopper", "1 2 buckle my shoe", "goofy ahh", "aiden ross", 
    "sin city", "monday left me broken", "quirked up white boy busting it down sexual style", 
    "goated with the sauce", "john pork", "grimace shake", "kiki do you love me", 
    "huggy wuggy", "nathaniel b", "lightskin stare", "biggest bird", "omar the referee", 
    "amogus", "uncanny", "wholesome reddit", "chungus", "keanu reeves", "pizza tower", 
    "zesty", "poggers", "kumalala savesta", "quandale dingle", "glizzy", "rose toy", 
    "ankha zone", "thug shaker", "morbin time", "dj khaled", "sisyphus", "oceangate", 
    "shadow wizard money gang", "ayo the pizza here", "PLUH", "nair butthole waxing", 
    "t-pose", "ugandan knuckles", "family guy funny moments compilation with subway surfers gameplay at the bottom", 
    "nickeh30", "ratio", "uwu", "delulu", "opium bird", "cg5", "mewing", "fortnite battle pass", 
    "all my fellas", "gta 6", "backrooms", "gigachad", "based", "cringe", "kino", 
    "redpilled", "no nut november", "pokénut november", "foot fetish", "F in the chat", 
    "i love lean", "looksmaxxing", "gassy", "social credit", "bing chilling", "xbox live", 
    "mrbeast", "kid named finger", "better caul saul", "i am a surgeon", "hit or miss i guess they never miss huh", 
    "i like ya cut g", "ice spice", "gooning", "fr", "we go gym", "kevin james", "josh hutcherson", 
    "coffin of andy and leyley", "metal pipe falling"
];

const inputText = document.getElementById('inputText');
const convertButton = document.getElementById('convertButton');
const convertedText = document.getElementById('convertedText');

function getRandomBrainrotWord() {
    return brainrotWords[Math.floor(Math.random() * brainrotWords.length)];
}

function convertToBrainrot(text) {
    const words = text.split(' ');
    return words
        .map(word => (Math.random() > 0.6 ? getRandomBrainrotWord() : word))
        .join(' ');
}

convertButton.addEventListener('click', () => {
    const text = inputText.value;
    if (!text.trim()) {
        convertedText.textContent = "Please enter some text to convert!";
        return;
    }
    const brainrotText = convertToBrainrot(text);
    convertedText.textContent = brainrotText;
});
