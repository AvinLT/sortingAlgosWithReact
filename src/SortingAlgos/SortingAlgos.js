export function getBubbleSortAnimations(arr) {
    const animations = [];
    if (arr.length <= 1) return arr;
    const copyArr = arr.slice();
    bubbleSort(copyArr, animations);
    return animations;
}

export function getInsertionSortAnimations(arr) {
    const animations = [];
    if (arr.length <= 1) return arr;
    const copyArr = arr.slice();
    insertionSort(copyArr, animations);
    return animations;
}

export function getSelectionSortAnimations(arr) {
    const animations = [];
    if (arr.length <= 1) return arr;
    const copyArr = arr.slice();
    selectionSort(copyArr, animations);
    return animations;
}

export function getMergeSortAnimations(arr) {
    const animations = [];
    if (arr.length <= 1) return arr;
    const copyArr = arr.slice();
    mergeSortHelper(arr, 0, arr.length - 1, copyArr, animations);
    return animations;
}


function bubbleSort(copyArr, animations){
    let finished = true;
    let temp;

    while (finished){
        finished = false;

        for (let i=0;i<copyArr.length-1;i++){
            animations.push([i, i+1]); // push ids of bars to turn green
            animations.push([i, i+1]); // push ids of bars to turn back red
            if (copyArr[i] > copyArr[i+1]){
                animations.push([i, i+1]); // push ids of bars to swap
                // swap elements in array based on bubble sort
                temp = copyArr[i];
                copyArr[i] = copyArr[i+1];
                copyArr[i+1] = temp;
                finished = true;
            }else{
                //filler array to push to animation to maintain order,
                //since we need to push in 3s. This swaps an element with itself
                animations.push([i, i]);
            }
        }
    }
}

function insertionSort(copyArr, animations) {
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

function selectionSort(copyArr, animations) { 
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

function mergeSortHelper(
    arr,
    startIdx,
    endIdx,
    copyArr,
    animations){
    if (startIdx === endIdx) return;
    const middleIdx = Math.floor((startIdx + endIdx) / 2);
    mergeSortHelper(copyArr, startIdx, middleIdx, arr, animations);
    mergeSortHelper(copyArr, middleIdx + 1, endIdx, arr, animations);
    doMerge(arr, startIdx, middleIdx, endIdx, copyArr, animations);
}

function doMerge(
    arr,
    startIdx,
    middleIdx,
    endIdx,
    copyArr,
    animations) {
    let k = startIdx;
    let i = startIdx;
    let j = middleIdx + 1;
    while (i <= middleIdx && j <= endIdx) {
        // These are the values that we're comparing; we push them once
        // to change their color.
        animations.push([i, j]);
        // These are the values that we're comparing; we push them a second
        // time to revert their color.
        animations.push([i, j]);
        if (copyArr[i] <= copyArr[j]) {
            // We overwrite the value at index k in the original array with the
            // value at index i in the auxiliary array.
            animations.push([k, copyArr[i]]);
            arr[k++] = copyArr[i++];
        } else {
            // We overwrite the value at index k in the original array with the
            // value at index j in the auxiliary array.
            animations.push([k, copyArr[j]]);
            arr[k++] = copyArr[j++];
        }
    }
    while (i <= middleIdx) {
        // These are the values that we're comparing; we push them once
        // to change their color.
        animations.push([i, i]);
        // These are the values that we're comparing; we push them a second
        // time to revert their color.
        animations.push([i, i]);
        // We overwrite the value at index k in the original array with the
        // value at index i in the auxiliary array.
        animations.push([k, copyArr[i]]);
        arr[k++] = copyArr[i++];
    }
    while (j <= endIdx) {
        // These are the values that we're comparing; we push them once
        // to change their color.
        animations.push([j, j]);
        // These are the values that we're comparing; we push them a second
        // time to revert their color.
        animations.push([j, j]);
        // We overwrite the value at index k in the original array with the
        // value at index j in the auxiliary array.
        animations.push([k, copyArr[j]]);
        arr[k++] = copyArr[j++];
    }
}