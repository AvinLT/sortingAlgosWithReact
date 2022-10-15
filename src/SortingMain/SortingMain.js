import React from 'react';
import './SortingMain.css'

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

    render() {

        const {arr} = this.state;

        return (
            <div className="bar-group">
                {arr.map((val, idx) => (
                    <div 
                    className="bar" 
                    key={idx}
                    style={{height: `${val}px`}}>
                    </div>
                ))}
            </div>
        );
    }
}

function randIntInInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}