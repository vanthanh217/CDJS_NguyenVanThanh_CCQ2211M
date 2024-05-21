import { useState } from 'react';
import useToggle from '../../hooks/useToggle';
import PropTypes from 'prop-types';
import classNames from '../../utils/classNames';
import { IconArrow } from '../icons';

const Dropdown = (props) => {
    const {
        items = [],
        selectedText = 'Select option',
        className = '',
        size = 'S',
    } = props;
    const { state, toggle } = useToggle();
    const [selected, setSelected] = useState(selectedText);
    const handleClickItem = (value) => {
        setSelected(value);
        toggle(state);
    };
    return (
        <div className={classNames('relative', className)}>
            <div
                className={classNames(
                    'flex items-center justify-between border rounded-lg cursor-pointer select-none border-lightStrock',
                    size === 'S' ? 'px-3 py-2' : '',
                    size === 'L' ? 'px-4 py-3' : '',
                )}
                onClick={() => toggle(state)}
            >
                {selected}
                <IconArrow
                    className={classNames(
                        'w-5 h-5',
                        state ? 'rotate-[270deg]' : '',
                    )}
                    type="down"
                />
            </div>
            {state && (
                <ul className="absolute left-0 z-10 w-full overflow-hidden translate-y-3 bg-white rounded-lg shadow top-full">
                    {items &&
                        items.length > 0 &&
                        items.map((item, index) => (
                            <li
                                className={classNames(
                                    'cursor-pointer hover:bg-primary',
                                    size === 'S' ? 'px-3 py-2' : '',
                                    size === 'L' ? 'px-4 py-3' : '',
                                )}
                                onClick={() => handleClickItem(item)}
                                key={index}
                            >
                                {item}
                            </li>
                        ))}
                </ul>
            )}
        </div>
    );
};

Dropdown.propTypes = {
    items: PropTypes.array,
    selectedText: PropTypes.string,
    className: PropTypes.string,
    size: PropTypes.string,
};

export default Dropdown;
