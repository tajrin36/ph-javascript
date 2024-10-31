import Cousin from "./Cousin";

const Uncle = ({assets}) => {
    return (
        <div className="border m-3 p-3 rounded-xl">
            <h2 className="text-red-600 text-2xl font-semibold">uncle</h2>
            <section className="flex">
                <Cousin name={'yasrin'} assets={assets}></Cousin>
                <Cousin name={'jahin'}></Cousin>
            </section>
        </div>
    );
};

export default Uncle;