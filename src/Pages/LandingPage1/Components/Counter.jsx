import "./Counter.css";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { useTranslation } from "react-i18next";

export default function Counter() {
  const { ref, inView } = useInView({
    triggerOnce: true, // ensures animation happens only once per refresh
    threshold: 0.3, // triggers when 30% of the element is visible
  });

  const { t, i18n } = useTranslation();

  // Function to format numbers based on language
  const formatNumber = (num) => {
    return new Intl.NumberFormat(i18n.language === "mr" ? "mr-IN" : "en-US").format(num);
  };

  return (
    <div ref={ref} className="stats-container">
      <div className="stat-box">
        <h2>
          {inView && (
            <CountUp
              start={0}
              end={7000}
              duration={5}
              formattingFn={formatNumber}
            />
          )}
          +
        </h2>
        <p>{t("landingPage.counter.books")}</p>
      </div>

      <div className="stat-box">
        <h2>
          {inView && (
            <CountUp
              start={0}
              end={3}
              duration={5}
              formattingFn={formatNumber}
            />
          )}
          +
        </h2>
        <p>{t("landingPage.counter.yearsOfTrust")}</p>
      </div>

      <div className="stat-box">
        <h2>
          {inView && (
            <CountUp
              start={0}
              end={1000}
              duration={5}
              formattingFn={formatNumber}
            />
          )}
          +
        </h2>
        <p>{t("landingPage.counter.readers")}</p>
      </div>
    </div>
  );
}
