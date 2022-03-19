import { styled } from '@mui/system'

export const HeaderContainer = styled('div')(({theme}) => ({
    display: 'flex',
    flexDirection: 'column'
}))

export const AuthorContainer = styled('div')(({theme}) => ({
    display: 'flex',
    margin: `${theme.spacing(1.5)} 0 ${theme.spacing(3)} 0`,
    alignItems: 'center'
}))

export const ShortDivider = styled('div')(({ theme }) => ({
    width: '8em',
    height: '8px',
    backgroundColor: 'rgb(170,170,170)'
}))

export const Title = styled('p')(({ theme }) => ({
    fontSize: '3em',
    fontWeight: '400',
    margin: `${theme.spacing(2)} 0 ${theme.spacing(1)} 0`
}))

export const SubtitleContainer = styled('div')(({ theme }) => ({
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    margin: `${theme.spacing(2)} 0 ${theme.spacing(2)} 0`
}))

export const Subtitle = styled('p')(({ theme }) => ({
    fontSize: '1.2em',
    fontWeight: '400',
}))

export const Heading = styled('div')(({ theme }) => ({
    borderLeft: '10px solid var(--accent-color)',
    padding: '5px 0 5px 10px',
    margin: `${theme.spacing(2)} 0`,
    fontSize: '1.5em',
    fontWeight: '400',
}))

export const VerticalDivider = styled('div')(({ theme }) => ({
    width: '5px',
    height: '2em',
    backgroundColor: 'rgb(170,170,170)',
    margin: `0 ${theme.spacing(1)}`,
}))

export const Tag = styled('button')(({ theme }) => ({
    color: 'white',
    backgroundColor: 'black',
    padding: `${theme.spacing(1)} ${theme.spacing(1.5)}`,
    fontSize: '1em',
    borderRadius: 10,
    border: 'none',
    width: 'fit-content'
}))

export const FullWidthContainer = styled('div')(({ theme }) => ({
    width: '100%',
    margin: `${theme.spacing(2)} 0`,
    display: 'flex'
}))

export const HalfWidthContainer = styled('div')(({ theme }) => ({
    width: '50%',
    margin: `${theme.spacing(2)} 0`,
}))

export const ImageContainer = styled('div')(({ theme }) => ({
    width: 'fit-content',
    minWidth: '50%',
    maxWidth: '60%',
}))

export const Image = styled('img')(({ theme }) => ({
    maxWidth: '100%',
    maxHeight: '500px',
    height: 'auto',
    padding:  `0 ${theme.spacing(2)}`,
}))

export const TitleImageContainer = styled('div')(({ theme }) => ({
    width: '100%',
    margin: `${theme.spacing(2)} 0`,
    textAlign: 'center',
}))

export const TitleImage = styled('img')(({ theme }) => ({
    maxWidth: '100%',
    maxHeight: '1000px',
    height: 'auto',
    margin: '0 auto',
}))
