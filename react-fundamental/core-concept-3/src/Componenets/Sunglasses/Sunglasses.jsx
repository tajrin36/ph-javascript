import React from 'react';
import './Sunglasses.css'
import Watch from '../Watch/Watch';
import  { add,multiply,divideTheFirstNumberBySecondNumber as divide } from '../../Utilities/calculate';

const Sunglasses = () => {
    const first = 50;
    const second = 50;
    const sum = add(first,second);
    const multipply = multiply(first,second);
    const divided = divide(first,second);
    console.log(sum);
    return (
        <div>
            <Watch></Watch>
        </div>
    );
};

export default Sunglasses;