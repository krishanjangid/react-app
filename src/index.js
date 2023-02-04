import React from 'react';
import ReactDOM from 'react-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
var kstyle ={
  color:'red'
};
root.render(
<div>
<h1 className='heading'>Krishan kumar jangid</h1>
<ul style={kstyle}>
  <li>Football</li>
  <li>cricket</li>
  <li>walk</li>
  <li>have a fun</li>
  <li>Pikka Piii</li>
</ul>
<img src='https://picsum.photos/200'></img>
</div>);