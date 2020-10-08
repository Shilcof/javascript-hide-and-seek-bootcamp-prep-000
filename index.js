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
  var selection = lis.querySelectorAll('ul.ranked-list li');
  
  for (let i = 0; i < selection.length; i++) {
    lis[i].innerHTML = (i + n).toString();
  }
  
  return selection;
}

function deepestChild() {
  var selection = lis.querySelectorAll('#grand-node div');
  return selection[selection.length-1];
}