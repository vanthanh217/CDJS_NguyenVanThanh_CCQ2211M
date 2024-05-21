import PropTypes from 'prop-types';
import classNames from '../../utils/classNames';

const Input = (props) => {
    const {
        type = 'text',
        placeholder = '',
        name = '',
        className = '',
        ...rest
    } = props;
    return (
        <input
            type={type}
            name={name}
            className={classNames(
                'w-full p-3 placeholder:text-text2nd text-textPrimary rounded-[10px] text-sm border border-lightStrock',
                className,
            )}
            placeholder={placeholder}
            {...rest}
        />
    );
};

Input.propTypes = {
    type: PropTypes.string,
    placeholder: PropTypes.string,
    name: PropTypes.string,
    className: PropTypes.string,
};

export default Input;
