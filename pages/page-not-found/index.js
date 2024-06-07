import React from 'react'
import notFoundImage from '../../assets/icons/404.png'
function index() {
  return (
    <div style={{display:'flex',justifyContent:'center',alignItems:'center',height:'100dvh',background:'#e8dff2'}}>
        <img src={notFoundImage} style={{width:'800px'}} />
    </div>
  )
}

export default index