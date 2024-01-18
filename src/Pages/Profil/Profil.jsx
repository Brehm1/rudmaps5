import React from 'react';
import './profil.scss'



const Profil = () => {
  return (

    <>
    
    <div className="Schemat">

        

        <div className="Tid">
            <div className="TidHeader">
            <h2>Tid</h2>
            </div>

            

            <div className="TidBar">
                <h2>Bar</h2>
            </div>

  
      </div>

      {/* Part 1: Mån */}
      <div className="Mån">
        <div className="Dag">
          <h2>Mån</h2>
        </div>

        <div className="Block Block1 Block2h1" >
          <h2>Block 1</h2>
        </div>

        <div className="Rast15">

        </div>

        <div className="Block Block2">
          <h2>Block 2</h2>
        </div>

        <div className="Rast10">
    
        </div>

        <div className="Block Block3">
          <h2>Block 3</h2>
        </div>

        <div className="Rast5">
    
        </div>

        <div className="Block Block4">
          <h2>Block 4</h2>
        </div>

        <div className="Rast10">
   
        </div>

        <div className="Block Block5">
          <h2>Block 5</h2>
        </div>

        <div className="Rast10">
       
        </div>

        <div className="Block Block7">
          <h2>Block 6</h2>
        </div>
      </div>

      {/* Part 2: Tis */}
      <div className="Tis">
        <div className="Dag">
          <h2>Tis</h2>
        </div>

        <div className="Block Block5 Block2h5" >
          <h2>Block 5</h2>
        </div>

        <div className="Rast15">
     
        </div>

        <div className="Block Block6">
          <h2>Block 6</h2>
        </div>

        <div className="Rast10">
    
        </div>

        <div className="Mentorstid" id="FörstaMentor">
          <h2>Mentor</h2>
        </div>

        <div className="Rast5">
       
        </div>

        <div className="Mentorstid" id="AndraMentor">
          <h2>Mentor</h2>
        </div>

        <div className="Rast10">
       
        </div>

        <div className="Block Block7">
          <h2>Block 7</h2>
        </div>

        <div className="Rast10">
     
        </div>

        <div className="Block Block8 Block110min8">
          <h2>Block 8</h2>
        </div>
      </div>

      {/* Part 3: Onsdag */}
      <div className="Onsdag">
        <div className="Dag">
          <h2>Ons</h2>
        </div>

        <div className="Block Block2 Block2h2" >
          <h2>Block 2</h2>
        </div>

        <div className="Rast15">
      
        </div>

        <div className="Block Block1">
          <h2>Block 1</h2>
        </div>

        <div className="Rast10">
       
        </div>

        <div className="Block Block4">
          <h2>Block 4</h2>
        </div>

        <div className="Rast5">
         
        </div>

        <div className="Block Block3">
          <h2>Block 3</h2>
        </div>

        <div className="Rast10">
         
        </div>

        <div className="Resurstid">
          <h2>Resurstid</h2>
        </div>
      </div>

      {/* Part 4: Tors */}
      <div className="Tors">
        <div className="Dag">
          <h2>Tors</h2>
        </div>

        <div className="Block Block7 Block2h7" >
          <h2>Block 7</h2>
        </div>

        <div className="Rast15">

        </div>

        <div className="Block Block8">
          <h2>Block 8</h2>
        </div>

        <div className="Rast10">
          
        </div>

        <div className="Block Block3">
          <h2>Block 3</h2>
        </div>

        <div className="Rast5">
        
        </div>

        <div className="Block Block4">
          <h2>Block 4</h2>
        </div>

        <div className="Rast10">
         
        </div>

        <div className="Block Block1">
          <h2>Block 1</h2>
        </div>

        <div className="Rast10">
        
        </div>

        <div className="Block Block2">
          <h2>Block 2</h2>
        </div>
      </div>

      {/* Part 5: Fre */}
      <div className="Fre">
        <div className="Dag">
          <h2>Fre</h2>
        </div>

        <div className="Block Block6 Block2h6" >
          <h2>Block 6</h2>
        </div>

        <div className="Rast15">
         
        </div>

        <div className="Block Block5">
          <h2>Block 5</h2>
        </div>

        <div className="Rast10">
         
        </div>

        <div className="Block Block4 Block50min4">
          <h2>Block 4</h2>
        </div>

        <div className="Rast15">
          
        </div>

        <div className="Block Block3 Block50min3">
          <h2>Block 3</h2>
        </div>

        <div className="Rast20">
          
        </div>

        <div className="Block Block8">
          <h2>Block 8</h2>
        </div>

        <div className="Rast10">
          
        </div>

        <div className="Block Block7">
          <h2>Block 7</h2>
        </div>
      </div>
    </div>

    <div>
        <div className="ämnebanner">
            Ämnen
        </div>


        <div class="box">
            <div>One</div>
            <div>Two</div>
            <div>Three</div>
        </div>

    </div>

    

    
    </>

    
  );
};

export default Profil;