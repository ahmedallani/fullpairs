import data from "./data"

function pairs(data){
  let obj={}
  let rtn= []
  for (let i=0;i<data.length;i++){
    let elm = data[i]
    obj[elm[1]] = true
    if(obj[elm[0]]===undefined){
      rtn.push(elm)
    }
  }
  return rtn
}
function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}
export default shuffle(pairs(data))