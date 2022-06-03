import React,{useState} from "react";

export const FormInput=()=>{
    const [displayError, setDisplay]=useState(false)
    const [inputValue, setValue]=useState('Put text here')
    const [errorMessage,setError]=useState(' ')
    const [disable, setDisable] = useState(false);

    const handleChange=(event:any)=>{
        const message= event.target.value.length;
        setValue(event.target.value);

        if(message<3){
            setError('Too short')
            setDisable(true)
        }
       else if(message>20){
            setError('Too long')
            setDisable(true)

        }

        else{
            setDisable(false)
            setDisplay(false)
            setError('')
        }
        setDisplay(true)
    }

    return <div style={{display:"center", height: 100}}>
        {displayError && <p>{errorMessage}</p>}
        <div>Input field:</div>
        <input  value={inputValue} type="text" onInput={handleChange} /><br/>
        <button disabled={disable} >Accept</button>
    </div>
}