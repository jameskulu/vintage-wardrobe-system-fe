import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import './editProfile.css'
const EditProfile =()=>{
    const history = useHistory();
    const [firstName, setFirstName] = useState();
    const [lastName, setLastName] = useState();
    
    const [gender, setGender] = useState();
    const [address, setAddress] = useState();
    const [city, setCity] = useState();
    const [country, setCountry] = useState();

    useEffect(() => {
        const loadUserDetails = async () => {
            const token = localStorage.getItem('auth-token');
            const userDetailsResponse = await axios.get(
                `${process.env.REACT_APP_API_URL}/api/users/profile`,
                { headers: { Authorization: 'Bearer ' + token } }
            );
            
            console.log(userDetailsResponse)

            setFirstName(userDetailsResponse.data.data.firstName);
            setLastName(userDetailsResponse.data.data.lastName);
            
            setGender(userDetailsResponse.data.data.gender);
            setAddress(userDetailsResponse.data.data.address);
            setCity(userDetailsResponse.data.data.city);
            setCountry(userDetailsResponse.data.data.country);

        };

        loadUserDetails();
    }, []);



   
        const onEditProfile = async (e) => {
            e.preventDefault();
            try {
                const editProfile = {
                    firstName,
                    lastName,
                    
                    gender,
                    address,
                    city,
                    country
                };
                console.log(editProfile)
                
    
                const token = localStorage.getItem('auth-token');
                console.log(token)
                await axios.put(
                    `${process.env.REACT_APP_API_URL}/api/users/profile/edit`,
                    editProfile,
                    { headers: { Authorization: 'Bearer ' + token } }
                );
                toast.success('Profile updated');
                history.push('/myprofile');
               
                
            } catch (err) {
                
                toast.error(err.response.data.message);
            }
        };
   
    return (
      
        
<div class="container">
      <div class="row">
                <div class="img">
                <div class="edit-btn">
            <img
              src="https://prestigeportraits.com/wp-content/themes/prestige/assets/build/images/galleries/gallery-2/gallery-image-3.jpg"
              class="rounded-circle mx-auto d-block"
              alt="image"
              width="130"
              height="140"
            />
            <button class="butn btn-primary">
            <i class="fas fa-pen"></i>
            </button>
          </div>
                </div>
                <div class="form-info col-sm-8 col-md-7">
                <form>
                    <form>
                    <div class="form-row">
                        <div class="form-group col-md-6">
                            <label for="Firstname">First Name</label>
                            <input
                                type="text"
                                class="form-control"
                                id="Firstname"
                                placeholder="First Name"
                                value={firstName}
                                onChange={(e) => setFirstName(e.target.value)}
                            />
                        </div>
                        <div class="form-group col-md-6">
                            <label for="Lastname">Last Name</label>
                            <input
                                type="text"
                                class="form-control"
                                id="Lastname"
                                placeholder="Last Name"
                                value={lastName}
                                onChange={(e) => setLastName(e.target.value)}
                            />
                        </div>
                    </div>

                    <div class="form-group">
                        <label for="Phone Number">Phone Number</label>
                        <input
                        type="text"
                        class="form-control"
                        id="Phone Number"
                        placeholder="Phone Number"
                        value={gender}
                        onChange={(e) => setGender(e.target.value)}
                        />
                    </div>
                    <div class="form-group">
                        <label for="Address">Address</label>
                        <input
                        type="text"
                        class="form-control"
                        id="Address"
                        placeholder="Address"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                        />
                    </div>
                    <div class="form-row">
                        <div class="form-group col-md-6">
                        <label for="Country">Country</label>
                        <input type="text" class="form-control" id="Country"
                        value={country}
                        onChange={(e) => setCountry(e.target.value)} />
                        </div>
                        <div class="form-group col-md-6">
                        <label for="City">City</label>
                        <input type="text" class="form-control" id="City" 
                        value={city}
                        onChange={(e) => setCity(e.target.value)} />
                        </div>
                    </div>
                    <button type="submit"  onClick= {onEditProfile} id="updatebtn" class="btn btn-primary" 
                    >Save</button>
                        
                    
                    </form>
                </form>
                </div>

            </div>
      </div>

  
  
    )
}

export default EditProfile;