import { useState } from "react";

export const useCounter = (inititalValue = 100) => {
    const [count, setCount] = useState(inititalValue)

    function inc(){
        setCount(count + 1)
    }

    function dec(){
        setCount(count - 1)
    }

    return [count, inc, dec]
}