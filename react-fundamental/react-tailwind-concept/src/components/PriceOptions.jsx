import { useEffect, useState } from "react";
import PriceOption from "./PriceOption";

const PriceOptions = () => {

    const [priceOption, setPriceOption] = useState([]);
    useEffect(() => {
        fetch('gym.json')
            .then(response => response.json())
            .then(data => setPriceOption(data))
    }, [])

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-7 gap-4">
            {
                priceOption.map(priceOption => <PriceOption
                    key={priceOption.id}
                    priceOption={priceOption}
                ></PriceOption>)
            }
        </div>
    );
};

export default PriceOptions;