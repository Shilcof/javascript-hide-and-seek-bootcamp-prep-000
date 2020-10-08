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
  var selection = lis.querySelectorAll('div#grand-node div.target');
  
  var nodes = document.querySelectorAll(`#${id} ${element}`);
  if(!nodes.length) return false;
  return nodes[nodes.length-1];
  
  return selection
}