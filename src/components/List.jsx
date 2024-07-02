import { useEffect, useState } from "react"
import Table from "./Table"

const List = () => {

  const [items, setItems] = useState([]);

  useEffect(function () {
    setItems([
      {
        "SKU": 564339,
        "Name": "Obsession by Calvin Klein",
        "Description": "Launched by the design house of Calvin Klein in 1986, Obsession is classified as a refreshing, oriental, woody fragrance.This masculine scent possesses a blend of lavender, mandarin, clove, nutmeg and amber. It is recommended for office wear.",
        "Brand": "Calvin Klein",
        "Title": "Gift Set -- 4.2 oz Eau De Toilette Spray + .67 oz Mini EDT Spray + 3.4 oz After Shave Balm + 3.4 oz Body Wash",
        "Gender": "Men",
        "RETAIL": null,
        "Cost Price": 39.5,
        "Image_1": "https://img.fragrancex.com/images/products/sku/large/ObsCTP.jpg",
        "URL": "https://www.fragrancex.com/products/calvin-klein/obsession-cologne?src=drpshp",
        "Quantity": 19,
        "size": "--",
        "UPC": null,
        "catalog_time": "2024-06-30 08:19:29 EDT",
        "supplier": "FragranceX"
      }
    ])
  }, [])

  return (
    <>
      <div className="text-xl font-bold p-3">Department List</div>
      <div className="mt-3">
        <Table items={items} />
      </div>
    </>
  )
}

export default List