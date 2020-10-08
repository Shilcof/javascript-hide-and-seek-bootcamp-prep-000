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
  var selection = lis.querySelectorAll('.ranked-list');
  
  return selection[selection.length-1];
}

function deepestChild() {
  var selection = lis.querySelectorAll('#grand-node div');
  return selection[selection.length-1];
}