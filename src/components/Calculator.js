import { useState } from 'react';
import PropTypes from 'prop-types';
import calculate from '../logic/calculate';
import '../styles/Calc.css';

const Calculator = () => {
  const [info, initInfo] = useState({ total: '', next: '', operation: '' });
  return (
    <div className="calculator-wrapper">
      <div className="left-panel">
        <h1 className="try">Lets do some Math!</h1>
      </div>
      <div className="right-panel">
        <Entry data={info} />
        <AllClearButton name="AC" data={info} initInfo={initInfo} />
        <AddRemoveButton name="+/-" data={info} initInfo={initInfo} />
        <RemainderButton name="%" data={info} initInfo={initInfo} />
        <SplitButton name="÷" data={info} initInfo={initInfo} />
        <SevenButton name="7" data={info} initInfo={initInfo} />
        <EightButton name="8" data={info} initInfo={initInfo} />
        <NineButton name="9" data={info} initInfo={initInfo} />
        <ProductButton name="x" data={info} initInfo={initInfo} />
        <FourButton name="4" data={info} initInfo={initInfo} />
        <FiveButton name="5" data={info} initInfo={initInfo} />
        <SixButton name="6" data={info} initInfo={initInfo} />
        <RemoveButton name="-" data={info} initInfo={initInfo} />
        <OneButton name="1" data={info} initInfo={initInfo} />
        <TwoButton name="2" data={info} initInfo={initInfo} />
        <ThreeButton name="3" data={info} initInfo={initInfo} />
        <PlusButton name="+" data={info} initInfo={initInfo} />
        <NonumButton name="0" data={info} initInfo={initInfo} />
        <PeriodButton name="." data={info} initInfo={initInfo} />
        <SameButton name="=" data={info} initInfo={initInfo} />
        {info.total === "Can't divide by 0." || info.next === "Can't divide by 0." ? (
          <div className="error-message">Error: Division by zero is not allowed.</div>
        ) : null}
      </div>
    </div>
  );
};
const Entry = ({ data }) => (<div className="input-box"><input className="input" type="number" placeholder="0" value={data.next || data.total || ''} readOnly /></div>);

const OneButton = ({ name, data, initInfo }) => (<button className="button number-button" type="button" onClick={() => initInfo(calculate(data, name))}>1</button>);
const TwoButton = ({ name, data, initInfo }) => (<button className="button number-button" type="button" onClick={() => initInfo(calculate(data, name))}>2</button>);
const ThreeButton = ({ name, data, initInfo }) => (<button className="button number-button" type="button" onClick={() => initInfo(calculate(data, name))}>3</button>);
const FourButton = ({ name, data, initInfo }) => (<button className="button number-button" type="button" onClick={() => initInfo(calculate(data, name))}>4</button>);
const FiveButton = ({ name, data, initInfo }) => (<button className="button number-button" type="button" onClick={() => initInfo(calculate(data, name))}>5</button>);
const SixButton = ({ name, data, initInfo }) => (<button className="button number-button" type="button" onClick={() => initInfo(calculate(data, name))}>6</button>);
const SevenButton = ({ name, data, initInfo }) => (<button className="button number-button" type="button" onClick={() => initInfo(calculate(data, name))}>7</button>);
const EightButton = ({ name, data, initInfo }) => (<button className="button number-button" type="button" onClick={() => initInfo(calculate(data, name))}>8</button>);
const NineButton = ({ name, data, initInfo }) => (<button className="button number-button" type="button" onClick={() => initInfo(calculate(data, name))}>9</button>);
const NonumButton = ({ name, data, initInfo }) => (<button className="button nonum" type="button" onClick={() => initInfo(calculate(data, name))}>0</button>);
const PeriodButton = ({ name, data, initInfo }) => (<button className="button period" type="button" onClick={() => initInfo(calculate(data, name))}>.</button>);

const PlusButton = ({ name, data, initInfo }) => (<button className="button plus" type="button" onClick={() => initInfo(calculate(data, name))}>+</button>);
const RemoveButton = ({ name, data, initInfo }) => (<button className="button remove" type="button" onClick={() => initInfo(calculate(data, name))}>-</button>);
const ProductButton = ({ name, data, initInfo }) => (<button className="button product" type="button" onClick={() => initInfo(calculate(data, name))}>x</button>);
const SplitButton = ({ name, data, initInfo }) => (<button className="button split" type="button" onClick={() => initInfo(calculate(data, name))}>÷</button>);

const RemainderButton = ({ name, data, initInfo }) => (<button className="button remainder-button" type="button" onClick={() => initInfo(calculate(data, name))}>%</button>);
const AddRemoveButton = ({ name, data, initInfo }) => (<button className="button add-remove-button" type="button" onClick={() => initInfo(calculate(data, name))}>+/-</button>);
const AllClearButton = ({ name, data, initInfo }) => (<button className="button all-clear" type="button" onClick={() => initInfo(calculate(data, name))}>AC</button>);
const SameButton = ({ name, data, initInfo }) => (<button className="button same" type="button" onClick={() => initInfo(calculate(data, name))}>=</button>);

Entry.propTypes = {
  data: PropTypes.shape({
    total: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    next: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    operation: PropTypes.string,
  }).isRequired,
};
AllClearButton.propTypes = {
  name: PropTypes.string.isRequired,
  data: PropTypes.shape({
    total: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    next: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    operation: PropTypes.string,
  }).isRequired,
  initInfo: PropTypes.func.isRequired,
};
AddRemoveButton.propTypes = {
  name: PropTypes.string.isRequired,
  data: PropTypes.shape({
    total: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    next: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    operation: PropTypes.string,
  }).isRequired,
  initInfo: PropTypes.func.isRequired,
};
RemainderButton.propTypes = {
  name: PropTypes.string.isRequired,
  data: PropTypes.shape({
    total: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    next: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    operation: PropTypes.string,
  }).isRequired,
  initInfo: PropTypes.func.isRequired,
};
SplitButton.propTypes = {
  name: PropTypes.string.isRequired,
  data: PropTypes.shape({
    total: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    next: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    operation: PropTypes.string,
  }).isRequired,
  initInfo: PropTypes.func.isRequired,
};
SevenButton.propTypes = {
  name: PropTypes.string.isRequired,
  data: PropTypes.shape({
    total: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    next: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    operation: PropTypes.string,
  }).isRequired,
  initInfo: PropTypes.func.isRequired,
};
EightButton.propTypes = {
  name: PropTypes.string.isRequired,
  data: PropTypes.shape({
    total: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    next: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    operation: PropTypes.string,
  }).isRequired,
  initInfo: PropTypes.func.isRequired,
};
NineButton.propTypes = {
  name: PropTypes.string.isRequired,
  data: PropTypes.shape({
    total: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    next: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    operation: PropTypes.string,
  }).isRequired,
  initInfo: PropTypes.func.isRequired,
};
ProductButton.propTypes = {
  name: PropTypes.string.isRequired,
  data: PropTypes.shape({
    total: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    next: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    operation: PropTypes.string,
  }).isRequired,
  initInfo: PropTypes.func.isRequired,
};
FourButton.propTypes = {
  name: PropTypes.string.isRequired,
  data: PropTypes.shape({
    total: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    next: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    operation: PropTypes.string,
  }).isRequired,
  initInfo: PropTypes.func.isRequired,
};
FiveButton.propTypes = {
  name: PropTypes.string.isRequired,
  data: PropTypes.shape({
    total: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    next: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    operation: PropTypes.string,
  }).isRequired,
  initInfo: PropTypes.func.isRequired,
};
SixButton.propTypes = {
  name: PropTypes.string.isRequired,
  data: PropTypes.shape({
    total: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    next: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    operation: PropTypes.string,
  }).isRequired,
  initInfo: PropTypes.func.isRequired,
};
RemoveButton.propTypes = {
  name: PropTypes.string.isRequired,
  data: PropTypes.shape({
    total: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    next: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    operation: PropTypes.string,
  }).isRequired,
  initInfo: PropTypes.func.isRequired,
};
OneButton.propTypes = {
  name: PropTypes.string.isRequired,
  data: PropTypes.shape({
    total: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    next: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    operation: PropTypes.string,
  }).isRequired,
  initInfo: PropTypes.func.isRequired,
};
TwoButton.propTypes = {
  name: PropTypes.string.isRequired,
  data: PropTypes.shape({
    total: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    next: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    operation: PropTypes.string,
  }).isRequired,
  initInfo: PropTypes.func.isRequired,
};
ThreeButton.propTypes = {
  name: PropTypes.string.isRequired,
  data: PropTypes.shape({
    total: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    next: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    operation: PropTypes.string,
  }).isRequired,
  initInfo: PropTypes.func.isRequired,
};
PlusButton.propTypes = {
  name: PropTypes.string.isRequired,
  data: PropTypes.shape({
    total: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    next: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    operation: PropTypes.string,
  }).isRequired,
  initInfo: PropTypes.func.isRequired,
};
NonumButton.propTypes = {
  name: PropTypes.string.isRequired,
  data: PropTypes.shape({
    total: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    next: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    operation: PropTypes.string,
  }).isRequired,
  initInfo: PropTypes.func.isRequired,
};
PeriodButton.propTypes = {
  name: PropTypes.string.isRequired,
  data: PropTypes.shape({
    total: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    next: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    operation: PropTypes.string,
  }).isRequired,
  initInfo: PropTypes.func.isRequired,
};
SameButton.propTypes = {
  name: PropTypes.string.isRequired,
  data: PropTypes.shape({
    total: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    next: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    operation: PropTypes.string,
  }).isRequired,
  initInfo: PropTypes.func.isRequired,
};

export default Calculator;
