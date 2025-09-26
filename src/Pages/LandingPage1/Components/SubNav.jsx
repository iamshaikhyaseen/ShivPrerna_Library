import "./SubNav.css";

function SubNav() {
  const categories = [
    { name: "Novel", url: "/novel" },
    { name: "Drama", url: "/drama" },
    { name: "Magazine", url: "/magazine" },
    { name: "Historical", url: "/historical" },
    { name: "Religious", url: "/religious" },
    { name: "Political", url: "/political" },
    { name: "Poem", url: "/poem" },
    { name: "Literature", url: "/literature" },
    { name: "Fiction", url: "/fiction" },
    { name: "Non-Fiction", url: "/nonfiction" },
    { name: "Recipe", url: "/recipe" },
    { name: "View more...", url: "/categories" },
  ];
  return (
    <div>
      <div className="categories-container">
        <h2 className="categories-heading">Categories</h2>
        <ul className="categories-list">
          {categories.map((cat) => (
            <li key={cat.name} className="category-item">
              <a href={cat.url} className="category-link">
                {cat.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default SubNav;
