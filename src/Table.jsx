import { data } from "./data";
import "./Table.css";
import { useState } from "react";

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
  const [users, setUsers] = useState(data.users);
  const [sorting, setSorting] = useState(false);

  const columns = {
    name: {
      path: "name",
      name: "Имя",
      component: (item) => {
        return <p>{item.name}</p>;
      },
      sorting: (a, b) => {
        if (a.name > b.name) {
          return 1;
        }
        if (a.name < b.name) {
          return -1;
        }
        return 0;
      },
    },
    age: {
      path: "age",
      name: "Возраст",

      sorting: (a, b) => {
        if (a.age > b.age) {
          return 1;
        }
        if (a.age < b.age) {
          return -1;
        }
        if (a.age === b.age) {
          if (a.name > b.name) {
            return 1;
          }
          if (a.name < b.name) {
            return -1;
          }
          return 0;
        }
      },
    },
    qualities: {
      path: "qualities",
      name: "Качества",
    },
    profession: {
      path: "profession",
      name: "Профессия",
      sorting: (b, a) => {
        if (a.profession.name > b.profession.name) {
          return 1;
        }
        if (a.profession.name < b.profession.name) {
          return -1;
        }
        return 0;
      },
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

  const sortUsers = (column) => {
    setUsers((users) => {
      if (sorting === false) {
        setSorting(true);
        return users.toSorted(columns[column].sorting);
      } else {
        setSorting(false);
        return users.toSorted((a, b) => columns[column].sorting(b, a));
      }
    });
  };

  return (
    <>
      <h1>Table</h1>
      <table>
        <thead>
          <tr>
            {Object.keys(columns).map((column) => (
              <th
                key={column}
                onClick={() => {
                  sortUsers(column);
                }}
              >
                {columns[column].name}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {users.map((item) => (
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
