import {createStore, combineReducers ,applyMiddleware} from "redux";

const initailState = {
    salary:15000,
    value:[]
}

const salaryReducer=(state=initailState,action) => { // reducer รับค่า Input 2 ตัว state ,action
    switch(action.type){
        case "ADD":
            state={
                //...state, // แสดงค่าใน State ทุกคนทั้งหมด
                //salary:state.salary,
                //value:state.value

                salary:state.salary += action.payload,
                value:[...state.value,action.payload]
            }
        break;
        case "SUBTRACT":
            state={
                //...state, // แสดงค่าใน State ทุกคนทั้งหมด

                salary:state.salary -= action.payload,
                value:[...state.value,action.payload]
            }
        break;
        default:
            break;
    }
    return state;
}

const userReducer = (state={name:"OatChat",age:26} ,action) => {
    switch(action.type){
        case "SetName":
            state={
                ...state, // แสดงค่าใน State ทุกคนทั้งหมด
                name:action.payload
            }
        break;
        case "SetAge":
            state={
                ...state, // แสดงค่าใน State ทุกคนทั้งหมด
                age:action.payload
            }
        break;
        default:
            break;
    }
    return state;
}

const myLogger=(empployeeStore)=>(next)=>(action)=>{
    console.log("Log Action",action);
    next(action);
}
const empployeeStore=createStore(combineReducers({slr:salaryReducer,user:userReducer}),{},applyMiddleware(myLogger)) // Set default State in store

empployeeStore.subscribe(()=>{
    console.log("Update Store:",empployeeStore.getState());
});


export default empployeeStore;