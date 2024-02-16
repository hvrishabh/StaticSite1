import { useEffect, useState } from "react";
import $ from "jquery";

function ReusableTable() {
  const url = "https://jsonplaceholder.typicode.com/users";

  const [data, setData] = useState();
  const [btn, setBtn] = useState(false);

  // const fetchData = () => {
  //   return fetch(url)
  //     .then((res) => res.json())
  //     .then((d) => setData(d));
  // };
  // useEffect(() => {
  //   console.log(data);
  //   fetchData();
  // }, []);

  ///////////////////////////////////////////////

  // const fetchData = async function () {
  //   const request = await fetch("https://jsonplaceholder.typicode.com/users");
  //   const d = await request.json();
  //   console.log(d);
  // };

  // useEffect(() => {
  //   fetchData();
  //   // console.log();
  // }, []);

  ////////////////////////////////////////////////////////////////////

  // useEffect(() => {
  async function fetchData() {
    const request = await fetch(url);
    const d = await request.json();
    console.log(d);
    setData(d);
  }

  // fetchData();
  // }, []);

  function fetchingData() {
    setBtn(true);
    fetchData();
  }

  ///////////////////////////////////////////////////////

  // useEffect(() => {
  //   const getdata = async function () {
  //     try {
  //       const request = await fetch(url);
  //       const data = await request.json();
  //       console.log(data.users);
  //       setData(data);
  //     } catch (error) {
  //       console.log(error.message);
  //     }
  //     //////////////////
  //     // $.ajax({
  //     //   url: url,
  //     //   dataType: "json",
  //     //   cache: false,
  //     //   success: function (data) {
  //     //     setData(data);
  //     //   }.bind(this),
  //     //   error: function (xhr, status, err) {
  //     //     console.error(this.props.url, status, err.toString());
  //     //   }.bind(this),
  //     // });
  //   };
  //   getdata();
  // }, []);

  console.log(data);
  return (
    <div>
      {/* <center className="container">
        {data.map((dataObj) => (
          <Test dataObj={dataObj} />
        ))}
      </center> */}
      <button onClick={fetchingData}>data...</button>
      {btn && data.map((dataObj) => <div>{dataObj.id}</div>)}
    </div>
  );
}

// const Test = ({ dataObj }) => {
//   return (
//     <div className="box">
//       <div className="card">
//         <div className="category">@ {dataObj.username}</div>
//         <div className="heading">
//           {dataObj.name}
//           <div className="author"> {dataObj.email}</div>
//         </div>
//       </div>
//     </div>
//   );
// };

export default ReusableTable;
