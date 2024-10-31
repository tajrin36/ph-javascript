import Special from "./Special";

const Myself = ({assets}) => {
    return (
        <div className="border m-3 p-3 rounded-xl">
            <h2 className="text-pink-500 text-xl font-semibold">myself</h2>
            <section className="flex">
                <Special assets={assets}></Special>
            </section>
        </div>
    );
};

export default Myself;