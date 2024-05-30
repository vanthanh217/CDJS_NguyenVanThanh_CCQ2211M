import PropTypes from 'prop-types';
import classNames from '../../utils/classNames';

const FormGroup = (props) => {
    const { children, className = '' } = props;
    return (
        <div className={classNames('mb-3', className)} {...props}>
            {children}
        </div>
    );
};

FormGroup.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
};

export default FormGroup;
