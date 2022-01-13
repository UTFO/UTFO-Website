import './styles/Search.css'

const SearchTextField = ( { searchFor }) => {
    return (
        <form className="articleSearchTextForm">
            <input type="text" className="articleSearchTextField" placeholder="Search here..." onChange={() => searchFor()}/>
        </form>
    )
}

//CSS for Search Text Field


export default SearchTextField
