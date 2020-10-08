const lis = document;


function getFirstSelector(selector) {
  var selection = lis.querySelector(selector);
  return selection;
}

function nestedTarget() {
  var selection = lis.querySelector('#nested .target');
  return selection
}

function increaseRankBy(n) {
  
}

function deepestChild() {
  var selection = lis.querySelectorAll('#grand-node .target');
  return selection[selection.length-1];
}