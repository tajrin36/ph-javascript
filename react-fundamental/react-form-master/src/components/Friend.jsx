import { useContext } from "react";
import { AssetsContext } from "./Grandpa";

const Friend = () => {
    const gift = useContext(AssetsContext)
    return (
        <div className="border m-3 p-3 rounded-xl">
            <h2>friend</h2>
            <p>has: {gift}</p>
        </div>
    );
};

export default Friend;