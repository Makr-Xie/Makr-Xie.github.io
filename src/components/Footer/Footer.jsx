import './index.css'

const Footer = () => {
    return (
        <div className='footer-container'>
            <div className='footer-links'>
                <a 
                    href='https://github.com/Makr-Xie' 
                    target='_blank' 
                    rel='noopener noreferrer'
                    className='footer-link'
                >
                    <i className='fab fa-github'></i> GitHub
                </a>
                <a 
                    href='https://www.zhihu.com/people/xyx-98-63' 
                    target='_blank' 
                    rel='noopener noreferrer'
                    className='footer-link'
                >
                    <i className='fab fa-zhihu'></i> Zhihu
                </a>
                <span className='footer-link'>
                    <i className='fab fa-instagram'></i> Instagram
                </span>
            </div>
        </div>
    )
}

export default Footer