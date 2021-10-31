import React from 'react';
import { useForm, Controller } from "react-hook-form";


const AddPlace = () => {
    const style = {
        padding: "2.5rem 0",
        paddingLeft: "30%"
    }
    const {
      register,
      handleSubmit,
      reset,
      control, 
      watch,
      formState: { errors },
    } = useForm();
    const onSubmit = (data) => {
        console.log(data);
        fetch(`https://shrieking-goosebumps-13781.herokuapp.com/addPlace`, {
          method: "POST",
          headers: { "content-type": "application/json" },
          body: JSON.stringify(data),
        })
          .then((res) => res.json())
          .then((result) => {
            if (result.insertedId) {
                    alert('Your inserted Place Added Succesfully')
                    reset();
                }
          });
    };
    return (
      <div>
        <h1 className="heading">
          <span>A</span>
          <span>D</span>
          <span>D</span>
          <span className="space">{""}</span>

          <span>A</span>
          <span className="space">{""}</span>

          <span>N</span>
          <span>E</span>
          <span>W</span>
          <span className="space">{""}</span>

          <span>P</span>
          <span>L</span>
          <span>A</span>
          <span>C</span>
          <span>E</span>
        </h1>
        <div className="bg-1 ps-5 mx-5 rounded-3">
          <div className="text-center" style={style}>
            <form onSubmit={handleSubmit(onSubmit)} className="w-50">
                <div>
                    <h6>Info</h6>
                </div>
              <input
                {...register("name", { required: true })}
                placeholder="Tour Spot Name"
                className="form-control my-3 text-center"
              />
              <input
                {...register("country", { required: true })}
                placeholder="Which Country?"
                className="form-control my-3 text-center"
              />
              <div>
                  <h6>Some Description</h6>
              </div>
              <textarea
                {...register("description", { required: true })}
                placeholder="Short Description (Upto 200 Letter)"
                className="form-control my-3 text-center py-4"
              />
              <textarea
                {...register("whyToGo", { required: true })}
                placeholder="Why people will go there?"
                className="form-control my-3 text-center py-4"
              />
              <textarea
                {...register("whenToGo", { required: true })}
                placeholder="When should go there?"
                className="form-control my-3 text-center py-4"
              />
              <div>
                <h6>Name three best hotel of that place</h6>
              </div>
              <input
                {...register("hotel1")}
                placeholder="Hotel No 1"
                className="form-control my-3 text-center"
              />
              <input
                {...register("hotel2")}
                placeholder="Hotel No 2"
                className="form-control my-3 text-center"
              />
              <input
                {...register("hotel3")}
                placeholder="Hotel No 3"
                className="form-control my-3 text-center"
              />
              <div>
                <h6>Name three best travel spots of that place</h6>
              </div>
              <input
                {...register("spot1")}
                placeholder="Spot No 1"
                className="form-control my-3 text-center"
              />
              <input
                {...register("spot2")}
                placeholder="Spot No 2"
                className="form-control my-3 text-center"
              />
              <input
                {...register("spot3")}
                placeholder="Spot No 3"
                className="form-control my-3 text-center"
              />
              <div>
                  <h6>Rating and Image</h6>
              </div>
              <input
                {...register("rating", { required: true })}
                placeholder="Overall Rating"
                className="form-control my-3 text-center"
                type="number"
                max="5"
              />
              <input
                {...register("image", { required: true })}
                placeholder="Image Link (Give us a photo link of that place)"
                className="form-control my-3 text-center"
              />
              <input
                {...register("coverImage", { required: true })}
                placeholder="Cover Image Link "
                className="form-control my-3 text-center"
              />
              {errors.exampleRequired && <span>This field is required</span>}

              <input type="submit" className="secondary-button ms-0" />
            </form>
          </div>
        </div>
      </div>
    );
};

export default AddPlace;