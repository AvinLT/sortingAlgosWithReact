import React from 'react';
import './SortingMain.css'
import * as SortingAlgos from '../SortingAlgos/SortingAlgos.js'

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
        for (let i=0; i<15; i++) {
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
                }, i * 40);
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
                  }, i * 40);
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
                <button onClick={() => this.bubbleSort()}>Sort!</button>
            </>
        );
    }
}

function randIntInInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
