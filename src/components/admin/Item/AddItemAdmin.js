import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import { withRouter } from 'react-router-dom';
import { toast } from 'react-toastify';
import Admin from '../Admin';

const AddItemAdmin = () => {
    const history = useHistory();

    const [categories, setCategories] = useState([]);
    const [subCategories, setSubCategories] = useState([]);

    const [name, setName] = useState();
    const [description, setDescription] = useState();
    const [price, setPrice] = useState();
    const [color, setColor] = useState();
    const [categoryId, setCategoryId] = useState();
    const [subCategoryId, setSubCategoryId] = useState();
    const [size, setSize] = useState();
    const [images, setImages] = useState([]);

    useEffect(() => {
        const loadCategories = async () => {
            const categoriesResponse = await axios.get(
                `${process.env.REACT_APP_API_URL}/api/categories`
            );
            setCategories(categoriesResponse.data.data);
        };
        loadCategories();
    }, []);

    const onItemAdd = async (e) => {
        e.preventDefault();

        try {
            const newItem = new FormData();
            newItem.append('name', name);
            newItem.append('description', description);
            newItem.append('price', parseInt(Math.abs(price)));
            newItem.append('color', color);
            newItem.append('size', size);
            newItem.append('subCategoryId', subCategoryId);
            newItem.append('images', images);

            
            for (let i = 0; i < images.length; i++) {
                newItem.append('images', images[i]);
            }

            const token = localStorage.getItem('auth-token');
            await axios.post(
                `${process.env.REACT_APP_API_URL}/api/admin/items/new`,
                newItem,
                { headers: { Authorization: 'Bearer ' + token } }
            );

            toast.success('New Item has been added.');
            setName('');
            setDescription('');
            setPrice('');
            setColor('');
            setSize('');

            history.push('/admin/item');
        } catch (err) {
            toast.error(err.response.data.message);
        }
    };

    const onCategoryChange = async (e) => {
        const id = e.target.value;
        setCategoryId(id);
        try {
            const categoriesResponse = await axios.get(
                `${process.env.REACT_APP_API_URL}/api/categories/${id}`
            );
            setSubCategories(categoriesResponse.data.data.category);
        } catch (err) {
            toast.error(err.response.data.message);
        }
    };
    return (
        <Admin>
            <div style={{ padding: '20px 40px' }}>
                <h3>Add Item</h3>
                <form className="mt-4" action="" onSubmit={onItemAdd}>
                    <div className="form-group">
                        <label htmlFor="inpuTFirstname">Name</label>
                        <input
                            type="text"
                            id="inpuTFirstname"
                            className="form-control name"
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
                            className="form-control description"
                            value={description}
                            required
                            onChange={(e) => setDescription(e.target.value)}
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="inpuTFirstname">Price</label>
                        <input
                            type="text"
                            id="inpuTFirstname"
                            className="form-control price"
                            value={price}
                            required
                            onChange={(e) => setPrice(e.target.value)}
                        />
                    </div>

                    <div className="form-group">
                        <label
                            for="exampleFormControlSelect1 "
                            className="form-title"
                        >
                            Category
                        </label>
                        <select
                            className="form-control"
                            id="itemCategory"
                            value={categoryId}
                            onChange={(e) => onCategoryChange(e, categoryId)}
                        >
                            <option selected="true" disabled="disabled">
                                -- select a category --
                            </option>
                            {categories.map((category) => {
                                return (
                                    <option
                                        key={category.id}
                                        value={category.id}
                                    >
                                        {category.name}
                                    </option>
                                );
                            })}
                        </select>
                    </div>

                    <div className="form-group">
                        <label
                            for="exampleFormControlSelect1 "
                            className="form-title"
                        >
                            Sub Category
                        </label>
                        <select
                            className="form-control"
                            id="itemSubcategory"
                            value={subCategoryId}
                            onChange={(e) => setSubCategoryId(e.target.value)}
                        >
                            <option selected="true" disabled="disabled">
                                -- select a sub category --
                            </option>
                            {subCategories.map((subCategory) => {
                                return (
                                    <option
                                        key={subCategory.id}
                                        value={subCategory.id}
                                    >
                                        {subCategory.name}
                                    </option>
                                );
                            })}
                        </select>
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
                            id="itemColor"
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
                            id="itemSize"
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

                    <div className="form-group">
                        <label>Item Image</label>
                        <input
                            type="file"
                            className="form-control"
                            multiple
                            onChange={(e) => setImages(e.target.files)}
                            accept="image/*"
                        />
                    </div>

                    <button className="btn btn-lg btn-success btn-block text-uppercase mt-4">
                        Add
                    </button>
                </form>
            </div>
        </Admin>
    );
};

export default withRouter(AddItemAdmin);
