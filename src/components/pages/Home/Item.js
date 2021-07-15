import dress1 from '../../../images/dress1.jpg';

const Item = ({items})=>{
    return(
        <>
        {items.map(item =>
         <div className="row text-center">
         <div className="col-md-3 col-lg-3 col-sm-3 mb-4">

                 <div className="card">
                        <a className="card-img-top">
                            <img
                                className="img-fluid"
                                src={dress1}
                                alt="..."
                            />
                        </a>
                        
        
                <div key={item._id} className="card-title">
                    
                    <div className="font-weight-bold"> {item.name}</div>
                    <div className="card-body text-muted">
                        {item.description}
                    </div>
                    <div className="font-weight-bold">{item.price}</div>
                </div>

                </div>

                </div>

         

         

         
</div>
        
            
            )}
        </>
    )
}

export default Item