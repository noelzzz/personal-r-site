import './App.css';
import Zoom from 'react-reveal/Zoom';
import HeaderCom from './HeaderCom';


function App() {
  return (
    
    // <div className='container'>
    //   <ul className='carousel'>
    //     <li className='item'>
    //           <img className='albumCover' src={require ('./images/gkmcAlbum.jpeg')}></img>
    //     </li>
    //     <li className='item'>
    //           <img className='albumCover' src={albumImg2} alt='damn.jpg'></img>
    //     </li>
    //   </ul>
    // </div>

    <Zoom>
      <HeaderCom></HeaderCom>
    </Zoom>


  );
}

export default App;
