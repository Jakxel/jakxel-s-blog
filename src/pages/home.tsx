import Header from "../components/Header/header";
import { GitHubUserReposList } from "./repo";
import RecentPosts from "../components/sections/recentPost";
import HomeMessage from "../components/sections/homeMessage";
import Contact from "./contact";
import RecentArticles from "../components/sections/recentArticles";
import { books } from "../data/books";
import RecentReadBooks from "../components/sections/recentReadBooks";
import "../styles/sections/cards.css"

function Home(){
    return ( 
      <div className="container">
        <Header/>
        <HomeMessage/>
        
        <RecentPosts limit={5}/>
        <div className="cards-grid">
          <div className="card"><RecentArticles/></div>
          <div className="card"><RecentReadBooks books={books.read} limit={3} /></div>
        </div>
        <GitHubUserReposList username="jakxel"/>
        <Contact/>
   
      </div>
    
    );
};

export default Home