import { useSelector, useDispatch } from "react-redux"
import { buyCake } from "../redux"

const CakeHook = () => {
    const numOfCakes = useSelector(state => state.cake.numOfCakes)
    const dispatch = useDispatch()
    return (
        <div>
            <h2>{ numOfCakes >= 0 ? `Number of Cakes -  ${numOfCakes}` : 'Cake has finished'}</h2>
            <button onClick={()=>dispatch(buyCake())}>Buy Cake</button>
        </div>
    )
}

export default CakeHook