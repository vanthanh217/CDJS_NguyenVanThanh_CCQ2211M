import { useDropdown } from './dropdown-context';
import PropTypes from 'prop-types';

const List = ({ children }) => {
    const { show } = useDropdown();
    return (
        <>
            {show && (
                <div className="absolute left-0 w-full bg-white shadow-sm top-[calc(100%+7px)] rounded-[10px] overflow-hidden z-50 max-h-[308px] overflow-y-auto dropdown-scroll select-none">
                    {children}
                </div>
            )}
        </>
    );
};

List.propTypes = {
    children: PropTypes.node,
};

export default List;
