//BreadthFirstSearch

function traverseDF(value){
  let collection =  [this.root]

  while(collection.length){
    let node = collection.shift()

    if(node.data === value){
      return true
  } else {
    collection.unshift(...node.children)
  }
}

return false

}

//BreadthFirstSearch
function traverseBF(value){
  let collection =  [this.root]

  while(collection.length){
    let node = collection.shift()

    if(node.data === value){
      return true
  } else {
    collection.push(...node.children)
  }
}

return false

}
