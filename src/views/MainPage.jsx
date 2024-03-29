import React, { useState } from 'react';
import CustomButton from '../components/CustomButton';
import Rules from '../components/Rules';
import '../styles/MainPage.css'

const MainPage = () => {
  const [showRules, setShowRules] = useState(false);

  const handleShowRules = () => {
    setShowRules(!showRules);
  };

  const gameSummary = (
    <>
    <p>En Foxland Yard, los jugadores asumen el papel de los granjeros y Mr Fox en una emocionante aventura en el campo. El objetivo del juego para Mr Fox es evadir a los granjeros durante todo el juego, mientras que los granjeros deben trabajar en equipo para atraparlo.</p>
    <p>El tablero representa el campo, incluyendo granjas, bosques, túneles y otros lugares emblemáticos de la historia de Fantastic Mr Fox. Cada turno, los jugadores se moverán por el tablero utilizando diferentes medios de transporte, como bicicleta, vehículos de granja, o simplemente caminando. Los túneles subterráneos solo podrán ser utilizados por Mr Fox en ocasiones especiales.</p>
    <p>Foxland Yard es un juego de estrategia, astucia y cooperación entre los jugadores, en el que se combinan elementos de Fantastic Mr Fox y Scotland Yard para crear una experiencia única y emocionante.</p>
    </>
  );

  return (
    <div className='flex-box'>

      <div className='flex-buttons'>
        <CustomButton type='secondary' href='/rules'>Ver Reglas del Juego</CustomButton>
      </div>

      <div className='flex-content'>
        <h1>Foxland Yard</h1>
        {gameSummary}
      </div>

      <div className='div-tabla'>
        <h2> Records de los jugadores: </h2>

        <table className='tabla-records'>
          <tr>
            <th>Jugador</th>
            <th>Puntaje</th>
            <th>Fecha</th>
          </tr>
          <tr>
            <td>John Denver</td>
            <td>1200</td>
            <td>21/04/2023</td>
          </tr>
          <tr>
            <td>Will Smith</td>
            <td>1500</td>
            <td>20/04/2023</td>
          </tr>
          <tr>
            <td>Bob Ross</td>
            <td>800</td>
            <td>19/04/2023</td>
          </tr>
          <tr>
            <td>Arthur Fleck</td>
            <td>1100</td>
            <td>18/04/2023</td>
          </tr>
          <tr>
            <td>Charles Xavier</td>
            <td>900</td>
            <td>17/04/2023</td>
          </tr>
          <tr>
            <td>Tony Stark</td>
            <td>1300</td>
            <td>16/04/2023</td>
          </tr>
	      </table>

      </div>
      
    </div>
  );
};

export default MainPage;