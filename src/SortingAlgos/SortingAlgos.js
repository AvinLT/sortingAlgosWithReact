export function getBubbleSortAnimations(arr) {
    const animations = [];
    if (arr.length <= 1) return arr;
    const copyArr = arr.slice();
    bubbleSort(arr, copyArr, animations);
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
            }
        }
    }
}


