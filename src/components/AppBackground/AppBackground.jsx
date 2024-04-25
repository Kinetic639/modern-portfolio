import { useEffect, useMemo, useState, memo } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import styles from "./AppBackground.module.scss";
export const AppBackground = memo(() => {
  const [init, setInit] = useState(false);
  const [colorPrimary, setColorPrimary] = useState(
    getComputedStyle(document.documentElement)
      .getPropertyValue("--font-secondary")
      .trim(),
  );

  // this should be run only once per application lifetime
  useEffect(() => {
    const updateThemeColor = () => {
      const newColor =
        getComputedStyle(document.getElementById("root"))
          .getPropertyValue("--font-secondary")
          .trim() || "#7ab89c";
      console.log("changed color", newColor);
      setColorPrimary(newColor);
    };

    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });

    // Set up an observer to watch for theme changes
    const observer = new MutationObserver(updateThemeColor);
    observer.observe(document.body, { attributeFilter: ["class"] });

    // Update color initially in case the class is already set
    updateThemeColor();

    return () => observer.disconnect();
  }, []);
  const options = useMemo(
    () => ({
      fpsLimit: 120,
      interactivity: {
        events: {
          onClick: {
            enable: true,
            mode: "push",
          },
          onHover: {
            enable: true,
            mode: "none",
            parallax: {
              enable: true,
              force: 120,
              smooth: 10,
            },
          },
        },
        modes: {
          push: {
            quantity: 4,
          },
          repulse: {
            distance: 200,
            duration: 0.4,
          },
        },
      },
      particles: {
        color: {
          value: colorPrimary,
        },
        links: {
          color: colorPrimary,
          distance: 120,
          enable: true,
          opacity: 0.3,
          width: 1,
        },
        move: {
          direction: "none",
          enable: true,
          outModes: {
            default: "bounce",
          },
          random: false,
          speed: 0.3,
          straight: false,
        },
        number: {
          density: {
            enable: true,
          },
          value: 160,
        },
        opacity: {
          value: 0.3,
        },
        shape: {
          type: "circle",
        },
        size: {
          value: { min: 1, max: 5 },
        },
      },
      detectRetina: true,
    }),
    [colorPrimary],
  );

  if (init) {
    return (
      <Particles
        id="tsparticles"
        options={options}
        className={styles.AppBackgroundCanvas}
      />
    );
  }

  return <></>;
});
