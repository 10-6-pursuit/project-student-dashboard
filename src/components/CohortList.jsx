import "/src/styles/CohortList.css";

export default function CohortList({ darkMode, handleFilter, handleShowAll, handleFilterTitle }) {
  return (
    <div className="cohort-list">
      <div className="cohort-list__container">
        <h2 className="cohort-list__container__filter-title">Choose a Class by Start Date</h2>
        <button className={`cohort-list__container__filter-btn ${darkMode ? "dark-mode" : "light-mode"}`} onClick={handleShowAll}> All Students </button>
        {["Winter2026", "Fall2026", "Summer2026", "Spring2026", "Winter2025", "Fall2025", "Summer2025", "Spring2025"].map((cohort) => (
          <button key={cohort} className={`cohort-list__container__filter-btn ${darkMode ? "dark-mode" : "light-mode"}`} onClick={() => handleFilter(cohort)}>{handleFilterTitle(cohort)}</button>
        ))}
      </div>
    </div>
  );
}