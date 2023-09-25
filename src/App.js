import './App.css';
import MathApp from './components/Calculator';
import ShowQuotes from './components/ShowQuotes';

function Calc() {
  return (
    <div className="Calc">
      <h1>Math Magicians App</h1>
      <MathApp />
      <ShowQuotes />
    </div>
  );
}

export default Calc;
