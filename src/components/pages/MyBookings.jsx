import React, { useContext, useEffect } from 'react';
import { AuthContext } from '../../providers/AuthProvider';

const MyBookings = () => {
    const { user } = useContext(AuthContext);

    useEffect(() => {
        fetch(`http://localhost:5000/bookings?email=${user.email}&sort=1`)
            .then(res => res.json())
            .then(data => {
                console.log(data);
            })
    }, [])
    return (
        <div>

        </div>
    );
};

export default MyBookings;