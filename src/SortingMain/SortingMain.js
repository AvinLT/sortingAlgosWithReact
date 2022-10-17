import React from 'react';
import './SortingMain.css'
import * as SortingAlgos from '../SortingAlgos/SortingAlgos.jsx'

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
        for (let i=0; i<60; i++) {
            arr.push(randIntInInterval(10, 600));
        }
        this.setState({arr});
    }

    bubbleSort() {
        const sortedArr = SortingAlgos.bubbleSort(this.state.arr);
        console.log(this.state.arr);
        console.log(sortedArr);
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
