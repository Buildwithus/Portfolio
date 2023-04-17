import Navbar from './component/navbar/navbar.js';
import Mainbody from './component/mainbody/mainbody.js';
import Skilbody from './component/skill/skill.js';
import Services from './component/services/services.js';
import Quali from './component/qualification/qualification.js';
import Project from './component/project/project.js';
import Social from './component/social media/social.js';

import './App.css';
function App(){
    return(
        <>
        <Navbar/>
        <Mainbody/>
        <Quali/>
        <Services/>
        <Skilbody/>
        <Project/>
        <Social/>
        </>
    )
}
export default App;