import Content from "../Content/Content";
import './style.css';

export default function Plug() {
        return (
                <section className='plug'>
                        <Content
                                title={'Раздел \n в разработке'}
                                desc='Приносим свои извинения, раздел находится в разработке'
                                btnName='перейти на главную'
                                btnLink='#'
                                userId='not_found'
                        />
                </section>
        )
}