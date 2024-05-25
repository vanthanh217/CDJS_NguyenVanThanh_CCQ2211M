import styles from './Table.module.scss';
import classNames from '../../utils/classNames';
import PropTypes from 'prop-types';

const Table = ({ children, className = '' }) => {
    return (
        <div className={classNames(styles.wrapper, className)}>
            <table className="w-full">{children}</table>
        </div>
    );
};

Table.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
};

export default Table;
