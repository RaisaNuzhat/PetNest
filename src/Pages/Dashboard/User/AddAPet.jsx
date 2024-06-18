import { Helmet } from "react-helmet";
import { useForm } from "react-hook-form";
import Select from 'react-select';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { useState } from "react";
import useAuth from "../../../hooks/useAuth";
const AddAPet = () => {
    const {
        register,
        handleSubmit,
        setValue,
        formState: { errors },
    } = useForm()
    const [description, setDescription] = useState('');
    const {user} = useAuth();
    console.log(user)
    const categoryOptions = [
        { value: 'dogs', label: 'Dogs' },
        { value: 'cats', label: 'Cats' },
        { value: 'birds', label: 'Birds' },
        { value: 'smallPets', label: 'Small Pets' },
    ];
    const handleCategoryChange = (selectedOption) => {
        setValue('category', selectedOption);
    };
    const handleDescriptionChange = (value) => {
        setDescription(value);
        setValue('description', value); // Update the description value
    };
    const onSubmit = (data) => {
        console.log(data)

    }
    return (
        <div>
            <Helmet>
                <title>
                    PetNest|Add A Pet
                </title>
            </Helmet>
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
            
                  <div className="form-control">
                  <label className="label">
                        <span className="label-text">Pet Image</span>
                    </label>
                 
                    <div className="input input-bordered flex items-center justify-normal">
                    <input
                        {...register("petimage", { required: true })}
                        type="file"
                        className="mx-auto"
                    />
                </div>
                    {errors.petimage && <span className="text-red-500">This field is required</span>}
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Pet Name</span>
                    </label>
                    <input  {...register("petName", { required: true })} type="text" placeholder="Name" className="input input-bordered" />
                    {errors.petName && <span className="text-red-500">This field is required</span>}

                </div>
                <div className="form-control">

                    <label className="label">
                        <span className="label-text">Pet Age</span>
                    </label>
                    <input {...register("petage", { required: true })} type="email" placeholder="Age" className="input input-bordered" required />
                    {errors.petage && <span className="text-red-500">This field is required</span>}
                </div>
                <div className="form-control mt-4">
                    <label className="label">
                        <span className="label-text">Pet Category</span>
                    </label>
                    <Select
                        options={categoryOptions}
                        onChange={handleCategoryChange}
                        className="input-bordered"
                    />
                    <input
                        type="hidden"
                        {...register("category")}
                    />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Pet Location</span>
                    </label>
                    <input {...register("petlocation")} type="text" placeholder="Location" className="input input-bordered" />
                    {errors.petlocation && <span className="text-red-500">This field is required</span>}
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Short Note</span>
                    </label>
                    <input {...register("shortnote")} type="text" placeholder="Note If Any" className="input input-bordered" />

                </div>
                <div className="form-control mt-4">
                <label className="label">
                    <span className="label-text">Long Description</span>
                </label>
                <div className="quill-container">
                    <ReactQuill
                        value={description}
                        onChange={handleDescriptionChange}
                    />
                </div>
                <input
                    type="hidden"
                    {...register("description")}
                    value={description}
                />
            </div>
            <div className="form-control">
                    <label className="label">
                        <span className="label-text">Status</span>
                    </label>
                    <input  {...register("status", { required: true })} type="text" disabled defaultValue={"Not Adopted"} className="input input-bordered" />
                   

                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Your Name</span>
                    </label>
                    <input  {...register("hostname", { required: true })} type="text" disabled defaultValue={user?.displayName} className="input input-bordered" />
                   

                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Your Email</span>
                    </label>
                    <input  {...register("hostemail", { required: true })} type="email" disabled defaultValue={user?.email} className="input input-bordered" />
                   

                </div>

                <div className="form-control mt-6">
                    <button className="btn bg-[#f1b963]  text-white">Submit</button>
                </div>


            </form>
        </div>
    );
};

export default AddAPet;