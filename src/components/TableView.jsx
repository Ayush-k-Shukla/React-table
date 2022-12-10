import './Table.scss';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

const TableView = ({ data, SortData, filterMultiplier, setMultiplier }) => {
  const handleOpenToogle = (prop) => {
    SortData(prop, filterMultiplier[prop].mul);

    setMultiplier({
      ...filterMultiplier,
      [prop]: { mul: -1 * filterMultiplier[prop].mul },
    });
  };

  return (
    <table className='responsiveTable'>
      <thead>
        <tr>
          {Object.keys(data[0]).map((title, index) => {
            return (
              index !== 8 &&
              index !== 11 &&
              index !== 12 && (
                <th
                  className='header'
                  onClick={() => handleOpenToogle(title)}
                  key={index}
                >
                  {title}
                  <div className='icon'>
                    {filterMultiplier[title].mul !== -1 ? (
                      <ArrowDropUpIcon />
                    ) : (
                      <ArrowDropDownIcon />
                    )}
                  </div>
                </th>
              )
            );
          })}
        </tr>
      </thead>
      <tbody>
        {data &&
          data?.map((val, index) => (
            <tr key={index} className={val.status ? 'greenRow' : 'redRow'}>
              <td>{val.id}</td>
              <td>{val.first_name}</td>
              <td>{val.last_name}</td>
              <td>{val.email}</td>
              <td>{val.gender}</td>
              <td>{val.ip_address}</td>
              <td>{val.airport_code}</td>
              <td>{val.time}</td>
              <td>{val.mobile}</td>
              <td>{val.area}</td>
            </tr>
          ))}
      </tbody>
    </table>
  );
};

export default TableView;
