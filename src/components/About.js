import './nav.css'


const About = () => {
  return (

<div class="section-center">
  		<h1 class="mb-0">ABOUT</h1>

      <div style={{height: 500,  backgroundImage: `url('../img/ariana-about.jpeg')`}}>
      <img src={require("../img/ariana-about.jpeg")} alt={"Ariana"}/>
      <p style={{color: 'white'}}>
      Ariana Weisner started her love affair with fashion at a very young age.
      At 17 years old she moved to Paris, France for the summer to study fashion design at Parson’s School of Design.
      A few years later she began interning for the most famous brand in the world synonymous to fashion, Vogue Magazine.
      Honing in on her skills and love for styling Ariana then went on to assist two of the biggest stylists in the industry, Nicole Chavez and Jessica Paster.
      Throughout the years Ariana has gained a vast knowledge in all aspects of styling including red carpet, editorial, advertising, and street style.



      </p>
      </div>

  	</div>
)}


export default About;
