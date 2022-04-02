import './App.css';
import { useEffect, useState } from 'react';
import { checkDivisibleNumber } from './divisible';
import { loadingComponent } from './loading';
import { checkPower } from './power'

function App() {

  const [validation, setValidation] = useState({ fields: {}, errors: {} })
  const [userAnswerTable, setUserAnswerTable] = useState([[],[]])
  const [loading, setLoading] = useState(false)
  const [divisible, setDivisible] = useState()
  const [value, setValue] = useState()
  const [power, setPower] = useState()

  const tableValue = [2, 3, 4, 5, 10, 20, 50]

  const handleValidation = () => {
    let fields = validation.fields;
    let errors = {};
    let formIsValid = true;

    if (typeof value !== "undefined") {
      if (value > 1000000) {
        formIsValid = false;
        errors["value"] = "Zbyt duża liczba!";
      }
      if (value < 0) {
        formIsValid = false;
        errors["value"] = "Tylko liczby większe od zera!";
      }
    }
    if (typeof divisible !== "undefined") {
      if (divisible > 2000) {
        formIsValid = false;
        errors["divisible"] = "Zbyt duża liczba!";
      }
      if (divisible < 0) {
        formIsValid = false;
        errors["divisible"] = "Tylko liczby większe od zera!";
      }
    }
    if (typeof power !== "undefined") {
      if (power > 500) {
        formIsValid = false;
        errors["power"] = "Zbyt duża liczba!";
      }
      if (power < 0) {
        formIsValid = false;
        errors["power"] = "Tylko liczby większe od zera!";
      }
    }

    setValidation({ fields: fields, errors: errors });
    return formIsValid;
  }

  const handleChangeValue = (field, e) => {
    if (e.key === 'Enter' && handleValidation()) {
      let fields = validation.fields;
      let errors = {};
      fields[field] = e.target.value;
      setValidation({ fields: fields, errors: errors });
      setLoading(true);
      setUserAnswerTable([])
      setUserAnswerTable([checkDivisibleNumber(e.target.value, validation.fields.divisible), checkPower(e.target.value, validation.fields.power)])
      e.target.value = '';

    }
  }

  const handleChangeVariable = (field, e) => {
    if (e.key === 'Enter' && handleValidation() === true) {
      let fields = validation.fields;
      let errors = {};
      fields[field] = e.target.value;
      e.target.value = ''
      setValidation({ fields: fields, errors: errors })
    }
  }

  const handleChangeButton = (e, field) => {
    let fields = validation.fields;
    let errors = validation.errors;
    fields[field] = e;
    setValidation({ fields: fields, errors: errors })
  }

  useEffect(() => (
    setLoading(false)
  ), [userAnswerTable])

  return (
    <div className="App">
      <div className='header'>
        <div className='chosen-numbers'>
          <div><p className='chosen-number'>Twoja ostatnio wpisana liczba: </p><p style={{ fontWeight: 700 }}>{validation.fields.value}</p></div>
          <div><p className='chosen-number'>Twój dzielnik: </p><p style={{ fontWeight: 700 }}>{validation.fields.divisible}</p></div>
          <div><p className='chosen-number'>Twoja potęga: </p><p style={{ fontWeight: 700 }}>{validation.fields.power}</p></div>
        </div>
        <div className='value'>
          <h1 className='title'>Wpisz liczbę od 0 do 1 000 000!</h1>
          <div className='input-value-div'>
            <input
              name='value'
              className='input-value'
              type='number'
              placeholder="Wpisz liczbę i naciśnij Enter!"
              onKeyPress={handleChangeValue.bind(this, "value")}
              onChange={(e) => setValue(e.target.value)}
            />
            <p style={{ color: "red" }}>{validation.errors["value"]}</p>
          </div>
        </div>
        <div className='function'>
          <p>Wybierz dzielnik od 0 do 2 000</p>
          <div className='divisible'>
            {tableValue.map((val, index) => (
              <div key={index} className='function-button' onClick={() => handleChangeButton(val, "divisible")}>{val}</div>
            ))}
            <div className='input-function-div'>
              <input
                name='divisible'
                className='function-input'
                type='number'
                placeholder="Wpisz swój dzielnik i wciśnij Enter!"
                onChange={(e) => setDivisible(e.target.value)}
                onKeyPress={handleChangeVariable.bind(this, "divisible")}
              />
              <p style={{ color: "red" }}>{validation.errors["divisible"]}</p>
            </div>
          </div>
          <p>Wybierz potęge od 0 do 500</p>
          <div className='power'>
            {tableValue.map((val, index) => (
              <div key={index} className='function-button' onClick={() => handleChangeButton(val, "power")}>{val}</div>
            ))}
            <div className='input-function-div'>
              <input
                name='power'
                className='function-input'
                type='number'
                placeholder="Wpisz swoją potęge i wciśnij Enter!"
                onChange={(e) => setPower(e.target.value)}
                onKeyPress={handleChangeVariable.bind(this, "power")}
              />
              <p style={{ color: "red" }}>{validation.errors["power"]}</p>
            </div>
          </div>
        </div>
      </div>
      {/* {userAnswerTable.map((value, index) => (
        <div className='user_answer' key={index}>
        {loadingComponent(loading, value)}
      </div>
      ))} */}
      <div className='user_answer'>
        {loadingComponent(loading, userAnswerTable[0])}
      </div>
      <div className='user_answer'>
        {loadingComponent(loading, userAnswerTable[1])}
      </div>
    </div>
  );
}

export default App;
