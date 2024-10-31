import { useContext } from "react";
import { MoneyContext } from "./Grandpa";

const Brother = () => {
    const [money] = useContext(MoneyContext);
    return (
        <div className="border m-3 p-3 rounded-xl">
            <h2 className="text-pink-500 text-xl font-semibold">brother</h2>
            <p>grandpa:{money}</p>
        </div>
    );
};

export default Brother;