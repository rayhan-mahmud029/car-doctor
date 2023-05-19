import { Button, Checkbox, Label, TextInput } from 'flowbite-react';
import React, { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProvider';

const Register = () => {
    const { setUser, userEmailRegister, updateUserProfile } = useContext(AuthContext)
    const handleFormSubmit = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const confirm_password = form.confirm_password.value;
        console.log(name, email, password, confirm_password);

        userEmailRegister(email, password)
            .then(result => {
                const user = result.user;
                updateUserProfile(name)
                    .then(() => console.log('user name updated'))
                    .catch(err => console.error(err.message))
                setUser(user)
                console.log(user)
                form.reset()
            })
            .catch(err => console.error(err.message))

    }


    return (
        <div>
            <form className="flex flex-col gap-4" onSubmit={handleFormSubmit}>
                <div>
                    <div className="mb-2 block">
                        <Label
                            htmlFor="name2"
                            value="Your name"
                        />
                    </div>
                    <TextInput
                        name='name'
                        id="name"
                        type="text"
                        placeholder="Name"
                        required={true}
                        shadow={true}
                    />
                </div>
                <div>
                    <div className="mb-2 block">
                        <Label
                            htmlFor="email2"
                            value="Your email"
                        />
                    </div>
                    <TextInput
                        name='email'
                        id="email2"
                        type="email"
                        placeholder="example@email.com"
                        required={true}
                        shadow={true}
                    />
                </div>
                <div>
                    <div className="mb-2 block">
                        <Label
                            htmlFor="password2"
                            value="Your password"
                        />
                    </div>
                    <TextInput
                        name='password'
                        id="password2"
                        type="password"
                        required={true}
                        shadow={true}
                    />
                </div>
                <div>
                    <div className="mb-2 block">
                        <Label
                            htmlFor="repeat-password"
                            value="Repeat password"
                        />
                    </div>
                    <TextInput
                        name='confirm_password'
                        id="repeat-password"
                        type="password"
                        required={true}
                        shadow={true}
                    />
                </div>
                <div className="flex items-center gap-2">
                    <Checkbox id="agree" name='checkbox' />
                    <Label htmlFor="agree">
                        I agree with the
                        <a
                            href="/forms"
                            className="text-blue-600 hover:underline dark:text-blue-500"
                        >
                            terms and conditions
                        </a>
                    </Label>
                </div>
                <Button type="submit">
                    Register new account
                </Button>
            </form>
        </div>
    );
};

export default Register;