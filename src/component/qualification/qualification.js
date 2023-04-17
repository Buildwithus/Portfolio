import './qualification.css'
import tenth from '../images/sliet.jpeg';
import ssc from '../images/ssc.jpg';
import { useEffect } from 'react';
import AOS from 'aos';
import '../../../node_modules/aos/dist/aos.css';
function Quali() {
    useEffect(() => {
        AOS.init({duration:1000});
        
      }, []);
    return (
        <>
            <div className='containerq1' id='quali12'>
                <h1 className='q-h1'>EDUCATION</h1>

                <div className='cardq'>

                    <div className='card1' data-aos="fade-up">
                        <div class="card "  >
                            <img  src={tenth} class="card-img-top" alt="..." />
                            <div class="card-body">
                                <p class="card-text">Sant Longowal Institute of Engineering and Technology</p>
                                <b>2020-2024</b>
                                <p class="card-text">B.Tech from SLIET in the department of Electronics and Communication Engineering.</p>
                                
                            </div>
                        </div>
                    </div>
                    <div className='card1' data-aos="fade-up">
                        <div class="card "  >
                            <img src={ssc} class="card-img-top" alt="..." />
                            <div class="card-body">
                                <p class="card-text">Sardar Singh Convent Inter College</p>
                                <b>2018-2019</b>
                                <p class="card-text">I have completed 12th from SSC Inter College with 83.6%</p>
                            </div>
                        </div>
                    </div>
                    <div className='card1' data-aos="fade-up">
                        <div class="card ">
                            <img src={ssc} class="card-img-top" alt="..." />
                            <div class="card-body">
                                <p class="card-text">Sardar Singh Convent Inter College</p>
                                <b>2016-2017</b>
                                <p class="card-text">I have completed 10th from SSC Inter College with 88.0%</p>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </>
    )

}
export default Quali;