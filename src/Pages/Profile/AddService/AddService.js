import React from 'react';
import { useForm } from "react-hook-form";


const AddService = () => {
    const style = {
        marginTop: "3.5rem",
        padding: "2.5rem 0",
        paddingLeft: "30%"
    }
    const {
      register,
      handleSubmit,
      watch,
      formState: { errors },
    } = useForm();
    const onSubmit = (data) => console.log(data);
    return (
      <div>
        <h1 class="heading">
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

          <span>S</span>
          <span>E</span>
          <span>R</span>
          <span>V</span>
          <span>I</span>
          <span>C</span>
          <span>E</span>
        </h1>
        <div className="bg-1 ps-5 mx-5 rounded-3">
          <div className="text-center" style={style}>
            <form onSubmit={handleSubmit(onSubmit)} className="w-50">
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
              <input
                {...register("hotels", { required: true })}
                placeholder="Name three best hotel of that Place"
                className="form-control my-3 text-center"
              />
              <input
                {...register("thingsToDo", { required: true })}
                placeholder="Name three best travel spots of that Place"
                className="form-control my-3 text-center"
              />
              <input
                {...register("rating", { required: true })}
                placeholder="Overall Rating"
                className="form-control my-3 text-center"
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

export default AddService;