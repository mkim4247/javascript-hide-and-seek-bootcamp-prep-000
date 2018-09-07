function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  return document.querySelector('#nested .target');
}

function increaseRankBy(n) {
  var rank = document.querySelectorAll('.ranked-list');
  for (let i = 0; i < rank.length; i++) {
    rank[i].innerHTML = (parseInt(rank[i].innerHTML) + n);
  }
}
  
function deepestChild() {
  let deep = document.querySelector("grand-node div div div div");
  return deep.innerHTML;
}