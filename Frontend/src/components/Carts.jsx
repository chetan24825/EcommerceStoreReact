
function Carts({ items }) {
    return (
        <>
            <div className="mt-4 my-3 p-3">
                <div className="card bg-base-100 w-90 shadow-xl hover:scale-105 duration-300 dark:bg-slate-900 dark:text-white dark:border">
                    <figure>
                        <img
                            src={items.image}
                            alt="Shoes" />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">
                            {items.name}
                            <div className="badge badge-secondary">{items.category}</div>
                        </h2>
                        <p>{items.title}</p>
                        <div className="card-actions justify-between">
                            <div className="badge badge-outline">{items.price}</div>
                            <div className="cursor-pointer rounded-full border-[2px] hover:bg-pink-500 hover:text-white duration-200 py-1 px-2">Buy Now</div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Carts
