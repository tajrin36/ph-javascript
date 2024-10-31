import { useContext } from "react";
import Cousin from "./Cousin";
import { MoneyContext } from "./Grandpa";

const Aunty = () => {
    const [money,setMoney] = useContext(MoneyContext);
    return (
        <div className="border m-3 p-3 rounded-xl">
            <h2 className="text-red-600 text-2xl font-semibold">aunty</h2>
            <section className="flex">
                <Cousin name={'zinat'}></Cousin>
                <Cousin name={'siaft'}></Cousin>
            </section>
            <p>money: {money}</p>
            <button onClick={()=>  setMoney(money+1000)} className="btn">add 1000tk</button>
        </div>
    );
};

export default Aunty;