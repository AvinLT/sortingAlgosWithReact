export function getBubbleSortAnimations(arr) {
    const animations = [];
    if (arr.length <= 1) return arr;
    const copyArr = arr.slice();
    bubbleSort(arr, copyArr, animations);
    return animations;

}

export function getinsertionSortAnimations(arr) {
    const animations = [];
    if (arr.length <= 1) return arr;
    const copyArr = arr.slice();
    insertionSort(arr, copyArr, animations);
    return animations;

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


