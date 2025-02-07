import React from "react";

const Table = ({ data }) => {
  return (
    <table className="table">
      <thead>
        <tr>
          <th>Id</th>
          <th>Title</th>
          <th>Description</th>
          <th>Price</th>
          <th>Category</th>
          <th>Sold</th>
          <th>Image</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item) => {
          return (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.todo}</td>
              <td>{`${item.completed}`}</td>
              <td>{item.userId}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default Table;
