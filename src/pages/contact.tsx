import "../styles/pages/contact.css"

const Contact = () => {
  return (
    <main className="contact__main">
      <div>
      </div>
      <div className="contact__side">
         <header className="contact__header">
        <h1>Contact</h1>
      </header>
      <section className="contact__section" >
        <p>
          If you want to reach out to me for questions, collaborations, feedback, or just to connect, feel free to use any of the methods below:
        </p>
        <ul>
          <li>
            <strong>Email:</strong> <a id="l1"href="mailto:Jakxel.dev@gmail.com">Jakxel.dev@gmail.com</a>
          </li>
          <li>
            <strong>GitHub:</strong>{' '}
            <a id="l2" href="https://github.com/jakxel" target="_blank" rel="noopener noreferrer">
              github.com/Jakxel
            </a>
          </li>
          <li>
            <strong>LinkedIn:</strong>{' '}
            <a id="l3" href="https://www.linkedin.com/in/victor-jakxel-islas-carreon-b6a156351/" target="_blank" rel="noopener noreferrer">
              linkedin.com/in/victor-jakxel-islas-carreon-b6a156351
            </a>
          </li>

        </ul>
        <p>
          I’m open to conversation about tech, learning, personal projects, or anything you find interesting.
        </p>
      </section>
      </div>
     
    </main>
  );
};

export default Contact;