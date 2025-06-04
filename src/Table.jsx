import { data } from "./data"; //  используем начальные данные

import "./Table.css";

function Table() {
  function HandleClick(event) {
    const button = event.target.closest("button");
    if (button) {
      const p = button.closest("tr");
      const result = data.find((item) => item._id === p.id);
      console.log(result);
    }
  }
  return (
    <>
      <h1>Table</h1>
      <table>
        <thead>
          <tr>
            <td> имя </td>
            <td> возраст </td>
            <td> удалить </td>
          </tr>
        </thead>
        <tbody onClick={HandleClick}>
          {data.map((item) => (
            <tr id={item._id} key={item._id}>
              <td>{item.name}</td>
              <td>{item.age}</td>
              <td>
                <button>удалить</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default Table;
