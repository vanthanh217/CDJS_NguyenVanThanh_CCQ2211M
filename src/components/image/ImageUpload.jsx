import { useRef } from 'react';
import defaultImage from '../../assets/images/img-upload.png';
import classNames from '../../utils/classNames';
import PropTypes from 'prop-types';

const ImageUpload = (props) => {
    const {
        className = '',
        onChange = () => {},
        image = '',
        product = false,
    } = props;
    const inputRef = useRef(null);

    const handleClickImage = () => {
        inputRef.current.click();
    };

    return (
        <div
            className={classNames(
                'w-full cursor-pointer flex items-center justify-center border-2 border-dashed border-lightStrock relative rounded-[10px] overflow-hidden',
                className,
            )}
            onClick={handleClickImage}
        >
            {!image && <img src={defaultImage} alt="" className="max-w-32" />}
            {image && (
                <>
                    <img
                        src={image}
                        alt=""
                        className={classNames(
                            'w-full h-full',
                            product ? 'object-contain' : 'object-cover',
                        )}
                    />
                </>
            )}
            <input
                type="file"
                name="file"
                className="hidden"
                ref={inputRef}
                onChange={onChange}
            />
        </div>
    );
};

ImageUpload.propTypes = {
    className: PropTypes.string,
    onChange: PropTypes.func,
    image: PropTypes.string,
    product: PropTypes.bool,
};

export default ImageUpload;
