
import './App.css'

function App() {
 function hendelClick(){
  const inputt = document.getElementById('name').value;
  alert(inputt);
 }
 function newNum(num){
const neww = num + 5;
alert(neww)
 }
  return (
    <>
      <h3 className='text-red-300 text-4xl font-bold'>Hello Everyone</h3>
      <input type="text" name='name' placeholder='your name' id='name' />
      <button onClick={hendelClick}>Click me</button>
      <button onClick={()=> alert('click me 3')}>Click me 2</button>
      <button onClick={() => newNum(10)}>new number</button>
    </>
  )
}

export default App
