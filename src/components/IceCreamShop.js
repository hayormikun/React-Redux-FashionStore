import { useSelector, useDispatch } from "react-redux"
import { buyIceCream } from "../redux"

const IceCreamShop = () => {
    const numOfIceCream = useSelector(state => state.iceCream.numOfIceCream)
    const dispatch = useDispatch()

    return (
        <div>
            <h2>{ numOfIceCream >= 0 ? `Number of Ice-cream -  ${numOfIceCream}` : 'Ice-cream has finished'}</h2>
            <button onClick={()=>dispatch(buyIceCream())}>Buy Ice-Cream</button>
        </div>
    )
}

export default IceCreamShop
