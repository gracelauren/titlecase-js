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

  newPhrase = newPhrase.slice(0, newPhrase.length - 1);
  return newPhrase;
};

$(document).ready(function() {
  $('#fancy-inputs input[type="text"]').blur(function(){
    if($(this).val().length > 0){
      $(this).addClass('white');
    } else {
      $(this).removeClass('white');
    }
  });
  $("form#titlecase").submit(function(event) {
    var phrase = ($("input#phrase").val());
    var result = titleCase(phrase);

    $(".phrase").text(result);


    $("#result").show();
    event.preventDefault();
  });
});
