import SearchButton from './SearchButton.js'
import SearchTextField from './SearchTextField.js'
import './styles/Search.css'

const SearchContainer = ( { searchToggle, toggleSearch }) => {
    return (
        <div className="articleSearchContainer">
            <SearchButton isToggle={searchToggle} onToggle={toggleSearch}/>
            {searchToggle ? <SearchTextField/> : <></>}
        </div>
    )
}

export default SearchContainer
