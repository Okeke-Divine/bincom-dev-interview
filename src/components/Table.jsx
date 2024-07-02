import { useEffect } from "react"

const Table = ({ items }) => {

    return (
        <>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead className="bg-[#F0F4FE]">
                        <tr>
                            <th>
                                <label className="flex items-center gap-2">
                                    <input type="checkbox" className="checkbox checkbox-sm" />
                                    S/N
                                </label>
                            </th>
                            <th>Image</th>
                            <th>SKU</th>
                            <th>Name</th>
                            <th>Title</th>
                            <th>Description</th>
                            <th>Brand</th>
                            <th>Cost Price</th>
                            <th>Quantity</th>
                            <th>Size</th>
                        </tr>
                    </thead>
                    <tbody className="bg-white mt-10 rounded-md">
                        {/* display the items */}
                        {items.map((item, index) => (
                            <tr key={index}>
                                <th>
                                    <label className="flex items-center gap-2">
                                        <input type="checkbox" className="checkbox checkbox-sm" />
                                        {index + 1}.
                                    </label>
                                </th>
                                <th>
                                    <div className="avatar">
                                        <div className="mask mask-squircle h-12 w-12">
                                            <img
                                                src={item.Image_1}
                                                alt="Item image" />
                                        </div>
                                    </div>
                                </th>
                                <th>{item.SKU}</th>
                                <th>{item.Name}</th>
                                <th>{item.Title}</th>
                                <th>{item.Description}</th>
                                <th>{item.Brand}</th>
                                <th>{item["Cost Price"]}</th>
                                <th>{item.Quantity}</th>
                                <th>{item.size}</th>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default Table