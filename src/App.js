import logo from './logo.svg';
import './App.css';
const number = 5555;
const singer = {name : 'Dr. Mahfuz' , job:'SInger'}
const singer2 = {name: 'Eva Rahaman' , job : 'Female Singer'}

function App() {
  return (
    <div className="App">
      <Person></Person>
      <Person></Person>
      <Friend></Friend>
    </div>
  );
}
function Person() {
  return (<div className = "person">
    <h1>Kaj Kore?</h1>
  <p>Profession:Cricketer</p>
  </div>);
}
export default App;


function Friend () {
  return (<div className = "person">
  <h1>Kaj kormo Kor Kore?</h1>
<p>Profession:Cricketer</p>
</div>);
}