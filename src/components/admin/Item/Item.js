import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import { toast } from 'react-toastify';
import Admin from '../Admin';
import axios from 'axios';
import NoImage from '../../../images/noimage.jpg';


const ItemAdmin =() => {

    const [items, setItems] = useState([]);
    const [deleted, setDeleted] = useState([]);


    useEffect(() => {
        const loadItems = async () => {
            const token = localStorage.getItem('auth-token');
            const itemRes = await axios.get(
                `${process.env.REACT_APP_API_URL}/api/admin/items`,
                { headers: { Authorization: 'Bearer ' + token } }
            );
            const sortedItemsRes = itemRes.data.data.reverse();
            
            setItems(sortedItemsRes);
        };

        loadItems();
    }, [deleted]);


    const onItemDelete = async (id) => {
        try {
            const token = localStorage.getItem('auth-token');
            await axios.delete(
                `${process.env.REACT_APP_API_URL}/api/admin/items/delete/${id}`,
                { headers: { Authorization: 'Bearer ' + token } }
            );
            toast.success('Item has been deleted.');
            setDeleted((prevValue) => !prevValue);
        } catch (err) {
            toast.error(err.response.data.msg);
        }
    };

    return(

        <Admin>
        <div class="card mb-3">
            <div class="card-header">
                <i class="fas fa-table"></i>Items Table
            </div>
            <div class="card-body">
                <Link to="/admin/items/add">
                    <button className="btn btn-success mb-4">
                        Add Items
                    </button>
                </Link>
                <div class="table-responsive">
                    <table
                        class="table table-bordered"
                        id="dataTable"
                        width="100%"
                        cellspacing="0"
                    >
                        <thead>
                            <tr>
                                <th>Image</th>
                                <th>Name</th>
                                <th>Description</th>
                                <th>Price</th>
                                <th>Color</th>
                                <th>Size</th>
                                <th>Action</th>
                            </tr>
                        </thead>

                        <tbody>
                            {items.map((item) => {
                                return (
                                    <tr>
                                        <td><img width="70" src={item.images[0] || NoImage } alt="" /></td>
                                        <td>{item.name} </td>
                                        <td>{item.description}</td>
                                        <td>{item.price}</td>
                                       
                                        <td>{item.color}</td>
                                        <td>{item.size}</td>
                                        
                                        <td>
                                            <Link
                                                to={`/admin/items/edit/${item.id}`}
                                                className="text-primary"
                                            >
                                                Update{' '}
                                            </Link>
                                            <Link
                                                className="text-danger"
                                                onClick={() => {
                                                    if (
                                                        window.confirm(
                                                            'Are you sure want to delete this Item ?'
                                                        )
                                                    ) {
                                                        onItemDelete(
                                                            item.id
                                                        );
                                                    }
                                                }}
                                            >
                                                {' '}
                                                Delete
                                            </Link>
                                        </td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </Admin>

    )
}

export default withRouter(ItemAdmin);