/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const DonationCard = ({donation}) => {
    const {image,petname,maxamount} = donation
    return (
        <div>
             <div className="card w-96 bg-[#f2f9f1] shadow-xl font-Lato">
                 <figure className="px-10 pt-10">
                    <img src={image} alt="Shoes" className="rounded-xl" />
                </figure> 
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{petname}</h2>
                    <p>{maxamount}</p>
                    <div className="card-actions">
                        <Link to='/' className="btn bg-[#ff9a3c] text-white">View Details</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DonationCard;