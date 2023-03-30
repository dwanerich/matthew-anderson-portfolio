// import ModalImage from 'react-modal-image'
import { Brands } from "./Brands";



const Home = () => {
  return (
      <center>
    <div>
    <div>
			<img src={require("../img/tagline.png")} alt={"Ariana Weisner"} style={{width: '100%'}}/>
  </div>
  <div>
			<img src={require("../img/styling.png")} alt={"Ariana Weisner"} style={{width: '90%'}}/>
  </div>
  <hr />
  <div>
      <img src={require("../img/ps.png")} alt={"Ariana Weisner"} style={{width: '90%'}}/>
  </div>
    <hr />
  <div>
  <img src={require("../img/closet.png")} alt={"Ariana Weisner"} style={{width: '90%'}}/>
  </div>

      </div>

      < Brands />

<div class="mb-0">


	</div>
      </center>
)}


export default Home;
