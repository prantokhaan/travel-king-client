import { getByPlaceholderText } from '@testing-library/dom';
import React from 'react';
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';
import useFirebase from '../../../Hooks/useFirebase';
import img from '../../../images/Loading-rafiki.svg'

const ConfirmBooking = ({bookingPlace}) => {
    const {name} = bookingPlace;
    const {user} = useFirebase();

    const {
      register,
      handleSubmit,
      watch,
      formState: { errors },
    } = useForm();
    const onSubmit = (data) => console.log(data);
    return (
      <div>
        <div>
          <div className="container d-flex">
            <div className="contact-form w-100 text-capitalize ms-5 p-5">
              {/* Contact Form  */}
              <form onSubmit={handleSubmit(onSubmit)}>
                <h5 className="color-2 mb-4 text-center">
                  You're almost done !
                </h5>
                <div className="input-group">
                  <input
                    defaultValue={user.displayName}
                    placeholder="name"
                    className="form-control mb-2 bg-1"
                    readOnly
                    
                    {...register("userName")}
                  />
                </div>
                <div className="input-group">
                  <input
                    defaultValue={user.email}
                    placeholder="e-mail"
                    className="form-control mb-2 bg-1 text-lowercase"
                    readOnly
                    autoFocus
                    {...register("userEmail")}
                  />
                </div>
                <div className="input-group">
                  <input
                    defaultValue={user?.phoneNumber}
                    placeholder="Your Phone Number"
                    className="form-control mb-2 bg-1"
                    {...register("phoneNumber")}
                  />
                </div>
                <div className="input-group">
                  <input
                    defaultValue={name}
                    readOnly
                    className="form-control mb-2 bg-1"
                    {...register("name")}
                  />
                </div>
                <div className="input-group">
                  <input
                    placeholder="Your Address"
                    className="form-control mb-2 bg-1"
                    {...register("address", { required: true })}
                  />
                </div>
                {errors.exampleRequired && <span>This field is required</span>}
                {/* Send Button  */}
                
                  <input type="submit" className="secondary-button ms-0 mt-3 rounded-pill py-1 px-4 w-100 transition" value="Book"/>
                
              </form>
            </div>
            <div className="contact-img">
              {/* Contact Image  */}
              <img src={img} alt="" width="600px" />
            </div>
          </div>
        </div>
      </div>
    );
};

export default ConfirmBooking;