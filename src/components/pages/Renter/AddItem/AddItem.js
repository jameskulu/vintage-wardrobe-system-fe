import axios from 'axios';
import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';
import './addItem.css';

const AddItem = () => {
    const history = useHistory();
    const [categories, setCategories] = useState([]);
    const [subCategories, setSubCategories] = useState([]);
    const [disable, setDisable] = useState(false);

    const [name, setName] = useState();
    const [description, setDescription] = useState();
    const [price, setPrice] = useState();
    const [categoryId, setCategoryId] = useState();
    const [subCategoryId, setSubCategoryId] = useState();
    const [color, setColor] = useState();
    const [size, setSize] = useState();
    const [images, setImages] = useState([]);

    useEffect(() => {
        const loadCategories = async () => {
            const categoriesResponse = await axios.get(
                `${process.env.REACT_APP_API_URL}/api/categories`
            );
            setCategories(categoriesResponse.data.data);

            // const subCategoriesResponse = await axios.get(
            //     `${process.env.REACT_APP_API_URL}/api/sub-categories`
            // );
            // setSubCategories(subCategoriesResponse.data.data);
        };
        loadCategories();
    }, []);

    const onItemAdd = async (e) => {
        e.preventDefault();
        setDisable(true);

        try {
            // const newItem = {
            //     name,
            //     description,
            //     price: parseInt(Math.abs(price)),
            //     size,
            //     color,
            //     subCategoryId,
            //     images
            // };
            const newItem = new FormData();
            newItem.append('name', name);
            newItem.append('description', description);
            newItem.append('price', parseInt(Math.abs(price)));
            newItem.append('size', size);
            newItem.append('color', color);
            newItem.append('subCategoryId', subCategoryId);
            newItem.append('images', images);

            for (let i = 0; i < images.length; i++) {
                newItem.append('images', images[i]);
            }

            const token = localStorage.getItem('auth-token');
            await axios.post(
                `${process.env.REACT_APP_API_URL}/api/renter/items/new`,
                newItem,
                { headers: { Authorization: 'Bearer ' + token } }
            );
            toast.success('New Item has been added.');

            history.push('/renter/items');
        } catch (err) {
            setDisable(false);
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
            const sortedCategoriesResponse =
                categoriesResponse.data.data.category.reverse();
            setSubCategories(sortedCategoriesResponse);
        } catch (err) {
            toast.error(err.response.data.message);
        }
    };

    return (
        <div className="add-item-container">
            <div className="container-fluid">
                <section>
                    <div className="row">
                        <div className="col-md-12 col-sm-12 add-item">
                            <div className="text-center">
                                <h4 className="text-light text-center add-item-text">
                                    Add An Item
                                </h4>
                            </div>
                        </div>
                    </div>
                </section>

                <div className="row">
                    <div className=" col-md-12 col-sm-12">
                        <form className=" col-md-4 offset-md-4  ">
                            <div className="form-group">
                                <label
                                    for="formGroupExampleInput "
                                    className="form-title"
                                >
                                    Name
                                </label>
                                <input
                                    className="form-control"
                                    id="itemName"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                />
                            </div>
                            <div className="form-group">
                                <label
                                    for="exampleFormControlTextarea1 "
                                    className="form-title"
                                >
                                    Description
                                </label>
                                <textarea
                                    className="form-control"
                                    id="itemDescription"
                                    rows="3"
                                    value={description}
                                    onChange={(e) =>
                                        setDescription(e.target.value)
                                    }
                                ></textarea>
                            </div>
                            <div className="form-group">
                                <label
                                    for="formGroupExampleInput2 "
                                    className="form-title"
                                >
                                    Price
                                </label>
                                <input
                                    type="number"
                                    className="form-control"
                                    id="itemPrice"
                                    value={price}
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
                                    onChange={(e) =>
                                        onCategoryChange(e, categoryId)
                                    }
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
                                    onChange={(e) =>
                                        setSubCategoryId(e.target.value)
                                    }
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
                                <label
                                    for="exampleFormControlFile1 "
                                    className="form-title"
                                >
                                    Images
                                </label>
                                <input
                                    type="file"
                                    multiple
                                    onChange={(e) => setImages(e.target.files)}
                                    className="form-control-file"
                                    id="itemImage"
                                />
                            </div>

                            <button
                                disabled={disable}
                                onClick={onItemAdd}
                                type="button"
                                id = "btnAdd"
                                className="btn edit col-md-12"
                            >
                                Upload
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddItem;
