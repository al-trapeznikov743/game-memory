import './sass/general.sass'
import {Provider} from 'react-redux'
import store from './redux/store'
import PlayingFieldContainer from './components/playingField/PlayingFieldContainer';
import Header from './components/header/Header';



function App() {

  return (
    <Provider store={store}>
      <div className="app">
        <Header />
        <PlayingFieldContainer />
      </div>
    </Provider>
  );
}

export default App;
