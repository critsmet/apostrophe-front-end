import React from 'react'
const Browse = () => (

  <div id="browse" className="flex justify-between avenir mt1 ttl ml6 mr6 slide">
    <div className="f6 dib pt1 tl bg-washed-green tc br3 h3 w-50">
      <div className="dib">genres:</div>
        <div className="dib"><input type="checkbox" id="art-design" /><label htmlFor="art-design">Art & Design</label></div>
        <div className="dib"><input type="checkbox" id="creative" /><label htmlFor="creative">Creative Writing & Poetry</label></div>
        <div className="dib"><input type="checkbox" id="culture-lifestyle" /><label htmlFor="culture-lifestyle">Culture & Lifestyle</label></div>
        <div className="dib"><input type="checkbox" id="gender-sex" /><label htmlFor="gender-sex">Gender & Sexuality</label></div>
        <div className="dib"><input type="checkbox" id="science-tech" /><label htmlFor="science-tech">Science & Technology</label></div>
        <div className="dib"><input type="checkbox" id="soc-colonialism" /><label htmlFor="soc-colonialism">Society & Capitalism</label></div>
    </div>
    <div className="f6 dib tl bg-washed-yellow br3 h3 w-50">
      <div className="ml3 mt2 lt dib">tags: add</div>
    </div>
  </div>

  )

export default Browse
