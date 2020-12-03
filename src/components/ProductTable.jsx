import React from 'react';
import ProductCategoryRow from './ProductCategoryRow';
import products from '../products';

function TableHeader() {
  return (
    <thead>
      <tr>
        <th>name</th>
        <th>price</th>
      </tr>
    </thead>
  );
}
export default function ProductTable({ filterText, inStockOnly }) {
  const array = products.map((el) => el.category);
  const category = [...new Set(array)];
  return (
    <div>
      <table>
        <TableHeader />
        <tbody>
          {category.map((el, index) => (
            <ProductCategoryRow
              categoryName={el}
              key={index.toString()}
              data={products.filter(
                (product) => product.category === el
              )}
              filterText={filterText}
              inStockOnly={inStockOnly}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}
