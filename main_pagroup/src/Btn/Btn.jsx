import './style.css';

export default function Btn({name, link}) {
        return (
                <a href={link} className="mainpage__btn" target='_blank'>
                        {name}
                </a>
        )
}