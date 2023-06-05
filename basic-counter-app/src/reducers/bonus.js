import { INCREMENTBYAMOUNT,INCREMENTBONUS } from "../actions"
function bonusReducer(state={points:0},action){
    switch(action.type){
        case INCREMENTBONUS:
            return {points:state.points + 1}
        case INCREMENTBYAMOUNT:
            if(action.payload>=100)
            return {points:state.points + 1}
        default:
            return state
    }
}
export default bonusReducer;