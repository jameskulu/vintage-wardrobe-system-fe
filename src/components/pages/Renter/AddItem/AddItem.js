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

    useEffect(() => {
        const loadCategories = async () => {
            const categoriesResponse = await axios.get(
                `${process.env.REACT_APP_API_URL}/api/categories`
            );
            setCategories(categoriesResponse.data.data);

            const subCategoriesResponse = await axios.get(
                `${process.env.REACT_APP_API_URL}/api/sub-categories`
            );
            setSubCategories(subCategoriesResponse.data.data);
        };
        loadCategories();
    }, []);

    const onItemAdd = async (e) => {
        e.preventDefault();
        setDisable(true);

        try {
            const newItem = {
                name,
                description,
                price: parseInt(price),
                subCategoryId,
            };
            // const newItem = new FormData() // new line
            // newItem.append('name', name)
            // newItem.append('description', description)
            // newItem.append('price', price)
            // newItem.append('subCategoryId', subCategoryId)

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
                                    id="formGroupExampleInput"
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
                                    id="exampleFormControlTextarea1"
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
                                    id="formGroupExampleInput2"
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
                                    id="exampleFormControlSelect1"
                                    value={categoryId}
                                    onChange={(e) =>
                                        setCategoryId(e.target.value)
                                    }
                                >
                                    <option disabled defaultValue>
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
                                    id="exampleFormControlSelect1"
                                    value={subCategoryId}
                                    onChange={(e) =>
                                        setSubCategoryId(e.target.value)
                                    }
                                >
                                    <option disabled defaultValue>
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

                            {/* <div className="form-group">
                                <label
                                    for="exampleFormControlSelect1 "
                                    className="form-title"
                                >
                                    Color
                                </label>
                                <select
                                    className="form-control"
                                    id="exampleFormControlSelect1"
                                    value={color}
                                    onChange={(e) => setColor(e.target.value)}
                                >
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
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
                                    id="exampleFormControlSelect1"
                                    value={size}
                                    onChange={(e) => setSize(e.target.value)}
                                >
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
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
                                    className="form-control-file"
                                    id="exampleFormControlFile1"
                                ></input>
                            </div> */}

                            <button
                                disabled={disable}
                                onClick={onItemAdd}
                                type="button"
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
