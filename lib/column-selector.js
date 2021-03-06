// generate column class name

module.exports = function(options, breakpoint, number, modifier) {

  var REMOVE_BB_REGEX = /[\-\_]+BB|BB[\-\_]+|BB/;
  var REMOVE_NN_REGEX = /[\-\_]+NN|NN[\-\_]+|NN/;
  var REMOVE_MM_REGEX = /[\-\_]+MM|MM[\-\_]+|MM/;

  var BB_REGEX = /BB/;
  var NN_REGEX = /NN/;
  var MM_REGEX = /MM/;

  var prefix = options.prefix;
  var selector = options.columnName;

  if (breakpoint) {
    selector = selector.replace(BB_REGEX, breakpoint);
  } else {
    selector = selector.replace(REMOVE_BB_REGEX, '');
  }

  if (number) {
    selector = selector.replace(NN_REGEX, number);
  } else {
    selector = selector.replace(REMOVE_NN_REGEX, '');
  }

  if (modifier) {
    selector = selector.replace(MM_REGEX, modifier);
  } else {
    selector = selector.replace(REMOVE_MM_REGEX, '');
  }


  return '.' + selector;

};

