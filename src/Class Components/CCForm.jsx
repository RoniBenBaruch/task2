import { Component } from "react";

export default class CCForm extends Component {
    constructor(props) {
        super(props)

        this.state = {
            last: "",
            first: "",
            psy: "",
            score: ""
        }
    }

    fillLast = () => {
        this.setState({ last: "please fill last name" });
    }
    clearLast = () => {
        this.setState({ last: "" });
    }
    fillFirst = () => {
        this.setState({ first: "please fill first name" });
    }
    clearFirst = () => {
        this.setState({ first: "" });
    }
    fillPsy = () => {
        this.setState({ psy: "please fill psychometric score" });
    }
    clearPsy = (e) => {
        this.setState({ psy: "" });
        let gr =e.target.value;
        if (gr > 555) {
            this.setState({ score: "You can be accepted for studies" })
        }
        else{
        this.setState({ score: "try again next year" })}
    }

    render() {
        return (<div> <br />
            <p style={{ color: "red" }}>{this.state.last}</p>
            last name: <input type="text" onFocus={this.fillLast} onBlur={this.clearLast}></input> <br />
            <p style={{ color: "red" }}>{this.state.first}</p>
            first name: <input type="text" onFocus={this.fillFirst} onBlur={this.clearFirst}></input> <br />
            <p style={{ color: "red" }}>{this.state.psy}</p>
            psychometric score: <input type="number" onFocus={this.fillPsy} onBlur={this.clearPsy} ></input>
            <p>{this.state.score}</p>
        </div>);
    }
}