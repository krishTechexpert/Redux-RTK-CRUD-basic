export const INCREMENT='account/increment';
export const DECREMENT='account/decrement';
export const INCREMENTBYAMOUNT='account/incrementByAmount';
export const INCREMENTBONUS='bonus/increment';

// Api handling with dispatch
 
export const GETUSERSUCCESS='account/getUserSuccess';
export const GETUSERFAILED = 'account/getUserFailed';
export const GETUSERPENDING = 'account/getUserPending';


//action creators

export function incrementFN(){
    return { type:INCREMENT}
}
export function decrementFN(){
    return { type:DECREMENT}
}
export function incrementByAmountFN(val){
    return { type:INCREMENTBYAMOUNT,payload:val}
}

export function incrementBonusFN(){
    return {type:INCREMENTBONUS}
}

export function getUserSuccessFN(val){
    return {type:GETUSERSUCCESS,payload:val}
}

export function getUserRejectedFN(err){
    return {type:GETUSERFAILED,error:err}
}

export function getUserPendingFN(){
    return {type:GETUSERPENDING}
}
