import './Custom_Footer.css';
import { useNavigate } from 'react-router-dom';
import companyLogo from './Untitled design.png';



//Custom Footer Component
const CustomFooter = () => {
    const navigate = useNavigate();
    const goToContact = () => navigate('/Contact');
    const goToHome = () => navigate('/Home');

    return (
        <>
        <div className="mainfooter">
            <div className='footerwrapper'>
                <div className='footerlogo'><img src={companyLogo} onClick={() => {
                    goToHome();
                    window.scrollTo(0,0);

                }}/></div>
                <div className="footercontact">
                    <button className="footercontactbtn" onClick={goToContact}>Contact Us
                    </button>
                    <div className="footercontactinfo">
                        <br/>
                        <strong>Phone:</strong> (620)-215-2854
                        <br/>
                        <br/>
                        <strong>Address:</strong> Fort Scott KS, 66701
                        <br/>
                        <br/>
                        <strong>E-mail:</strong> jennq031480@gmail.com
                        <br/>
                        <br/>
                        <div className="footersocialmedia">
                            <a href="#" className="facebookfooter">Facebook</a>
                            <br/>
                            <br/>
                            <a href="#" className="twitterfooter">Twitter</a>
                            <br/>
                            <br/>
                            <a href="#" className="instagramfooter">Instagram</a>
                        </div>
                    </div>
                </div>
                <div className='map'>
                    <label for='officelocation' className='officelocationlabel'>Location</label>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d50426.459418357284!2d-94.7444636954021!3d37.821579324928805!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87c7a1ca6479a195%3A0x2e8e2a87646b817c!2sFort%20Scott%2C%20KS%2066701%2C%20USA!5e0!3m2!1sen!2sjp!4v1757025819433!5m2!1sen!2sjp" loading="lazy"></iframe>
                </div>
            </div>
        </div>
        </>
      );
}

export default CustomFooter;
