import './App.css';
import ironhackLogo from './images/ironhack-logo-xs.png'
import menuTopXs from './images/menuTopXs.png'
import icon1 from './images/icon1.png'
import icon2 from './images/icon2.png'
import icon3 from './images/icon3.png'
import icon4 from './images/icon4.png'

const Title = <div class="title">
  <h1> Say hello to ReactJs</h1>
  <p> You will learn how to use the most popular frontend library, and become a super Ninja developer.</p>
  <button> Awesome </button>
</div>

const logoTop = <div class="logo-top">
  <img src={ironhackLogo} alt="ironhack logo" />
  <img src={menuTopXs} alt="menu logo" />
</div>

const iconsDesc = <div class="bottom-icons">
  <div class="icon-box" >
    <img src={icon1} alt="icon1" />
    <h3> Declarative </h3>
    <p> React makes it painless to create interactive UIs.</p>
  </div>

  <div class="icon-box" >
    <img src={icon2} alt="icon2" />
    <h3> Components </h3>
    <p> Build encapsulated components that manage their state. </p>
  </div>

  <div class="icon-box" >
    <img src={icon3} alt="icon3" />
    <h3> Single-way </h3>
    <p> A set of immutable values  are passed to the components. </p>
  </div>

  <div  class="icon-box">
    <img src={icon4} alt="icon4" />
    <h3> JSX </h3>
    <p> Statically-typed, designed to run on modern browsers. </p>
  </div>
</div> 

function App() {
  return (
    <div className="App"> 
    <div class="title-box">
      {logoTop}
      {Title}
    </div>
    
    {iconsDesc}

    </div>
  );
}

export default App;
