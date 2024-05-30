import classNames from '../../../utils/classNames';
import styles from './Post.module.scss';
import PropTypes from 'prop-types';

const PostHeading = ({ title = '' }) => {
    return (
        <h1
            className={classNames(
                'uppercase text-2xl font-semibold text-textPrimary mb-4 relative',
                styles.postHeading,
            )}
        >
            {title}
        </h1>
    );
};

PostHeading.propTypes = {
    title: PropTypes.string,
};

export default PostHeading;
