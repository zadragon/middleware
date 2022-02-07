const INCREASE2 = 'INCREASE2';
const DECREASE2 = 'DECREASE2';

export const increase2 = () => ({type: INCREASE2});
export const decrease2 = () => ({type: DECREASE2});

const initialState = 0;

export default function counter2(state = initialState, action) {
    switch (action.type) {
        case INCREASE2 :
            return state + 1;
        case DECREASE2 :
            return state - 1;
        default :
            return state;
    }
}