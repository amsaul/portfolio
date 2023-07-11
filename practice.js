let num = [1, 2, 3, 4, 5, 6, 7, 8, 9];
target = 12;
//lets create a two sum function
let twoSum = function(num, target){
    for(let i=0; i<num.length; i++){
        for(let j=0+1; j<num.length; j++){
            if(num[i] + num[j] === target){
                return [i, j];
            }
        }
    }
}