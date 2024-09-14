/* eslint-disable react/no-unescaped-entities */
import LayoutAuthentication from '../../layout/LayoutAuthentication';
import FormAuthenticationWrapper from '../../layout/LayoutAuthentication/FormAuthenticationWrapper';
import { FormGroup, Input, Label } from '../../components/form';
import { Button } from '../../components/button';

const Login = () => {
    const labelFocus =
        'absolute left-0 !mb-0 px-3 top-1/2 -translate-y-1/2 cursor-text text-text2nd peer-focus:top-0 peer-focus:bg-white peer-focus:left-4 peer-focus:text-indigo-500 transition-all ease-linear duration-200';

    return (
        <LayoutAuthentication
            title={'Welcome back!'}
            desc={'Enter your email and password to sign in'}
        >
            <FormAuthenticationWrapper title="Sign in with">
                <form>
                    <FormGroup className={'!mb-5 relative'}>
                        <Input
                            id="username"
                            className={'peer focus:border-indigo-500'}
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
                        />
                        <Label htmlFor={'password'} className={labelFocus}>
                            Password
                        </Label>
                    </FormGroup>
                    <FormGroup className={'!mb-5 mt-7'}>
                        <Button
                            kind={'default'}
                            className={'w-full bg-indigo-500 py-3 uppercase'}
                        >
                            Sign in
                        </Button>
                    </FormGroup>
                </form>
            </FormAuthenticationWrapper>
        </LayoutAuthentication>
    );
};

export default Login;
