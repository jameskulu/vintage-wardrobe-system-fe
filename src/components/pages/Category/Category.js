import './category.css';
import img1 from '../../../images/1.jpg';
import img2 from '../../../images/2.jpg';
import img3 from '../../../images/3.jpg';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Slider } from '@material-ui/core';

const Category = (props) => {
    const { categoryName } = props.match.params;

    const [items, setItems] = useState([]);
    let [filteredItems, setFilteredItems] = useState([]);
    const [subCategories, setSubCategories] = useState([]);

    const [subCategoryFilter, setSubCategoryFilter] = useState();

    const [priceSlider, setPriceSlider] = useState([0, 10000]);

    useEffect(() => {
        const displayItems = async () => {
            const itemResponse = await axios.get(
                `${process.env.REACT_APP_API_URL}/api/categories/items/${categoryName}`
            );
            const sortedItemResponse = itemResponse.data.data.reverse();
            setItems(sortedItemResponse);
            setFilteredItems(sortedItemResponse);

            const categoriesResponse = await axios.get(
                `${process.env.REACT_APP_API_URL}/api/categories/name/${categoryName}`
            );
            setSubCategories(categoriesResponse.data.data.category);
        };
        displayItems();
    }, [categoryName]);

    const onSubcategoryChange = (e) => {
        const value = e.target.value;
        setSubCategoryFilter(value);
        filteredItems = [...items];
        const filItems = filteredItems.filter(
            (item) =>
                item.subCategory.name === value &&
                item.price > priceSlider[0] &&
                item.price < priceSlider[1]
        );
        setFilteredItems(filItems);
    };

    const onSliderChange = (event, newValue) => {
        setPriceSlider(newValue);
        filteredItems = [...items];
        let filItems;

        if (subCategoryFilter === undefined) {
            filItems = filteredItems.filter(
                (item) => item.price > newValue[0] && item.price < newValue[1]
            );
        } else {
            filItems = filteredItems.filter(
                (item) =>
                    item.price > newValue[0] &&
                    item.price < newValue[1] &&
                    item.subCategory.name === subCategoryFilter
            );
        }
        setFilteredItems(filItems);
    };

    const onRemoveFilter = () => {
        setSubCategoryFilter(undefined);
        setPriceSlider([0, 10000]);
        setFilteredItems(items);

        var ele = document.getElementsByName('subcategory');
        for (let i = 0; i < ele.length; i++) {
            ele[i].checked = false;
        }
    };

    return (
        <div class="category-container">
            <heading>{categoryName}</heading>
            <div class="container">
                <div class="row">
                    <div class="col-5 col-sm-3">
                        <h1>Category</h1>
                        <p className="mt-3">
                            <Link to="/category/Men">Men</Link>
                        </p>
                        <p>
                            <Link to="/category/Women">Women</Link>
                        </p>
                        <p>
                            <Link to="/category/Kids">Kids</Link>
                        </p>
                        <h1 className="mt-4 mb-2">Filters</h1>

                        <Link
                            style={{ textDecoration: 'underline' }}
                            onClick={onRemoveFilter}
                        >
                            remove filter
                        </Link>
                        {subCategories.map((sub) => (
                            <div className="select-item">
                                <input
                                    type="radio"
                                    name="subcategory"
                                    id={`sub-category-${sub.name}`}
                                    className="check-input"
                                    value={sub.name}
                                    onChange={(e) => onSubcategoryChange(e)}
                                />
                                <label for={`sub-category-${sub.name}`}>
                                    {sub.name}
                                </label>
                            </div>
                        ))}

                        <h3>Price (Rs)</h3>
                        <Slider
                            value={priceSlider}
                            onChange={onSliderChange}
                            valueLabelDisplay="auto"
                            min={0}
                            max={10000}
                            title="Choose price range"
                            aria-labelledby="range-slider"
                        />

                        <h3>Colors</h3>
                        <div class="color">
                            <div class="filter-input-pairs filter-input-pairs--colors">
                                <div class="input-wrapper grid-color-1">
                                    <input type="checkbox" />
                                </div>
                                <div class="input-wrapper grid-color-2">
                                    <input type="checkbox" />
                                </div>
                                <div class="input-wrapper grid-color-3">
                                    <input type="checkbox" />
                                </div>
                                <div class="input-wrapper grid-color-4">
                                    <input type="checkbox" />
                                </div>
                                <div class="input-wrapper grid-color-5">
                                    <input type="checkbox" />
                                </div>
                                <div class="input-wrapper grid-color-6">
                                    <input type="checkbox" />
                                </div>
                                <div class="input-wrapper grid-color-7">
                                    <input type="checkbox" />
                                </div>
                                <div class="input-wrapper grid-color-8">
                                    <input type="checkbox" />
                                </div>
                                <div class="input-wrapper grid-color-9">
                                    <input type="checkbox" />
                                </div>
                                <div class="input-wrapper grid-color-10">
                                    <input type="checkbox" />
                                </div>
                                <div class="input-wrapper grid-color-11">
                                    <input type="checkbox" />
                                </div>
                                <div class="input-wrapper grid-color-12">
                                    <input type="checkbox" />
                                </div>
                                <div class="input-wrapper grid-color-13">
                                    <input type="checkbox" />
                                </div>
                                <div class="input-wrapper grid-color-14">
                                    <input type="checkbox" />
                                </div>
                                <div class="input-wrapper grid-color-15">
                                    <input type="checkbox" />
                                </div>
                                <div class="input-wrapper grid-color-16">
                                    <input type="checkbox" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-9 col-7">
                        <div class="row product-section">
                            {filteredItems.length > 0 ? (
                                <>
                                    {filteredItems.map((item) => (
                                        <div class="card">
                                            <Link to={`/items/${item.id}`}>
                                                <img
                                                    class="card-img-top"
                                                    src={img1}
                                                    alt="Card cap"
                                                />
                                            </Link>
                                            <div class="card-body">
                                                <Link to={`/items/${item.id}`}>
                                                    <h5 class="card-title">
                                                        {item.name}
                                                    </h5>
                                                </Link>
                                                <p class="card-text">
                                                    {item.subCategory.name}
                                                </p>
                                                <h5 class="card-title">
                                                    Rs. {item.price} To Rent
                                                </h5>
                                            </div>
                                        </div>
                                    ))}
                                </>
                            ) : (
                                <p>
                                    No items available in {categoryName} section
                                </p>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Category;
