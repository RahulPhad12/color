import './App.css';
import Card from './Components/Card';

function App() {
  return (
    <>
    <div className='container'>
    <Card colorName = "PINK" color_code = "#FF1493" />
    <Card colorName = "GRAY" color_code = "#808080" />
    <Card colorName = "BLACK" color_code = "#000000" />
    <Card colorName = "GREEN" color_code = "#38BB14" />
    <Card colorName = "RED" color_code = "#FF0000" /> <br />
    <Card colorName = "ORANGE" color_code = "#FF8000" />
    <Card colorName = "YELLOW" color_code = "#FFF500" />
    <Card colorName = "BLUE" color_code = "#6698FF" />
    <Card colorName = "PURPLE" color_code = "#550A35" />
    <Card colorName = "BROWN" color_code = "#5C3317" />

    </div>

    </>
  );
}

export default App;