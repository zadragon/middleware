import React from 'react';
import Counter from '../components/Coutner';
import {useSelector, useDispatch} from "react-redux";
// import {increase, decrease} from "../modules/counter";
import {increaseAsync, decreaseAsync} from "../modules/counter";

const CounterContainer = () => {
    const number = useSelector(state => state.counter);
    const dispatch = useDispatch();

    const onIncrease = () => {
        dispatch(increaseAsync())
    }

    const onDecrease = () => {
        dispatch(decreaseAsync());
    }

    return (
        <div>
            <Counter number={number} onIncrease={onIncrease} onDecrease={onDecrease} />
        </div>
    );
};

export default CounterContainer;