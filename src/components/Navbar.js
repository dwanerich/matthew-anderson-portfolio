import './nav.css'

const Navbar = () => {

  return(

  <div>

<input class="menu-icon" type="checkbox" id="menu-icon" name="menu-icon"/>
  	<label for="menu-icon"></label>
  	<nav class="nav">
  		<ul class="pt-5">
  			<li><a href="#">editorial</a></li>
  			<li><a href="#">advertising</a></li>
  			<li><a href="#">celebrity</a></li>
  			<li><a href="#">about</a></li>
  		</ul>
  	</nav>

  	<div class="section-center">
  		<h1 class="mb-0">ARIANA WEISNER</h1>
      <h2 class="mb-0">STYLIST</h2>

  	</div>
</div>
  )


}
export default Navbar;
