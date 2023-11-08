import './App.css';
import GoodsComponent from './GoodsComponent'

function App() {
  return (
    <div className="App">
           
      <GoodsComponent name="Tesla" description="Model X" price={100000} />

      <GoodsComponent name="Tesla" description="Model Y" price={80000} />
      
      <GoodsComponent name="Tesla" description="Model S" price={90000}/>

      <GoodsComponent name="Tesla" description="Model 3" price={50000}/>
      
      <GoodsComponent name="Tesla" description="Roadster" price={200000}/>

    </div>
  );
}

export default App;