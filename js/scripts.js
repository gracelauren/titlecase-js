var articlesConjunctions = function(phrase) {
  if (/^.*\b(a|an|the|and|but|for|nor|of)\b.*$/.test(phrase)) {
    return true;
  } else {
    return false;
  }
};

var titleCase = function(phrase) {
  var words = phrase.split (" ");
  var newPhrase = "";
  var wordLength = words.length;


    words.forEach(function(word, i) {
      if (i === 0 || i === (wordLength - 1) || !articlesConjunctions(word)) {
        var word = word.toLowerCase().charAt(0).toUpperCase() + word.toLowerCase().slice(1);
      } else {
        word === word.toLowerCase();
      }
    newPhrase = newPhrase + word + " ";

    });
debugger;

  newPhrase = newPhrase.slice(0, newPhrase.length - 1);
  return newPhrase;
};
