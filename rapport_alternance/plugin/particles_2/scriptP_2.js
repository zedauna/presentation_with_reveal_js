particls_func = (id = "particles-js") => {
  return tsParticles.load(id, {
    backgroundMode: {
      enable: true
    },
    fpsLimit: 60,
    particles: {
      number: {
        value: 0
      },
      collisions: {
        enable: false
      },
      color: {
        value: "#ffffff"
      },
      shape: {
        type: "circle"
      },
      opacity: {
        value: {
          min: 0.3,
          max: 0.8
        }
      },
      size: {
        value: {
          min: 1,
          max: 10
        }
      },
      move: {
        enable: true,
        size: true,
        speed: 5,
        direction: "none",
        outModes: {
          default: "destroy"
        },
        trail: {
          enable: true,
          fillColor: "",
          length: 3
        }
      }
    },
    detectRetina: true,
    background: {
      color: ""
    },
    emitters: {
      direction: "none",
      rate: {
        delay: 0.25,
        quantity: 10
      },
      position: {
        x: 50,
        y: 50
      },
      size: {
        width: 0,
        height: 0
      },
      spawnColor: {
        value: "#ff0000",
        animation: {
          h: {
            enable: true,
            speed: 5
          },
          l: {
            enable: true,
            speed: 0,
            offset: {
              min: 20,
              max: 80
            }
          }
        }
      }
    }
  });
}