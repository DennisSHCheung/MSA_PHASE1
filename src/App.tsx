import * as React from 'react';
import DropArea from './Components/DropArea/DropArea';
import Button from './Components/Header/Button';
import Header from './Components/Header/Header';
import Result from './Components/Result/Result';


interface IState {
  result:string
  filelength:number
  backgroundColor:string
  bodyColor:string
}

class App extends React.Component<{},IState> {

  public constructor(props:any){
      super(props)
      this.state = {
        backgroundColor:"#202125",
        bodyColor:"#323639",
        filelength:0,        
        result:"",        
      }
  }

  public resultstate = (resultString:string,filelen:any) => {
      this.setState({result:resultString,filelength:filelen})
  }

  public onClickRandom = () => {
    let randomColor = '#'+Math.floor(Math.random()*16777215).toString(16);
    this.setState({backgroundColor:randomColor});
    randomColor = '#'+Math.floor(Math.random()*16777215).toString(16)
    this.setState({bodyColor:randomColor});
  }

  public render() {
    const style = { backgroundColor: this.state.bodyColor};
    return (
      <div style={style}>
        <Button click={this.onClickRandom}/>
        <Header />
        <DropArea setResults={this.resultstate} backgroundColor={this.state.backgroundColor}/>
        <Result result={this.state.result} filelength={this.state.filelength} />
      </div>
    );
  }
}

export default App;
