import { useEffect, useState } from 'react';
import { Dropdown } from '../../../components/dropdown';
import HeaderContent from '../../../layout/LayoutAdmin/HeaderContent';
import { FormGroup, Input, Label } from '../../../components/form';
import { Button } from '../../../components/button';
import { ImageUpload } from '../../../components/image';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate, useParams } from 'react-router-dom';
import { UserService } from '../../../services';
import { urlImage } from '../../../config';

const rolesList = ['admin', 'customer'];

const statusList = [
    {
        value: 1,
        label: 'Publish',
    },
    {
        value: 2,
        label: 'Unpublished',
    },
];

const UserEdit = () => {
    const { id } = useParams();
    const navigator = useNavigate();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [username, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [address, setAddress] = useState('');
    const [image, setImage] = useState('');
    const [roles, setRoles] = useState('customer');
    const [status, setStatus] = useState(2);
    const [currentImage, setCurrentImage] = useState('');

    useEffect(() => {
        (async () => {
            const { user } = await UserService.getById(id);
            setName(user?.name);
            setEmail(user?.email);
            setPhone(user?.phone);
            setUserName(user?.username);
            setPassword(user?.password);
            setAddress(user?.address);
            if (user?.image) {
                setImage(user?.image);
                setCurrentImage(`${urlImage}user/${user.image}`);
            }
            setRoles(user?.roles);
            setStatus(user?.status);
        })();
    }, [id]);

    const handleChangeImage = (e) => {
        const file = e.target.files[0];
        setImage(file);
        setCurrentImage('');
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        var user = new FormData();
        user.append('image', image);
        user.append('name', name);
        user.append('email', email);
        user.append('phone', phone);
        user.append('username', username);
        user.append('password', password);
        user.append('address', address);
        user.append('roles', roles);
        user.append('status', status);
        UserService.update(id, user).then((result) => {
            if (result.status === true) {
                toast.success(result.message);
            }
            navigator('/admin/user', { replace: true });
        });
    };

    return (
        <>
            <HeaderContent title={'Edit user infomation'} />
            <form onSubmit={handleSubmit}>
                <div className="flex gap-x-7">
                    <div className="flex-1">
                        <FormGroup className={'w-3/5 mx-auto'}>
                            <Label htmlFor={'image'}>Image</Label>
                            <ImageUpload
                                className="h-[250px]"
                                onChange={handleChangeImage}
                                image={image}
                                id={'image'}
                                currentImage={currentImage}
                            />
                        </FormGroup>
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
                    </div>
                    <div className="w-[500px]">
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
                                        roles
                                            ? rolesList.find(
                                                  (item) => item === roles,
                                              )
                                            : `Select the user's role`
                                    }
                                />
                                <Dropdown.List>
                                    {rolesList.map((item, index) => (
                                        <Dropdown.Option
                                            key={index}
                                            onClick={() => setRoles(item)}
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
                            Update
                        </Button>
                    </div>
                </div>
            </form>
        </>
    );
};

export default UserEdit;
