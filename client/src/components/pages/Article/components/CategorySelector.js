import './styles/CategorySelector.css';

const CategorySelector = ( { categories, categorySelected, selectCategory }) => {
    return (
        <div className="articleCategorySelector">
            <p className="articleCategoryAll" onClick={() => selectCategory(0)}>All</p>
            <p>|</p>
            <p className="articleCategoryTutorials" onClick={() => selectCategory(1)}>Tutorials</p>
            <p>|</p>
            <p className="articleCategoryProjects" onClick={() => selectCategory(2)}>Projects</p>
        </div>
    )
}

export default CategorySelector
