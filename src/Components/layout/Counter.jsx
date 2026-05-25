import { CountUp } from "countup.js";
import { useEffect, useRef, useState } from "react";

export default function Counter({ end, duration = 2, label, subtitle }) {
  const ref = useRef(null);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasStarted) {
          const countUp = new CountUp(ref.current, end, { duration });

          if (!countUp.error) {
            countUp.start();
            setHasStarted(true);
          }
        }
      },
      { threshold: 0.5 },
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, [end, duration, hasStarted]);

  return (
    <figure className="card">
      <div className="wrapper">
        <h4 ref={ref}></h4> {subtitle && <span>{subtitle}</span>}
      </div>
      <figcaption>{label}</figcaption>
    </figure>
  );
}
