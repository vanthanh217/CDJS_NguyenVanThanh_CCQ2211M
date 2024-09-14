import { Dropdown } from '../../../../components/dropdown';
import { IconGrid, IconList } from '../../../../components/icons';
import PropTypes from 'prop-types';

const listSorted = [
    {
        value: 'aToZ',
        label: 'A → Z',
    },
    {
        value: 'zToA',
        label: 'Z → A',
    },
    {
        value: 'priceASC',
        label: 'Giá tăng dần',
    },
    {
        value: 'priceDESC',
        label: 'Giá giảm dần',
    },
    {
        value: 'newProduct',
        label: 'Sản phẩm mới',
    },
];

const HeaderProductAction = (props) => {
    const { setListLayout, selectedSort, setSelectedSort } = props;

    return (
        <div className="flex items-center justify-between mb-5">
            <div className="flex items-center gap-x-5">
                <span
                    className="p-2 bg-white rounded-md cursor-pointer select-none shadow-box"
                    onClick={() => setListLayout(false)}
                >
                    <IconGrid />
                </span>
                <span
                    className="p-2 bg-white rounded-md cursor-pointer select-none shadow-box"
                    onClick={() => setListLayout(true)}
                >
                    <IconList />
                </span>
            </div>
            <div className="w-[250px]">
                <Dropdown>
                    <Dropdown.Select
                        placeholder={
                            selectedSort
                                ? listSorted.find(
                                      (item) => item.value === selectedSort,
                                  )?.label
                                : 'Default: Sản phẩm mới nhất'
                        }
                    />
                    <Dropdown.List>
                        {listSorted.map((item, index) => (
                            <Dropdown.Option
                                key={index}
                                onClick={() => setSelectedSort(item.value)}
                            >
                                {item.label}
                            </Dropdown.Option>
                        ))}
                    </Dropdown.List>
                </Dropdown>
            </div>
        </div>
    );
};

HeaderProductAction.propTypes = {
    setListLayout: PropTypes.func,
    selectedSort: PropTypes.string,
    setSelectedSort: PropTypes.func,
};

export default HeaderProductAction;
