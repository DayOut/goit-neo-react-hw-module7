import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import { store, persistor } from './redux/store';

import ContactForm from './components/ContactForm/ContactForm';
import ContactList from './components/ContactList/ContactList';
import SearchBox from './components/SearchBox/SearchBox';
import css from './App.module.css';

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <div className={css.container}>
          <h1 className={css.heading}>Phonebook</h1>
          <ContactForm />
          <SearchBox />
          <ContactList />
        </div>
      </PersistGate>
    </Provider>
  );
}

export default App;
