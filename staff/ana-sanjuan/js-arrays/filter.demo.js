console.log('DEMO filter');

var words = ['spray', 'limit', 'elite', 'exuberant', 'construction', 'present'];


var res = filter(words, function(word) { return word.length > 6; });

console.log(res);
// ["exuberant", "construction", "present"] // typo in the output, it was destruction and now is construction