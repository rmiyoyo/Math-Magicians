const MathApp = () => {
  const Input = () => (<div className="enter-widget"><input className="input" type="number" placeholder="0" /></div>);
  const Buttons = () => (
    <>
      <div className="Maths-Widgets"><button className="AC-btn" type="button">AC</button></div>
      <div className="arithmetic-device-container"><button className="arithmetic-device" type="button">+/-</button></div>
      <div className="rate-widget"><button className="rate-button" type="button">%</button></div>
      <div className="manipulate-button"><button className="quotient" type="button">÷</button></div>
      <div className="figure-button"><button className="figure-button" type="button">7</button></div>
      <div className="figure-button"><button className="figure-button" type="button">8</button></div>
      <div className="figure-button"><button className="figure-button" type="button">9</button></div>
      <div className="manipulate-button"><button className="multiplication" type="button">x</button></div>
      <div className="figure-button"><button className="figure-button" type="button">4</button></div>
      <div className="figure-button"><button className="figure-button" type="button">5</button></div>
      <div className="figure-button"><button className="figure-button" type="button">6</button></div>
      <div className="manipulate-button"><button className="minus-class" type="button">-</button></div>
      <div className="figure-button"><button className="figure-button" type="button">1</button></div>
      <div className="figure-button"><button className="figure-button" type="button">2</button></div>
      <div className="figure-button"><button className="figure-button" type="button">3</button></div>
      <div className="manipulate-button"><button className="plus-class" type="button">+</button></div>
      <div className="figure-button zero-class"><button className="zero-class" type="button">0</button></div>
      <div className="period-widget"><button className="dot" type="button">.</button></div>
      <div className="manipulate-button"><button className="equal" type="button">=</button></div>
    </>
  );

  return (
    <div className="wrapper">
      <Input />
      <Buttons />
    </div>
  );
};
export default MathApp;
