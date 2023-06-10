import { useEffect, FormEventHandler } from 'react';
import GuestLayout from '@/Layouts/GuestLayout';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import { Head, useForm } from '@inertiajs/react';
import { Button } from '@/Components/Button/button';
import Image from '@/Components/Media/Image';
import AppLogo from '../../Assets/Landing/logo-black.png';
import BackgroundAuth from '../../Assets/Landing/background-asset.png';

export default function Login({ status, }: { status?: string }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: '',
        password: '',
        remember: false,
    });

    useEffect(() => {
        return () => {
            reset('password');
        };
    }, []);

    const submit: FormEventHandler = (e) => {
        e.preventDefault();

        post(route('login'));
    };

    return (
        <GuestLayout>
            <Head title="Log in" />

            <div className="flex h-screen w-full">
                <div className={`w-6/12 flex justify-center`}>
                    <div className="m-auto text-center">
                        <div className="">
                            <Image src={AppLogo} alt="app-logo" className='mx-auto' />
                        </div>
                        <div className="pt-10">
                            <h1 className='text-5xl font-black'>Welcome Back!</h1>
                            <div className="pt-6">
                                <p className='text-lg'>Don't have a Reserve Vendor account?</p>
                                <p className='text-lg'>Create an account below</p>
                            </div>
                            <div className="pt-6">
                                <Button variant={'outline'} className='border-[#FFAB08] text-[#EAA200] hover:border-[#D28F5D] hover:text-[#D28F5D] !rounded-none uppercase'>Create and Account</Button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-6/12 flex justify-center">
                    <div className="m-auto">
                        <div className="w-80">
                            <h2 className='text-center text-2xl font-bold'>Login to Reserve</h2>
                            <div className="pt-5">
                                <form onSubmit={submit}>
                                    <div>
                                        <TextInput
                                            id="email"
                                            type="email"
                                            name="email"
                                            value={data.email}
                                            className="mt-1 block w-full rounded-none focus:outline-none h-14 pl-10"
                                            autoComplete="username"
                                            isFocused={true}
                                            onChange={(e) => setData('email', e.target.value)}
                                            placeholder='Email Address'
                                        />

                                        <InputError message={errors.email} className="mt-2" />
                                    </div>

                                    <div className="mt-4">
                                        <TextInput
                                            id="password"
                                            type="password"
                                            name="password"
                                            value={data.password}
                                            className="mt-1 block w-full rounded-none focus:outline-none h-14 pl-10"
                                            autoComplete="current-password"
                                            onChange={(e) => setData('password', e.target.value)}
                                            placeholder='Password'
                                        />

                                        <InputError message={errors.password} className="mt-2" />
                                    </div>



                                    <div className="flex items-center justify-end mt-6">
                                        <Button className="w-full !rounded-none text-white bg-[#D28F5D]" disabled={processing}>
                                            Log in
                                        </Button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>

                </div>
            </div>


        </GuestLayout>
    );
}
