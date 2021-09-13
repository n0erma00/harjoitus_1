import './App.css'
import { useState } from 'react'

function App () {

  const [kg, setKg] = useState(0)
  const [bottles, setBottles] = useState(0)
  const [time, setTime] = useState(0)
  const [gender, setGender] = useState(0)

  function calculate() {

  }

  return (

    <div id="container">
    <form onSubmit={calculate}>
      <h1>Calculating alcohol blood level</h1>
      <div>
        <label>Weight</label>
        <input type='number' step='0.1'></input>
      </div>

      <label for='bottles'>Bottles</label>
      <select id='bottles' name='bottles'>
        <option value='1'>1</option>
        <option value='2'>2</option>
        <option value='3'>3</option>
        <option value='4'>4</option>
        <option value='5'>5</option>
      </select>

      <div>
        <label for='time'>Time</label>
        <select id='time' name='time'>
          <option value='1'>1</option>
          <option value='2'>2</option>
          <option value='3'>3</option>
          <option value='4'>4</option>
        </select>
      </div>

      <div class='radio'>
        <label>Gender</label>
        <div class='form-check form-check-inline'>
          <input
            class='form-check-input'
            type='radio'
            name='inlineRadioOptions'
            id='inlineRadio1'
            value='option1'
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
            value='option2'
          />
          <label class='form-check-label' for='inlineRadio2'>
            Female
          </label>
        </div>
      </div>

      <div>
        <label>Humala:</label>
        <output></output>
      </div>

      <div>
        <button>Calculate</button>
      </div>
    </form>
    </div>
  )
}

export default App
