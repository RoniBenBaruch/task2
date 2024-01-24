import { Component } from "react";
import { render } from "react-dom";

export default class CCColors extends Component {
    constructor(props) {
        super(props);

        this.state={
            divColor : 'white'
        }

    }

    chgColor = (color) => {
        this.setState({ divColor: color });
    }


    render() {
        return (
            <div style={{ backgroundColor: this.state.divColor }}>
                <div>
                    <button onClick={() => this.chgColor('gray')} style={{ backgroundColor: 'gray', margin: 50 }}>gray</button>
                    <button onClick={() => this.chgColor('purple')} style={{ backgroundColor: 'purple', margin: 50 }}>purple</button>
                    <button onClick={() => this.chgColor('blue')}  style={{ backgroundColor: 'blue', margin: 50 }}>blue</button>
                    <button onClick={() => this.chgColor('green')}  style={{ backgroundColor: 'green', margin: 50 }}>green</button>
                </div>
                <div>
                    <button onClick={() => this.chgColor('yellow')}  style={{ backgroundColor: 'yellow', margin: 50 }}>yellow</button>
                    <button onClick={() => this.chgColor('orange')}  style={{ backgroundColor: 'orange', margin: 50 }}>orange</button>
                    <button onClick={() => this.chgColor('red')}  style={{ backgroundColor: 'red', margin: 50 }}>red</button>
                    <button onClick={() => this.chgColor('pink')}  style={{ backgroundColor: 'pink', margin: 50 }}>pink</button>
                </div>
            </div>
        )
    }
}


