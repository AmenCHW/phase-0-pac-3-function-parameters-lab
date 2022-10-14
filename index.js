
function introduction(name) {
    return `Hi, my name is ${name}.`
}

introduction("Aki");
console.log(introduction("Aki"));


function introductionWithLanguage(name, language) {
    return `Hi, my name is ${name} and I am learning to program in ${language}.`
}

introductionWithLanguage("Aki", "Ember.js");
console.log(introductionWithLanguage("Aki", "Ember.js"))

function introductionWithLanguageOptional(name, language = "JavaScript") {
    return `Hi, my name is ${name} and I am learning to program in ${language}.`
}

introductionWithLanguageOptional("Gracie");
console.log(introductionWithLanguageOptional("Gracie",))

