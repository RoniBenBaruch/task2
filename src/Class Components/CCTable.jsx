import { Component } from "react";

export default class CCTable extends Component {
 constructor(props){
    super(props);

    this.state={
        wid:'100%'
    }
 }

 chgWidth =()=>{
    this.setState({wid:'50%'});
 }

 chgWidth100=()=>{
    this.setState({wid:'100%'});
 }

    render() {
        return (<div> <br />
            <table style={{ width: this.state.wid ,borderCollapse: 'collapse'}} onClick={this.chgWidth} onDoubleClick={this.chgWidth100}>
                <tr>
                    <td style={{ border: 'solid black 2px' }}>table</td>
                    <td style={{ border: 'solid black 2px' }}>table</td>
                    <td style={{ border: 'solid black 2px' }}>table</td>
                </tr>
                <tr>
                    <td style={{ border: 'solid black 2px' }}>table</td>
                    <td style={{ border: 'solid black 2px' }}>table</td>
                    <td style={{ border: 'solid black 2px' }}>table</td>
                </tr>
            </table>
        </div>);
    }
}