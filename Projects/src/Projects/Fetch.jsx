import React, { useState, useEffect } from "react";
import axios from "axios";

const Fetch = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/posts"
        );
        setData(response.data);
      } catch (error) {
        console.error("Error:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      {data.map((item) => (
        <div key={item.id}>{item.title}</div>
      ))}
    </div>
  );
};

export default Fetch;

// const Fetch = () => {
//   const [data, setData] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get(
//           "https://jsonplaceholder.typicode.com/posts"

//         );
//         setData(response.data);
//       } catch (error) {
//         console.error("Error:", error);
//       }
//     };

//     fetchData();
//   }, []);

//   return (
//     <div>
//       {data.map((item) => (
//         <div key={item.id}>{item.title}</div>
//       ))}
//     </div>
//   );
// };

// export default Fetch;
