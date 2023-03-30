import './nav.css';

const About = () => {
  return (
    <div>
      <h1 class="mb-0">ABOUT</h1>
      <div class="row" style={{ height: 1000 }}>
        <div class="column">
          <img src={require('../img/ariana-about.jpeg')} alt={'Ariana'} />
        </div>
        <div class="column">
          <h1>
            Ariana Weisner started her love affair with fashion at a very young
            age. At 17 years old she moved to Paris, France for the summer to
            study fashion design at Parson’s School of Design. A few years later
            she began interning for the most famous brand in the world
            synonymous to fashion, Vogue Magazine. Honing in on her skills and
            love for styling Ariana then went on to assist two of the biggest
            stylists in the industry, Nicole Chavez and Jessica Paster.
            Throughout the years Ariana has gained a vast knowledge in all
            aspects of styling including red carpet, editorial, advertising, and
            street style.
          </h1>
        </div>
      </div>
    </div>
  );
};

export default About;
