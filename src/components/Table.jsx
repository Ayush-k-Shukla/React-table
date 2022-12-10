import { useState } from 'react';
import DATA from '../MOCK_DATA (1).json';
import TableView from './TableView';

const Table = () => {
  const [data, setData] = useState(DATA);

  const defaultState = {
    id: { mul: 1 },
    first_name: { mul: 1 },
    last_name: { mul: 1 },
    email: { mul: 1 },
    gender: { mul: 1 },
    ip_address: { mul: 1 },
    airport_code: { mul: 1 },
    time: { mul: 1 },
    mobile: { mul: 1 },
    area: { mul: 1 },
  };

  const [filterMultiplier, setMultiplier] = useState(defaultState);

  function dynamicSort(property, order) {
    var sortOrder = order;

    return function (a, b) {
      var result =
        a[property] < b[property] ? -1 : a[property] > b[property] ? 1 : 0;
      return result * sortOrder;
    };
  }

  const SortData = (param, order) => {
    let _data = data;
    _data.sort(dynamicSort(param, order));
    setData([..._data]);
  };

  return (
    <>
      <TableView
        data={data}
        SortData={SortData}
        filterMultiplier={filterMultiplier}
        setMultiplier={setMultiplier}
      />
    </>
  );
};

export default Table;
