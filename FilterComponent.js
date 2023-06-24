import React from 'react';
import { Checkbox } from 'antd';

const FilterComponent = () => {
  const [menus, setMenus] = React.useState([
    { label: 'Menu1', checked: false },
    { label: 'Menu2', checked: false },
    { label: 'Menu3', checked: false },
    { label: 'Menu4', checked: false },
    { label: 'Menu5', checked: false },
    { label: 'Menu6', checked: false },
    { label: 'Menu7', checked: false },
    { label: 'Menu08', checked: false },
    { label: 'Menu09', checked: false },
    { label: 'Menu10', checked: false },
  ]);

  const [records, setRecords] = React.useState([]);
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    setRecords(menus);
  }, [menus]);

  const handleSelectAll = () => {
    const updatedMenus = menus.map((menu) => ({ ...menu, checked: true }));
    setMenus(updatedMenus);
    setCount(updatedMenus.length);
  };

  const handleClearAll = () => {
    const updatedMenus = menus.map((menu) => ({ ...menu, checked: false }));
    setMenus(updatedMenus);
    setCount(0);
  };

  const handleCheckboxChange = (label) => {
    const updatedMenus = menus.map((menu) => {
      if (menu.label === label) {
        return { ...menu, checked: !menu.checked };
      }
      return menu;
    });

    setMenus(updatedMenus);

    const selectedCount = updatedMenus.filter((menu) => menu.checked).length;
    setCount(selectedCount);
  };

  const handleFilter = (event) => {
    const searchValue = event.target.value.toLowerCase();

    if (searchValue === '') {
      setRecords(menus);
    } else {
      const filteredMenus = menus.filter((menu) =>
        menu.label.toLowerCase().includes(searchValue)
      );
      setRecords(filteredMenus);
    }
  };

  return (
    <main>
      <input
        type="search"
        className="searchBox"
        placeholder="Filter By ..."
        onChange={handleFilter}
      />
      <div className="countButtons">
        <h4 className="count">{count} Selected</h4>
        <div className="selectAndClearButtons">

        <input
          type="button"
          className="selectAllButton"
          value="Select all"
          onClick={handleSelectAll}
        />
        <input
          type="button"
          className="clearAllButton"
          value="Clear all"
          onClick={handleClearAll}
        />
        </div>
      </div>

      <div className="recordsContainer">
        <ul className="recordsList">
          {records.map((menu) => (
            <li key={menu.label}>
              <Checkbox
                name="menus"
                value={menu.label}
                checked={menu.checked}
                onChange={() => handleCheckboxChange(menu.label)}
              >
                {menu.label}
              </Checkbox>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
};

export default FilterComponent;
