import PropTypes from 'prop-types';
import classNames from '../../utils/classNames';

const Input = (props) => {
    const {
        type = 'text',
        placeholder = '',
        name = '',
        className = '',
        kind = 'border-full',
        ...rest
    } = props;
    return (
        <input
            type={type}
            name={name}
            className={classNames(
                'w-full p-3 placeholder:text-text2nd text-textPrimary text-sm',
                kind === 'border-full'
                    ? 'rounded-[10px] border border-lightStrock'
                    : '',
                kind === 'border-bottom' ? 'border-b-2 border-indigo-500' : '',
                className,
            )}
            autoComplete="false"
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
    kind: PropTypes.string,
};

export default Input;
