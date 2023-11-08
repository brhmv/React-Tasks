import { useState } from 'react';

function Lesson2() {

  let [inputs, setFirstInput] = useState({firstInput:'',secondInput:'', thirdInput:''})
  
  return (
    <div className="App">
        <input onChange={(event) => setFirstInput({...inputs, firstInput:event.target.value})} type="text" />
        <input onChange={(event) => setFirstInput({...inputs, secondInput:event.target.value})} type="text" />
        <input onChange={(event) => setFirstInput({...inputs, thirdInput:event.target.value})} type="text" />
        <p>{inputs.firstInput}</p>
        <p>{inputs.secondInput}</p>
        <p>{inputs.thirdInput}</p>  
    </div>
  );
}

export default Lesson2;