import logo from './logo.svg';
import './App.css';
const number = 5555;
const singer = {name : 'Dr. Mahfuz' , job:'SInger'}
const singer2 = {name: 'Eva Rahaman' , job : 'Female Singer'}

function App() {
  return (
    <div className="App">
      <Person name="Rubel" nayik="Shabnur"></Person>
      <Person name="Nayok BappRaz" nayik="Moushumi"></Person>
      <Person name="Nayok BappRaz" nayik="Moushumi"></Person>
      <Person name="Nayok Kuber" nayik="KoPila"></Person>
      <Person name="Shakib Khan" nayik="Opu Bishawas"></Person>
      <Person name="Jodu Modu" nayik="Solima"></Person>
      <Friend name="Kodu" phone="0999"></Friend>
      <Friend name="Modu" phone="016235"></Friend>
      <Friend name="Jodu" phone="0125697"></Friend>
      <Friend name="Lodu" phone="012369987456"></Friend>
      <Friend name="Podu" phone="0899667"></Friend>
      <Friend name="Oodu" phone="0987668"></Friend>
      <Friend name="Eodu" phone="0325896654"></Friend>
    </div>
  );
}
function Person(props) {
  console.log(props); 
  return (<div className = "person">
    <h1>{props.name}</h1>
  <h2>Nayika: {props.nayik}</h2>
  </div>);
}
export default App;


function Friend (props) {
  console.log(props);
  return (<div className = "person">
  <h1>{props.name}</h1>
<h2>{props.phone}</h2>
</div>);
}