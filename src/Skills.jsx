import "./skill.css"

function Skills() {
  return (
    <>
     <article> 
        <h1 className='titulo' id='skills'>Skills</h1>  

        <section className="progress-circle-container ">
          <div className="skills">
            <p className="subtitulo">Html</p>
            <div className="progress-circle progress-90"><span>90</span></div>  
          </div>
          <div className="skills">
            <p className="subtitulo">Css</p>
            <div className="progress-circle progress-85"><span>85</span></div>  
          </div>
          <div className="skills">
            <p className="subtitulo">Java</p>
            <div className="progress-circle progress-50"><span>50</span></div>  
          </div>
          <div className="skills">
            <p className="subtitulo">JavaScript</p>
            <div className="progress-circle progress-60"><span>60</span></div>  
          </div>
        </section>  
        <section>
          <div className="skills">
            <p className="subtitulo">MySql</p>
            <div className="progress-circle progress-45"><span>45</span></div>  
          </div>
          <div className="skills">
            <p className="subtitulo">Node JS</p>
            <div className="progress-circle progress-25"><span>25</span></div>  
          </div>
          <div className="skills">
            <p className="subtitulo">Bootstrap</p>
            <div className="progress-circle progress-60"><span>60</span></div>  
          </div> 
          <div className="skills">
            <p className="subtitulo">React</p>
            <div className="progress-circle progress-30"><span>30</span></div>  
          </div> 
        </section>
      </article>
    </>
  )
}

export default Skills