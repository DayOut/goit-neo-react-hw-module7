import { useDispatch, useSelector } from 'react-redux';
import { changeFilter, selectNameFilter } from '../../redux/filtersSlice';

import css from './SearchBox.module.css';

export default function SearchBox() {
  const dispatch = useDispatch();
  const filter = useSelector(selectNameFilter);

  const handleFilterChange = (e) => {
    dispatch(changeFilter(e.target.value));
  };

  return (
    <div className={css.searchBox}>
      <label htmlFor="search" className={css.label}>
        Find contacts by name
      </label>
      <input
        type="text"
        id="search"
        value={filter}
        onChange={handleFilterChange}
        className={css.input}
        placeholder="Search contacts..."
      />
    </div>
  );
}
