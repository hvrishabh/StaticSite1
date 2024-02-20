import { useEffect, useState } from "react";
import $, { param } from "jquery";
let d;

function ReusableTable() {
  const url = "https://jsonplaceholder.typicode.com/users";

  const [data, setData] = useState("empty");
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    async function fetchData() {
      const request = await fetch(url);
      d = await request.json();
      setData(d);

      setLoading(false);
    }
    fetchData();
  }, []);

  useEffect(() => {
    function search() {
      console.log(searchQuery);
      console.log(data);
      const filteredData = d?.filter(
        (Sdata) =>
          Sdata.username
            .toString()
            .toLowerCase()
            .includes(searchQuery.toString().toLowerCase()) ||
          Sdata.email
            .toString()
            .toLowerCase()
            .includes(searchQuery.toString().toLowerCase())
      );
      setData(filteredData);
      // console.log(filteredData);
    }
    if (loading) {
      console.log("loading");
    } else {
      search();
    }
  }, [searchQuery]);

  // function search(e) {
  //   let searchQuery = e.target.value;
  //   // setSearchQuery(e.target.value);
  //   console.log(searchQuery);
  //   const filteredData = data.filter((Sdata) =>
  //     Sdata.username
  //       .toString()
  //       .toLowerCase()
  //       .includes(searchQuery.toString().toLowerCase())
  //   );
  //   console.log(filteredData);
  // }

  // const search_parameters = Object.keys(Object.assign({}, ...data));
  // console.log(search_parameters);

  // function search(data) {
  //   return data.filter((data) =>
  //     search_parameters.some((param) =>
  //       data[param].toString().toLowerCase().include(searchQuery)
  //     )
  //   );
  // }

  // const filteredUserData = userData.filter((user) =>
  //   user.title.toLowerCase().includes(searchQuery.toLowerCase())
  // );

  return (
    <div>
      <div>
        <input
          type="search"
          name="search-form"
          id="search-form"
          onChange={(e) => {
            setSearchQuery(e.target.value);
            // search(e);
          }}
          placeholder="Search user"
        />

        <span>
          <button>⬆</button>
        </span>
        <span>
          <button>⬇</button>
        </span>
      </div>
      {loading
        ? "loading..."
        : data?.map((dataObj, index) => {
            return (
              <div key={index}>
                {dataObj.id} -- {dataObj.username} -- {dataObj.email} --
                {dataObj.name}
              </div>
            );
          })}
    </div>
  );
}

export default ReusableTable;
