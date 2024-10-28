import PropTypes from 'prop-types';
import { TiTick } from "react-icons/ti";

const PriceOption = ({ priceOption }) => {

    const {
        planName,
        price,
        currency,
        billingCycle,
        features
    } = priceOption;
    return (
        <div className='border border-red-500 p-4 rounded-xl bg-[#ffdfe5] space-y-3'>
            <h1 className='text-3xl font-semibold'>Name: {planName}</h1>
            <h2>
                <span className='text-4xl'>{price}</span>
                <span className='text-2xl'>/mon</span>
            </h2>
            <p className='text-xl font-normal'>Currency: {currency}</p>
            <p className='text-xl font-normal'>Billing Cycle: {billingCycle}</p>
            <div className='text-xl font-normal '>
                {
                    features.map((feature, idx) =>  <li className='list-none flex gap-2' key={idx}> <TiTick />{feature}</li>)
                }
            </div>
            <button className='btn text-lg'>Learn More</button>
        </div>
    );
};

PriceOption.propTypes = {
    priceOption: PropTypes.object.isRequired,
}

export default PriceOption;