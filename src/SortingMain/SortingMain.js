import React from 'react';

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
        for (let i=0; i<10; i++) {
            arr.push(randIntInInterval(10, 100));
        }
        this.setState({arr});
    }
    
    render() {

        const {arr} = this.state;

        return (
            <>
                {arr.map((val, idx) => (
                    <div key={idx}>
                        {val}
                    </div>
                ))}
            </>
        );
    }
}

function randIntInInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}