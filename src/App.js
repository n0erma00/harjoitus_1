import './App.css'
import { useState } from 'react'

function App () {

  const [kg, setKg] = useState(0)
  const [bottles, setBottles] = useState(1)
  const [time, setTime] = useState(1)
  const [gender, setGender] = useState(0)
  const [bal, setBal] = useState(0)       //bal = blood alcohol level

  function calculate(e) {
    e.preventDefault();
    let litres = bottles * 0.33;
    let grams = litres * 8 * 4.5;
    let burning = kg / 10;
    let gramsLeft = grams - (burning * time);

    let balM = gramsLeft / (kg * 0.7);      //bal male
    let balF = gramsLeft / (kg * 0.6);      //bal female

    let bal = 0;
    
    if (gender === "1") {
      bal = balM;
    } 
    
    if (gender === "2") {
      bal = balF;
    }

    if (bal < 0) {
      bal = 0;
    }

    setBal(bal);
  }

  return (

    <div id="container">
    <form onSubmit={calculate}>
      <h1>Calculating alcohol blood level</h1>
      <div>
        <label>Weight</label>
        <input type='number' step='0.1' onChange={e => setKg(e.target.value)}
              value={kg}></input>
      </div>

      <label for='bottles'>Bottles</label>
      <select id='bottles' name='bottles' onChange={e => setBottles(e.target.value)} value={bottles}>
        <option value='1'>1</option>
        <option value='2'>2</option>
        <option value='3'>3</option>
        <option value='4'>4</option>
        <option value='5'>5</option>
      </select>

      <div>
        <label for='time'>Time (hours)</label>
        <select id='time' name='time' onChange={e => setTime(e.target.value)} value={time}>
          <option value='1'>1</option>
          <option value='2'>2</option>
          <option value='3'>3</option>
          <option value='4'>4</option>
          <option value='5'>5</option>
        </select>
      </div>

      <div class='radio' onChange={e => setGender(e.target.value)} value={gender}>
        <label>Gender</label>
        <div class='form-check form-check-inline'>
          <input
            class='form-check-input'
            type='radio'
            name='inlineRadioOptions'
            id='inlineRadio1'
            value='1'
            
          />
          <label class='form-check-label' for='inlineRadio1'>
            Male
          </label>
        </div>
        <div class='form-check form-check-inline'>
          <input
            class='form-check-input'
            type='radio'
            name='inlineRadioOptions'
            id='inlineRadio2'
            value='2'
            
          />
          <label class='form-check-label' for='inlineRadio2'>
            Female
          </label>
        </div>
      </div>

      <div>
        <label>Blood alcohol level: </label>
        <output>{bal.toFixed(1)}</output>
      </div>

      <div>
        <button>Calculate</button>
      </div>
    </form>
    </div>
  )
}

export default App
