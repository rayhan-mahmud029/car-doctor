import { Button, Checkbox, Label, TextInput, Textarea } from 'flowbite-react';
import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';

const CheckOut = () => {
    const { user } = useContext(AuthContext)
    const serviceData = useLoaderData();

    const handleFormSubmit = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const service = serviceData.title;
        const service_id = serviceData.service_id;
        const service_img = serviceData.img;
        const phone = form.phone.value;
        const date = form.date.value;
        const payment = serviceData.price;
        const payment_status = 'pending';
        const details = form.details.value;
        const booking = { name, email, service, service_id, service_img, phone, date, payment, payment_status, details }
        fetch('http://localhost:5000/bookings', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then((data) => {
                form.reset();
                console.log(data);
                alert('Service booked')
            })
            .catch(err => console.error(err.message))
    }
    return (
        <div>
            <div className='relative w-full rounded-lg'>
                <img src={serviceData.img} alt="" className='max-h-60 w-full object-cover rounded-lg custom-gradient' />
                <div className="p-6 absolute top-0 text-white custom-gradient w-full h-full rounded-lg flex flex-col space-y-2">
                    <h1 className='text-2xl lg:text-6xl text-yellow-400 font-bold'>Checkout</h1>
                    <h3 className="text-xl lg:text-2xl font-semibold text-white">{serviceData.title}</h3>
                </div>
            </div>

            <form className="flex flex-col gap-4 my-8" onSubmit={handleFormSubmit}>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
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
                            defaultValue={user?.displayName}
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
                            defaultValue={user?.email}
                            placeholder="example@email.com"
                            required={true}
                            shadow={true}
                        />
                    </div>
                    <div>
                        <div className="mb-2 block">
                            <Label
                                htmlFor="password2"
                                value="Your phone"
                            />
                        </div>
                        <TextInput
                            name='phone'
                            id="phone"
                            type="number"
                            required={true}
                            shadow={true}
                        />
                    </div>
                    <div>
                        <div className="mb-2 block">
                            <Label
                                htmlFor="date"
                                value="Select date"
                            />
                        </div>
                        <TextInput
                            name='date'
                            id="date"
                            type="date"
                            required={true}
                            shadow={true}
                        />
                    </div>
                </div>


                <div>
                    <div className="mb-2 block">
                        <Label
                            htmlFor="due"
                            value="Due amount ($)"
                        />
                    </div>
                    <TextInput
                        name='due_amount'
                        id="due_amount"
                        type="text"
                        defaultValue={`$${serviceData.price}`}
                        required={true}
                        shadow={true}
                        disabled
                    />
                </div>


                <div>
                    <div className="mb-2 block">
                        <Label
                            htmlFor="details"
                            value="Details"
                        />
                    </div>
                    <Textarea
                        name='details'
                        id="details"
                        rows={5}
                        shadow={true}
                    />
                </div>

                <div className="flex items-center gap-2">
                    <Checkbox id="agree" name='checkbox' />
                    <Label htmlFor="agree">
                        I agree with the
                        <a
                            href="/forms"
                            className="text-blue-600 hover:underline dark:text-blue-500 ms-1"
                        >
                            terms and conditions
                        </a>
                    </Label>
                </div>
                <Button type="submit">
                    Confirm Booking
                </Button>

            </form >
        </div >
    );
};

export default CheckOut;