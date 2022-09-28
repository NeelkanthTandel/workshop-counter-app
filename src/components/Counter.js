import React, { useState } from "react";
import Button from "react-bootstrap/Button";

const Counter = ({ value, index, id, handleIncrement, handleDelete }) => {
   return (
      <div style={{ marginTop: 20 }}>
         {/* <span style={{ marginRight: 20, fontSize: 24 }}>{id}</span> */}
         {value === 0 ? (
            <Button variant="warning">ZERO</Button>
         ) : (
            <Button variant="info">{value}</Button>
         )}
         <Button
            variant="success"
            style={{ marginLeft: 20 }}
            onClick={() => handleIncrement(index)}
         >
            Increment
         </Button>
         <Button
            variant="danger"
            style={{ marginLeft: 20 }}
            onClick={() => handleDelete(index)}
         >
            Delete
         </Button>
      </div>
   );
};

export default Counter;
