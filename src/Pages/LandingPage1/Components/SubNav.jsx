import "./SubNav.css";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

function SubNav() {
  const { t } = useTranslation(); // Translation hook
  const navigate = useNavigate(); // Navigation hook

  // List of categories with keys and display labels
  const categories = [
    { key: "novel", label: "NOVEL ( कादंबरी )" },
    { key: "drama", label: "DRAMA ( नाटक )" },
    { key: "magazine", label: "MAGAZINE ( मासिक )" },
    { key: "historical", label: "HISTORICAL ( ऐतिहासिक )" },
    { key: "religious", label: "RELIGIOUS ( धार्मिक )" },
    { key: "political", label: "POLITICAL ( राजकीय )" },
    { key: "poem", label: "POEM ( कविता )" },
    { key: "literature", label: "LITERATURE ( साहित्य )" },
    { key: "fiction", label: "FICTION ( काल्पनिक )" },
    { key: "nonFiction", label: "NON_FICTION ( अकाल्पनिक )" },
    { key: "recipe", label: "RECIPE ( रेसिपी )" },
  ];

  // Navigate to books page filtered by category
  const handleCategoryClick = (category) => {
    navigate(`/all_books?category=${encodeURIComponent(category)}`);
  };

  return (
    <div className="categories-container">
      {/* Heading */}
      <h2 className="categories-heading">
        {t("landingPage.categories.heading", "Categories")}
      </h2>

      {/* Category List */}
      <ul className="categories-list">
        {categories.map((cat) => (
          <li
            key={cat.key}
            className="category-item"
            onClick={() => handleCategoryClick(cat.label)}
          >
            <span className="category-link">
              {t(`landingPage.categories.${cat.key}`)}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SubNav;
