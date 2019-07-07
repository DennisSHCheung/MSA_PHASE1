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
  headerTextColor:string
  dropTextColor:string
}

class App extends React.Component<{},IState> {

  public constructor(props:any){
      super(props)
      this.state = {
        backgroundColor:"#202125",
        bodyColor:"#323639",
        dropTextColor:"#eeeeee",
        filelength:0,
        headerTextColor:"#eeeeee",        
        result:"",        
      }
  }

  public resultstate = (resultString:string,filelen:any) => {
      this.setState({result:resultString,filelength:filelen})
  }

  public onClickRandom = () => {

    let randomColor = '#'+Math.floor(Math.random()*16777215).toString(16);
    this.setState({backgroundColor:randomColor});

    const headerText = this.hexComplement(randomColor);
    this.setState({headerTextColor:headerText});    

    randomColor = '#'+Math.floor(Math.random()*16777215).toString(16);
    this.setState({bodyColor:randomColor});
    
    const text = this.hexComplement(randomColor);
    this.setState({dropTextColor:text});
    
  }

  public hexComplement = (colour:any) => {
    const r = colour.replace("#", "");
    const s = r.split("");
    let str = s.map((c:any) => {
      return (15 - parseInt(c, 16)).toString(16);
    })
    str = '#' + str.join("");
    return str;
  }

  public render() {
    const style = { backgroundColor: this.state.bodyColor};
    return (
      <div style={style}>
        <Button click={this.onClickRandom}/>
        <Header headerColor={this.state.headerTextColor}/>
        <DropArea setResults={this.resultstate} backgroundColor={this.state.backgroundColor} textColor={this.state.dropTextColor}/>
        <Result result={this.state.result} filelength={this.state.filelength} />
      </div>
    );
  }
}

export default App;
