import React from 'react';
import './SortingMain.css'
import * as SortingAlgos from '../SortingAlgos/SortingAlgos.js'

const NUMBER_BARS = 75;
const SPEED = 40;


export default class SortingMain extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            arr: []
        }
    }

    componentDidMount() {
        this.resetArr();
    }

    resetArr() {
        const arr = [];
        for (let i=0; i<NUMBER_BARS; i++) {
            //create the random values for the different heights of bar
            arr.push(randIntInInterval(10, 600));
        }
        this.setState({arr});
    }

    bubbleSort() {
        //get animation sequences from corresponding algorithms
        const animations = SortingAlgos.getBubbleSortAnimations(this.state.arr);
        for (let i = 0; i < animations.length; i++){
            const arrayBars = document.getElementsByClassName('bar');
            //animation arrays gets added in grroups of 3s. 
            //1st in group : change both bars green
            //2nd in group: change bars back to red
            //3rd in group: swap bars
            const colourChange = i % 3 !== 2;
            if (colourChange){
                const [barOneId, barTwoId] = animations[i];
                const barOneStyle = arrayBars[barOneId].style;
                const barTwoStyle = arrayBars[barTwoId].style;
                //colour only changes for 1st and 2nd in every group
                const colour = i % 3 === 0 ? 'green' : 'red';
                setTimeout(() => {
                    barOneStyle.backgroundColor = colour;
                    barTwoStyle.backgroundColor = colour;
                }, i * SPEED);
            }else{
                setTimeout(() => {
                    const [barOneId, barTwoId] = animations[i];
                    const barOneStyle = arrayBars[barOneId].style;
                    const barTwoStyle = arrayBars[barTwoId].style;
                    //create temp to store 1st bar attributes
                    const temp = this.state.arr[barOneId];
                    const tempHeight = arrayBars[barOneId].style.height;
                    //give 2nd bar attributes to 1st bar
                    this.state.arr[barOneId] = this.state.arr[barTwoId];
                    barOneStyle.height = arrayBars[barTwoId].style.height;
                    //give 1st bar attributes to 1st bar from temp
                    this.state.arr[barTwoId] = temp;
                    barTwoStyle.height = tempHeight;
                }, i * SPEED);
            }
        }
    }

    insertionSort() {
        const animations = SortingAlgos.getInsertionSortAnimations(this.state.arr);
        for (let i = 0; i < animations.length; i++){
            const arrayBars = document.getElementsByClassName('bar');
            const [barOneId, barTwoId, colourChange] = animations[i];

            if (colourChange == 0 || colourChange == 1){
                const barOneStyle = arrayBars[barOneId].style;
                const barTwoStyle = arrayBars[barTwoId].style;
                const colour = colourChange === 0 ? 'green' : 'red';
                setTimeout(() => {
                    barOneStyle.backgroundColor = colour;
                    barTwoStyle.backgroundColor = colour;
                }, i * SPEED);
            }else{
                setTimeout(() => {
                    const [barOneId, barTwoId, colourchange] = animations[i];
                    const barOneStyle = arrayBars[barOneId].style;
                    const barTwoStyle = arrayBars[barTwoId].style;

                    const temp = this.state.arr[barOneId];
                    const tempHeight = arrayBars[barOneId].style.height;

                    this.state.arr[barOneId] = this.state.arr[barTwoId];
                    barOneStyle.height = arrayBars[barTwoId].style.height;

                    this.state.arr[barTwoId] = temp;
                    barTwoStyle.height = tempHeight;
                    }, i * SPEED);
            }
        }
        const wait = 0;
    }


    selectionSort() {
        const animations = SortingAlgos.getSelectionSortAnimations(this.state.arr);
        for (let i = 0; i < animations.length; i++){
            const arrayBars = document.getElementsByClassName('bar');
            const [barOneId, barTwoId, colourChange] = animations[i];

            if (colourChange == 0 || colourChange == 1){
                const barOneStyle = arrayBars[barOneId].style;
                const barTwoStyle = arrayBars[barTwoId].style;
                const colour = colourChange === 0 ? 'green' : 'red';
                setTimeout(() => {
                    barOneStyle.backgroundColor = colour;
                    barTwoStyle.backgroundColor = colour;
                }, i * SPEED);
            }else{
                setTimeout(() => {
                    const [barOneId, barTwoId, colourchange] = animations[i];
                    const barOneStyle = arrayBars[barOneId].style;
                    const barTwoStyle = arrayBars[barTwoId].style;

                    const temp = this.state.arr[barOneId];
                    const tempHeight = arrayBars[barOneId].style.height;

                    this.state.arr[barOneId] = this.state.arr[barTwoId];
                    barOneStyle.height = arrayBars[barTwoId].style.height;

                    this.state.arr[barTwoId] = temp;
                    barTwoStyle.height = tempHeight;
                    }, i * SPEED);
            }
        }
        const wait = 0;
    }


    mergeSort() {
        const animations = SortingAlgos.getMergeSortAnimations(this.state.arr);
        for (let i = 0; i < animations.length; i++) {
            const arrayBars = document.getElementsByClassName('bar');
            const isColorChange = i % 3 !== 2;
            if (isColorChange) {
                const [barOneIdx, barTwoIdx] = animations[i];
                const barOneStyle = arrayBars[barOneIdx].style;
                const barTwoStyle = arrayBars[barTwoIdx].style;
                const color = i % 3 === 0 ? 'green' : 'red';
                setTimeout(() => {
                    barOneStyle.backgroundColor = color;
                    barTwoStyle.backgroundColor = color;
                }, i * SPEED);
            } else {
                setTimeout(() => {
                    const [barOneIdx, newHeight] = animations[i];
                    const barOneStyle = arrayBars[barOneIdx].style;
                    barOneStyle.height = `${newHeight}px`;
                }, i * SPEED);
                }
            }
        }
    

    render() {

        const {arr} = this.state;

        return (
            <>
                <div className="bar-group">
                    {arr.map((val, idx) => (
                        <div 
                        className="bar" 
                        key={idx}
                        style={{height: `${val}px`}}>
                        </div>
                    ))}
                </div>
                <button onClick={() => this.resetArr()}> Reset!</button>
                <button onClick={() => this.bubbleSort()}>BubbleSort!</button>
                <button onClick={() => this.insertionSort()}>InsertionSort!</button>
                <button onClick={() => this.selectionSort()}>SelectionSort!</button>
                <button onClick={() => this.mergeSort()}>MergeSort!</button>

            </>
        );
    }
}

//generate random numbers within limits
function randIntInInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
