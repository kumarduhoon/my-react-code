const Card = ({ props }) => {
    return <>
        <section className="overflow-hidden">
            <div className="mx-auto max-w-5xl px-5 py-24">
                <div className="mx-auto flex flex-wrap items-center lg:w-4/5">
                    <img
                        alt="Nike Air Max 21A"
                        className="h-64 w-full rounded object-cover lg:h-96 lg:w-1/2"
                        src={props.src}
                    />
                    <div className="mt-6 w-full lg:mt-0 lg:w-1/2 lg:pl-10">
                        <h2 className="text-sm font-semibold tracking-widest text-gray-500">{props.brandName}</h2>
                        <h1 className="my-4 text-3xl font-semibold text-black">{props.titleName}</h1>
                        <div className="my-4 flex items-center">
                            <span className="flex items-center space-x-1">
                                <span className="ml-3 inline-block text-xs font-semibold">{props.reviews}</span>
                            </span>
                        </div>
                        <p className="leading-relaxed">
                            {props.decs}
                        </p>
                        <div className="mb-5 mt-6 flex items-center border-b-2 border-gray-100 pb-5">
                            <div className="flex items-center">
                                <span className="mr-3 text-sm font-semibold">{props.shoeColor}</span>
                                <button className="h-6 w-6 rounded-full border-2 border-gray-300 focus:outline-none"></button>
                                <button className="ml-1 h-6 w-6 rounded-full border-2 border-gray-300 bg-gray-700 focus:outline-none"></button>
                                <button className="ml-1 h-6 w-6 rounded-full border-2 border-gray-300 bg-green-200 focus:outline-none"></button>
                            </div>
                            <div className="ml-auto flex items-center">
                                <span className="mr-3 text-sm font-semibold">Size</span>
                                <div className="relative">
                                    <select className="appearance-none rounded border border-gray-300 py-2 pl-3 pr-10 text-sm focus:border-black focus:outline-none focus:ring-2 focus:ring-black">
                                        {props.shoeSize.length > 0 && props.shoeSize.map(function (item, i) {
                                            return (
                                                <option key={i}>{item}</option>)
                                        })}
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className="flex items-center justify-between">
                            <span className="title-font text-xl font-bold text-gray-900">{props.price}</span>
                            <button
                                type="button"
                                className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                            >
                                {props.btntext}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section >
    </>
}
export default Card