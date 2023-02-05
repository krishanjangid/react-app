import React from 'react';
import ReactDOM from 'react-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));

var kstyle ={
  color:'red'
};
root.render(
<div className="container">
      <div class="card">
        <img src="3.jpg" alt="Biryani"></img>

        <div className="content">

          <h3>Gol Gappe</h3>

		<p>
		
			Gol Gappa makes the very famous and delicious street food that has been attracting the tourists in Jaipur. The tasty and mouth-watering taste of this small Gappa will make you their fan within no instant of time.<span id="dots">...</span><span id="more"> The spicy wonder also known as puchka and paani-puri are something out of this world and everyone's (well almost) favourite dish. You can choose from many varieties of golgappa that the city has in its store to offer you.
		</span></p><button onclick="myFunction()" id="myBtn">Read more</button>
        <br/>
        <br/>
          <label for="cars">Available at:</label>
          <select name="cars" id="cars">
            <option value="volvo">Volvo</option>
            <option value="saab">Saab</option>
            <option value="mercedes">Mercedes</option>
            <option value="audi">Audi</option>
          </select>
          <a href="#" className="button">Get Direction</a>
        </div>
      </div>
      </div> 
     );

     