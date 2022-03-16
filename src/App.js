import logo from './logo.svg';
import './App.css';
const number = 5555;
const singer = {name : 'Dr. Mahfuz' , job:'SInger'}
const singer2 = {name: 'Eva Rahaman' , job : 'Female Singer'}

function App() {
  const nayoks = ['Rubel', 'Bappa Raj', 'Kuber', 'joshim' , 'Salman Khan' , 'Bappa Dao']
  const nayikas = ['Moushumi' ,'Shabnur' , 'Sabana' , 'Popi', 'Katrina' , 'Cheka']
  return (
    <div className="App">
      {
        nayoks.map(nayok => <li>{nayok  }</li>)
      }
        {
        nayikas.map(nayika => <li>{nayika}</li>)
      }
      {
        nayoks.map(nayok => <Person name = {nayok}></Person>)
      }
      {/* {
        nayikas.map(nayika => <Person Nayika ={nayika}></Person>)
      } */}
      {/* <Person name= {nayoks[0]} nayik="Shabnur"></Person>
      <Person name={nayoks[1]} nayik="Moushumi"></Person>
      <Person name={nayoks[1]} nayik="Moushumi"></Person>
      <Person name={nayoks[2]}nayik="KoPila"></Person>
      <Person name="Shakib Khan" nayik="Opu Bishawas"></Person>
      <Person name="Jodu Modu" nayik="Solima"></Person> */}
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