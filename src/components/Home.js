// import ModalImage from 'react-modal-image'
import { Brands } from "./Brands";



const Home = () => {
  return (
      <center>
    <div>
    <div>
			<img src={require("../img/a_w_style_banners.gif")} alt={"Ariana Weisner"} style={{width: '70%'}}/>
  </div>
    <div>
			<img src={require("../img/tagline.png")} alt={"Ariana Weisner"} style={{width: '100%'}}/>
  <hr />
  </div>
  <div>
			<img src={require("../img/styling.png")} alt={"Ariana Weisner"} style={{width: '90%'}}/>
  </div>

  <br />
  <div>
      <img src={require("../img/ps.png")} alt={"Ariana Weisner"} style={{width: '90%'}}/>
  </div>

  <div>
  <img src={require("../img/closet.png")} alt={"Ariana Weisner"} style={{width: '90%'}}/>
  </div>

      </div>


<div class="mb-0">

      < Brands />

	</div>
      </center>
)}


export default Home;
