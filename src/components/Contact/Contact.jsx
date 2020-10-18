import React, { useContext } from 'react';
import Fade from 'react-reveal/Fade';
import { Container } from 'react-bootstrap';
import PortfolioContext from '../../context/context';
import Title from '../Title/Title';

const Contact = () => {
  const { contact } = useContext(PortfolioContext);
  const { cta, btn, email } = contact;

  return (
    <section id="contact">
      <Container>
        <Title title="Contact" />
        <Fade bottom duration={1000} delay={800} distance="30px">
          <div className="contact-wrapper">
            <p className="contact-wrapper__text">
              {cta || 'Would you like to work with me? Awesome!'}
            </p>
          </div>
            <form action="https://formspree.io/f/maylerka" method="POST">
                <input placeholder="Your Email" type="text" name="_replyto"/>
                <textarea placeholder="message" name="message"></textarea>
              <button type="submit">{btn || "Let's Talk"}</button>
            </form>
        </Fade>
      </Container>
    </section>
  );
};

export default Contact;
