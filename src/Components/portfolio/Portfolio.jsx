import portData from '../../Data/Portfoliodata.js'

function  Portfolio (){
  
  return (
    <section id='portfolio'>
      <h1 className='my-portfolio'>Portfolio</h1>
      <div className="container portfolio-container">
        {
          portData.map(({id,Title, Github, Demo})=>
         {
          return(
            <article key={id} className='portfolio-item'>
          <div className="portfolio-item-img">

          </div>
          <h3 key={Title}>Title</h3>
          <div className="portfolio-item-cta">
          <a href= {Github} className='btn'>Github</a>
          <a href={Demo} className='btn btn-primary'> Live Demo</a>
          </div>
        </article>
          )
         } )
        }
      </div>
    </section>
  )
}

export default Portfolio