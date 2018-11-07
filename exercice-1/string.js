const texte = "phrase de test";

function ucfirst (text)
{
    var text = testString(text)
    return text.charAt(0).toUpperCase() + text.slice(1);
}

function capitalize (text)
{
    var text = testString(text)
    var mots = text.split(' ');
    for (var mot in mots) {
        mots[mot] = ucfirst(mots[mot]);
    }
    return mots.join(" ");
}

function camelCase (text)
{
    var text = testString(text)
    text = capitalize(text);
    return text.replace(/ /g,"");
}

function camelCase2 (text)
{
    var text = testString(text)
    var mots = text.split(' ');
    for (var mot in mots) {
        mots[mot] = ucfirst(mots[mot]);
    }
    return mots.join("");  
}

function snake_case (text)
{
    var text = testString(text)
    return text.replace(/ /g,"_"); 
}

function leet (text)
{

    var text = testString(text)
    text = text.replace(/a/g, '4');
    text = text.replace(/e/g, '3');
    text = text.replace(/i/g, '1');
    text = text.replace(/o/g, '0');
    text = text.replace(/u/g, '_');
    text = text.replace(/y/g, '7');
    
    return text;
}

function verlan (text)
{
    var text = testString(text)
    var mots = text.split(' ');

    for (var mot in mots) {
        mots[mot] = inverser(mots[mot]);
    }

    return mots.join(" ");
}

function inverser(mot)
{
    var motInverse = "";
    for (var i = 0; i < mot.length; i++) {
        motInverse = mot[i] + motInverse;
    }
 
    return motInverse;
}

function testString (text)
{
    if (typeof text === "string"){
        return text;
    }
    return "";
}

console.log(ucfirst(texte));
console.log(capitalize(texte));
console.log(camelCase(texte));
console.log(snake_case(texte));
console.log(leet(texte));
console.log(verlan(texte));
