import "./SubNav.css";
import { useTranslation } from "react-i18next";

function SubNav() {
  const { t } = useTranslation();

  const categories = [
    { key: "novel", url: "/novel" },
    { key: "drama", url: "/drama" },
    { key: "magazine", url: "/magazine" },
    { key: "historical", url: "/historical" },
    { key: "religious", url: "/religious" },
    { key: "political", url: "/political" },
    { key: "poem", url: "/poem" },
    { key: "literature", url: "/literature" },
    { key: "fiction", url: "/fiction" },
    { key: "nonFiction", url: "/nonfiction" },
    { key: "recipe", url: "/recipe" },
    { key: "viewMore", url: "/categories" },
  ];

  return (
    <div>
      <div className="categories-container">
        <h2 className="categories-heading">{t("landingPage.categories.heading", "Categories")}</h2>
        <ul className="categories-list">
          {categories.map((cat) => (
            <li key={cat.key} className="category-item">
              <a href={cat.url} className="category-link">
                {t(`landingPage.categories.${cat.key}`)}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default SubNav;
