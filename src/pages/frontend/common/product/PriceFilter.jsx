import { Input } from '../../../../components/form';
import { Button } from '../../../../components/button';
import PropTypes from 'prop-types';
import { useState } from 'react';
import { IconArrowLong } from '../../../../components/icons';

const PriceFilter = ({ onFilter }) => {
    const [minPrice, setMinPrice] = useState('');
    const [maxPrice, setMaxPrice] = useState('');

    const handleFilter = () => {
        if (minPrice !== '' || maxPrice !== '') {
            onFilter({ price_min: minPrice, price_max: maxPrice });
        } else {
            onFilter({});
        }
    };

    return (
        <div className="mb-3">
            <div className="flex items-center mb-3 gap-x-4">
                <Input
                    placeholder={'Min price'}
                    value={minPrice}
                    onChange={(e) => setMinPrice(e.target.value)}
                />
                <span>
                    <IconArrowLong kind="right" />
                </span>
                <Input
                    placeholder={'max price'}
                    value={maxPrice}
                    onChange={(e) => setMaxPrice(e.target.value)}
                />
            </div>
            <Button className={'w-32 py-2'} onClick={handleFilter}>
                Tìm
            </Button>
        </div>
    );
};

PriceFilter.propTypes = {
    onFilter: PropTypes.func,
};

export default PriceFilter;
