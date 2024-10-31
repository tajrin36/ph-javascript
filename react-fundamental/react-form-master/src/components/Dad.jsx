import Brother from "./Brother";
import Myself from "./Myself";
import Sister from "./Sister";

const Dad = ({assets}) => {
    return (
        <div className="border m-3 p-3 rounded-xl">
            <h2 className="text-red-600 text-2xl font-semibold">dad</h2>
            <section className="flex">
                <Myself assets={assets}></Myself>
                <Brother></Brother>
                <Sister></Sister>
            </section>
        </div>
    );
};

export default Dad;