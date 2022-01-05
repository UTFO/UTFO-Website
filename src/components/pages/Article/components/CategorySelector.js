const CategorySelector = ( { categories, categorySelected, selectCategory }) => {
    return (
        <div style={categorySelectorStyle}>
            <p style={allStyle} onClick={() => selectCategory(0)}>All</p>
            <p>|</p>
            <p style={tutorialStyle} onClick={() => selectCategory(1)}>Tutorials</p>
            <p>|</p>
            <p style={projectStyle} onClick={() => selectCategory(2)}>Projects</p>
        </div>
    )
}

const categorySelectorStyle = {
    display: 'flex',
    gap: '1%',
    fontSize: 20,
},

allStyle = {
    cursor: 'pointer',
},

tutorialStyle = {
    cursor: 'pointer',
},

projectStyle = {
    cursor: 'pointer',
}

export default CategorySelector
