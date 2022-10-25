import { useSpring, animated } from "@react-spring/web";

import React from 'react'
import bg1 from './assets/bg1.png'
import bg2 from './assets/bg2.png'
import bg3 from './assets/bg3.png'
import bg4 from './assets/bg4.png'
import bg5 from './assets/bg1a.png'
import bg6 from './assets/bg2a.png'
import bg7 from './assets/bg3a.png'
import bg8 from './assets/bg4a.png'
import bg9 from './assets/bg5a.png'
import bg10 from './assets/bg6a.png'
import bg11 from './assets/bg7a.png'
import bg12 from './assets/bg8a.png'
import bg13 from './assets/bg9a.png'


export default function Card(props) {
    const imgArr = [bg1, bg2, bg3, bg4, bg5, bg6, bg7, bg8, bg9, bg10, bg11, bg12, bg13];
    const calc = (x, y, rect) => [
        -(y - rect.top - rect.height / 2) / 5,
        (x - rect.left - rect.width / 2) / 5,
        1.1
    ];
    const trans = (x, y, s) =>
        `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;

    const ref = React.useRef(null);
    const [xys, set] = React.useState([0, 0, 1]);
    const config = {
        mass: 1,
        tension: 170,
        friction: 26,
        clamp: true,
        precision: 0.01,
        velocity: 0,
        easing: (t) => t
    };
    const springProps = useSpring({ xys, config });
    // Import the image from the image url prop
    return (
        <div className="ccard-main" style={{width: `${props.size}%`, height: `${props.size}%`}} ref={ref}>
            <a href={props.link}>
            <animated.div
                className="ccard"
                style={{ transform: springProps.xys.to(trans), backgroundImage: `url("${imgArr[props.imgURL]}")` }}
                onMouseLeave={() => set([0, 0, 1])}
                onMouseMove={(e) => {
                    const rect = ref.current.getBoundingClientRect();
                    set(calc(e.clientX, e.clientY, rect));
                }}
            >
            <span className="displayText">{props.text}</span>
            </animated.div>
            </a>
        </div>
    );
}