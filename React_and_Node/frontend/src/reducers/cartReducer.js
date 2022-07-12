import { CART_ADD_ITEM,CART_REMOVE_ITEM } from "../constants/cartConstant";

export const cartReducer = (state ={carItems:[]},action)=>{
    switch(action.type){
        case CART_ADD_ITEM:
            const item =action.payload

            const existItem = state.carItems.find(x=>x.product==item.product)
            if(existItem){
                return{
                    ...state,
                    carItems:state.carItems.map(x=>x.product===existItem.product?item:x)
                }
            }else{
                return {
                    ...state,
                    carItems:[...state.carItems,item]
                }
            }
        default:
            return state
    }
}