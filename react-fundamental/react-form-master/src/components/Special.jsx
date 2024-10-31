import { useContext } from "react";
import { AssetsContext } from "./Grandpa";

const Special = ({assets}) => {
    const gift = useContext(AssetsContext);
    return (
        <div className="border m-3 p-3 rounded-xl">
            <h2 className="text-pink-500 text-xl font-semibold">special</h2>
            <p>has:{assets}</p>
            <p>also has: {gift}</p>
        </div>
    );
};

export default Special;