/* eslint-disable react/no-unescaped-entities */
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '../../components/button';
import { FormGroup, Input, Label } from '../../components/form';
import LayoutAuthentication from '../../layout/LayoutAuthentication';
import FormAuthenticationWrapper from '../../layout/LayoutAuthentication/FormAuthenticationWrapper';
import { useEffect, useState } from 'react';
import { UserService } from '../../services';

const SignIn = () => {
    const labelFocus =
        'absolute left-0 !mb-0 px-3 top-1/2 -translate-y-1/2 cursor-text text-text2nd peer-focus:top-0 peer-focus:bg-white peer-focus:left-4 peer-focus:text-indigo-500 transition-all ease-linear duration-200';
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        if (localStorage.getItem('user-info')) {
            navigate('/');
        }
    }, [navigate]);
    const handleLogin = async (e) => {
        e.preventDefault();
        const result = await UserService.signIn(email, password);
        localStorage.setItem('user-info', JSON.stringify(result));
        navigate('/');
    };

    return (
        <LayoutAuthentication
            title={'Welcome back!'}
            desc={'Enter your email or username and password to sign in'}
        >
            <FormAuthenticationWrapper title="Sign in with">
                <form onSubmit={handleLogin}>
                    <FormGroup className={'!mb-5 relative'}>
                        <Input
                            id="username"
                            className={'peer focus:border-indigo-500'}
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <Label htmlFor={'username'} className={labelFocus}>
                            Username or email
                        </Label>
                    </FormGroup>
                    <FormGroup className={'!mb-5 relative'}>
                        <Input
                            type={'password'}
                            id="password"
                            className={'peer focus:border-indigo-500'}
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <Label htmlFor={'password'} className={labelFocus}>
                            Password
                        </Label>
                    </FormGroup>
                    <FormGroup className={'!mb-5 mt-7'}>
                        <Button
                            type={'submit'}
                            kind={'default'}
                            className={'w-full bg-indigo-500 py-3 uppercase'}
                        >
                            Sign in
                        </Button>
                    </FormGroup>
                    <p className="mt-4 mb-0 text-sm font-normal leading-normal text-center text-text2nd">
                        Don't have an account?{' '}
                        <Link
                            to={'/sign-up'}
                            className="font-bold text-indigo-500"
                        >
                            Sign up
                        </Link>
                    </p>
                </form>
            </FormAuthenticationWrapper>
        </LayoutAuthentication>
    );
};

export default SignIn;
