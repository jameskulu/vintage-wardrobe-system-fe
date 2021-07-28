import axios from 'axios';
import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';
import '../AddItem/addItem.css';

const EditItem = (props) => {
    const history = useHistory();
    const itemId = props.match.params.itemId;
    const [disable, setDisable] = useState(false);

    const [name, setName] = useState();
    const [description, setDescription] = useState();
    const [price, setPrice] = useState();
    const [color, setColor] = useState();
    const [size, setSize] = useState();

    useEffect(() => {
        const loadSingleItem = async () => {
            const singleItemResponse = await axios.get(
                `${process.env.REACT_APP_API_URL}/api/items/${itemId}`
            );

            setName(singleItemResponse.data.data.name);
            setDescription(singleItemResponse.data.data.description);
            setPrice(singleItemResponse.data.data.price);
            setSize(singleItemResponse.data.data.size);
            setColor(singleItemResponse.data.data.color);
        };

        loadSingleItem();
    }, []);

    const onItemUpdate = async (e) => {
        e.preventDefault();
        setDisable(true);

        try {
            const updateItem = {
                name,
                description,
                price: parseInt(Math.abs(price)),
                size,
                color
            };
            console.log(updateItem);

            const token = localStorage.getItem('auth-token');
            await axios.put(
                `${process.env.REACT_APP_API_URL}/api/renter/items/update/${itemId}`,
                updateItem,
                { headers: { Authorization: 'Bearer ' + token } }
            );
            toast.success('Items updated');
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
                                    Edit Item
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
                                    Color
                                </label>
                                <select
                                    className="form-control"
                                    id="exampleFormControlSelect1"
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
                                    id="exampleFormControlSelect1"
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

                            <button
                                disabled={disable}
                                onClick={onItemUpdate}
                                type="button"
                                className="btn edit col-md-12"
                            >
                                Update
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EditItem;
