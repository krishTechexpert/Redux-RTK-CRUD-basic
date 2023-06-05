import { GETUSERSUCCESS,GETUSERFAILED,GETUSERPENDING,INCREMENT,DECREMENT,INCREMENTBYAMOUNT } from "../actions"

function accountReducer(state={amount:1},action){

    switch(action.type){
        case GETUSERSUCCESS:
            return {amount:state.amount + action.payload,pending:false}
        case GETUSERFAILED:
            return {...state,error:action.error,pending:false} 
        case GETUSERPENDING:
                return {...state,pending:true}
        case INCREMENT:
            return {amount:state.amount + 1}
        case DECREMENT:
            if(state.amount<=0){
                return {amount:0}
            }
            return {amount:state.amount - 1}
        case INCREMENTBYAMOUNT:
            return {amount:state.amount + action.payload}
        default:
            return state
    }
}
export default accountReducer;