import React, {useState} from 'react'

export default function Convert() {

    //let valueInput="";

    const getInitialState = () => {
        const value = "KM-ML";
        return value;
      };
    const [selectorValue, setOption] = useState(getInitialState());
    const selectorChange = (event) => {
            setOption(event.target.value);
            setValueInput("");
            setCalculated("");
    }

    const regExpNumbers =/^[0-9]+$/;
    const [calculated, setCalculated] = useState();
    const [valueInput, setValueInput] = useState();

    const calculateConversion = (event) => {
        //setText(event.target.value);
        if(event.target.value.match(regExpNumbers) || event.target.value== ""){
            
            setValueInput(event.target.value);
            
            switch(selectorValue) {
                case 'KM-ML':
                    setCalculated(event.target.value*0.621371);
                    break;
                case 'ML-KM':
                    setCalculated(event.target.value*1.60934);
                    break;
                case 'FT-M':
                    setCalculated(event.target.value*0.3048);
                    break;
                case 'M-FT':
                    setCalculated(event.target.value*3.28084);
                    break;
                case 'CM-IN':
                    setCalculated(event.target.value*0.3937008);
                    break;
                case 'IN-CM':
                    setCalculated(event.target.value*2.54000008128);
                    break;
                default:
                    setCalculated(event.target.value);
                    return;
              }
        }
    }

  return (
    <div className='grid'>
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
    <div className='box'>
        <h1>convert</h1>
        <select id="selector" value={selectorValue} onChange={selectorChange}>
            <option value="KM-ML">Kilómetros a Millas</option>
            <option value="ML-KM">Millas a Kilómetros</option>
            <option value="FT-M">Pies a Metros</option>
            <option value="M-FT">Metros a Pies</option>
            <option value="CM-IN">Centimetros a Pulgadas</option>
            <option value="IN-CM">Pulgadas a Centimetros</option>
        </select>
        <span class="material-symbols-outlined">sync_alt</span>
        <input value={valueInput} onChange={calculateConversion}></input>
        <p>km</p>
        <span class="material-symbols-outlined">favorite</span>
        <p>{calculated}</p>

    </div>
    </div>
  )
}
