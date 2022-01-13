import SearchButton from './SearchButton.js'
import SearchTextField from './SearchTextField.js'
import './styles/Search.css'

const SearchContainer = ( { searchToggle, toggleSearch, searchFor }) => {
    return (
        <div className="articleSearchContainer">
            <SearchButton isToggle={searchToggle} onToggle={toggleSearch}/>
            {searchToggle ? <SearchTextField searchFor={searchFor}/> : <></>}
        </div>
    )
}

export default SearchContainer
