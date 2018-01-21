function getFirstSelector(selector) {
  return document.querySelector(selector)
}

function nestedTarget() {
return document.querySelector('#nested .target')
}

function increaseRankBy(n) {
  const rankedLists = document.querySelectorAll('.ranked-list')
  for (let i = 0; i < rankedLists.length; i++) {
    let lis = rankedLists[i].children
  for (let j = 0; j < lis.length; j++) {
    lis[j].innerHTML = parseInt(lis[j].innerHTML) + n
  }
  }
}

function deepestChild(){
  
}

/*function deepestChild() {
  let node = document.getElementById('grand-node')
  let nextNode = node.children[0]

  while (nextNode) {
    node = nextNode
    nextNode = node.children[0]
  }
}*/