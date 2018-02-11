const GO_NEXT = 'go next question';
const GO_PREV = 'go privious question';
const SET_ANS = 'set answer';

const iniStateQuestion = {
    curQuestion : 0,
    
}
const iniStateAnswer = {
    answer : {}, 
}

export function currentQuestion(state = iniStateQuestion, action){
    switch (action.type){
        case GO_NEXT:
            return {
                ...state,
                curQuestion : state.curQuestion + 1};
        case GO_PREV:
            return {
                ...state,
                curQuestion : state.curQuestion - 1};
        default:
            return state;

    }
}

export function currentAnswer(state = iniStateAnswer, action){
    console.log("currentAnswer() ",action);
    switch (action.type){
        case SET_ANS:
            return {
                ...state,
                [action.index]:action.answer};
        default:
            return state;
    }
}

export function goNext(){
    return {type: GO_NEXT}
} 

export function goPre(){
    return {type: GO_PREV}
} 

export function setAnswer (payload) {
    console.log("setAnswer() ", payload);
    
    return {
        type: SET_ANS,
        ...payload
    }
}

//action creator
// export function addGUN (){
//     return {type: ADD_GUN}
// }

// export function removeGUN(){
//     return {type: DELETE}
// }