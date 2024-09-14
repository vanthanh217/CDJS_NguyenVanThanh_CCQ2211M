import styles from './ToggleSwitch.module.scss';
import classNames from '../../utils/classNames';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';

const ToggleSwitch = (props) => {
    const { object, status = 2, id, isLoad, setIsLoad } = props;
    const handleChangeStatus = async (value = id) => {
        if (object) {
            const result = await object?.updateStatus(value);
            if (result.status === true) {
                toast.success(result.message, {
                    autoClose: 750,
                    pauseOnHover: false,
                });
                setIsLoad(!isLoad);
            }
        }
    };

    return (
        <div
            className={styles.toggleSwitch}
            onClick={() => handleChangeStatus(id)}
        >
            <div
                className={classNames(
                    styles.spinner,
                    status === 1 ? styles.active : '',
                )}
            >
                {status === 1 && (
                    <svg
                        className={styles.toggleOn}
                        version="1.1"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 130.2 130.2"
                    >
                        <polyline
                            className={styles.path}
                            points="100.2,40.2 51.5,88.8 29.8,67.5"
                        ></polyline>
                    </svg>
                )}
                {status === 2 && (
                    <svg
                        className={styles.toggleOff}
                        version="1.1"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 130.2 130.2"
                    >
                        <line
                            className={styles.path}
                            x1="34.4"
                            y1="34.4"
                            x2="95.8"
                            y2="95.8"
                        ></line>
                        <line
                            className={styles.path}
                            x1="95.8"
                            y1="34.4"
                            x2="34.4"
                            y2="95.8"
                        ></line>
                    </svg>
                )}
            </div>
        </div>
    );
};

ToggleSwitch.propTypes = {
    object: PropTypes.object,
    status: PropTypes.number,
    id: PropTypes.number,
    isLoad: PropTypes.bool,
    setIsLoad: PropTypes.func,
};

export default ToggleSwitch;
