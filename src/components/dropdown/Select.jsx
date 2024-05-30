import classNames from '../../utils/classNames';
import { IconArrow } from '../icons';
import { useDropdown } from './dropdown-context';
import PropTypes from 'prop-types';

const Select = ({ placeholder = '', className = '' }) => {
    const { toggle, show } = useDropdown();
    return (
        <div
            className={classNames(
                'flex items-center justify-between py-3 px-4 bg-white border border-lightStrock rounded-lg cursor-pointer text-sm text-[#B2B3BD] select-none',
                className,
            )}
            onClick={toggle}
        >
            <span className="capitalize">{placeholder}</span>
            <span>
                {show ? <IconArrow type="up" /> : <IconArrow type="down" />}
            </span>
        </div>
    );
};

Select.propTypes = {
    placeholder: PropTypes.string,
    className: PropTypes.string,
};

export default Select;
