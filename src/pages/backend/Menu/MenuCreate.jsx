import { useState } from 'react';
import { Dropdown } from '../../../components/dropdown';
import { FormGroup, Input, Label } from '../../../components/form';
import HeaderContent from '../../../layout/LayoutAdmin/HeaderContent';
import { IconArrow } from '../../../components/icons';
import PropTypes from 'prop-types';
import classNames from '../../../utils/classNames';
import db from '../../../data.json';
import useClickOutSide from '../../../hooks/useClickOutSide';
import { Button } from '../../../components/button';

const positionList = ['header', 'footer'];
const { brand, category, topic, post } = db;

const MenuCreate = () => {
    const [name, setName] = useState('');
    const [link, setLink] = useState('');
    const [position, setPosition] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const menu = {
            name,
            link,
            position,
        };
        console.log(menu);
    };

    return (
        <>
            <HeaderContent title={'Create menu'} addBtn={false} />
            <form onSubmit={handleSubmit}>
                <div className="flex gap-x-5">
                    <div className="px-5 grow">
                        <FormGroup>
                            <Label htmlFor={'name'}>Name</Label>
                            <Input
                                id="name"
                                placeholder={'Enter the name menu'}
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label htmlFor={'link'}>Link</Label>
                            <Input
                                id="link"
                                placeholder={'Enter the link menu'}
                                value={link}
                                onChange={(e) => setLink(e.target.value)}
                            />
                        </FormGroup>
                        <div className="flex gap-x-4">
                            <Accordion
                                className="flex-1"
                                title="Brand"
                                list={brand}
                            />
                            <Accordion
                                className="flex-1"
                                title="Category"
                                list={category}
                            />
                        </div>
                    </div>
                    <div className="w-[500px] px-5">
                        <FormGroup>
                            <Label>Position</Label>
                            <Dropdown>
                                <Dropdown.Select
                                    placeholder={
                                        position
                                            ? position
                                            : 'Select the position'
                                    }
                                />
                                <Dropdown.List>
                                    {positionList.map((item, index) => (
                                        <Dropdown.Option
                                            key={index}
                                            onClick={() => setPosition(item)}
                                        >
                                            {item}
                                        </Dropdown.Option>
                                    ))}
                                </Dropdown.List>
                            </Dropdown>
                        </FormGroup>
                        <Accordion title="Topic" list={topic} />
                        <Accordion title="Post" list={post} />
                        <Button
                            type={'submit'}
                            kind={'default'}
                            className={'bg-sky-400 py-3 w-40'}
                        >
                            Submit
                        </Button>
                    </div>
                </div>
            </form>
        </>
    );
};

export default MenuCreate;

export const Accordion = ({ className = '', title = '', list = [] }) => {
    const [selected, setSelected] = useState(false);
    const domNode = useClickOutSide(() => {
        setSelected(false);
    });
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
                    'bg-white shadow-outer rounded-[10px] overflow-hidden',
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
                            <Input type={'checkbox'} id={item.slug} />
                            <Label htmlFor={item.slug} className={'grow !mb-0'}>
                                {item.name || item.title}
                            </Label>
                        </li>
                    ))}
            </ul>
        </div>
    );
};

Accordion.propTypes = {
    className: PropTypes.string,
    title: PropTypes.string,
    list: PropTypes.array,
};
