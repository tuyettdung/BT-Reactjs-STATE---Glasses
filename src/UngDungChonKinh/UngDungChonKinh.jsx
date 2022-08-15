import React, { Component } from 'react'
import '../assets/scss/style.scss'

const data = [
  {
    "id": 1,
    "price": 30,
    "name": "GUCCI G8850U",
    "url": "./glassesImage/v1.png",
    "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
  },
  {
    "id": 2,
    "price": 50,
    "name": "GUCCI G8759H",
    "url": "./glassesImage/v2.png",
    "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
  },
  {
    "id": 3,
    "price": 30,
    "name": "DIOR D6700HQ",
    "url": "./glassesImage/v3.png",
    "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
  },
  {
    "id": 4,
    "price": 70,
    "name": "DIOR D6005U",
    "url": "./glassesImage/v4.png",
    "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
  },
  {
    "id": 5,
    "price": 40,
    "name": "PRADA P8750",
    "url": "./glassesImage/v5.png",
    "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
  },
  {
    "id": 6,
    "price": 60,
    "name": "PRADA P9700",
    "url": "./glassesImage/v6.png",
    "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
  },
  {
    "id": 7,
    "price": 80,
    "name": "FENDI F8750",
    "url": "./glassesImage/v7.png",
    "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
  },
  {
    "id": 8,
    "price": 100,
    "name": "FENDI F8500",
    "url": "./glassesImage/v8.png",
    "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
  },
  {
    "id": 9,
    "price": 60,
    "name": "FENDI F4300",
    "url": "./glassesImage/v7.png",
    "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
  }
]

export default class UngDungChonKinh extends Component {
  state = {
    srcImg: './glassesImage/v9.png',
    name: 'FENDI F8750',
    desc: 'Light pink square lenses define these sunglasses, ending with amother of pearl effect tip.'
  }

  renderGlasses = () => {
    return data.map((glass, index) => {
      return <img src={glass.url} width={100} onClick={() => {
        this.setState({
          srcImg : glass.url,
          name: glass.name,
          desc: glass.desc
        })
      }} />
    })
  }

  render() {
    return (
      <div className='bg-glasses' >
        <div className='h-100' style={{ background: 'rgba(0,0,0,.5)', minHeight: '100vh' }}>
          <div className='container'>
            <div className='row mb-3'>
              <div className='col-6 mt-5 model-left'>
                <img src='./glassesImage/model.jpg' alt="" width={280} />
                <div className='img-content'>
                  <h3>FENDI F4300</h3>
                  <p>Light pink square lenses define these sunglasses, ending with amother of pearl effect tip.</p>
                </div>
                <div className='img-glass'>
                  <img src='./glassesImage/v7.png' alt="" />
                </div>
              </div>
              <div className='col-6 mt-5 model-left'>
                <img src='./glassesImage/model.jpg' alt="" width={280} />
                <div className='img-content'>
                  <h3>{this.state.name}</h3>
                  <p>{this.state.desc}</p>
                </div>
                <div className='img-glass'>
                  <img src={this.state.srcImg} alt="" />
                </div>

              </div>
            </div>
            <div className='render-bg'>
              {this.renderGlasses()}
            </div>
          </div>
        </div>
      </div>
    )
  }
}
