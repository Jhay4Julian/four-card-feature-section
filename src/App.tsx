import './App.css'
import Header from './components/Header'
import './index.css'
import FeatureSection from './components/FeatureSection';

function App() {

  return (
    <>
      <div className='bg-gray-50 flex flex-col items-center p-10'>
        <Header />
        <FeatureSection/>
      </div>
    </>
  )
}

export default App
