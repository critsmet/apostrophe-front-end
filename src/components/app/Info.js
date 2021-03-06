import React from 'react'

const Info = () => {
  window.scrollTo(0, 0)
  return (
    <div className="flex flexbox flex-wrap justify-center w-100">
      <div className="flex mt4-ns mt3 w-100 flex-column-ns w-30-l w-40-m ml3">
        <span className="words center tr-ns">
          apostrophe is a catalog of digital publications with a focus on small and independent webzines and online journals
        </span>
      </div>
      <div className="flex mt4-ns mt3 w-100 w-30-l w-40-m ml3">
        <span className="info">
          apostrophe was created out of an appreciation for the artistry and unique voices housed in digital publications.
          despite how pervasive they are in contemporary culture, they remain an undervalued medium for content, perhaps because of the lack of an index to reference them.
          the purpose of apostrophe is two-fold: to allow readers of digital publications to discover new ones by providing a well-compiled source, and to give writers a tool for finding new platforms where they can share their work.
          if you would like to contribute to the project, please send a message to the creator, <u><a href="http://critsmet.github.io/bio">chris metzger</a></u>, with information about a publication you think belongs here.
          apostrophe shares publications that are primarily digital, or have a digital version of a print publication that provides online access to most or all of the same material.
          this is the first iteration of apostrophe and new ideas are already being sketched.
          feel free to send a message if you are interested in getting involved with the project.
        </span>
      </div>
    </div>
  )
}

export default Info
