import React, {useState} from 'react'

export default function Convert() {

    //let valueInput="";

    const getInitialState = (param) => {
        const value = param;
        return value;
      };
    const getInitialStateUnits = () => {
        const value = "km";
        return value;
      };

    const [selectorValue, setOption] = useState(getInitialState(0));

    const selectorChange = (event) => {
            setOption(event.target.value);
            setValueInput("");
            setCalculated("");
            setUnits(event.target.value[0].toLowerCase()+event.target.value[1].toLowerCase());
            setUnitsResults(event.target.value[3].toLowerCase()+event.target.value[4].toLowerCase());
    }

    const regExpNumbers =/^[0-9.]+$/;
    const [calculated, setCalculated] = useState();
    const [valueInput, setValueInput] = useState();
    const [units, setUnits] = useState(getInitialState("km"));
    const [unitsResult, setUnitsResults] = useState(getInitialState("ml"));

    const calculateConversion = (event) => {
        //setText(event.target.value);
        if(event.target.value.match(regExpNumbers) || event.target.value== ""){
            
            setValueInput(event.target.value);
            
            switch(selectorValue) {
                case 'KM-ML':
                    setCalculated((event.target.value*0.621371).toFixed(2));
                    break;
                case 'ML-KM':
                    setCalculated((event.target.value*1.60934).toFixed(2));
                    break;
                case 'FT-MT':
                    setCalculated((event.target.value*0.3048).toFixed(2));
                    break;
                case 'MT-FT':
                    setCalculated((event.target.value*3.28084).toFixed(2));
                    break;
                case 'CM-IN':
                    setCalculated((event.target.value*0.3937008).toFixed(2));
                    break;
                case 'IN-CM':
                    setCalculated((event.target.value*2.54000008128).toFixed(2));
                    break;
                default:
                    setCalculated(event.target.value);
                    return;
              }
        }
    }

    const reverseConversion = (event) => {
        let aux = valueInput;
        let newOption = selectorValue[3]+selectorValue[4]+"-"+selectorValue[0]+selectorValue[1]
        setOption(newOption);
        setValueInput(calculated);
        setCalculated(aux);
        setUnits(selectorValue[0].toLowerCase()+selectorValue[1].toLowerCase());
        setUnitsResults(selectorValue[3].toLowerCase()+selectorValue[4].toLowerCase());
    }

  return (
    <div className='convert'>
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
    <div className='box'>
        <p className="tittle grid-item">convert</p>
            <select className="grid-item large" id="selector" value={selectorValue} onChange={selectorChange}>
            <option value="KM-ML">Kilómetros a Millas</option>
            <option value="ML-KM">Millas a Kilómetros</option>
            <option value="MT-FT">Metros a Pies</option>
            <option value="FT-MT">Pies a Metros</option>
            <option value="CM-IN">Centimetros a Pulgadas</option>
            <option value="IN-CM">Pulgadas a Centimetros</option>
        </select>
        <span class="material-symbols-outlined fakeButton grid-item" onClick={reverseConversion}>sync_alt</span>
        <input className="grid-item large text-right" value={valueInput} onChange={calculateConversion}></input>
        <p className="grid-item units" value={units}>{units}</p>   
        <span class="material-symbols-outlined fakeButton grid-item" /*onClick={saveConversion}*/>favorite</span>
        <p className="grid-item result text-right" >{calculated || 0 }</p>
        <p className="grid-item units" >{unitsResult}</p>

    </div>
    </div>
  )
}
