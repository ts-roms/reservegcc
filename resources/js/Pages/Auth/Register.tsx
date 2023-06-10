import { useEffect, FormEventHandler } from 'react';
import GuestLayout from '@/Layouts/GuestLayout';
import InputError from '@/Components/InputError';
import TextInput from '@/Components/TextInput';
import { Head, Link, useForm } from '@inertiajs/react';
import Image from '@/Components/Media/Image';
import AppLogo from '../../Assets/Landing/logo-black.png';
import { Button } from '@/Components/Button/button';
import BackgroundAuth from '../../Assets/Landing/background-asset.png';

export default function Register() {
    const { data, setData, post, processing, errors, reset } = useForm({
        company: '',
        name: '',
        position: '',
        phone: '',
        email: '',
        location: '',
        reg_number: '',
        service: '',
        password: '',
        password_confirmation: '',
    });


    useEffect(() => {
        return () => {
            reset('password', 'password_confirmation');
        };
    }, []);

    const submit: FormEventHandler = (e) => {
        e.preventDefault();

        post(route('register'));
    };

    return (
        <GuestLayout>
            <Head title="Register" />

            <div className="flex h-screen w-full">
                <div className={`w-6/12 flex justify-center`}>
                    <div className="m-auto">
                        <div className="w-96">
                            <h2 className='text-center text-2xl font-bold'>Create an Account</h2>
                            <div className="pt-5">
                                <form onSubmit={submit}>
                                    <div className="">
                                        <TextInput
                                            id="company"
                                            name="company"
                                            value={data.company}
                                            className="mt-1 block w-full"
                                            autoComplete="company"
                                            isFocused={true}
                                            onChange={(e) => setData('company', e.target.value)}
                                            required
                                            placeholder='Name of the Company'
                                        />
                                        <InputError message={errors.company} className="mt-2" />
                                    </div>
                                    <div className="mt-4">

                                        <TextInput
                                            id="name"
                                            name="name"
                                            value={data.name}
                                            className="mt-1 block w-full"
                                            autoComplete="name"
                                            isFocused={true}
                                            onChange={(e) => setData('name', e.target.value)}
                                            required
                                            placeholder='Name of the Person to Contact'
                                        />

                                        <InputError message={errors.name} className="mt-2" />
                                    </div>

                                    <div className="mt-4">

                                        <TextInput
                                            id="position"
                                            name="position"
                                            value={data.position}
                                            className="mt-1 block w-full"
                                            autoComplete="position"
                                            isFocused={true}
                                            onChange={(e) => setData('position', e.target.value)}
                                            required
                                            placeholder='Position of the person to contact'
                                        />

                                        <InputError message={errors.position} className="mt-2" />
                                    </div>

                                    <div className="mt-4">

                                        <TextInput
                                            id="phone"
                                            name="phone"
                                            value={data.phone}
                                            className="mt-1 block w-full"
                                            autoComplete="phone"
                                            isFocused={true}
                                            onChange={(e) => setData('phone', e.target.value)}
                                            required
                                            placeholder='Phone Number'
                                        />

                                        <InputError message={errors.phone} className="mt-2" />
                                    </div>

                                    <div className="mt-4">

                                        <TextInput
                                            id="email"
                                            name="email"
                                            value={data.email}
                                            className="mt-1 block w-full"
                                            autoComplete="email"
                                            isFocused={true}
                                            onChange={(e) => setData('email', e.target.value)}
                                            required
                                            placeholder='Email Address'
                                        />

                                        <InputError message={errors.email} className="mt-2" />
                                    </div>

                                    <div className="mt-4">

                                        <TextInput
                                            id="location"
                                            name="location"
                                            value={data.location}
                                            className="mt-1 block w-full"
                                            autoComplete="location"
                                            isFocused={true}
                                            onChange={(e) => setData('location', e.target.value)}
                                            required
                                            placeholder='Company location in Qatar'
                                        />

                                        <InputError message={errors.location} className="mt-2" />
                                    </div>
                                    <div className="mt-4">

                                        <TextInput
                                            id="reg_number"
                                            name="reg_number"
                                            value={data.reg_number}
                                            className="mt-1 block w-full"
                                            autoComplete="reg_number"
                                            isFocused={true}
                                            onChange={(e) => setData('reg_number', e.target.value)}
                                            required
                                            placeholder='Commercial Registration Number'
                                        />

                                        <InputError message={errors.reg_number} className="mt-2" />
                                    </div>




                                    <div className="mt-4">
                                        <TextInput
                                            id="service"
                                            name="service"
                                            value={data.service}
                                            className="mt-1 block w-full"
                                            autoComplete="service"
                                            isFocused={true}
                                            onChange={(e) => setData('service', e.target.value)}
                                            required
                                            placeholder='Which services would you like to sign up for?'
                                        />

                                        <InputError message={errors.service} className="mt-2" />
                                    </div>


                                    <div className="mt-4">
                                        <TextInput
                                            id="password"
                                            type="password"
                                            name="password"
                                            value={data.password}
                                            className="mt-1 block w-full"
                                            autoComplete="new-password"
                                            onChange={(e) => setData('password', e.target.value)}
                                            required
                                            placeholder='Password'
                                        />

                                        <InputError message={errors.password} className="mt-2" />
                                    </div>

                                    <div className="mt-4">
                                        <TextInput
                                            id="password_confirmation"
                                            type="password"
                                            name="password_confirmation"
                                            value={data.password_confirmation}
                                            className="mt-1 block w-full"
                                            autoComplete="new-password"
                                            onChange={(e) => setData('password_confirmation', e.target.value)}
                                            required
                                            placeholder='Confirm password'
                                        />

                                        <InputError message={errors.password_confirmation} className="mt-2" />
                                    </div>

                                    <div className="flex items-center justify-end mt-4">
                                        <Button variant={'outline'} className='bg-[#D28F5D] text-white w-full !rounded-none uppercase'>Create My Account</Button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={`w-6/12 flex justify-center bg-[url(${BackgroundAuth})] bg-contain`}>
                    <div className="m-auto text-center">
                        <div className="">
                            <Image src={AppLogo} alt="app-logo" className='mx-auto' />
                        </div>
                        <div className="pt-10">
                            <h1 className='text-5xl font-black'>Already Registered?</h1>
                            <div className="pt-6">
                                <p className='text-lg'>Already have a Reserve Vendor account?</p>
                                <p className='text-lg'>Login to your account below!</p>
                            </div>
                            <div className="pt-6">
                                <Button variant={'outline'} className='border-[#FFAB08] text-[#EAA200] hover:border-[#D28F5D] hover:text-[#D28F5D] !rounded-none uppercase'>Login</Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </GuestLayout>
    );
}
