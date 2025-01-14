import React, { useState } from "react";
import "./style.css";
import heroImage from "../../assets/images/logo.png";
import iconDiagnosis from "../../assets/images/home/diagnosis.png";
import iconAnalysis from "../../assets/images/home/blood-test.png";
import iconSupport from "../../assets/images/home/maintenance.png";
import homeAbout from "../../assets/images/logo.png";
export const Home = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAnswer = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqItems = [
    {
      question: "Ինչպիսի՞ ախտանշաններ են ցույց տալիս վահանաձև գեղձի խնդիրները:",
      answer: "Վահանաձև գեղձի խնդիրները ներառում են հոգնածություն, քաշի կտրուկ փոփոխություն, և մաշկի չորացում."
    },
    {
      question: "Ինչպե՞ս կարող եմ անցնել ախտորոշման գործընթացը:",
      answer: "Պարզապես կապ հաստատեք մեր մասնագետների հետ՝ օգտագործելով կոնտակտային ձևը."
    },
    {
      question: "Արդյո՞ք բուժումը տևական է:",
      answer: "Բուժման տևողությունը կախված է անհատական իրավիճակից: Մենք տրամադրում ենք հարմարեցված պլան."
    }
  ];
  return (
    <div className="homepage">
      <div className="hero">
        <img src={heroImage} alt="Healthy Lifestyle" className="hero-image" />
        <div className="hero-text">
          <h1>ՎԱՀԱՆԱՁԵՒ ԳԵՂՁԻ ՀԱՅԿԱԿԱՆ ԱՍՈՑԻԱՑԻԱ</h1>
          <p>Բացահայտեք վստահություն, գիտելիք և աջակցություն առողջ ապրելակերպի համար:</p>
        </div>
      </div>

      <div className="home-about">
        <div className="home-about-img">
          <img src={homeAbout} alt="About" />
        </div>

        <div className="home-about-content">
          <h1>Welcome to the
            Armenian Association of Digital Health</h1>
          <h4> About us</h4>
          <p>The Armenian Association of Digital Health (AADH) is a non-governmental, non-profit professional organization founded in 2008 by a group of physicians and ICT specialists in Yerevan, Armenia, interested in exploring and developing Digital Health in Armenia and worldwide.
            We are visioning to lead the quality and accessibility of health care in Armenia via exploration, establishment and development of digital health services in the local health care system.</p>
          <h4>Mission</h4>
          <p>The mission of Armenian Association of Digital Health is to promote the development of Digital Health in Armenia and at a regional and global scale.</p>
        </div>
      </div>

      <div className="home-info">
        <div>
          <h2>ԲԱՑԱՀԱՅՏԵՔ ՄԵՐ ԳՈՐԾՈՒՆԵՈՒԹՅՈՒՆԸ ԵՒ ՆԱԽԱԳԾԵՐԸ</h2>
          <button>Կարդալ ավելին</button>
        </div>

      </div>
      <div className="home-services">
        <h2>Մեր Ծառայությունները</h2>
        <div className="home-services-list">
          <div className="home-services-item">
            <img src={iconDiagnosis} alt="Diagnosis Icon" className="home-services-icon" />
            <h3>Ախտորոշում և Խորհրդատվություն</h3>
            <p>Մենք առաջարկում ենք ճշգրիտ ախտորոշում և անհատական խորհրդատվություն մեր փորձագետներից:</p>
          </div>
          <div className="home-services-item">
            <img src={iconAnalysis} alt="Analysis Icon" className="home-services-icon" />
            <h3>Արյան Թեստերի Վերլուծություն</h3>
            <p>Ձեր արյան թեստերի մանրակրկիտ վերլուծություն և հստակ արդյունքներ:</p>
          </div>
          <div className="home-services-item">
            <img src={iconSupport} alt="Support Icon" className="home-services-icon" />
            <h3>Հետբուժումային Աջակցություն</h3>
            <p>Շարունակական աջակցություն և հետևողականություն առողջ ապրելակերպի պահպանման համար:</p>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="faq">
      <h2>Հաճախակի Տրվող Հարցեր</h2>
      <div className="faq-list">
        {faqItems.map((item, index) => (
          <div className="faq-item" key={index}>
            <h3 onClick={() => toggleAnswer(index)}>{item.question}</h3>
            <p style={{ display: activeIndex === index ? 'block' : 'none' }}>{item.answer}</p>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};
