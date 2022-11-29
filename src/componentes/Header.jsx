import LogoCopa from '../assets/image.png'

function Header(){
    return(
        <div className='cabecalho-placar'>
            <div className='placar-logo'>
                <img src={LogoCopa} alt='Copa' />
            </div>
        </div>
    )
}
export default Header