import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import { withRouter } from 'react-router-dom';
import { toast } from 'react-toastify';
import EditItem from '../../pages/Renter/EditItem/EditItem';
import Admin from '../Admin';

const EditItemAdmin = (props) => {
    const history = useHistory();

    const itemId = props.match.params.itemId;

    const [categories, setCategories] = useState([]);
    const [subCategories, setSubCategories] = useState([]);

    const [name, setName] = useState();
    const [description, setDescription] = useState();
    const [price, setPrice] = useState();
    const [color, setColor] = useState();
    const [categoryId, setCategoryId] = useState();
    const [subCategoryId, setSubCategoryId] = useState();
    const [size, setSize] = useState();

    useEffect(() => {
        const loadSingleItem = async () => {
            const token = localStorage.getItem('auth-token');
            const singleItemRes = await axios.get(
                `${process.env.REACT_APP_API_URL}/api/admin/items/${itemId}`,
                { headers: { Authorization: 'Bearer ' + token } }
            );

            setName(singleItemRes.data.data.name);
            setDescription(singleItemRes.data.data.description);
            setPrice(singleItemRes.data.data.price);
            setColor(singleItemRes.data.data.color);
            setSize(singleItemRes.data.data.size);
        };
        loadSingleItem();
    }, []);

    const onItemUpdate = async (e) => {
        e.preventDefault();

        try {
            const updatedItem = {
                name,
                description,
                color,
                price,
                size,
            };
            console.log(updatedItem)

            const token = localStorage.getItem('auth-token');
            await axios.put(
                `${process.env.REACT_APP_API_URL}/api/admin/items/update/${itemId}`,
                updatedItem,
                { headers: { Authorization: 'Bearer ' + token } }
            );
            toast.success('Item has been updated.');
            history.push('/admin/item');
        } catch (err) {
            toast.error(err.response.data.message);
        }
    };

    return (
        <Admin>
            <div style={{ padding: '20px 40px' }}>
                <h3>Edit Item</h3>
                <form className="mt-4" action="" onSubmit={onItemUpdate}>
                    <div className="form-group">
                        <label htmlFor="inpuTFirstname">Name</label>
                        <input
                            type="text"
                            id="inpuTFirstname"
                            className="form-control"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="inpuTFirstname">Description</label>
                        <input
                            type="text"
                            id="inpuTFirstname"
                            className="form-control"
                            value={description}
                            required
                            onChange={(e) => setDescription(e.target.value)}
                        />
                    </div>

                    <div className="form-group">
                        <label>Price</label>
                        <input
                            type="text"
                            className="form-control"
                            value={price}
                            onChange={(e) => setPrice(e.target.value)}
                        />
                    </div>

                    <div className="form-group">
                        <label
                            for="exampleFormControlSelect1 "
                            className="form-title"
                        >
                            Color
                        </label>
                        <select
                            className="form-control"
                            id="etColor"
                            value={color}
                            onChange={(e) => setColor(e.target.value)}
                        >
                            <option selected="true" disabled="disabled">
                                -- select a color --
                            </option>
                            <option value="White">White</option>
                            <option value="Black">Black</option>
                            <option value="Blue">Blue</option>
                            <option value="Red">Red</option>
                            <option value="Green">Green</option>
                            <option value="Orange">Orange</option>
                            <option value="Gray">Gray</option>
                            <option value="Pink">Pink</option>
                            <option value="Violet">Violet</option>
                            <option value="Purple">Purple</option>
                            <option value="Maroon">Maroon</option>
                        </select>
                    </div>

                    <div className="form-group">
                        <label
                            for="exampleFormControlSelect1 "
                            className="form-title"
                        >
                            Size
                        </label>
                        <select
                            className="form-control"
                            id="etSize"
                            value={size}
                            onChange={(e) => setSize(e.target.value)}
                        >
                            <option selected="true" disabled="disabled">
                                -- select a size --
                            </option>
                            <option>Extra Small</option>
                            <option>Small</option>
                            <option>Medium</option>
                            <option>Large</option>
                            <option>Extra Large</option>
                        </select>
                    </div>

                    <button className="btn btn-lg btn-success btn-block text-uppercase mt-4">
                        Update
                    </button>
                </form>
            </div>
        </Admin>
    );
};

export default withRouter(EditItemAdmin);
