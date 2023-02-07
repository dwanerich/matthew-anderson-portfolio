import './nav.css'
// import { Link } from 'react-router-dom';


const Navbar = () => {

  return(

  <div>

<input class="menu-icon" type="checkbox" id="menu-icon" name="menu-icon"/>
  	<label for="menu-icon"></label>
  	<nav class="nav">
  		<ul class="pt-5">
        <li><a href="/">home</a></li>
  			<li><a href="/editorial">editorial</a></li>
  			<li><a href="advertising">advertising</a></li>
  			<li><a href="/celebrity">celebrity</a></li>
  			<li><a href="/about">about</a></li>
  		</ul>
  	</nav>

  	{/* <div class="section-center">
  		<h1 class="mb-0">ARIANA WEISNER</h1>
      <h2 class="mb-0">STYLIST</h2>

  	</div> */}
</div>
  )


}
export default Navbar;
