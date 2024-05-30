import PropTypes from 'prop-types';
import classNames from '../../utils/classNames';

const TextArea = (props) => {
    const { name = '', className = '', placeholder = '', ...rest } = props;
    return (
        <textarea
            name={name}
            className={classNames(
                'w-full py-3 px-4 border border-lightStrock rounded-[10px] text-sm text-textPrimary placeholder:text-text2nd',
                className,
            )}
            {...rest}
            placeholder={placeholder}
        ></textarea>
    );
};

TextArea.propTypes = {
    name: PropTypes.string,
    className: PropTypes.string,
    placeholder: PropTypes.string,
};

export default TextArea;
