import { useState } from "react"

export const useCounter = () => {
    const [state, setstate] = useState(0);

    const increment = () => {
        setstate(state + 1);
    }

    const decrement = () => {
        if (state >= 1) 
            setstate(state - 1);
    }

    return{
        state,
        increment,
        decrement
    }
}
