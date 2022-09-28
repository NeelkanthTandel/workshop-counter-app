import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Counter from "./Counter";

const Counters = ({ setTotalCounters }) => {
   const [values, setValues] = useState([{ value: 0 }, { value: 0 }]);

   const handleIncrement = (index) => {
      //   const counterIndex = values.findIndex((obj) => obj.id === id);
      let counters = values;
      counters[index].value += 1;
      setValues([...counters]);
   };

   const handleDelete = (index) => {
      let counters = values.filter((obj, i) => i !== index);
      setValues([...counters]);
   };

   const handleUpdateTotalCounters = () => {
      setTotalCounters(values.filter((obj) => obj.value > 0).length);
   };

   const handleReset = () => {
      let counters = values;
      counters.map((obj) => (obj.value = 0));
      setValues([...counters]);
   };

   const handleAdd = () => {
      setValues([...values, { value: 0 }]);
   };

   useEffect(() => {
      handleUpdateTotalCounters();
   }, [values]);

   return (
      <Container>
         <Button variant="primary" onClick={handleReset}>
            Reset
         </Button>
         {/* <Button
            variant="success"
            onClick={handleAdd}
            style={{ marginLeft: 20 }}
         >
            Add
         </Button> */}
         {values.map((obj, index) => (
            <Counter
               value={obj.value}
               id={obj.id}
               index={index}
               handleIncrement={handleIncrement}
               handleDelete={handleDelete}
            />
         ))}
      </Container>
   );
};

export default Counters;
