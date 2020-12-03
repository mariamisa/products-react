import React from 'react';
import ProductRow from './ProductRow';

export default function ProductCategoryRow(
  { categoryName, data,filterText,inStockOnly },
) {
  const filterProducts= data.filter(product=>(filterText
    ? product.name.toLowerCase().includes(filterText.toLowerCase()) : true)
    && (inStockOnly ? product.stocked === true : true))
  return (
    <>
      <tr>
        <th colSpan="2">{categoryName}</th>
      </tr>
      {filterProducts.map((product, index) => (
        <tr key={index.toString()}>
          <ProductRow 
          details={product}
            />
        </tr>
      )) }
    </>
  );
}
