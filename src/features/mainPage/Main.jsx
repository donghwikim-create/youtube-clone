import React from 'react'
import Header from '../../components/Header';
import Navigation from '../../components/Navigation';
import VidioDashBoard from '../../components/VideoDashBoard';

function FeatureMain() {
  return (
    <>
      <Header />
      <div className='flex'>
      <Navigation />
      <VidioDashBoard />
      </div>
    </>
  )
}

export default FeatureMain;