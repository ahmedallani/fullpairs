/**
 * get new pair
 */
 function getNewPair(setStudents, student, setOldPairs) {
    let difference = [...setStudents].filter(
      (x) => !setOldPairs.has(x) && x !== student
    );
    const randomElement =
      difference[Math.floor(Math.random() * difference.length)];
    return randomElement;
  }
  
  /**
   * get new pairs
   * @customfunction
   */
  function newPairs(listStudents, listOldPairs) {
    listStudents = listStudents.map(cv => cv[0])
    let setStudents = new Set(listStudents);
    let rtn = [];
    let obj = {};
    for (let i = 0; i < listStudents.length; i++) {
      let student = listStudents[i];
      obj[student] = i;
    }
    for (let i = 0; i < listStudents.length; i++) {
      if (rtn[i] === undefined) {
        let student = listStudents[i];
        let setOldPairs = new Set(listOldPairs[i]);
        newPair = getNewPair(setStudents, student, setOldPairs);
        rtn[i] = newPair;
        posPair = obj[newPair];
        rtn[posPair] = student;
        setStudents.delete(student);
        setStudents.delete(newPair);
      }
    }
    return rtn.map(cv => [cv]);
  }
  