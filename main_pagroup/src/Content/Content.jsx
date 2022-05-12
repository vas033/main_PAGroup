import Btn from '../Btn/Btn';

export default function Content({ title, desc, btnName, btnLink, userId }) {
        return (
                <div id={userId} className="plug__content content">
                        <h2 className='plug__title title'>{title}</h2>
                        <p className="plug__desc desc">
                                {desc}
                        </p>
                        <Btn name={btnName} link={btnLink} />
                </div>
        )
}