export function getBubbleSortAnimations(arr) {
    const animations = [];
    if (arr.length <= 1) return arr;
    const copyArr = arr.slice();
    bubbleSort(arr, copyArr, animations);
    return animations;

}

export function getInsertionSortAnimations(arr) {
    const animations = [];
    if (arr.length <= 1) return arr;
    const copyArr = arr.slice();
    insertionSort(arr, copyArr, animations);
    return animations;

}

export function getSelectionSortAnimations(arr) {
    const animations = [];
    if (arr.length <= 1) return arr;
    const copyArr = arr.slice();
    selectionSort(arr, copyArr, animations);
    return animations;

}

/*
export function getQuickAnimations(arr) {
    const animations = [];
    if (arr.length <= 1) return arr;
    const copyArr = arr.slice();
    return quickSort(copyArr);
    //return animations;

}
*/

export function getMergeAnimations(arr) {
    const animations = [];
    if (arr.length <= 1) return arr;
    const copyArr = arr.slice();
    const out = mergeSort(copyArr, 0, copyArr.length - 1);
    return out
    //return animations;

}

function bubbleSort(arr, copyArr, animations){
    let finished = true;
    let temp;


    console.log("HAPPENING")
    while (finished){
        finished = false;

        for (let i=0;i<copyArr.length-1;i++){
            animations.push([i, i+1]);
            animations.push([i, i+1]);
            if (copyArr[i] > copyArr[i+1]){
                animations.push([i, i+1]);
                temp = copyArr[i];
                copyArr[i] = copyArr[i+1];
                copyArr[i+1] = temp;
                finished = true;
            }else{
                animations.push([i, i]);
            }
        }
    }
}

function insertionSort(arr, copyArr, animations) {
    let n = copyArr.length;
    let lock = true;
        for (let i = 1; i < n; i++) {
            // Choosing the first element in our unsorted subarray
            let current = copyArr[i];
            // The last element of our sorted subarray
            let j = i-1; 
            animations.push([i, j, 0]);
            animations.push([i, j, 1]);
            while ((j > -1) && (current < copyArr[j])) {
                if (lock == false){
                    animations.push([j+1, j, 0]);
                    animations.push([j+1, j, 1]);
                }
                lock = false;
                animations.push([j+1, j, -1]);
                copyArr[j+1] = copyArr[j];
                j--;
            }
            copyArr[j+1] = current;
            lock = true;
        }
    return copyArr;
}

function selectionSort(arr, copyArr, animations) { 
    let n = copyArr.length;
        
    for(let i = 0; i < n; i++) {
        // Finding the smallest number in the subarray
        let min = i;
        for(let j = i+1; j < n; j++){
            animations.push([j, min, 0]);
            animations.push([j, min, 1]);
            if(copyArr[j] < copyArr[min]) {
                min=j; 
            }
        }
         if (min != i) {
             // Swapping the elements
             animations.push([i, min, -1]);
             let tmp = copyArr[i]; 
             copyArr[i] = copyArr[min];
             copyArr[min] = tmp;      
        }
    }
    return copyArr;
}

/*
function quickSort(copyArr) {
    console.log("RECURSE");
    if (copyArr.length <= 1) {
      return copyArr;
    }
  
    var pivot = copyArr[0];
    
    var left = []; 
    var right = [];
  
    for (var i = 1; i < copyArr.length; i++) {
        copyArr[i] < pivot ? left.push(copyArr[i]) : right.push(copyArr[i]);
    }
  
    return quickSort(left).concat(pivot, quickSort(right));quickSort
  };
*/

/*
2 1 4 3

*/



function merge(left, right) {
    
    console.log("BEFORE: ",left, right);
    let arr = [];
    while (left[0].length && right[0].length) {
        if (left[0][0] < right[0][0]) {
            arr.push(left[0].shift())  
        } else {
            arr.push(right[0].shift()) 
        }
    }

    console.log("AFTER: ",arr, left[0], right[0]);
    return arr.concat(left[0]).concat(right[0])
}

function mergeSort(copyArr, startId, endId) {
    const half = Math.floor( copyArr.length / 2);
        if(copyArr.length < 2){
      return [copyArr, startId]
    }
    
    const left = copyArr.splice(0, half)
    return merge(mergeSort(left,startId, startId + half - 1),mergeSort(copyArr, startId + half, endId))
}


