import './skill.css'
import { useEffect } from 'react';
import AOS from 'aos';
import '../../../node_modules/aos/dist/aos.css';
function Skilbody() {
  useEffect(() => {
    AOS.init({duration:1500});
    
  }, []);
  return (
    <>
      <div className='container1' id='skill12'>
        <h1 className='c1-h1'>I AM SKILLED IN</h1>
        <div className='progress-container'>

          <div className='p-left'>
            <div className='pr-1'>
              <h6 >HTML</h6>
              <div class="progress">
                <div class="progress-bar W-98" role="progressbar" aria-valuenow="98" aria-valuemin="0" aria-valuemax="100" data-aos="slide-right"></div>
              </div>
            </div>

            <div className='pr-1'>
             <h6>CSS</h6>
              <div class="progress">
                <div class="progress-bar W-90" role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100" data-aos="slide-right"></div>
              </div>
            </div>
            <div className='pr-1'>
              <h6>JAVA SCRIPT</h6>
              <div class="progress">
                <div class="progress-bar W-60" role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100" data-aos="slide-right"></div>
              </div>
            </div>
            <div className='pr-1'>
              <h6>REACT JS</h6>
              <div class="progress">
                <div class="progress-bar W-85" role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100" data-aos="slide-right"></div>
              </div>
            </div>
            <div className='pr-1'>
              <h6>NODE JS</h6>
              <div class="progress">
                <div class="progress-bar W-80" role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100" data-aos="slide-right"></div>
              </div>
            </div>
            
            
          </div>

          <div className='p-left'>
          <div className='pr-1'>
              <h6>MONGODB</h6>
              <div class="progress">
                <div class="progress-bar W-70" role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100" data-aos="slide-right"></div>
              </div>
            </div>
            <div className='pr-1'>
              <h6>EXPRESS JS</h6>
              <div class="progress">
                <div class="progress-bar W-70" role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100" data-aos="slide-right"></div>
              </div>
            </div>
          <div className='pr-1'>
              <h6>C/C++</h6>
              <div class="progress">
                <div class="progress-bar W-90" role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100" data-aos="slide-right"></div>
              </div>
            </div>
            <div className='pr-1'>
              <h6>DSA</h6>
              <div class="progress">
                <div class="progress-bar W-80" role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100" data-aos="slide-right"></div>
              </div>
            </div>
          </div>


        </div>
      </div>
    </>
  )

}
export default Skilbody;