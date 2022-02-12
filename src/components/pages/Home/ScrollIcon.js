import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

const icons = {
    'upwards': <KeyboardArrowUpIcon fontSize='large' />,
    'downwards': <KeyboardArrowDownIcon fontSize='large' />
}

function ScrollIcon(props) {
    const ArrowIcon = icons[props.direction];
    return ArrowIcon;
}

export default ScrollIcon;