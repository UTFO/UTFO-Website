import SearchButton from './SearchButton.js'
import SearchTextField from './SearchTextField.js'

const SearchContainer = ( { searchToggle, toggleSearch }) => {
    return (
        <div style={searchContainerStyle}>
            <SearchButton isToggle={searchToggle} onToggle={toggleSearch}/>
            {searchToggle ? <SearchTextField/> : <></>}
        </div>
    )
}

//Style for Search Container
const searchContainerStyle = {
    margin: 'auto', 
    position: 'relative', 
    textAlign: 'center', 
    marginLeft: 100, 
    display: 'flex',
    width: 'fit-content',
}

export default SearchContainer
