import gsap from "gsap";
import { useEffect, useRef } from "react";
import styled from "styled-components";

import { ScrollTrigger } from "gsap/ScrollTrigger";
import telephone from "../../assets/telephone.svg";
import healthcare from "../../assets/healthcare.svg";
import Capsule from "../../assets/3dcapsule.png";

import TextBlock from "../../components/TextBlock";
import SvgBlock from "../../components/SvgBlock";

const ServiceSection = styled.section`
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  padding-top: 20rem;
`;

const Background = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  width: 100vw;
  height: 85vh;
  z-index: -1;
  background-color: #cc47f5;
  background-size: auto 100vh;
  background-repeat: no-repeat;
`;

const Title = styled.h1`
  color: var(--white);
  display: inline-block;
  font-size: 2rem;
  /* margin-top: 4rem; */
  margin-top: 1rem;
  position: relative;
  &::before {
    content: "";
    height: 1px;
    width: 50%;
    position: absolute;
    left: 50%;
    bottom: 0;
    transform: translate(-50%, 0.5rem);
    /* or 100px */
    border-bottom: 2px solid var(--pink);
  }
`;

const Line = styled.span`
  border-left: 4px solid var(--background);
  height: 15rem;
  margin-top: 2rem;
  border-radius: 20px 20px 0 0;
`;

const Triangle = styled.span`
  width: 0;
  height: 0;
  border-left: 1.2rem solid transparent;
  border-right: 1.2rem solid transparent;
  border-top: 2rem solid var(--background);
`;

const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 10rem 10rem;
  position: relative;
  @media only Screen and (max-width: 64em) {
    margin: 10rem calc(4rem + 5vw);
  }
  @media only Screen and (max-width: 48em) {
    display: block;
    &:last-child {
      margin-bottom: 2rem;
    }
  }
  @media only Screen and (max-width: 40em) {
    margin: 10rem calc(2rem + 3vw);
    &:last-child {
      margin-bottom: 1rem;
    }
  }
`;

const OBJ = styled.div`
  position: absolute;
  top: 80%;
  right: 35%;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 20vw;
  @media only Screen and (max-width: 48em) {
    opacity: 0.5;
  }
`;

const Services = () => {
  const ref = useRef(null);
  gsap.registerPlugin(ScrollTrigger);
  const revealRefs = useRef([]);
  revealRefs.current = [];

  useEffect(() => {
    const element = ref.current;
    ////
    const mq = window.matchMedia("(max-width: 48em)");
    const t1 = gsap.timeline({
      scrollTrigger: {
        trigger: document.getElementById("services"),
        start: "top top+=180",
        end: "bottom bottom",
        pin: element,
        pinReparent: true,
      },
    });
    t1.fromTo(
      document.getElementById("line"),
      {
        height: "15rem",
      },
      {
        height: "3rem",
        duration: 2,
        scrollTrigger: {
          trigger: document.getElementById("line"),
          start: "top top+=200",
          end: "bottom top+=220",
          scrub: true,
        },
      }
    );

    revealRefs.current.forEach((el, index) => {
      if (mq.matches) {
        t1.from(el.childNodes[0], {
          x: -300,
          opacity: 0,
          duration: 2,
          ease: "power2",
          scrollTrigger: {
            id: `section-${index + 1}`,
            trigger: el,
            start: "top center+=200",
            end: "bottom bottom-=100",
            scrub: true,
            snap: true,
          },
        })
          .to(el.childNodes[1], {
            transform: "scale(0)",
            ease: "power2.inOut",
            scrollTrigger: {
              id: `section-${index + 1}`,
              trigger: el.childNodes[1],
              start: "top center",
              end: "bottom center",
              scrub: true,
              snap: true,
            },
          })
          .from(el.childNodes[2], {
            y: 400,
            duration: 2,
            ease: "power2",
            scrollTrigger: {
              id: `section-${index + 1}`,
              trigger: el,
              start: "top center+=100",
              end: "bottom bottom-=200",
              scrub: true,
              snap: true,
            },
          })
          .to(el, {
            opacity: 0,
            ease: "power2",
            scrollTrigger: {
              id: `section-${index + 1}`,
              trigger: el,
              start: "top top+=300",
              end: "center top+=300",
              scrub: true,
            },
          });
      } else {
        t1.from(el.childNodes[0], {
          x: -300,
          opacity: 0,
          duration: 2,
          ease: "power2",
          scrollTrigger: {
            id: `section-${index + 1}`,
            trigger: el,
            start: "top center+=100",
            end: "bottom bottom-=200",
            scrub: true,
            snap: true,
          },
        })
          .to(el.childNodes[1], {
            transform: "scale(0)",
            ease: "power2.inOut",
            scrollTrigger: {
              id: `section-${index + 1}`,
              trigger: el.childNodes[1],
              start: "top center",
              end: "bottom center",
              scrub: true,
              snap: true,
            },
          })
          .from(el.childNodes[2], {
            y: 400,
            duration: 2,
            ease: "power2",
            scrollTrigger: {
              id: `section-${index + 1}`,
              trigger: el,
              start: "top center+=100",
              end: "bottom bottom-=200",
              scrub: true,
              snap: true,
            },
          })
          .to(el, {
            opacity: 0,
            ease: "power2",
            scrollTrigger: {
              id: `section-${index + 1}`,
              trigger: el,
              start: "top top+=200",
              end: "center top+=300",
              scrub: true,
            },
          });
      }
    });
  }, []);

  const addToRefs = (el) => {
    if (el && !revealRefs.current.includes(el)) {
      revealRefs.current.push(el);
    }
  };
  return (
    <ServiceSection id="services">
      <Background ref={ref}>
        <Title className="title">What We Do</Title>
        <Line id="line" />
        <Triangle id="triangle" />
      </Background>

      <Content ref={addToRefs}>
        <TextBlock
          topic="Book Appointments"
          title={<h1>Now Patients can Book Appointments virtually</h1>}
          subText={
            <h5>
              It can be offline, online, offline/online which helps the patients
              to connect to the doctor much efficiently.
            </h5>
          }
        />
        <OBJ>
          <img src={Capsule} alt="Tube Object" width="400" height="400" />
        </OBJ>
        <SvgBlock svg="Support.svg" />
      </Content>
      <Content ref={addToRefs}>
        <TextBlock
          topic="View Reports"
          title={<h1>Remote report generation</h1>}
          subText={
            <h5>
              Have your health reports remotely so that you can find treatment
              with your previous diagnosis from anywhere in the world.
            </h5>
          }
        />
        <OBJ>
          <img src={healthcare} alt="Cone Object" width="400" height="400" />
        </OBJ>
        <SvgBlock svg="report.svg" />
      </Content>
      <Content ref={addToRefs}>
        <TextBlock
          topic="Ambulance"
          title={<h1>One Click to Service</h1>}
          subText={
            <h5>
              In Emergencies Doctor cannot do virtual treatment so we provide an
              option to connect to the Hospital via Ambulance.
            </h5>
          }
        />
        <OBJ>
          <img src={telephone} alt="Cone Object" width="400" height="400" />
        </OBJ>
        <SvgBlock svg="ambulance.svg" />
      </Content>
      <Content>
        <TextBlock
          topic="Virtual Assisstant"
          title={<h1>Support for your digital presence</h1>}
          subText={
            <h5>
              Once your system is online, we will stay on hand to help you use
              it and provide technical support and maintenance your healthcare.
            </h5>
          }
        />
        <OBJ>
          <img src={Capsule} alt="Capsule Object" width="400" height="400" />
        </OBJ>
        <SvgBlock svg="Support.svg" />
      </Content>
    </ServiceSection>
  );
};

export default Services;
