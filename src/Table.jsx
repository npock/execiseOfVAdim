import { data } from "./data"; //  используем начальные данные
import "./Table.css";

const Profession = ({ item, column }) => {
  return item[column].name;
};
const Quality = ({ item, column }) => {
  return item[column].map((item) => (
    <p key={item._id} className={"itemQualities " + item.color}>
      {item.name}
    </p>
  ));
};

function Table() {
  const columns = {
    name: {
      path: "name",
      name: "Имя",
      component: (item) => {
        return <p>{item.name}</p>;
      },
    },
    age: {
      path: "age",
      name: "Возраст",
    },
    qualities: {
      path: "qualities",
      name: "Качества",
    },
    profession: {
      path: "profession",
      name: "Профессия",
    },
    delete: {
      name: "Удалить",
      component: (item) => {
        return <button onClick={() => console.log(item)}>Delete</button>;
      },
    },
  };

  const renderColumn = (item, column) => {
    const component = columns[column].component;
    const path = columns[column].path;
    if (component && typeof component === "function") {
      return component(item, column);
    } else if (path === "age") {
      return item[column];
    } else if (path === "profession") {
      return <Profession item={item} column={column} />;
    }
  };

  return (
    <>
      <h1>Table</h1>
      <table>
        <thead>
          <tr>
            {Object.keys(columns).map((column) => (
              <th key={column}>{columns[column].name}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.users.map((item) => (
            <tr key={item._id}>
              {Object.keys(columns).map((column) => {
                return (
                  <td key={column}>
                    {column === "qualities" ? (
                      <Quality item={item} column={column} />
                    ) : (
                      renderColumn(item, column)
                    )}
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default Table;
