import React, {useRef} from 'react';
import map0 from '../Assets/rudmaps_floor_0_thickLines2.webp';
import marker from '../Assets/marker.webp';
import './Navigering'
import Pathfind from './Navigering';
import './Plan0.scss';



//kod taget från https://developer.mozilla.org/en-US/docs/Web/API/Geolocation/watchPosition . Fungerar inte










const Plan0 = () => {
  Pathfind()
  let id;
  let options;
  function success(pos) {
    //console.log('gått in i success');
    const crd = pos.coords;
    //console.log('Latitude:', crd.latitude);
    //console.log('Longitude:', crd.longitude);
    var procentLatitud=((crd.latitude-59.443486)/0.001150)*100;
    var procentLongitud=((crd.longitude-17.951542)/0.003999)*100;
    
    //console.log('Procent latitude: ',procentLatitud)
    //console.log('Porcent longitude:', procentLongitud)
    // var procentLatitud=((59.4439239-59.443486)/0.001150)*100;
    // var procent§Longitud=((17.9537700-17.951542)/0.003999)*100;
    if(procentLatitud<0||procentLatitud>100||procentLongitud<0||procentLongitud>100){
      //console.log('Du befinner dig utanför skolans område')
    }
    else{
      return(
        <div style={{marginLeft: procentLongitud, marginBottom: procentLongitud}}>
        <img  id="GPS" src={marker} alt="GPS Marker"></img>
      </div>
      )
    }
    
    
    

    
    // console.log('gått förbi marker')
   }
   
  // options = {
  //   enableHighAccuracy: true,
  //   timeout: 5000,
  //   maximumAge: 0,
  //  };

  function error(err) {
    console.error(`ERROR(${err.code}): ${err.message}`);
  }

 Pathfind()

  return(
       
    id = navigator.geolocation.watchPosition(success,error),  
    console.log('gått förbi id'),
        <div >
            <img id="map0" src={map0} alt="map0"></img>
            <input type="text" name="start"/>
            <input type="text" name="end"/>
            {/* <button onClick={pathfind(startNode,endNode)}></button> */}
        </div>

      
       
       
        
        
        
      );
};

export default Plan0;