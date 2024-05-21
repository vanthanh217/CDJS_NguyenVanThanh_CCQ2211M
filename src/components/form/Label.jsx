import PropTypes from 'prop-types';
import classNames from '../../utils/classNames';

const Label = (props) => {
    const { htmlFor = '', className = '', children } = props;
    return (
        <label
            htmlFor={htmlFor}
            className={classNames(
                'inline-block mb-1 cursor-pointer select-none',
                className,
            )}
        >
            {children}
        </label>
    );
};

Label.propTypes = {
    htmlFor: PropTypes.string,
    className: PropTypes.string,
    children: PropTypes.node,
};

export default Label;
