import React, { useContext } from 'react';
import UserContext from '../../../context/UserContext';
import { Link } from 'react-router-dom';
import './profile.css';
import User from '../../../images/user.png';

const Profile = () => {
    const { userData, setUserData } = useContext(UserContext);
    return (
        <div className="profile-container">
            <heading> My Profile </heading>
            <div class="container">
                <div class="row">
                    {userData.user ? (
                        <>
                            <div class="img">
                                <img
                                    src={
                                        userData.user.profilePicURL === null
                                            ? User
                                            : userData.user.profilePicURL
                                    }
                                    class="rounded-circle mx-auto d-block"
                                    alt=""
                                    width="130"
                                    height="140"
                                />
                            </div>

                            <div class="information col-sm-6 col-md-5">
                                <div class="name-row">
                                    <div class="fname">
                                        <label for="FirstName">
                                            First Name :
                                        </label>
                                        <p>{userData.user.firstName}</p>
                                    </div>
                                    <div class="lname">
                                        <label for="Lastname">
                                            Last Name :{' '}
                                        </label>
                                        <p>{userData.user.lastName}</p>
                                    </div>
                                </div>
                                <div class="personal-detail">
                                    <div class="a">
                                        <label for="Email">Email :</label>
                                        <p>{userData.user.email}</p>
                                    </div>
                                    <div class="b">
                                        <label for="Number">Gender :</label>
                                        <p>
                                            {userData.user.gender === 'ma'
                                                ? 'Male'
                                                : 'Female'}
                                        </p>
                                    </div>
                                    <div class="c">
                                        <label for="Address">Address : </label>
                                        <p>{userData.user.address}</p>
                                    </div>
                                    <div class="d">
                                        <label for="City">City : </label>
                                        <p>{userData.user.city}</p>
                                    </div>
                                    <div class="e">
                                        <label for="Country">Country : </label>
                                        <p>{userData.user.country}</p>
                                    </div>
                                    <Link to={`/edit-profile`}>
                                        <button
                                            id="profilebtn"
                                            class="btn btn-primary mt-3"
                                        >
                                            Edit Profile
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </>
                    ) : null}
                </div>
            </div>
        </div>
    );
};

export default Profile;
