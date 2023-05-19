import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import { FaTrash } from 'react-icons/fa';

const MyBookings = () => {
    const { user } = useContext(AuthContext);
    const [bookings, setBookings] = useState([])

    const handleBookingCancel = id => {
        const proceed = confirm('Are sure to cancel your booking?')
        if (proceed) {
            fetch(`http://localhost:5000/bookings/${id}`, {
                method: 'DELETE',
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.deletedCount > 0) {
                        const remaining = bookings.filter(booking => booking._id !== id);
                        setBookings(remaining);
                        alert('Your booking has been cancel.')
                    }
                })
                .catch(err => console.error(err.message))
        }
    }


    // update user info
    const handlePaymentStatus = id => {
        fetch(`http://localhost:5000/bookings/${id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ payment_status: 'paid' })
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    // update state
                    const remaining = bookings.filter(booking => booking._id !== id);
                    const updated = bookings.find(booking => booking._id === id);
                    updated.payment_status = 'paid';
                    const updatedBookings = [updated, ...remaining];
                    setBookings(updatedBookings)
                }
            })
            .catch(err => console.error(err.message))
    }
    useEffect(() => {
        fetch(`http://localhost:5000/bookings?email=${user.email}&sort=1`)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setBookings(data)
            })
    }, [])
    return (
        <div>

            {/* BANNER */}
            <div className="relative rounded-lg">
                <img src="https://i.ibb.co/fDbTHdr/checkout.png" alt="" className='w-full h-56 object-cover rounded-lg' />

                <div className='p-6 absolute top-0 text-white custom-gradient w-full h-full rounded-lg flex flex-col space-y-3'>
                    <h1 className='text-3xl lg:text-5xl font-bold  '>Bookings</h1>
                    <p className='text-lg font-medium text-yellow-500'>{user?.displayName}</p>
                </div>
            </div>

            {/* TABULAR CONTENT */}
            <div className="overflow-x-auto w-full my-8">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                                <label>

                                </label>
                            </th>
                            <th>Service</th>
                            <th>Price</th>
                            <th>Date</th>
                            <th>Payment Status</th>
                        </tr>
                    </thead>

                    <tbody>
                        {/* row 1 */}
                        {
                            bookings.map(booking => <BookingRow
                                key={booking._id}
                                booking={booking}
                                handleBookingCancel={handleBookingCancel}
                                handlePaymentStatus={handlePaymentStatus} />)
                        }
                    </tbody>

                </table>
            </div>
        </div>
    );
};


const BookingRow = ({ booking, handleBookingCancel, handlePaymentStatus }) => {
    const { name, service, payment, payment_status, date, service_img, _id } = booking;

    return (
        <tr>
            <th>
                <label className='self-center'>
                    <button className="btn btn-circle btn-outline btn-sm" onClick={() => handleBookingCancel(_id)} title='Click to cancel'>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                    </button>
                </label>
            </th>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                            <img src={service_img} alt="thumbnail" />
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">{service}</div>
                        <div className="text-sm opacity-50">
                            Owner : {name} <br />
                            Color: Green <br />
                            Size: S
                        </div>
                    </div>
                </div>
            </td>
            <td>
                <span className="font-medium text-neutral-600 text-lg">${payment}</span>
            </td>
            <td>{date}</td>
            <th>
                <button className="btn btn-outline btn-sm" title='Click to alter' onClick={() => handlePaymentStatus(_id)} disabled={payment_status === 'paid' && true}>{payment_status}</button>
            </th>
        </tr>
    );
}
export default MyBookings;