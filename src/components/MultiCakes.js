import { useSelector, useDispatch } from "react-redux"
import { useState } from "react"
import { buyCake } from "../redux"

const MultiCakes = () => {
    const [ number, setNumber ] = useState(1)
    const numOfCakes = useSelector(state => state.cake.numOfCakes)
    const dispatch = useDispatch()
    return (
        <div>
            <h2>{ numOfCakes >= 0 ? `Number of Cakes -  ${numOfCakes}` : 'Cake has finished'}</h2>

            <input type="number" value={number} onChange= {(e)=> setNumber(e.target.value)} />

            <button onClick={()=>dispatch(buyCake(number))}>Buy {number} Cake</button>
        </div>
    )
}

export default MultiCakes