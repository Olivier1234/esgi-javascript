const texte = "phrase de test";

function ucfirst (text)
{
    return text.charAt(0).toUpperCase() + text.slice(1);
}

function capitalize (text)
{
    
    var mots = text.split(' ');
    for (var mot in mots) {
        mots[mot] = ucfirst(mots[mot]);
    }
    return mots.join(" ");
}

function camelCase (text)
{
    var text = capitalize(text);
    return text.replace(/ /g,"");
}

function camelCase2 (text)
{
    var mots = text.split(' ');
    for (var mot in mots) {
        mots[mot] = ucfirst(mots[mot]);
    }
    return mots.join("");  
}

function snake_case (text)
{
    return text.replace(/ /g,"_"); 
}

function leet (text) {
    
        text = text.replace(/a/g, '4');
        text = text.replace(/e/g, '3');
        text = text.replace(/i/g, '1');
        text = text.replace(/o/g, '0');
        text = text.replace(/u/g, '_');
        text = text.replace(/y/g, '7');
        
    return text;
}

function prop_access(){

}
var prairie = {
    Animal:{
        
    }
}
console.log(leet(texte));
