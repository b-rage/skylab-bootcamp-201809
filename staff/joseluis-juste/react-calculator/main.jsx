function Button(props){
     return <button onClick={() => props.WhenOperationClicked(props.operation)}>{props.operation}</button>
}

class Calculator extends React.Component {

    
    constructor() {
        super();
        this.state = {op1:0, op2:0, result:0};
    }

    operation = (operation) => {

        switch(operation){

            case "+":
                //let result = parseFloat(this.state.op1) + parseFloat(this.state.op2);
                this.setState({result:parseFloat(this.state.op1) + parseFloat(this.state.op2)});
            break;
            case "-":
                //let result = parseFloat(this.state.op1) - parseFloat(this.state.op2);
                this.setState({result:parseFloat(this.state.op1) - parseFloat(this.state.op2)});
            break;
            case "x":
                //let result = parseFloat(this.state.op1) * parseFloat(this.state.op2);
                this.setState({result: parseFloat(this.state.op1) * parseFloat(this.state.op2)});
            break;
            case "/":
                //let result = parseFloat(this.state.op1) / parseFloat(this.state.op2);
                this.setState({result:parseFloat(this.state.op1) / parseFloat(this.state.op2)});
            break;


        }
    }
   
    render = () => {

      return  <div>
            <input type="number" onChange = { (ev) => this.setState({op1:ev.target.value})}/>
            <Button WhenOperationClicked = {this.operation} operation="+"></Button>
            <Button WhenOperationClicked = {this.operation} operation="-"></Button>
            <Button WhenOperationClicked = {this.operation} operation="x"></Button>
            <Button WhenOperationClicked = {this.operation} operation="/"></Button>
            <input type="number" onChange = { (ev) => this.setState({op2:ev.target.value})}/>
            <input type="result" disabled value = {this.state.result}/>
        </div>;
    }
}



class App extends React.Component {

    constructor() {
        super();
    }

    render = () => {
        
        return <Calculator/>
        

    }

}

ReactDOM.render(<App />, document.getElementById("wrap"));