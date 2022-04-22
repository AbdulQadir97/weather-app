import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import Card from './component/Card';

function App() {


  return (
    <>
      <div className="container">
        <div className='row'>
          <div className='col-sm-12'>
            <div className='row'>
            <div className='container col-sm-4'>
               
                <Card/>

            </div>
            </div>
          </div>
        </div>
      </div>

 
    </>
  );
}

export default App;
