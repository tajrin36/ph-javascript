import Friend from "./Friend";
import Special from "./Special";

const Cousin = ({name,assets}) => {
    return (
        <div className="border m-3 p-3 rounded-xl">
            <h2 className="text-pink-500 text-xl font-semibold">cousin</h2>
            <p className="text-pink-500 text-xl font-semibold">{name}</p>
            <section className="flex">
                {assets && <Special assets={assets}></Special>}
                {name ===   'siaft' && <Friend></Friend>}
            </section>
        </div>
    );
};

export default Cousin;