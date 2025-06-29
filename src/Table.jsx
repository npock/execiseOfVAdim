import { data } from "./data";
import "./Table.css";
import { Qualities, Profession } from "./components";
import { useState } from "react";

export const Table = () => {
  const [sortBy, setSortBy] = useState({ path: "name", order: "asc" });

  const columns = {
    name: {
      path: "name",
      name: "Имя",
    },
    age: {
      path: "age",
      name: "Возраст",
    },
    qualities: {
      name: "Качества",
      component: (item) => {
        return <Qualities qualities={item.qualities} />;
      },
    },
    profession: {
      path: "profession.name",
      name: "Профессия",
      component: (item) => {
        return <Profession profession={item.profession} />;
      },
    },
    delete: {
      name: "Delete",
      component: (item) => {
        return <button onClick={() => console.log(item)}>Delete</button>;
      },
    },
  };

  const renderColumn = (item, column) => {
    const component = columns[column].component;
    if (component && typeof component === "function") {
      return component(item);
    }
    return item[column];
  };

  const getValueByPath = (object, path) => {
    const str = path.split(".").reduce((acc, key) => acc[key], object);

    return str;
  };

  const handleSort = (item) => {
    setSortBy({ path: item, order: sortBy.order === "asc" ? "desc" : "asc" });
  };

  const sortedUsers = data.users.slice().sort((a, b) => {
    const aValue = getValueByPath(a, sortBy.path);
    const bValue = getValueByPath(b, sortBy.path);
    if (typeof aValue === "string" && typeof bValue === "string") {
      return sortBy.order === "asc"
        ? aValue.localeCompare(bValue)
        : bValue.localeCompare(aValue);
    }
    if (typeof aValue === "number" && typeof bValue === "number") {
      return sortBy.order === "asc" ? aValue - bValue : bValue - aValue;
    }
    return 0;
  });

  return (
    <>
      <h1>Table</h1>
      <table>
        <thead>
          <tr>
            {Object.keys(columns).map((key) => (
              <th
                key={key}
                onClick={
                  columns[key].path && handleSort.bind(null, columns[key].path)
                }
              >
                {columns[key].name}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {sortedUsers.map((item) => (
            <tr key={item._id}>
              {Object.keys(columns).map((column) => {
                return <td key={column}>{renderColumn(item, column)}</td>;
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};
