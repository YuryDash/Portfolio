import s from "../Main.module.scss";
import Particles from "react-tsparticles";
import {FC, useCallback} from "react";
import {Container, Engine} from "tsparticles-engine";
import {loadFull} from "tsparticles";

export const Particle:FC = () => {
    const particlesInit = useCallback(async (engine: Engine) => {
        await loadFull(engine);
    }, []);
    const particlesLoaded = useCallback(async (container: Container | undefined) => {
    }, []);
    return (
        <Particles params={{
            "particles": {
                "number": {
                    "value": 200,
                    "density": {
                        "enable": true,
                        "value_area": 721.5354273894853
                    }
                },
                "color": {
                    "value": "#ffd000"
                },
                "shape": {
                    "type": "triangle",
                    "stroke": {
                        "width": 0,
                        "color": "#ffd000"
                    },
                    "polygon": {
                        "nb_sides": 4
                    },
                },
                "opacity": {
                    "value": 0.7,
                    "random": true,
                    "anim": {
                        "enable": false,
                        "speed": 1,
                        "opacity_min": 0.1,
                        "sync": true
                    }
                },
                "size": {
                    "value": 4,
                    "random": true,
                    "anim": {
                        "enable": true,
                        "speed": 2,
                        "size_min": 0.1,
                        "sync": false
                    }
                },
                "move": {
                    "enable": true,
                    "speed": 3,
                    "direction": "none",
                    "random": true,
                    "straight": false,
                    "out_mode": "out",
                    "bounce": false,
                }
            },
            "interactivity": {
                "detect_on": "canvas",
                "events": {
                    "onhover": {
                        "enable": true,
                        "mode": "connect"
                    },
                    "onclick": {
                        "enable": true,
                        "mode": "push"
                    },
                    "resize": true
                },
                "modes": {
                    "grab": {
                        "distance": 400,
                        "line_linked": {
                            "opacity": 1
                        }
                    },
                    "bubble": {
                        "distance": 400,
                        "size": 440,
                        "duration": 2,
                        "opacity": 8,
                        "speed": 1
                    },
                    "repulse": {
                        "distance": 2100,
                        "duration": 0.4
                    },
                    "push": {
                        "particles_nb": 4
                    },
                    "remove": {
                        "particles_nb": 2
                    }
                }
            },
            "retina_detect": true
        }}
                   className={s.particles}
                   init={particlesInit}
                   loaded={particlesLoaded}/>
    )
}