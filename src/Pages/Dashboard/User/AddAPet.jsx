import { useContext, useState } from 'react';
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import Swal from 'sweetalert2'
import { AuthContext } from '../../../Firebaseprovider/FirebaseProvider';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'
import { Helmet } from 'react-helmet';
import { imageUpload } from '../../../api/utils';
const AddVolunteer = () => {
    const [category, setCategory] = useState('');
    const [startDate, setStartDate] = useState(new Date())
    const [imagePreview, setImagePreview] = useState()
    const [imageText, setImageText] = useState('Upload Image')
  
    const { user } = useContext(AuthContext)
    const navigate = useNavigate()
      //   handle image change
  const handleImage = image => {
    setImagePreview(URL.createObjectURL(image))
    setImageText(image.name)
  }
    const handleAddPet = async (e) => {
        e.preventDefault()
        const form = e.target
        const petname = form.petname.value
        const age = form.age.value
        const image = form.image.files[0]
        const image_url = await imageUpload(image)
        const location = form.location.value
        const description = form.longdescription.value;
        const category = form.category.value;
        const shortnote = form.shortnote.value;
        const status = form.status.value;
        const date = form.date.value;
        const hostname = form.orgname.value;
        const hostemail = form.orgemail.value;
        const newpet = { image: image_url,petname,age,category,location, shortnote,description, date,status, hostname, hostemail }
        console.log(newpet)
        //send data to server
        try {
            

            const { data } = await axios.post(`${import.meta.env.VITE_API_URL}/pets`, newpet)
            console.log(data)
            if (data.insertedId) {
                Swal.fire({
                    title: 'Yayy!',
                    text: 'Pet added successfully!',
                    icon: 'success',
                    confirmButtonText: 'Okay'
                })
                navigate('/dashboard/myaddedpets')
            }

        } catch (err) {
            //toast.success(err.response.data)
            e.target.reset()
        }



    }
    return (
        <div>
            <Helmet>
                <title>
                    Assistify|Add Volunteer
                </title>
            </Helmet>
            <form onSubmit={handleAddPet} className="card-body">
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
                    <input type="text" name="petname" placeholder="Pet Name" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Detail Description</span>
                    </label>
                    <input type="text" name="longdescription" placeholder="Description" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Short Note</span>
                    </label>
                    <input type="text" name="shortnote" placeholder="If Any" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Pet Age</span>
                    </label>
                    <input type="text" name="age" placeholder="Age in years or months" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Status:Adopted or Not Adopted</span>
                    </label>
                    <input type="text" disabled defaultValue={"Not adopted"} name="status" placeholder="status" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Pet Location</span>
                    </label>
                    <input type="text" name="location" placeholder="Location" className="input input-bordered" required />
                </div>

                <div className="form-control my-6">
                    <label className="label">
                        <span className="label-text">Category</span>
                    </label>
                    <select
                        name="category"
                        className="input input-bordered"
                        value={category}
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
                    <button className="btn bg-[#f1b963]   text-2xl font-medium text-white">Add Pet</button>
                </div>
            </form>
        </div>
    );
};

export default AddVolunteer;