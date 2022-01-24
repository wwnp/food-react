import React from 'react'
export const Preloader = props => {
  return (
    <div
      className="preloader-wrapper big active loader-custom"
      // style={{
      //   position: 'absolute!important',
      //   top: '0',
      //   left: '0',
      //   right: '0',
      //   bottom: '0',
      //   margin: 'auto'
      // }}
    >
      <div className={`spinner-layer spinner-${!props.color ? 'blue' : props.color}-only`}>
        <div className="circle-clipper left">
          <div className="circle"></div>
        </div><div className="gap-patch">
          <div className="circle"></div>
        </div><div className="circle-clipper right">
          <div className="circle"></div>
        </div>
      </div>
    </div >
  )
}