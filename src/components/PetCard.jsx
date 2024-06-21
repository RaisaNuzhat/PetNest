/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const PetCard = ({pet}) => {
    const { _id,petname,age,location,image,date} = pet
    return (
        <div>
            <div className="card w-96 bg-[#f2f9f1] shadow-xl font-Lato">
                <figure className="px-10 pt-10">
                    <img src={image} alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{petname}</h2>
                    <p>{location}</p>
                    <p>{age}</p>
                    <p>{date}</p>
                    <div className="card-actions">
                        <Link to={`/viewdetails/${_id}`} className="btn bg-[#155263] text-white">View Details</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PetCard;