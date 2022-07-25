const prefixList = ['', 'The Rolling Hills', 'Castle', 'River', 'Rivers','Duck', 'Ducks', 'Path', 'Paths', 'Peak', 'Peaks', 'Peace', 'Upper', 'Mountain', 'Mountains', 'Village', 'Villages', 'Peasant', 'Peasants', 'Station', 'Stations', 'Forests', 'Forest'];
const prepositionList = ['',"aboard", "about", "above", "across", "after", "against", "along", "amid", "among", "anti", "around", "as", "at", "before", "behind", "below", "beneath", "beside", "besides", "between", "beyond", "by", "down", "for", "from", "in", "inside", "into", "like", "near", "of", "off", "on", "onto", "opposite", "outside", "over", "past", "per", "round", "through", "to", "toward", "towards", "under", "underneath", "up", "upon", "versus", "via", "with", "within", "without"];
const mainPartList = ['Idyll', 'Trent', 'shape', 'mice', 'holiday', 'place', 'beef', 'mouth', 'snail', 'pet', 'throat', 'show', 'rose', 'burst', 'cast', 'leg', 'form', 'dad', 'foot', 'hospital', 'floor', 'actor', 'carpenter', 'rule', 'loaf', 'crayon', 'thing', 'plastic', 'hole', 'quill', 'taste', 'base', 'spade', 'fact', 'brass', 'record', 'mint', 'seat', 'boy', 'sound', 'edge', 'riddle', 'cart', 'cats', 'door', 'ray', 'pleasure', 'canvas', 'breath', 'stem', 'point', 'crate', 'shock', 'man', 'pencil', 'celery', 'ants', 'cannon', 'driving', 'jar', 'talk', 'harmony', 'dogs', 'coat', 'sweater', 'knife', 'selection', 'boot', 'tiger', 'parcel', 'flowers', 'egg', 'instrument', 'trains', 'flavor', 'fish', 'meal', 'furniture', 'basket', 'insect', 'neck', 'shame', 'gate', 'stranger', 'quiet', 'offer', 'frogs', 'fall', 'creator', 'fly', 'stage', 'pot', 'pail', 'rabbits', 'government', 'tail', 'rings', 'wrist']

function generatePlaceName() {
    const prefix = generateWord(prefixList).toUpperCase();
    const preposition = generateWord(prepositionList).toUpperCase();
    const mainPart = generateWord(mainPartList).toUpperCase();
    const placeName = `${prefix} ${preposition} ${mainPart}`;

    return placeName;
}


function generateWord(arr) {
    const wordPlace = Math.floor(Math.random() * (arr.length - 1));
    return arr[wordPlace];
}

for (let i = 0; i < 5; i ++) {
    console.log(generatePlaceName());
}
