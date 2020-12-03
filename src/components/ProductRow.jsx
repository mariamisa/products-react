import React from 'react';

export default function ProductRow({ details:{stocked,name,price} }) {
  return (
    <>
      <td style={{ color: !stocked && 'red' }}>{name}</td>
      <td>{price}</td>
    </>
  );
}
