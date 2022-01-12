import searchIcon from './images/searchIcon.png'
import './styles/Search.css'

const SearchButton = ( { isToggle, onToggle } ) => {
    return (
        <button className="articleSearchButton" onClick={onToggle}>
            <img className="articleSearchIcon" src={searchIcon} alt=""/>
        </button>
    )
}

export default SearchButton
