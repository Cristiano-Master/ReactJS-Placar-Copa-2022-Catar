import Selecao from './componentes/Selecao'
import Header from './componentes/Header'
import Info from './componentes/Info'

import './App.css'

import Camaroes from './assets/camarões.png'
import Servia from './assets/sérvia.png'

function App() {

  //Gols
  const SelecaoCamaroes = ['Castelletto','Aboubakar','Chopo Mouting'];
  const SelecaoServia = ['Pavlovic','Milinkovic-Savic','Mitrovic.'];

  return (
    <div className="App">
      <div className='conatiner-placar'>
        <div className='placar'>
          <Header />

          <div className='main-placar'>
            <Selecao SelecaoLogo={Camaroes} SelecaoName="Camarões" SelecaoGols={SelecaoCamaroes} />

            <Info />

            <Selecao SelecaoLogo={Servia} SelecaoName="Sérvia" SelecaoGols={SelecaoServia} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
