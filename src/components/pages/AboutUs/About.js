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

				<p class="text-left">We’re not just a closet; we’re a community — one that swaps everything from clothes, to inspiration and ideas. When we’re able to wear what makes us feel our best, we can be our best selves. And with the Closet in the Cloud, women can more freely express themselves and dress for the incredible lives they lead. We encourage our members to explore all the different aspects of their style, whether it’s renting an outfit for every day or a special occasion, or finding a pre-loved designer piece to keep forever.</p>					
			</div>

			<div class="col col-12 col-sm-12 col-md-6 m-0 p-0 px-5 mt-5 mb-5">
				<img src={clothing} class="img-fluid"/>
			</div>
							
			<div class="media col-md-6 col-12 px-5 py-3 m-0 mb-5 ">
				<img class="align-self-start mr-3 img-thumbnail" src={fashion} alt="Generic placeholder image"/>
				<div class="media-body">
					<h5 class="mt-0">Fashion Freedom</h5>
					<p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin.Donec lacinia congue felis in faucibus.</p>
				</div>
			</div>

			<div class="media col-md-6 offset-md-4 col-12 px-5 py-3 m-0 mb-5">
				<img class="align-self-start mr-3 img-thumbnail" src={tag} alt="Generic placeholder image"/>
				<div class="media-body">
					<h5 class="mt-0">Forget the Price Tag</h5>
					<p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin.Donec lacinia congue felis in faucibus.</p>
				</div>
			</div>

			<div class="media col-md-6 col-12 px-5 py-3 m-0 mb-5 ">
				<img class="align-self-start mr-3 img-thumbnail" src={flex} alt="Generic placeholder image"/>
				<div class="media-body">
					<h5 class="mt-0">Total Flexibility</h5>
					<p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin.Donec lacinia congue felis in faucibus.</p>
				</div>
			</div>

			<div class="media col-md-6 offset-md-4 col-12 px-5 py-3 m-0 mb-5 ">
				<img class="align-self-start mr-3 img-thumbnail" src={sustain} alt="Generic placeholder image"/>
				<div class="media-body">
					<h5 class="mt-0">Sustainable FootPrint</h5>
					<p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin.Donec lacinia congue felis in faucibus.</p>
				</div>
			</div>


	</div>
</div>
</div>
    )
}

export default About
