import React, {useState} from 'react';
import 'components/ImageAnimation/images/main.scss';
import './elipse.css';
import 'components/ImageAnimation/BurgerMenu/buregrMenu.css';

import 'components/ImageAnimation/BurgerMenu/arrow.scss';
// import Navigation from "./swiper";
import {arrow} from './index';
import {Slider} from './Slider';
import './style.scss';

export const Main = () => {
  // eslint-disable-next-line prefer-const
  let [slide, setSlide] = useState(0);
  const [courusel, setCourusel] = useState(0);

  function checkKey(e: React.KeyboardEvent<HTMLDivElement>) {
    if (e.keyCode === 38) {
      setSlide(--slide);
      if (slide !== 4) {
        setCourusel(0);
      }
      if (slide === 4) {
        setCourusel(1);
      }
    } else if (e.keyCode === 40) {
      setSlide(++slide);
      if (slide !== 4) {
        setCourusel(0);
      }
      if (slide === 4) {
        setCourusel(1);
      }
    }
  }

  if (slide < 0) {
    setSlide(0);
  }
  if (courusel < 0) {
    setCourusel(0);
  }
  if (slide > 5) {
    setSlide(5);
  }
  return (
    <>
      <div className="menu-wrap">
        <input type="checkbox" className="toggler" />
        <div className="hamburger">
          <div
            style={
              // eslint-disable-next-line no-nested-ternary
              courusel === 1
                ? {backgroundColor: '#0F72FF'}
                : courusel === 2
                ? {backgroundColor: '#FF8E50'}
                : courusel === 3
                ? {backgroundColor: '#F83D47'}
                : courusel === 4
                ? {backgroundColor: '#7044FB'}
                : slide === 4
                ? {backgroundColor: 'black'}
                : slide === 5
                ? {backgroundColor: 'black'}
                : {backgroundColor: 'white'}
            }
          />
        </div>
        <div className="text" style={slide >= 4 ? {color: 'black'} : {color: 'white'}}>
          <p>media & communication</p>
        </div>
        <div
          className={
            courusel === 1
              ? 'imgs3'
              : courusel === 2
              ? 'imgs4'
              : courusel === 3
              ? 'imgs5'
              : courusel === 4
              ? 'imgs6'
              : slide === 4
              ? 'imgs3'
              : slide === 5
              ? 'imgs3'
              : slide === 2
              ? 'imgs0'
              : 'imgs1'
          }
        />

        <div className="menu">
          <div>
            <div>
              <ul>
                <li>
                  <a href="/">About</a>
                </li>
                <li>
                  <a href="/">Career</a>
                </li>
                <li>
                  <a href="/">Projects</a>
                </li>
                <li>
                  <a href="/">Team</a>
                </li>
                <li>
                  <a href="/">Contacts</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="arros" role="button" tabIndex={0} onKeyDown={checkKey}>
        <div
          className="slide1"
          style={
            slide >= 1
              ? {opacity: 0, visibility: 'hidden'}
              : {textShadow: '1px', visibility: 'visible'}
          }
        >
          <h1
            style={
              slide >= 1
                ? {opacity: 0, visibility: 'hidden'}
                : {textShadow: '1px', visibility: 'visible'}
            }
            className="first-h1"
          >
            IDEAS STRATEGIES SOLUTIONS
          </h1>
        </div>
        <div
          className="slide2"
          style={
            slide === 1
              ? {
                  visibility: 'visible',
                }
              : {textShadow: '1px', visibility: 'hidden'}
          }
        >
          <div
            className="flip-card-inner"
            style={
              slide === 2
                ? {
                    transform: ' rotateX(180deg)',
                    visibility: 'visible',
                  }
                : {textShadow: '1px', visibility: 'hidden'}
            }
          >
            <div
              className="slide2-div1-front"
              style={
                slide === 1
                  ? {transform: `translateX(0%)`, visibility: 'visible'}
                  : {textShadow: '1px'}
              }
            >
              <h1>
                We suggest powerful <br /> backend solutions
              </h1>
            </div>
            <div className="slide2-div1-back ">
              <h1>
                We suggest powerful <br /> backend solutions
              </h1>
            </div>
          </div>

          <div
            className="flip-card-inner-2"
            style={
              slide === 2
                ? {
                    transform: ' rotateX(180deg)',
                    visibility: 'visible',
                  }
                : {textShadow: '1px', visibility: 'hidden'}
            }
          >
            <div
              className="slide2-div2-front"
              style={
                slide === 1 ? {transform: `translateX(106.73%)`} : {textShadow: '1px'}
              }
            >
              <h1>
                We suggest powerful <br /> backend solutions
              </h1>
            </div>
            <div className="slide2-div2-back ">
              <h1>
                We suggest powerful <br /> backend solutions
              </h1>
            </div>
          </div>
          <div
            className="flip-card-inner-3"
            style={
              slide === 2
                ? {
                    transform: ' rotateX(-180deg)',
                    visibility: 'visible',
                  }
                : {textShadow: '1px', visibility: 'hidden'}
            }
          >
            <div
              className="slide2-div3-front"
              style={
                slide === 1 ? {transform: `translateX(106.73%)`} : {textShadow: '1px'}
              }
            >
              <h1>
                We suggest powerful <br /> backend solutions
              </h1>
            </div>
            <div className="slide2-div3-back ">
              <h1>
                We suggest powerful <br /> backend solutions
              </h1>
            </div>
          </div>
        </div>
        <div
          className="slide2-1"
          style={
            slide === 3
              ? {
                  transform: 'transformY(0%)',
                  visibility: 'visible',
                }
              : {textShadow: '1px', visibility: 'hidden'}
          }
        >
          <div
            className="flip-card2-1-inner"
            style={
              slide === 3
                ? {
                    transform: 'transformY(0%)',
                    visibility: 'visible',
                  }
                : {textShadow: '1px', visibility: 'hidden'}
            }
          >
            <div
              className="slide2-1-div1-front"
              style={slide === 3 ? {transform: `translateX(0%)`} : {textShadow: '1px'}}
            >
              <h1>
                We suggest powerful <br /> backend solutions
              </h1>
            </div>
          </div>
          <div
            className="flip-card2-1-1-inner"
            style={
              slide === 3
                ? {
                    transform: ' transformY(0%)',
                    visibility: 'visible',
                  }
                : {textShadow: '1px', visibility: 'hidden'}
            }
          >
            <div
              className="slide2-1-1-div1-front"
              style={
                slide === 3
                  ? {transform: `translateY(100%)`, zIndex: 1}
                  : {textShadow: '1px'}
              }
            >
              <h1>
                We suggest powerful <br /> backend solutions
              </h1>
            </div>
          </div>
          <div
            className="flip-card2-1-inner-2"
            style={
              slide === 3
                ? {
                    transform: ' transformX(0%)',
                    visibility: 'visible',
                  }
                : {textShadow: '1px', visibility: 'hidden'}
            }
          >
            <div
              className="slide2-div2-1-front"
              style={
                slide === 3 ? {transform: `translateX(106.7%)`} : {textShadow: '1px'}
              }
            >
              <h1>
                We suggest powerful <br /> backend solutions
              </h1>
            </div>
          </div>
          <div
            className="flip-card2-1-inner-3"
            style={
              slide === 3
                ? {
                    transform: ' transformX(0%)',
                    visibility: 'visible',
                  }
                : {textShadow: '1px', visibility: 'hidden'}
            }
          >
            <div
              className="slide2-div3-1-front"
              style={
                slide === 3
                  ? {transform: `translateX(106.7%)`, zIndex: 0}
                  : {textShadow: '1px'}
              }
            >
              <h1>
                We suggest powerful <br /> backend solutions
              </h1>
            </div>
          </div>
        </div>
        <div
          className="slide3"
          style={
            courusel === 1
              ? {opacity: '1', transform: 'translateX(0%)'}
              : {opacity: '0', transform: 'translateX(-80%)'}
          }
        >
          <div className="slide3-text">
            <h1 className="slide3-h1">Who we are</h1>
            <p>
              iQ3 is a seasoned e-business enabler and equity consulting firm that plans,
              develops and deploys tailored, end-to-end communications and web-based
              business solutions.
            </p>
            <p>
              Our mission is to leverage experience, intelligence, creativity and the
              power of technology to gain sustainable competitive advantage and long-term
              value for our clients
            </p>
          </div>
          <div
            className="slide3-blue-rect"
            style={
              courusel === 1
                ? {transform: ' translateX(0%)'}
                : {transform: 'translateX(300%)'}
            }
          >
            <div className="slide3-div-img">
              <button
                type="button"
                className="slide3-button-back"
                onClick={() => {
                  setCourusel(4);
                }}
              >
                <img className="arrow-back" src={arrow} alt="" />
              </button>
              <button
                type="button"
                className="slide3-button-next"
                onClick={() => {
                  setCourusel(courusel + 1);
                }}
              >
                <img className="arrow-next" src={arrow} alt="" />
              </button>
              <h1 className="slide3-counter-h1">01</h1>
            </div>
          </div>
          <h1
            className="slide3-back-h1"
            style={
              courusel === 1
                ? {transform: ' translateX(0%)'}
                : {transform: 'translateX(-30%)'}
            }
          >
            Who we are
          </h1>
        </div>
        <div
          className="slide4"
          style={
            courusel === 2
              ? {opacity: '1', transform: 'translateX(0%)'}
              : {opacity: '0', transform: 'translateX(-100%)'}
          }
        >
          <div className="slide4-text">
            <h1 className="slide4-h1">Cooperative work</h1>
            <p>
              We offer value-driven brand, marketing and development solutions to satisfy
              the unique communication needs of your business and cost-effectively
              leverage your business results.
            </p>
            <p>We understand the role of teamwork in maximizing your results. </p>
            <p>
              From strategy consulting and vital messaging to mobile and web application
              development, we bring you the right people with the right skill sets - a
              diverse nucleus of professionals with a passion for creativity and success.
            </p>
          </div>
          <div
            className="slide4-blue-rect"
            style={
              courusel === 2
                ? {transform: ' translateX(0%)', opacity: '1'}
                : {transform: 'translateX(30%)'}
            }
          >
            <div className="slide4-div-img">
              <button
                className="slide4-button-back"
                type="button"
                onClick={() => {
                  setCourusel(courusel - 1);
                }}
              >
                <img className="arrow-back" src={arrow} alt="" />
              </button>
              <button
                className="slide4-button-next"
                type="button"
                onClick={() => setCourusel(courusel + 1)}
              >
                <img className="arrow-next" src={arrow} alt="" />
              </button>
              <h1 className="slide4-counter-h1">02</h1>
            </div>
          </div>
          <h1
            className="slide4-back-h1"
            style={
              courusel === 2
                ? {transform: ' translateX(15%)'}
                : {transform: 'translateX(-30%)'}
            }
          >
            Cooperative work
          </h1>
        </div>
        <div
          className="slide5"
          style={
            courusel === 3
              ? {opacity: '1', transform: 'translateX(0%)'}
              : {opacity: '0', transform: 'translateX(130%)'}
          }
        >
          <div className="slide5-text">
            <h1 className="slide5-h1">Creative. Innovative.</h1>
            <p>
              Delivering winning solutions on time and within budget, our talented team
              will engineer an exciting and durable brand presence for your business - in
              any medium.
            </p>

            {/* eslint-disable-next-line react/no-unescaped-entities */}
            <p>At iQ3 we don't just think outside the box, we build better boxes.</p>
          </div>
          <div
            className="slide5-blue-rect"
            style={
              courusel === 3
                ? {transform: ' translateX(0%)', opacity: '1'}
                : {transform: 'translateX(100%)'}
            }
          >
            <div className="slide5-div-img">
              <button
                className="slide5-button-back"
                type="button"
                onClick={() => {
                  setCourusel(courusel - 1);
                }}
              >
                <img className="arrow-back" src={arrow} alt="" />
              </button>
              <button
                className="slide5-button-next"
                type="button"
                onClick={() => setCourusel(courusel + 1)}
              >
                <img className="arrow-next" src={arrow} alt="" />
              </button>
              <h1 className="slide5-counter-h1">03</h1>
            </div>
          </div>
          <h1
            className="slide5-back-h1"
            style={
              courusel === 3
                ? {transform: ' translateX(15%)'}
                : {transform: 'translateX(-30%)'}
            }
          >
            Creative. Innovative.
          </h1>
        </div>
        <div
          className="slide6"
          style={
            courusel === 4
              ? {opacity: '1', transform: 'translateX(0%)'}
              : {opacity: '0', transform: 'translateX(-80%)'}
          }
        >
          <div className="slide6-text">
            <h1 className="slide6-h1">Marketing</h1>
            <p>
              As marketing professionals, we know how to communicate. We understand the
              media, the opportunities, the risks and the rewards.
            </p>

            <p>
              We understand needs and how to create powerful results consistently and
              effectively under some of the most challenging circumstances.
            </p>
            <p>
              We know what the focus should be, the long-term goals and what makes for a
              successful, sustainable result.
            </p>
          </div>
          <div
            className="slide6-blue-rect"
            style={
              courusel === 4
                ? {transform: ' translateX(0%)', opacity: '1'}
                : {transform: 'translateX(300%)'}
            }
          >
            <div className="slide6-div-img">
              <button
                className="slide6-button-back"
                type="button"
                onClick={() => {
                  setCourusel(courusel - 1);
                }}
              >
                <img className="arrow-back" src={arrow} alt="" />
              </button>
              <button
                className="slide6-button-next"
                type="button"
                onClick={() => setCourusel(1)}
              >
                <img className="arrow-next" src={arrow} alt="" />
              </button>
              <h1 className="slide5-counter-h1">04</h1>
            </div>
          </div>
          <h1
            className="slide6-back-h1"
            style={
              courusel === 4
                ? {transform: ' translateX(15%)'}
                : {transform: 'translateX(-30%)'}
            }
          >
            Marketing{' '}
          </h1>
        </div>
      </div>
      <div
        className="slide7"
        style={
          slide === 5 ? {transform: 'translateY(0%)'} : {transform: 'translateY(-110%)'}
        }
      >
        <Slider />
        <h1 className="slide7-h1">Projects</h1>
      </div>
    </>
  );
};
