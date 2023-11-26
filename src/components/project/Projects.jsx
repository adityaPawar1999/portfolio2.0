
import WhatIKnowStyle from './whatIKnowStyle';
import { data, miniData } from './ProjectApi';

import GitHubIcon from '@mui/icons-material/GitHub';
import ViewComfyIcon from '@mui/icons-material/ViewComfy';

const Projects = () => {
  return (<>
    <WhatIKnowStyle>
      <div className="row mainBox g-0">
        <p className="text-center heading">FEATURED  <span className="color">WORK </span></p>
        <div className="leftbox col-lg-8">
          <h5 className='projectTitle' >PROJECTS  </h5>
          <div className='row'>
            {data.map((val) => {
              return (
                <div className='col-lg-6 g-1 projectCard' key={val.id}>
                  <div className='imgBox'>
                    <img className='imgStyle' src={val.img} alt='api Imgs' />
                    <div className='colorBox' style={{ background: val.color }}></div>
                    <h4 className='title'>{val.title}</h4>
                    <div className='projectLinks text-white'>
                      <p >
                        <span className='gitLink'>
                          <a href={val.gitLink} target='_blank' rel='noopener noreferrer'>
                            <GitHubIcon sx={{ fontSize: 20 }} />
                          </a>
                        </span>
                      </p>
                    </div>
                    <h4 className='descr'>{val.descriptiom}</h4>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className='rightBox col-lg-4'>
          <h5 className='miniProjectHeading'>MORE PROJECTS </h5>
          <div className='row miniProjects'>
            {
              miniData.map((val) => {
                return (
                  <div className='miniProjectCard g-3' key={val.id}>
                    <a href={val.link} target='_blank' rel='noopener noreferrer'>
                      <p className='miniProjectTitle'>{val.title}</p>
                      <p className='miniProjectDescription'>{val.descr}</p>
                    </a>
                  </div>
                );
              })
            }
            <br />
          </div>
        </div>
      </div>
    </WhatIKnowStyle>
  </>);
};

export default Projects;
