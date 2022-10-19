import React from 'react';
import './SortingMain.css'
import * as SortingAlgos from '../SortingAlgos/SortingAlgos.js'

const NUMBER_BARS = 50;
const SPEED = 15;




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
            arr.push(randIntInInterval(10, 600));
        }
        this.setState({arr});
    }

    bubbleSort() {
        const animations = SortingAlgos.getBubbleSortAnimations(this.state.arr);
        for (let i = 0; i < animations.length; i++){
            const arrayBars = document.getElementsByClassName('bar');
            const colourChange = i % 3 !== 2;
            if (colourChange){
                const [barOneId, barTwoId] = animations[i];
                const barOneStyle = arrayBars[barOneId].style;
                const barTwoStyle = arrayBars[barTwoId].style;
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
                    const temp = this.state.arr[barOneId];
                    const tempHeight = arrayBars[barOneId].style.height;

                    this.state.arr[barOneId] = this.state.arr[barTwoId];
                    barOneStyle.height = arrayBars[barTwoId].style.height;
                    this.state.arr[barTwoId] = temp;
                    barTwoStyle.height = tempHeight;
                  }, i * SPEED);
            }
        }
    }


    insertionSort() {
        const animations = SortingAlgos.getinsertionSortAnimations(this.state.arr);
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
            </>
        );
    }
}

function randIntInInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
