import React, { useState } from 'react';

import CustomButton from './CustomButton';
import "../styles/Rules.css";

import { FaChevronRight as RightIcon, FaChevronLeft as LeftIcon } from 'react-icons/fa'; 


const Rules = () => {
  const [currentSection, setCurrentSection] = useState(0);

  const sections = [
    {
      title: 'Personajes',
      content: (
        <div>
          <p>
            En <i>Foxland Yard</i>, está el rol del astuto Mr Fox y los 3 granjeros que intentan atraparlo. Un jugador será Mr Fox, y el resto serán granjeros, y si hay menos de 3 jugadores para el rol de granjero, entonces un jugador puede controlar a dos granjeros.
          </p>
        </div>
      ),
    },
    {
      title: 'Inicio del juego',
      content: (
        <div>
            <h3>Mr Fox</h3>
            <ul>
                <li>Cartas de movimiento (23): 4 de auto, 8 de bicicleta y 11 de caminar. 1 carta secreta (puede ser usada como auto, bicicleta o túnel)</li>
                <li>Familiares (3): El hijo, la zariguella y el primo</li>
                <li>Posición inicial random en el tablero</li>
            </ul>
            <h3>Granjeros</h3>
            <ul>
                <li>Cartas de movimiento (23): 4 de auto, 8 de bicicleta y 11 de caminar</li>
                <li>Comida (20)</li>
                <li>Posición inicial en su granja respectiva.</li>
            </ul>
        </div>
      ),
    },
    {
      title: 'Turnos y movimientos',
      content: (
        <div>
            <p>Cada turno parte con el movimiento de Mr Fox, y cuando él termina su turno, parte el de los granjeros</p>
            <h3>Mr Fox</h3>
            <ul>
                <li>
                    1 Movimiento de Mr Fox (-1 carta movimiento)
                    <ul>
                        <li>Su medio de transporte es visible (si se mueve en auto, bici o caminando). Si se mueve sigilosamente (carta secreta), no se revelará su medio de transporte.</li>
                    </ul>
                </li>
                <li>Acción (opcional)</li>
            </ul>
            <h3>Granjeros</h3>
            <ul>
                <li>1 Movimiento de Mr Fox (-1 carta movimiento)</li>
                <li>Acción (opcional)</li>
            </ul>
            <h3>Consideraciones Generales</h3>
            <ul>
                <li>Los granjeros deben tratar de deducir la posición del señor Fox basándose en sus movimientos anteriores para atraparlo (estar en su misma casilla)</li>
                <li>La posición de Mr Fox se revelará a los granjeros cada 5 turnos (partiendo desde el turno 3), pero luego volverá a no ser visible.</li>
                <li>El movimiento puede ser antes o después de la acción</li>
            </ul>
        </div>
      ),
    },
    {
      title: 'Objetivos y finalización del juego',
      content: (
        <div>
            <p>El objetivo del señor Fox es recolectar cierta cantidad de recursos escondidos por el mapa sin ser capturado por los granjeros. Si el señor Fox logra recolectar todos los recursos y volver a su madriguera antes de ser atrapado, gana el juego. Si los granjeros logran atrapar al señor Fox antes de que recolecte todos los recursos, ellos ganan.</p>
            <h3>Mr Fox</h3>
            <ul>
                <li>No ser atrapado</li>
                <li>Maximizar Comida robada (hasta llegar a un objetivo)</li>
            </ul>
            <h3>Granjeros</h3>
            <ul>
                <li>Atrapar a Mr Fox</li>
                <li>Maximizar Comida en su granja.</li>
            </ul>
            <p>Como cada jugador gasta en una ronda 1 carta de movimiento, y hay 23 de estas, entonces en la ronda 24 no quedarán más movimientos que hacer. Por lo tanto, hay 3 opciones para el fin del juego:</p>
            <ul>
                <li>Mr Fox es atrapado (Granjeros ganan)</li>
                <li>Mr Fox consigue/roba toda la comida que necesita (Mr Fox gana)</li>
                <li>
                    Se llega a la ronda 24 (Empate)
                    <ul>
                        <li>No se cumplen ninguna de las condiciones anteriores y ya no quedan más movimientos, por lo que Mr Fox no es atrapado, pero tampoco logra su objetivo de comida recolectada </li>
                    </ul>
                </li>
            </ul>
        </div>
      ),
    },
    {
      title: 'Acciones',
      content: (
        <div>
  <h3>Mr Fox:</h3>
  <ul>
    <li>
      Recolectar (+1 Comida)
      <ul>
        <li>Solo en casillas de las granjas.</li>
      </ul>
    </li>
    <li>Liberarse de trampa (-3 Comida)</li>
    <li>
      Pedir ayuda a familiar (-1 Familiar)
      <ul>
        <li>Liberar de trampa</li>
        <li>
          Robo (+5 Comida)
          <ul>
            <li>Sólo en casillas de las granjas.</li>
          </ul>
        </li>
      </ul>
    </li>
  </ul>

  <h3>Granjeros:</h3>
  <ul>
    <li>
      Poner trampa (-1 Trampa)
      <ul>
        <li>
          Si Mr Fox cae en una trampa, este revela su ubicación mientras esté
          atrapado, además de no permitir que se mueva.
        </li>
      </ul>
    </li>
    <li>Armar trampa (+1 Trampa, -2 Comida)</li>
  </ul>
</div>
      ),
    },
  ];

  const nextSection = () => {
    setCurrentSection((currentSection + 1) % sections.length);
  };

  const prevSection = () => {
    setCurrentSection((currentSection - 1 + sections.length) % sections.length);
  };

  return (
    <div className="flex-box">
        <div className='flex-title'>Reglas del Juego ({currentSection + 1}/{sections.length}):</div>
        <div className='flex-buttons'>
            <CustomButton type='tertiary' onClick={prevSection}><LeftIcon/> Regla anterior</CustomButton>
            <CustomButton type='tertiary' onClick={nextSection}>Siguiente regla <RightIcon/></CustomButton>
        </div>
        <div className='flex-content'>
            <h2> {sections[currentSection].title} </h2>
            <div>{sections[currentSection].content}</div>
        </div>

    </div>
  );
};

export default Rules;
