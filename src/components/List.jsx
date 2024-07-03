import React, { useContext } from 'react';
import { APIContext } from './APIContext';

const List = () => {
  const { items } = useContext(APIContext);

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