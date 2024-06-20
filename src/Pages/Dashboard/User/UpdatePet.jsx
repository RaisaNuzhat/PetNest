/* eslint-disable no-unused-vars */
import { useContext, useState } from 'react';
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import Swal from 'sweetalert2'
import { AuthContext } from '../../../Firebaseprovider/FirebaseProvider';
import { useLoaderData, useNavigate } from 'react-router-dom';
import axios from 'axios'
import { Helmet } from 'react-helmet';
import { imageUpload } from '../../../api/utils';

const UpdatePet = () => {
    const [cateegory, setCategory] = useState('');
    const [startDate, setStartDate] = useState(new Date())
    const [imagePreview, setImagePreview] = useState()
    const [imageText, setImageText] = useState('Upload Image')
    const { user } = useContext(AuthContext)
    const navigate = useNavigate()
    const updatePet = useLoaderData();
    const {image,petname,age,category,location,status, shortnote,description,_id} = updatePet
 
    
  const handleImage = image => {
    setImagePreview(URL.createObjectURL(image))
    setImageText(image.name)
  }
  
  const handleUpdate = async (e) =>
    {
    const form = e.target
    e.preventDefault()
    const petname = form.petname.value
    const age = form.age.value
    const image = form.image.files[0]
    const image_url = await imageUpload(image)
    const location = form.location.value
    const description = form.longdescription.value;
    const category = form.category.value;
    const shortnote = form.shortnote.value;
    const date = form.date.value;
    const status = form.status.value;
    const hostname = form.orgname.value;
    const hostemail = form.orgemail.value;
    const updatedpet = { image: image_url,petname,age,category,location, shortnote,description, date,status, hostname, hostemail }
    console.log(updatedpet)
    try {
        const { data } = await axios.put(`${import.meta.env.VITE_API_URL}/pets/${_id}`, updatedpet)
        console.log(data)
        if(data.modifiedCount>0)
            {
                Swal.fire({
                    title: 'Yayy!',
                    text: 'Pet Post Updated successfully!',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                  })
                  navigate('/')
            } 

      } catch (err) {
        e.target.reset()
      }
    }
    return (
        <div>
             <Helmet>
                <title>
                    PetNest|Update 
                </title>
            </Helmet>
            <form onSubmit={handleUpdate} className="card-body">
            <div className=' p-4 bg-white w-full  m-auto rounded-lg flex justify-between items-center'>
              <div className='file_upload px-5 py-3 relative border-4 border-dotted border-gray-300 rounded-lg'>
                <div className='flex flex-col w-max mx-auto text-center'>
                  <label>
                    <input
                      className='text-sm cursor-pointer w-36 hidden'
                      type='file'
                      onChange={e => handleImage(e.target.files[0])}
                      name='image'
                      id='image'
                      accept='image/*'
                      hidden
                      defaultValue={image}
                    />
                    <div className='bg-[#f1b963] text-white border border-gray-300 rounded font-semibold cursor-pointer p-1 px-3 hover:bg-rose-500'>
                      {/* {imageText} */}
                      {imageText.length > 20
                        ? imageText.split('.')[0].slice(0, 15) +
                          '....' +
                          imageText.split('.')[1]
                        : imageText}
                    </div>
                  </label>
                </div>
              </div>
              <div className='h-16 w-16 object-cover overflow-hidden flex items-center'>
                {imagePreview && <img src={imagePreview} />}
              </div>
            </div>
                <div className="form-control font-Roboto ">

                    <label className="label">
                        <span className="label-text">Pet Name</span>
                    </label>
                    <input type="text" defaultValue={petname} name="petname" placeholder="Pet Name" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Detail Description</span>
                    </label>
                    <input type="text" defaultValue={description} name="longdescription" placeholder="Description" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Short Note</span>
                    </label>
                    <input type="text" defaultValue={shortnote} name="shortnote" placeholder="If Any" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Pet Age</span>
                    </label>
                    <input type="text" defaultValue={age} name="age" placeholder="Age in years or months" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Pet Location</span>
                    </label>
                    <input type="text" defaultValue={location} name="location" placeholder="Location" className="input input-bordered" required />
                </div>

                <div className="form-control my-6">
                    <label className="label">
                        <span className="label-text">Category</span>
                    </label>
                    <select
                        name="category"
                        defaultValue={category}
                        className="input input-bordered"
                        value={cateegory}
                        onChange={e => setCategory(e.target.value)}
                        required
                    >
                        <option value="" disabled>Select a category</option>
                        <option value="cat">Cat</option>
                        <option value="dog">Dog</option>
                        <option value="bird">Bird</option>
                       
                    </select>
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Date</span>
                    </label>
                    <DatePicker
                        className='border p-2 rounded-md w-full'
                        name="date"
                        selected={startDate}
                        disabled
                        onChange={date => setStartDate(date)}
                    />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Status:Adopted or Not Adopted</span>
                    </label>
                    <input type="text" disabled defaultValue={status} name="status" placeholder="status" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Your Name</span>
                    </label>
                    <input disabled defaultValue={user?.displayName} type="text" name="orgname" placeholder="name" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Your Email</span>
                    </label>
                    <input disabled defaultValue={user?.email} type="email" name="orgemail" placeholder="email" className="input input-bordered" required />

                </div>
                <div className="form-control mt-6">
                    <button className="btn bg-[#f1b963]   text-2xl font-medium text-white">Update Pet</button>
                </div>
            </form>
        </div>
    );
};

export default UpdatePet;