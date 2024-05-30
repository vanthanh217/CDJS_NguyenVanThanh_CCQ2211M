import { useLocation } from 'react-router-dom';
import { Button } from '../../components/button';
import { IconArrow, IconPlus, IconTrash } from '../../components/icons';
import PropTypes from 'prop-types';
import classNames from '../../utils/classNames';

const HeaderContent = (props) => {
    const { pathname } = useLocation();
    const actionPath = ['create', 'trash', 'show'];
    const create = pathname.split('/').pop();
    let parentPath = pathname;
    const {
        title = '',
        addBtn = true,
        backBtn = actionPath.includes(create),
    } = props;
    if (backBtn) {
        const arr = pathname.split('/');
        arr.pop();
        parentPath = arr.join('/');
    }
    const btnAction = 'px-4 py-2';
    return (
        <div className="flex items-center justify-between px-4 py-3 shadow-outer rounded-xl mb-7">
            <h1 className="text-xl font-semibold uppercase text-textPrimary">
                {title}
            </h1>
            <div className="flex items-center gap-x-4">
                {addBtn && (
                    <Button
                        kind={'default'}
                        to={`${pathname}/create`}
                        className={classNames(btnAction, 'bg-emerald-400')}
                    >
                        <IconPlus />
                        Create
                    </Button>
                )}
                {backBtn && (
                    <Button
                        to={parentPath}
                        kind={'default'}
                        className={classNames(btnAction, 'bg-violet-500')}
                    >
                        <IconArrow type="left" />
                        Back
                    </Button>
                )}
                <Button
                    to={`${parentPath}/trash`}
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
    addBtn: PropTypes.bool,
    backBtn: PropTypes.bool,
};

export default HeaderContent;
