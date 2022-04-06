import React, { useState, useEffect, useContext, Suspense } from "react";
//import { MyContext } from "../index";
import { userState } from "../atoms";
import { useId } from "../hooks";

function Home() {
  const [data, setData] = useState(null);
  //const value = useContext(MyContext);
  //console.log(value);

  const id = useId();
  console.log(id);

  return (
    <div>
      <h3>Dato: {id}</h3>
    </div>
  );
}

export { Home };

// import React, { useState, useEffect } from "react";

// import { Link } from "react-router-dom";

// function App() {
//   return (
//     <div>
//       Home
//       <Link to="/">Link a pagina 2</Link>
//     </div>
//   );
// }

// export { App };
