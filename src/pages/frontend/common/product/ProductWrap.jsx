import PropTypes from 'prop-types';
import classNames from '../../../../utils/classNames';

const ProductWrap = (props) => {
    const { children, cols = 4, className = '' } = props;
    return (
        <div
            className={classNames(
                'grid mb-8 justify-items-center',
                cols === 1 ? 'grid-cols-1 gap-y-2' : '',
                cols === 3 ? 'grid-cols-3 gap-4' : '',
                cols === 4 ? 'grid-cols-4 gap-x-2 gap-y-4' : '',
                cols === 5 ? 'grid-cols-5 gap-x-3 gap-y-4' : '',
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
