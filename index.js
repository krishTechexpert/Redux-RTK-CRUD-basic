import {createStore,applyMiddleware,combineReducers} from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import axios from 'axios';
const TotalAmount={
    amount:1
}

const INCREMENT='account/increment';
const DECREMENT='account/decrement';
const INCREMENTBYAMOUNT='account/incrementByAmount';
const INCREMENTBONUS='bonus/increment';

// Api handling with dispatch

const GETUSERSUCCESS='account/getUserSuccess';
const GETUSERFAILED = 'account/getUserFailed';
const GETUSERPENDING = 'account/getUserPending';


const store= createStore(combineReducers({
    account:accountReducer,
    bonus:bonusReducer
}),applyMiddleware(logger.default,thunk.default));



const history=[];

//action creators

function incrementFN(){
    return { type:INCREMENT}
}
function decrementFN(){
    return { type:DECREMENT}
}
function incrementByAmountFN(val){
    return { type:INCREMENTBYAMOUNT,payload:val}
}

function incrementBonusFN(){
    return {type:INCREMENTBONUS}
}

function getUserSuccessFN(val){
    return {type:GETUSERSUCCESS,payload:val}
}

function getUserRejectedFN(err){
    return {type:GETUSERFAILED,error:err}
}

function getUserPendingFN(){
    return {type:GETUSERPENDING}
}

function accountReducer(state=TotalAmount,action){

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
            return {amount:state.amount - 1}
        case INCREMENTBYAMOUNT:
            return {amount:state.amount + action.payload}
        default:
            return state
    }
}

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

 function getSingleAccount(id){
    return async (dispatch,getState) => {
        try{
            dispatch(getUserPendingFN())
            const {data} = await axios.get(`http://localhost:3000/account/${id}`);
            dispatch(getUserSuccessFN(data.amount))
        }catch(error){
            dispatch(getUserRejectedFN(error.message))
        }
        
    }

}

setTimeout(() => {
    store.dispatch(getSingleAccount(2))
    //store.dispatch(incrementByAmountFN(100))
    //store.dispatch(incrementBonusFN())
},2000)

// store.subscribe(() =>{
//     history.push(store.getState());
//     //console.log(history)
// })

