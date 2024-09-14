import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import classNames from '../../utils/classNames';

const Button = (props) => {
    const {
        to = '',
        type = 'button',
        children,
        className = '',
        onClick = () => {},
        kind = 'primary',
        ...rest
    } = props;
    const btnStyle =
        'rounded-[10px] flex items-center justify-center gap-x-[10px]';
    const ghostBtnStyle =
        'text-primary border-2 border-primary hover:text-white hover:bg-primary hover:border-transparent transition-all ease-linear';
    if (to !== '' && typeof to === 'string') {
        return (
            <Link
                to={to}
                className={classNames(
                    'inline-block',
                    kind === 'primary' ? 'text-white bg-primary' : '',
                    kind === 'ghost' ? ghostBtnStyle : '',
                    kind === 'ghost-white'
                        ? 'text-textDark border-2 border-textDark hover:bg-textDark hover:text-textPrimary transition-all ease-linear'
                        : '',
                    kind === 'default' ? 'text-white' : '',
                    btnStyle,
                    className,
                )}
                {...rest}
            >
                {children}
            </Link>
        );
    } else {
        return (
            <button
                type={type}
                className={classNames(
                    btnStyle,
                    kind === 'primary' ? 'text-white bg-primary' : '',
                    kind === 'normal'
                        ? 'text-text2nd border border-lightStrock'
                        : '',
                    kind === 'ghost' ? ghostBtnStyle : '',
                    kind === 'default' ? 'text-white' : '',
                    className,
                )}
                onClick={onClick}
                {...rest}
            >
                {children}
            </button>
        );
    }
};

Button.propTypes = {
    to: PropTypes.string,
    type: PropTypes.oneOf(['button', 'submit']),
    children: PropTypes.node,
    className: PropTypes.string,
    onClick: PropTypes.func,
    kind: PropTypes.oneOf(['primary', 'ghost', 'ghost-white', 'default']),
};

export default Button;
