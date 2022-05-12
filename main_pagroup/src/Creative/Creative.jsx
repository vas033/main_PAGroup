import Content from '../Content/Content';
import './style.css';
import video from '../video/background-logo-block.e1e434b.webm'

export default function Creative() {
        return (
                <section id='creative' className="creative">
                        <video className='creative__video' src={video} loop muted autoPlay>
                                <source src={video} type='video/webm' />
                        </video>
                        <Content
                                title='Креативная команда'
                                desc='UX/UI  • Motion design и 3D • Графический дизайн + SMM • NFT • Рекламные ролики'
                                btnName='перейти на сайт'
                                btnLink='https://vas033.github.io/test-PAGroup/'
                        />
                </section>
        )
}