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
    "url": "./glassesImage/v9.png",
    "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
  }
]

export default class UngDungChonKinh extends Component {
  renderGlasses = () => {
    return data.map((glass, index) => {
      return <img src={glass.url} height={350} />
    })
  }





  // renderCardFilm = () => {
  //   return data.map((film, index) => {
  //     return <div className='col-lg-2 col-md-3 mt-2' key={index}>
  //       <div className='card'>
  //         <img src={film.hinhAnh} alt="..." height={350}/>
  //         <div className='card-body bg-dark text-white '>
  //           <h3 style={{height:85}}>{film.tenPhim}</h3>
  //           <p style={{height:75}}>{film.moTa.length > 60 ? film.moTa.slice(0,60)+'...': film.moTa}</p>
  //         </div>
  //       </div>
  //     </div>
  //   })
  // }
  render() {
    return (
      <div className='bg-glasses' >
        <div className='h-100' style={{ background: 'rgba(0,0,0,.5)', minHeight: '100vh' }}>
          <div className='container'>
            <div className='row'>
              <div className='col-6'>
                <img src='../../imgUngDungChonKinh/model.jpg' alt="" width={280} />
                <h3>dfgfed</h3>
              </div>
              <div className='col-6'>
                <img src='../../imgUngDungChonKinh/model.jpg' alt="" width={280} />
              </div>
            </div>
            <div>
              <img src="../../imgUngDungChonKinh/g1.jpg" alt="" width={50} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}
