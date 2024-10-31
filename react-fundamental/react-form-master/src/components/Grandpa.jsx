import { createContext, useState } from "react";
import Aunty from "./Aunty";
import Dad from "./Dad";
import Uncle from "./Uncle";

export const AssetsContext = createContext('gold');
export const MoneyContext = createContext(1000);

const Grandpa = () => {
    const [money,setMoney] = useState(1000);
    const assets = 'diamond';
    return (
        <div className=" border m-3 p-3 rounded-xl ">
            <h2 className="text-purple-600 text-3xl font-semibold">Grandpa</h2>
            <MoneyContext.Provider value={[money,setMoney]}>
                <AssetsContext.Provider value="gold">
                    <section className="flex justify-around">
                        <Dad assets={assets}></Dad>
                        <Uncle assets={assets}></Uncle>
                        <Aunty></Aunty>
                    </section>
                </AssetsContext.Provider>
            </MoneyContext.Provider>
        </div>
    );
};

export default Grandpa;