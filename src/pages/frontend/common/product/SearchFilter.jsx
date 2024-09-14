import { Input } from '../../../../components/form';
import PropTypes from 'prop-types';

const SearchFilter = ({ onFilter }) => {
    const handleSearch = (e) => {
        onFilter({ search: e.target.value });
    };

    return (
        <div className="mb-4">
            <Input placeholder={'Nhập sản phảm...'} onChange={handleSearch} />
        </div>
    );
};

SearchFilter.propTypes = {
    onFilter: PropTypes.func,
};

export default SearchFilter;
