
import './App.css'
import Aside from './component/Aside';
import BoxList from './component/BoxList';
import Footer from './component/Footer';
import Header from './component/Header';
import Headline from './component/Headline';
import ItemList from './component/ItemList';

function App() {
  return (
    <div id="layout">
      <Header />

      <main>
        <section id="content">
          <Headline />
          <ItemList />
        </section>
        <Aside />
        <BoxList />
      </main>
      <Footer />
    </div>
  )
}

export default App
