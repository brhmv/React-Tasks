import { useRef, useState } from 'react';

function Lesson22() {

    let [input, setInput] = useState({})

    let openedPass=useRef(null);
  
    const handleSubmit=(event) => {
        event.preventDefault();
        openedPass.current.type = "text";   
    };


    return (    
        <div className="App">
        
        <form onSubmit={handleSubmit}>
            <input ref={openedPass} onChange={(event) => setInput(event.target.value)} name="passwordInput" type="password"/>
            <button>Open</button>
        </form>

    </div>
  );
}

export default Lesson22;