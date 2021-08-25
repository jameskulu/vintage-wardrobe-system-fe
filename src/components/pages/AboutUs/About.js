import './about.css';
import fashion from '../../../images/fashion.png';
import flex from '../../../images/flex.png';
import sustain from '../../../images/sustain.png';
import tag from '../../../images/tag.png';
import clothing from '../../../images/clothing.jpg';

const About = () => {
    return (
        <div class="about-container"> 
        <div class="container-fluid p-0 m-0">
        <div class="row p-0 m-0">

            <div class="col col-12 col-sm-12 col-md-12 aboutUs p-0">
			<headings class="aboutUs">
                <h2>My Items</h2>
            </headings>               
            </div>


			<div class="col col-12 col-sm-12 col-md-6 align-items-center px-5 mt-5 mb-5">

				<h3 class="font-weight-bold text-left ">A community that shares more than just clothes. </h3>

				<p class="text-left">
					<br>
					</br>We’re not just a closet; we’re a community — one that swaps everything from clothes, to inspiration and ideas. When we’re able to wear what makes us feel our best, 
				we can be our best selves. And with the Closet in the Cloud, we can more freely express ourselves. 
				We encourage our members to explore all the different aspects of their style, 
				whether it’s renting an outfit for every day, 
				or finding a pre-loved designer piece to keep forever.</p>					
			</div>


			<div class="col col-12 col-sm-12 col-md-6 m-0 p-0 px-5 mt-5 mb-5">

				<img src={clothing} class="img-fluid"/>
			</div>
			
							
			<div class="media col-md-6 col-12 px-5 py-3 m-0 mb-5 ">
				<img class="align-self-start mr-3 img-thumbnail" src={fashion} alt="Generic placeholder image"/>
				<div class="media-body">
					<h5 class="mt-0">Fashion Freedom</h5>
					<p>Explore different styles, discover designers, and try new things from the largest designer rental closet.</p>
				</div>
			</div>

			<div class="media col-md-6 offset-md-4 col-12 px-5 py-3 m-0 mb-5">
				<img class="align-self-start mr-3 img-thumbnail" src={tag} alt="Generic placeholder image"/>
				<div class="media-body">

					<h5 class="mt-0">Total Flexibility</h5>
					<p>Let's be real: your style, size, and budget change over time. Now, your closet can too.</p>

				</div>
			</div>

			<div class="media col-md-6 col-12 px-5 py-3 m-0 mb-5 ">
				<img class="align-self-start mr-3 img-thumbnail" src={flex} alt="Generic placeholder image"/>
				<div class="media-body">

					<h5 class="mt-0">Forget the Price Tag</h5>
					<p>Finally the solution to wearing everything you want, no purchase necessary.</p>

				</div>
			</div>

			<div class="media col-md-6 offset-md-4 col-12 px-5 py-3 m-0 mb-5 ">
				<img class="align-self-start mr-3 img-thumbnail" src={sustain} alt="Generic placeholder image"/>
				<div class="media-body">

					<h5 class="mt-0">Sustainable Footprint</h5>
					<p>Most clothes we buy end up in the back of closets or landfills. Power the sharing economy and rent instead.</p>

				</div>
			</div>
			
			<div class="rent col col-12  align-items-center px-5 mt-2">
				<h3 class="font-weight-bold text-center">Rent and Book </h3>

				<p class="text-left">
					<br>
					</br>
				To rent an item, go to "Rentals", either on navigation bar or footer, and click on "Add an Item". Then, you can add an item 
				that you want to rent. You have to provide the item details; size, color, description, and so on. After saving it, you can view that item 
				in "My Items". Below this, there is "Rent Orderes", here you can accept, reject or change status of the item that you had kept for rent. <br></br>
				To book an item, click on any item that you like. You will then be redirected to the Product Detail page, where you can view that item's details and 
				"Add to Cart", selecting the number of days you like. After adding to cart, you are redirected to checkout page, where you can enter your details and Place Order.
				
				</p>					
			</div>

			


	</div>
</div>
</div>
    )
}

export default About
