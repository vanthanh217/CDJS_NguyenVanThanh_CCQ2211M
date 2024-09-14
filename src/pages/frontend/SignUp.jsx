import { Link, useNavigate } from 'react-router-dom';
import LayoutAuthentication from '../../layout/LayoutAuthentication';
import { FormGroup, Input, Label } from '../../components/form';
import { Button } from '../../components/button';
import FormAuthenticationWrapper from '../../layout/LayoutAuthentication/FormAuthenticationWrapper';
import { useEffect, useState } from 'react';
import { UserService } from '../../services';

const SignUp = () => {
    const labelFocus =
        'absolute left-0 !mb-0 px-3 top-1/2 -translate-y-1/2 cursor-text text-text2nd peer-focus:top-0 peer-focus:bg-white peer-focus:left-4 peer-focus:text-indigo-500 transition-all ease-linear duration-200';
    const [account, setAccount] = useState({
        name: '',
        username: '',
        email: '',
        phone: '',
        password: '',
    });
    const navigate = useNavigate();

    const handleChange = (e) => {
        setAccount({ ...account, [e.target.name]: e.target.value });
    };
    useEffect(() => {
        if (localStorage.getItem('user-info')) {
            navigate('/');
        }
    }, [navigate]);
    const signUp = () => {
        (async () => {
            const response = await UserService.signUp(account);
            const user = response.user;
            localStorage.setItem('user-info', JSON.stringify(user));
            navigate('/');
        })();
    };

    return (
        <LayoutAuthentication
            title={'Welcome!'}
            desc={
                'Use these awesome forms to login or create new account in your project for free.'
            }
        >
            <FormAuthenticationWrapper title="Sign up with">
                <form>
                    <FormGroup className={'!mb-5 relative'}>
                        <Input
                            id="name"
                            name={'name'}
                            className={'peer focus:border-indigo-500'}
                            value={account.name}
                            onChange={handleChange}
                        />
                        <Label htmlFor={'name'} className={labelFocus}>
                            Name
                        </Label>
                    </FormGroup>
                    <FormGroup className={'!mb-5 relative'}>
                        <Input
                            id="username"
                            name={'username'}
                            className={'peer focus:border-indigo-500'}
                            value={account.username}
                            onChange={handleChange}
                        />
                        <Label htmlFor={'username'} className={labelFocus}>
                            Username
                        </Label>
                    </FormGroup>
                    <FormGroup className={'!mb-5 relative'}>
                        <Input
                            type={'email'}
                            id="email"
                            name={'email'}
                            className={'peer focus:border-indigo-500'}
                            value={account.email}
                            onChange={handleChange}
                        />
                        <Label htmlFor={'email'} className={labelFocus}>
                            Email
                        </Label>
                    </FormGroup>
                    <FormGroup className={'!mb-5 relative'}>
                        <Input
                            id="phone"
                            name={'phone'}
                            className={'peer focus:border-indigo-500'}
                            value={account.phone}
                            onChange={handleChange}
                        />
                        <Label htmlFor={'phone'} className={labelFocus}>
                            Phone
                        </Label>
                    </FormGroup>
                    <FormGroup className={'!mb-5 relative'}>
                        <Input
                            type={'password'}
                            id="password"
                            name={'password'}
                            className={'peer focus:border-indigo-500'}
                            value={account.password}
                            onChange={handleChange}
                        />
                        <Label htmlFor={'password'} className={labelFocus}>
                            Password
                        </Label>
                    </FormGroup>
                    <FormGroup className={'!mb-5 mt-7'}>
                        <Button
                            kind={'default'}
                            className={'w-full bg-indigo-500 py-3 uppercase'}
                            onClick={signUp}
                        >
                            Sign up
                        </Button>
                    </FormGroup>
                    <p className="mt-4 mb-0 text-sm font-normal leading-normal text-center text-text2nd">
                        Already have an account?{' '}
                        <Link
                            to={'/sign-in'}
                            className="font-bold text-indigo-500"
                        >
                            Sign in
                        </Link>
                    </p>
                </form>
            </FormAuthenticationWrapper>
        </LayoutAuthentication>
    );
};

export default SignUp;
