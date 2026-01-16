import Header from "../components/header";
import { GitHubUserReposList } from "./repo";
import About from "./about";
import RecentPosts from "../components/recentPost";
import Contact from "./contact";
import { books } from "../data/books";
import RecentReadBooks from "../components/recentReadBooks";
import "../styles/pages/home.css"

function Home(){
    return ( 
    <div>
      <Header/>
      <div className="home">
        <div id="home-conteiner" className='conteiner'> 
          <div id="home-title"className="title-conteiner">
            <h1>The Blog of one student in Computer Systems Engineering.</h1>
          </div>
          <div id="home-content" className='content-conteiner'>
              <p>Here i share ideas, notes, reflections, and anything that sparks curiosity during my daily experiences, study sessions, and technical explorations.</p>
              <p>I believe that sharing knowledge is one of the best ways to learn and grow. That's why I document my progress here — to clarify my own understanding, keep track of my evolution, and hopefully help or inspire others along the way.</p>
              <p>You'll find here a mix of technical notes, project breakdowns, thoughts, and software engineering insights, all written from my perspective and personal knowledge.</p>
          </div>   
        </div>
      </div>
      <About/>
      <RecentPosts limit={5}/>
      <RecentReadBooks books={books.read} limit={3} />
      <GitHubUserReposList username="jakxel"/>
      <Contact/>
    </div>
    );
};

export default Home