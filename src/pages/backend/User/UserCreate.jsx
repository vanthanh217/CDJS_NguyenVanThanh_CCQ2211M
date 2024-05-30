import { useState } from 'react';
import { Dropdown } from '../../../components/dropdown';
import HeaderContent from '../../../layout/LayoutAdmin/HeaderContent';
import { FormGroup, Input, Label } from '../../../components/form';
import { Button } from '../../../components/button';
import { ImageUpload } from '../../../components/image';

const roles = ['admin', 'customer'];

const statusList = [
    {
        value: 1,
        label: 'Xuất bản',
    },
    {
        value: 2,
        label: 'Chưa xuất bản',
    },
];

const UserCreate = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [username, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [address, setAddress] = useState('');
    const [image, setImage] = useState('');
    const [role, setRole] = useState('customer');
    const [status, setStatus] = useState(2);

    const handleChangeImage = (e) => {
        const file = e.target.files[0];
        setImage(URL.createObjectURL(file));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const user = {
            name,
            email,
            phone,
            username,
            password,
            address,
            image,
            role,
            status,
        };
        console.log(user);
    };

    return (
        <>
            <HeaderContent title={'Create user'} addBtn={false} />
            <form onSubmit={handleSubmit}>
                <div className="flex gap-x-7">
                    <div className="grow">
                        <FormGroup>
                            <Label htmlFor={'name'}>Name</Label>
                            <Input
                                id="name"
                                placeholder={`Enter the user's name`}
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label htmlFor={'email'}>Email</Label>
                            <Input
                                id="email"
                                placeholder={`Enter the user's email`}
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label htmlFor={'phone'}>Phone number</Label>
                            <Input
                                id="phone"
                                placeholder={`Enter the user's phone`}
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label htmlFor={'address'}>Address</Label>
                            <Input
                                id="address"
                                placeholder={`Enter the user's address`}
                                value={address}
                                onChange={(e) => setAddress(e.target.value)}
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label>Image</Label>
                            <ImageUpload
                                className="h-[250px]"
                                onChange={handleChangeImage}
                                image={image}
                            />
                        </FormGroup>
                    </div>
                    <div className="w-[450px]">
                        <FormGroup>
                            <Label htmlFor={'username'}>Username</Label>
                            <Input
                                id="username"
                                placeholder={`Enter the user's username`}
                                value={username}
                                onChange={(e) => setUserName(e.target.value)}
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label htmlFor={'password'}>Password</Label>
                            <Input
                                id="password"
                                placeholder={`Enter the user's password`}
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label>Role</Label>
                            <Dropdown>
                                <Dropdown.Select
                                    placeholder={
                                        role
                                            ? roles.find(
                                                  (item) => item === role,
                                              )
                                            : `Select the user's role`
                                    }
                                />
                                <Dropdown.List>
                                    {roles.map((item, index) => (
                                        <Dropdown.Option
                                            key={index}
                                            onClick={() => setRole(item)}
                                        >
                                            {item}
                                        </Dropdown.Option>
                                    ))}
                                </Dropdown.List>
                            </Dropdown>
                        </FormGroup>
                        <FormGroup>
                            <Label>Status</Label>
                            <Dropdown>
                                <Dropdown.Select
                                    placeholder={
                                        status
                                            ? statusList.find(
                                                  (item) =>
                                                      item.value === status,
                                              ).label
                                            : 'Select the status'
                                    }
                                />
                                <Dropdown.List>
                                    {statusList.map((item) => (
                                        <Dropdown.Option
                                            key={item.value}
                                            onClick={() =>
                                                setStatus(item.value)
                                            }
                                        >
                                            {item.label}
                                        </Dropdown.Option>
                                    ))}
                                </Dropdown.List>
                            </Dropdown>
                        </FormGroup>
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

export default UserCreate;
