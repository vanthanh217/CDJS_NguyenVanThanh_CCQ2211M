import PropTypes from 'prop-types';
import classNames from '../../../utils/classNames';

const ProductWrap = (props) => {
    const { children, cols = 4, className = '' } = props;
    return (
        <div
            className={classNames(
                'grid mb-8 gap-5 justify-items-center',
                cols === 3 ? 'grid-cols-3' : '',
                cols === 4 ? 'grid-cols-4' : '',
                className,
            )}
        >
            {children}
        </div>
    );
};

ProductWrap.propTypes = {
    children: PropTypes.node,
    cols: PropTypes.number,
    className: PropTypes.string,
};

export default ProductWrap;
