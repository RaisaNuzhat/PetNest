
import { useContext, useState } from 'react';
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import Swal from 'sweetalert2'
import { AuthContext } from '../../../Firebaseprovider/FirebaseProvider';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'
import { Helmet } from 'react-helmet';
import { imageUpload } from '../../../api/utils';
const CreateDonationCamp = () => {
    const [startDate, setStartDate] = useState(new Date())
    const [startDeadline, setStartDeadline] = useState(new Date())
    const [imagePreview, setImagePreview] = useState()
    const [imageText, setImageText] = useState('Upload Image')
    const { user } = useContext(AuthContext)
    const navigate = useNavigate()
    //   handle image change
    const handleImage = image => {
        setImagePreview(URL.createObjectURL(image))
        setImageText(image.name)
    }
    const handleCreateDonation = async (e) => {
        e.preventDefault()
        const form = e.target
        const image = form.image.files[0]
        const image_url = await imageUpload(image)
        const maxamount = form.maxamount.value
        const description = form.longdescription.value;
        const petname = form.petname.value;
        const deadline = form.deadline.value
        const shortnote = form.shortnote.value;
        const date = form.date.value;
        const orgname = form.orgname.value;
        const orgemail = form.orgemail.value;
        const newdonationcamp = { image: image_url, petname,maxamount, deadline, shortnote, description, date, orgname, orgemail }
        console.log(newdonationcamp)
        //send data to server
        try {
            const { data } = await axios.post(`${import.meta.env.VITE_API_URL}/donations`, newdonationcamp)
            console.log(data)
            if (data.insertedId) {
                Swal.fire({
                    title: 'Yayy!',
                    text: 'Campaign added successfully!',
                    icon: 'success',
                    confirmButtonText: 'Okay'
                })
                navigate('/')
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
                    PetNest|Create Donation Campaign
                </title>
            </Helmet>
            <form onSubmit={handleCreateDonation} className="card-body">
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
                                <div className='bg-[#ff9a3c] text-white border border-gray-300 rounded font-semibold cursor-pointer p-1 px-3 '>
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
                <div className="form-control ">

                    <label className="label">
                        <span className="label-text">Pet Name</span>
                    </label>
                    <input type="text" name="petname" placeholder="name" className="input input-bordered" required />
                </div>

                <div className="form-control ">

                    <label className="label">
                        <span className="label-text">Maximum Donation Amount</span>
                    </label>
                    <input type="text" name="maxamount" placeholder="Maximum Amount in Dollar" className="input input-bordered" required />
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
                        <span className="label-text">Last Date of Donation</span>
                    </label>
                    <DatePicker
                        className='border p-2 rounded-md w-full'
                        name="deadline"
                        selected={startDeadline}

                        onChange={date => setStartDeadline(date)}
                    />
                </div>

                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Current Date</span>
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
                    <button className="btn bg-[#ff9a3c]   text-2xl font-medium text-white">Create Donation Campaign</button>
                </div>
            </form>
        </div>
    );
};

export default CreateDonationCamp;