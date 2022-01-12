import './styles/CategorySelector.css'

const CategorySelector = ( { categories, categorySelected, selectCategory }) => {
    return (
        <div className="articleCategorySelector">
            <p className="articleCategorySelectorCategory" onClick={() => selectCategory(0)}>All</p>
            <p>|</p>
            <p className="articleCategorySelectorCategory" onClick={() => selectCategory(1)}>Tutorials</p>
            <p>|</p>
            <p className="articleCategorySelectorCategory" onClick={() => selectCategory(2)}>Projects</p>
        </div>
    )
}

export default CategorySelector
