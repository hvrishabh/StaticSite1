import { useEffect, useState } from "react";
import styles from "./ImportData.module.css";
import $ from "jquery";

const { table, th, tr } = styles;
const ImportData = () => {
  const [students, setStudents] = useState();
  useEffect(() => {
    const getdata = async function () {
      //   try {
      //     const request = await fetch(
      //       "https://api.slingacademy.com/v1/sample-data/users"
      //     );
      //     const data = await request.json();
      //     console.log(data.users);
      //     setStudents(data.users);
      //   } catch (error) {
      //     console.log(error.message);
      //   }
      $.ajax({
        url: "https://api.slingacademy.com/v1/sample-data/users",
        dataType: "json",
        cache: false,
        success: function (data) {
          setStudents(data.users);
        }.bind(this),
        error: function (xhr, status, err) {
          console.error(this.props.url, status, err.toString());
        }.bind(this),
      });
    };
    getdata();
  }, []);

  return (
    <div>
      <h1>Fetching Student Data fake API</h1>
      <table className={table}>
        <thead>
          <tr>
            <th>id</th>
            <th>Name</th>
            <th>DOB</th>
            <th>city</th>
          </tr>
        </thead>
        <tbody>
          {students?.map((stu, index) => (
            <Tabledata stu={stu} key={index} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ImportData;

function Tabledata({ stu }) {
  return (
    <tr>
      <td>{stu.id}</td>
      <td>
        {stu.first_name} {stu.last_name}
      </td>
      <td>{stu.date_of_birth?.split("T")[0]}</td>
      <td>{stu.city}</td>
    </tr>
  );
}
// export default TableData;
