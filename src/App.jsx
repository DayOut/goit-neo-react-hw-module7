import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchContacts } from "./redux/contactsOps.js";
import { selectIsLoading, selectError } from "./redux/contactsSlice";

import Loader from "./components/Loader/Loader";
import ContactForm from "./components/ContactForm/ContactForm";
import ContactList from "./components/ContactList/ContactList";
import SearchBox from "./components/SearchBox/SearchBox";
import css from "./App.module.css";

function App() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  return (
    <div className={css.container}>
      <h1 className={css.heading}>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      {isLoading && <Loader />}
      {error && <p>Error: {error}</p>}
      <ContactList />
    </div>
  );
}

export default App;
