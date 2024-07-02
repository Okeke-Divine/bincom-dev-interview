Implement a UI design and integrate it with an API using API Context state management.

1. UI Implementation

   - Use the provided Figma design: (https://www.figma.com/design/5YoDO1EKuVGMJK77g2CY43/Blutech-solution?node-id=425-359&t=fCesi5WRWJUPge5L-0).

2. API Integration
   - Use the API endpoint provided in the documentation: (http://3.88.1.181:8000/docs). render the data to the data table base on how it is fethed from the endpoint

- endpoint: http://3.88.1.181:8000/products/public/catalog
  - Manage state using API Context.

3. Submission
   - Create a public repository and push your code.
   - Include a README with setup instructions and relevant details, and send the public repo link of your assessment to

Deadline

- Submit on or before Tuesay, July 2nd, 2024 - 11pm.

[
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
]


i was asked to "Manage state using API Context"

how do i go about this

and what does this mean
"ilter using Patameter Example:

search : EAU SAUVAGE by Christian Dior
Quantity_gt : 2
Cost Price_lt : 20
Cost Price_gte: MAP
Append the operator after the key. Accepted Values:

["_eq","_lte","_lt","_gte","_gt"]"