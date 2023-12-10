import {useDispatch} from 'react-redux';
import {VscTriangleDown} from 'react-icons/vsc';
import {
  setOnlyFinished,
  setOnlyActive,
  resetFilters,
} from '../../redux/slices/filtersSlice';
import './Filters.css';

const Filters = () => {
  const dispatch = useDispatch();

  const filersRadio = [
    {id: 'all', text: 'Все', value: 'all'},
    {id: 'active', text: 'Активные', value: 'active'},
    {id: 'finished', text: 'Завершенные', value: 'finished'},
  ];

  const handleRadioOption = radioValue => {
    switch (radioValue) {
      case 'finished':
        dispatch(setOnlyFinished());
        break;
      case 'active':
        dispatch(setOnlyActive());
        break;
      case 'all':
        dispatch(resetFilters());
        break;
      default:
        break;
    }
  };

  return (
    <div className='filters'>
      <div className='filters__radio filters-block'>
        <p>Статус</p>
        <div className='filters-block__wrapper filters-block__wrapper--radio'>
          {filersRadio.map(block => (
            <div key={block.id}>
              <input
                type='radio'
                id={`${block.id}`}
                value={`${block.value}`}
                name='status'
                onClick={() => handleRadioOption(block.value)}
              ></input>
              <label htmlFor={`${block.id}`}>{block.text}</label>
            </div>
          ))}
        </div>
      </div>
      <div className='filters__select filters-block'>
        <p>Сортировка</p>
        <div className='filters-block__wrapper filters-block__wrapper--select'>
          <VscTriangleDown />
          <select>
            <option value='any'>Наименование или статус</option>
            <option value='name'>Наименование</option>
            <option value='status'>Статус</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default Filters;
