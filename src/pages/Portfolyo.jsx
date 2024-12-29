import Footer from "../components/Footer";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Profile from "../components/Profile";
import Projects from "../components/Projects";
import Skills from "../components/Skills";




export default function Portfolyo () {
    return (
        <div translate="no" className="flex flex-col ">
          <Header />
          <div className="flex flex-col">
            <Hero />
            <Skills />
            <Profile />
            <Projects />
          </div>
          <Footer />
        </div>
      );
}