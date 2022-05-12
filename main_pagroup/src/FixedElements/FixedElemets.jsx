import './style.css';
import Logo from './Logo/Logo';
import LangBtn from './LangBtn/LangBtn';
import MusicBtn from './MusicBtn/MusicBtn';
import BurgerMenu from './BurgerMenu/BurgerMenu';
import Btn from '../Btn/Btn';
import ProgressBar from './ProgressBar/ProgressBar';

export default function FixedElements({ scroll, breakpoints }) {
        return (
                <div className='mainpage__fixedEl'>
                        <Logo />
                        <LangBtn />
                        <div id="burgerSide" style={{ position: 'absolute' }}>
                                <MusicBtn />
                                <BurgerMenu />
                        </div>
                        <ProgressBar scroll={scroll} breakpoints={breakpoints} />
                </div>
        )
}