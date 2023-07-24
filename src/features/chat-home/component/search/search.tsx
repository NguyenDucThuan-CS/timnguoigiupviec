import './search.scss';
import { Input } from '../../../../components/common/Input/Input';
import { SearchIcon, FilterSearch } from '../../../../assets/svg';

export const Search = () => {
  return (
    <div>
      <Input icon={SearchIcon} EndInput={FilterSearch} placeholder="Tìm kiếm" className="search-input" />
    </div>
  );
};
