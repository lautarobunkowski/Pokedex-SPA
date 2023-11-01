import { AiTwotoneHeart } from 'react-icons/ai'
import { GiBroadsword, GiCheckedShield } from 'react-icons/gi'
import { BsSpeedometer2 } from 'react-icons/bs'

import style from './ProgressBarsDetail.module.css';
import { useEffect, useState, useCallback } from 'react';

const ProgressBarsDetail = ({health, attack, defense, speed}) => {
    const incremento = 1;
    const intervalo = 10;
    const maxValue = 260;
  
    const getPorcentaje = (value) => {
      const v = (value / maxValue) * 100;
      return Math.round(v) + '%';
    }
  
    const [vidaShow, setVidaShow] = useState(0);
    const [ataqueShow, setAtaqueShow] = useState(0);
    const [defensaShow, setDefensaShow] = useState(0);
    const [velocidadShow, setVelocidadShow] = useState(0);
  
    const key = `${health}-${attack}-${defense}-${speed}`;
  
    const resetProgressBars = useCallback(() => {
      // Reiniciar los valores y los temporizadores
      setVidaShow(0);
      setAtaqueShow(0);
      setDefensaShow(0);
      setVelocidadShow(0);
  
      // Configurar los temporizadores nuevamente
      setupTimers();
    }, [key]);
  
    const setupTimers = () => {
      const timerVida = setInterval(() => {
        setVidaShow((prevValue) => {
          if (prevValue + incremento <= health) {
            return prevValue + incremento;
          } else {
            clearInterval(timerVida);
            return prevValue;
          }
        });
      }, intervalo);
  
      const timerAtaque = setInterval(() => {
        setAtaqueShow((prevValue) => {
          if (prevValue + incremento <= attack) {
            return prevValue + incremento;
          } else {
            clearInterval(timerAtaque);
            return prevValue;
          }
        });
      }, intervalo);
  
      const timerDefensa = setInterval(() => {
        setDefensaShow((prevValue) => {
          if (prevValue + incremento <= defense) {
            return prevValue + incremento;
          } else {
            clearInterval(timerDefensa);
            return prevValue;
          }
        });
      }, intervalo);
  
      const timerVelocidad = setInterval(() => {
        setVelocidadShow((prevValue) => {
          if (prevValue + incremento <= speed) {
            return prevValue + incremento;
          } else {
            clearInterval(timerVelocidad);
            return prevValue;
          }
        });
      }, intervalo);
    };
  
    useEffect(() => {
      resetProgressBars();
    }, [resetProgressBars]);
  
    useEffect(() => {
      if (key !== `${health}-${attack}-${defense}-${speed}`) {
        resetProgressBars();
      }
    }, [health, attack, defense, speed, key]);
    
    return (
        <div className={style.containerBars}>
           <div className={style.valueBox}>
                <div className={style.labelBox}>
                    <AiTwotoneHeart /> <span>{vidaShow}</span>
                </div>
                <div className={style.progressBox}>
                    <div className={`${style.progressBar} ${style.redBar} `} style={{'width': getPorcentaje(vidaShow) }}></div>
                </div>
            </div>
            <div className={style.valueBox}>
                <div className={style.labelBox}>
                    <GiBroadsword /> <span>{ataqueShow}</span>
                </div>
                <div className={style.progressBox}>
                    <div className={style.progressBar} style={{'width': getPorcentaje(ataqueShow) }}></div>
                </div>
            </div>

            <div className={style.valueBox}>
                <div className={style.labelBox}>
                    <GiCheckedShield /> <span>{defensaShow}</span>
                </div>
                <div className={style.progressBox}>
                    <div className={style.progressBar} style={{'width': getPorcentaje(defensaShow) }}></div>
                </div>
            </div>

            <div className={style.valueBox}>
                <div className={style.labelBox}>
                    <BsSpeedometer2 /> <span>{speed ? velocidadShow : '-'}</span>
                </div>
                <div className={style.progressBox}>
                    <div className={style.progressBar} style={{'width': getPorcentaje(velocidadShow) }}></div>
                </div>
            </div>
        </div>
    )
}

export default ProgressBarsDetail;