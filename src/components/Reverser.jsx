import Button from "./Button"
import {useState} from 'react';
import reverser from "../utils/reverser";

const Reverser = () => {

    const [typed, setTyped] = useState('');
    const [reverseString, setReverseString] = useState('');

    const reverseTyped = () => {
        setReverseString(reverser(typed));
    }

    return <> 
        <p>
            <label htmlFor="string">String</label>
            <input type="text" 
                value={typed} 
                onChange={e => setTyped(e.target.value)} 
            />
        </p>
        {reverseString && <p>Reversed: {reverseString}</p>}
        <Button onClick={reverseTyped}>Reverse!</Button> 
    </>   
}

export default Reverser;