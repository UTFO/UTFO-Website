const SearchTextField = () => {
    return (
        <form>
            <input type="text" style={searchTextFieldStyle} placeholder="Search here..."/>
        </form>
    )
}

//CSS for Search Text Field
const searchTextFieldStyle = {
    position: 'relative',
    top: 6,
    left: -23,
    height: 30,
    width: 200,
    zIndex: 0,
    borderRadius: 100,
    paddingLeft: 25
}

export default SearchTextField
