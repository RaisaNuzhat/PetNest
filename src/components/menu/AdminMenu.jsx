import { IoCreateSharp } from "react-icons/io5";
import { BsMinecart } from "react-icons/bs";
import { FaHandHoldingHeart } from "react-icons/fa";
import { BsFillHouseAddFill } from 'react-icons/bs'
import { RiHeartAdd2Fill } from "react-icons/ri";
import { IoGitPullRequestSharp } from "react-icons/io5";
import MenuItem from "./MenuItem";
const AdminMenu = () => {
    return (
        <div>
            {/* All Users */}
            <MenuItem label='All Users' address='allusers' icon={IoGitPullRequestSharp} />
            {/* All Pets */}
            <MenuItem label='All Pets' address='allpets' icon={IoGitPullRequestSharp} />
            {/* All Donations */}
            <MenuItem label='All Donation Campaigns' address='alldonations' icon={IoGitPullRequestSharp} />
            {/* add pet */}
            <MenuItem label='Add A Pet' address='addapet' icon={RiHeartAdd2Fill} />
            {/* My added pets */}
            <MenuItem label='My Added Pets' address='myaddedpets' icon={BsFillHouseAddFill} />
            {/* adoption requests */}
            <MenuItem label='Adoption Requests' address='adoptionreq' icon={IoGitPullRequestSharp} />
            {/* create donation */}
            <MenuItem label='Create Donation Campaign' address='createdonationcamp' icon={IoCreateSharp} />
            {/* my donation campaigns */}
            <MenuItem label='My Donation Campaigns' address='mydonationcamp' icon={BsMinecart} />
            {/* my donations */}
            <MenuItem label='My Donations' address='mydonations' icon={FaHandHoldingHeart} />
        </div>
    );
};
export default AdminMenu;