import { useState } from 'react';
import { Input, Label } from '../../../../components/form';
import classNames from '../../../../utils/classNames';
import { IconArrow } from '../../../../components/icons';
import useClickOutSide from '../../../../hooks/useClickOutSide';
import PropTypes from 'prop-types';
import strToSlug from '../../../../utils/strToSlug';

const AccordionFilter = (props) => {
    const { className = '', title = '', list = [], onFilter } = props;
    const nameInput = strToSlug(title);
    const [selected, setSelected] = useState(false);
    const domNode = useClickOutSide(() => {
        setSelected(false);
    });

    const handleCheckboxChange = (item, checked) => {
        onFilter(item, checked);
    };

    return (
        <div className={classNames('mb-4', className)} ref={domNode}>
            <div
                className="p-3 bg-white shadow-outer rounded-[10px] flex justify-between items-center cursor-pointer mb-3 select-none text-text2nd"
                onClick={() => setSelected(!selected)}
            >
                <span className="text-sm capitalize">{title}</span>
                <IconArrow type={selected ? 'up' : 'down'} className="size-5" />
            </div>
            <ul
                className={classNames(
                    'bg-white shadow-outer rounded-[10px] overflow-hidden max-h-[300px] overflow-y-auto scroll-custom',
                    selected ? 'block' : 'hidden',
                )}
            >
                {list &&
                    list.length > 0 &&
                    list.map((item, index) => (
                        <li
                            className="flex items-center px-3 py-2 text-sm capitalize gap-x-5"
                            key={index}
                        >
                            <Input
                                type={'checkbox'}
                                name={`${nameInput}Id[]`}
                                value={item.id}
                                id={`${nameInput}-id:${item.id}`}
                                onChange={(e) =>
                                    handleCheckboxChange(
                                        item.name,
                                        e.target.checked,
                                    )
                                }
                            />
                            <Label
                                htmlFor={`${nameInput}-id:${item.id}`}
                                className={'flex-1 !line-clamp-2 !mb-0'}
                            >
                                {item.name}
                            </Label>
                        </li>
                    ))}
            </ul>
        </div>
    );
};

AccordionFilter.propTypes = {
    className: PropTypes.string,
    title: PropTypes.string,
    list: PropTypes.array,
    onFilter: PropTypes.func,
};

export default AccordionFilter;
