//create function superbowlWin(array)
// function superbowlWin(array) {
//     let sbWin = undefined
   
//     for (let element of array) {
//         if (element.result === 'W') {
//             return sbWin = element.year
//             console.log(element.year)
//         }
//     }
    
// }
  //each object has two properties year and result
  //use find to test to see if the result is 'W'
    //if the result is 'W':
        //return the year
        //else return undefined

function superbowlWin(array) {
    const found = array.find(element => {
        return element.result === 'W'
        //created a varialbe found to store the object of the first
        //instance that element.result is equal to 'W'
    })
    if(found) {
        return found.year
    }else{
        return found
        //this would be equal to undefined because there
        //hasn't been a value added to it
    }
}