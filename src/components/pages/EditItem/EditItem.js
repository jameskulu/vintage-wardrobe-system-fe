import axios from 'axios';
import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';

import '../AddItem/addItem.css'

const EditItem =(props)=> {
	
	const itemId = props.match.params.itemId;
	const [categories, setCategories] = useState([]);
    const [subCategories, setSubCategories] = useState([]);
    
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

		const loadsingleItem = async () => {
			const singleItemResponse = await axios.get(`${process.env.REACT_APP_API_URL}/api/items/${itemId}`)

			setName(singleItemResponse.data.data.name)
			setDescription(singleItemResponse.data.data.description)
			setPrice(singleItemResponse.data.data.price)
			setCategoryId(singleItemResponse.data.data.categoryId)
			setSubCategoryId(singleItemResponse.data.data.subCategoryId)
			setColor(singleItemResponse.data.data.color)
			setSize(singleItemResponse.data.data.size)
		}

		loadsingleItem();
    }, []);

	const onItemUpdate = async (e) => {
		e.preventDefault()

		try {
			const updateItem = new FormData ()
			updateItem.append('name',name)
			updateItem.append('description',description)
			updateItem.append('price',price)
			// updateItem.append('categoryId',categoryId)
			updateItem.append('subCategoryId',subCategoryId)
			// updateItem.append('color',color)
			// updateItem.append('size',size)

			await axios.put(`${process.env.REACT_APP_API_URL}/api/renter/items/update/`+ itemId)
			toast.success("Items updated")


		}

		catch(err) {
			toast.error(err.response.data.msg)
		}
	}


	


    return(

        <div class="container-fluid">

    <section>
        <div class="row">
            <div class="col-md-12 col-sm-12 add-item" >
                <div class="text-center">
                    <h4 class="text-light text-center add-item-text">Add an Item</h4>

                </div>
               
                    
                </div>
            </div>
       

    </section>


		<div class="row"> 
			<div class=" col-md-12 col-sm-12">

	<form class=" col-md-6 offset-md-3 product-form " >
				  <div class="form-group">
				    <label for="formGroupExampleInput"> Name</label>
				    <input class="form-control" id="formGroupExampleInput"  value={name}
                                    onChange={(e) => setName(e.target.value)}/>
				  </div>
				  <div class="form-group">
				    <label for="exampleFormControlTextarea1">Description</label>
				    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"
                     value={description}
                     onChange={(e) => setDescription(e.target.value)}></textarea>
				  </div>
  				<div class="form-group">
				    <label for="formGroupExampleInput2">Price</label>
				    <input  class="form-control" id="formGroupExampleInput2"  value={price}
                                    onChange={(e) => setPrice(e.target.value)}/>
			  	</div>
			  	 <div class="form-group">
				    <label for="exampleFormControlSelect1"> Category</label>
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

				  <div class="form-group">
				    <label for="exampleFormControlSelect1">Sub-Category</label>
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

				  <div class="form-group">
				    <label for="exampleFormControlSelect1">Color</label>
				    <select class="form-control" id="exampleFormControlSelect1"  value={color}
                                    onChange={(e) => setColor(e.target.value)}>
				      <option>1</option>
				      <option>2</option>
				      <option>3</option>
				      <option>4</option>
				      <option>5</option>
				    </select>
				  </div>

				  <div class="form-group">
				    <label for="exampleFormControlSelect1">Size</label>
				    <select class="form-control" id="exampleFormControlSelect1"  value={size}
                                    onChange={(e) => setSize(e.target.value)}>
				      <option>1</option>
				      <option>2</option>
				      <option>3</option>
				      <option>4</option>
				      <option>5</option>
				    </select>
				  </div>

				   <div class="form-group">
				    <label for="exampleFormControlFile1">Images</label>
				    <input type="file" class="form-control-file" id="exampleFormControlFile1"/>
				  </div>
				  
				  <button type="button" class="btn edit col-md-12 " onClick = {onItemUpdate}>Update</button>
				      

	</form>

			</div>
		</div>

	</div>
        
    )
}

export default EditItem