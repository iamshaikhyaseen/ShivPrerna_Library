import "./Counter.css";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

export default function Counter() {
  // observer hook
  const { ref, inView } = useInView({
    triggerOnce: true, // run only once
    threshold: 0.3,    // trigger when 30% visible
  });

  return (
    <div ref={ref} className="stats-container">
      <div className="stat-box">
        <h2>
          {inView && <CountUp start={0} end={7000} duration={2.5} />}+
        </h2>
        <p>Books</p>
      </div>

      <div className="stat-box">
        <h2>
          {inView && <CountUp start={0} end={3} duration={2.5} />}+
        </h2>
        <p>Years of Trust</p>
      </div>

      <div className="stat-box">
        <h2>
          {inView && <CountUp start={0} end={1000} duration={2.5} />}+
        </h2>
        <p>Readers</p>
      </div>
    </div>
  );
}
