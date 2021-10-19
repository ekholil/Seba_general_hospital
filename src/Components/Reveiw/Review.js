import React, { useState } from 'react';
import {AiFillCaretRight, AiFillCaretLeft} from 'react-icons/ai'
import ItemsCarousel from 'react-items-carousel';
import man1 from './man1.jpg'
import man2 from './man2.jpg'
import man3 from './man3.jpg'
import man4 from './man4.jpg'
import man5 from './man5.jpg'
const Review = () => {
    const [activeItemIndex, setActiveItemIndex] = useState(0);
  const chevronWidth = 10;
    return (
        <div className="container my-3" style={{ padding: `0 ${chevronWidth}px` }}>
            <h1 className="text-center my-3">Patient Reviews</h1>
      <ItemsCarousel
        requestToChangeActive={setActiveItemIndex}
        activeItemIndex={activeItemIndex}
        numberOfCards={1}
        gutter={20}
        leftChevron={<button>{<AiFillCaretLeft />}</button>}
        rightChevron={<button>{<AiFillCaretRight />}</button>}
        outsideChevron
        chevronWidth={chevronWidth}
        infiniteLoop={true}
      >
        <div className="text-center flex items-center justify-center" >
            <div style={{ height: 400, width: 450, background: '#FFF' }}>
            <img className="rounded-full block mx-auto my-2" src={man1} alt="" />
            <h2>Joshim uddin</h2>
            <p>Hospitals have long existed in most countries. Developing countries, which contain a large proportion of the world’s population, generally do not have enough hospitals, equipment, and trained staff to handle the volume of persons who need care. </p>
            </div>
        </div>
        <div className="text-center flex items-center justify-center" >
            <div style={{ height: 400, width: 450, background: '#FFF' }}>
            <img className="rounded-full block mx-auto my-2" src={man2} alt="" />
            <h2>Humayun Kobir</h2>
            <p>Hospitals have long existed in most countries. Developing countries, which contain a large proportion of the world’s population, generally do not have enough hospitals, equipment, and trained staff to handle the volume of persons who need care. </p>
            </div>
        </div>
        <div className="text-center flex items-center justify-center" >
            <div style={{ height: 400, width: 450, background: '#FFF' }}>
            <img className="rounded-full block mx-auto my-2" src={man3} alt="" />
            <h2>Khaled Hossain</h2>
            <p>Hospitals have long existed in most countries. Developing countries, which contain a large proportion of the world’s population, generally do not have enough hospitals, equipment, and trained staff to handle the volume of persons who need care. </p>
            </div>
        </div>
        <div className="text-center flex items-center justify-center" >
            <div style={{ height: 400, width: 450, background: '#FFF' }}>
            <img className="rounded-full block mx-auto my-2" src={man4} alt="" />
            <h2>Abdur Rahman</h2>
            <p>Hospitals have long existed in most countries. Developing countries, which contain a large proportion of the world’s population, generally do not have enough hospitals, equipment, and trained staff to handle the volume of persons who need care. </p>
            </div>
        </div>
        <div className="text-center flex items-center justify-center" >
            <div style={{ height: 400, width: 450, background: '#FFF' }}>
            <img className="rounded-full block mx-auto my-2" src={man4} alt="" />
            <h2>Abul kashem</h2>
            <p>Hospitals have long existed in most countries. Developing countries, which contain a large proportion of the world’s population, generally do not have enough hospitals, equipment, and trained staff to handle the volume of persons who need care. </p>
            </div>
        </div>
        
        
      </ItemsCarousel>
    </div>
    );
};

export default Review;