import React from 'react';
import graph from '../img/graph.png';
import expertise from '../img/exp.png';
import customsol from '../img/cos.png';
import result from '../img/res.png';

function WhyChooseUs() {
  return (
    <section id="why-choose-us">
        <div className='container'>

        <p data-aos="fade-up"
     data-aos-duration="3000">Grow your Business With Tailored Strategies.</p>

        <div className=' whyus'>

            <div className=' whyus-left'>

                <h2>Why Choose Us</h2>
                <p>At KV, We offer a team of seasoned professionals with extensive industry expertise, delivering customized solutions tailored to your business needs. We pride ourselves on proven results that drive growth and profitability, a client-centric approach that prioritizes your success, and comprehensive services ranging from strategic planning to marketing solutions, all conducted with the highest level of integrity and professionalism.</p>
            </div>
            <div className=' whyus-right'>
                <img src={graph}/>
            </div>
        </div><br></br>
        <div className='why-us-card'>
            <div className='card'data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000">
                <img src={expertise}/>
                <h5>Expertise</h5>
            </div>
            <div className='card'data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000">
                <img src={customsol}/>
                <h5>Custom solution</h5>
            </div>
            <div className='card'data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="1000">
                <img src={result}/>
                <h5>Proven Result</h5>
            </div>
        </div>
        </div>
    </section>
  );
}

export default WhyChooseUs;
