import { useLocation } from 'react-router-dom';
import { Button } from '../../components/button';
import {
    IconArrow,
    IconEdit,
    IconPlus,
    IconTrash,
} from '../../components/icons';
import PropTypes from 'prop-types';
import classNames from '../../utils/classNames';

const HeaderContent = (props) => {
    const { pathname } = useLocation();
    const resourcePath = ['contact', 'order'];
    const actionPath = ['create', 'trash', 'show', 'edit'];

    function getAction(url) {
        const regex = /\/admin\/(\w+)\/(\w+)(?:\/(\d+))?/;
        const match = url.match(regex);
        if (match) {
            const resource = match[1];
            const action = match[2];
            const id = match[3] ? parseInt(match[3]) : null;
            return { resource, action, id };
        }
        return null;
    }
    const resource = getAction(pathname)?.resource || '';
    const action = getAction(pathname)?.action || '';
    const id = getAction(pathname)?.id || null;

    let parentPath = resource !== null ? `/admin/${resource}` : pathname;
    const {
        title = '',
        addBtn = false,
        backBtn = actionPath.includes(action),
    } = props;
    const btnAction = 'px-4 py-2';
    return (
        <div className="flex items-center justify-between px-4 py-3 shadow-outer rounded-xl mb-7">
            <h1 className="text-xl font-semibold uppercase text-textPrimary">
                {title}
            </h1>
            <div className="flex items-center gap-x-4">
                {backBtn && (
                    <Button
                        to={parentPath}
                        kind={'default'}
                        className={classNames(btnAction, 'bg-indigo-500')}
                    >
                        <IconArrow type="left" />
                        Back
                    </Button>
                )}
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
                {action === 'show' && !resourcePath.includes(resource) && (
                    <Button
                        to={`${parentPath}/edit/${id}`}
                        kind={'default'}
                        className={classNames(btnAction, 'bg-sky-400')}
                    >
                        <IconEdit />
                        Edit
                    </Button>
                )}
                {!backBtn && (
                    <Button
                        to={`${parentPath}trash`}
                        className={classNames(btnAction, 'bg-textRed')}
                    >
                        <IconTrash />
                        Trash
                    </Button>
                )}
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
