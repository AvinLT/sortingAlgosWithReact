export const bubbleSort = arr => {
    console.log("HAPPENING")
    let finished = true;
    let temp;
    while (finished){
        finished = false;
        for (let i=0;i<arr.length-1;i++){
            if (arr[i] > arr[i+1]){
                temp = arr[i];
                arr[i] = arr[i+1];
                arr[i+1] = temp;
                finished = true;
            }
        }
    }
    return arr
}