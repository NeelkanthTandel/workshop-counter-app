// import { Navbar } from "react-bootstrap";
import React, { useState } from "react";
import "./App.css";
import Counters from "./components/Counters";
import NavbarComponent from "./components/Navbar";

function App() {
   const [totalCounters, setTotalCounters] = useState(0);

   // const data = [
   //   {id: 0, value: 0}
   // ]

   return (
      <>
         <NavbarComponent totalCounters={totalCounters} />
         <div style={{ marginTop: 40 }}>
            <Counters setTotalCounters={setTotalCounters} />
         </div>
      </>
   );
}

export default App;
