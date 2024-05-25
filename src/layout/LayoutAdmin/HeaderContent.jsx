import { useLocation } from 'react-router-dom';
import { Button } from '../../components/button';
import { IconPlus, IconTrash } from '../../components/icons';
import PropTypes from 'prop-types';
import classNames from '../../utils/classNames';

const HeaderContent = (props) => {
    const { title = '' } = props;
    const { pathname } = useLocation();
    const btnAction = 'px-4 py-2';
    return (
        <div className="flex items-center justify-between px-4 py-3 shadow-[rgba(60,_64,_67,_0.3)_0px_1px_2px_0px,_rgba(60,_64,_67,_0.15)_0px_2px_6px_2px] rounded-xl mb-7">
            <h1 className="text-xl font-semibold uppercase text-textPrimary">
                {title}
            </h1>
            <div className="flex items-center gap-x-4">
                <Button
                    to={`${pathname}/create`}
                    className={classNames(btnAction, 'bg-sky-400')}
                >
                    <IconPlus />
                    Create
                </Button>
                <Button
                    to={`${pathname}/trash`}
                    className={classNames(btnAction, 'bg-textRed')}
                >
                    <IconTrash />
                    Trash
                </Button>
            </div>
        </div>
    );
};

HeaderContent.propTypes = {
    title: PropTypes.string,
};

export default HeaderContent;
