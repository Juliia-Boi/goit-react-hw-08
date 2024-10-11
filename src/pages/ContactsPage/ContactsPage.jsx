import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchContacts } from "../../redux/contacts/operations";
import {
  selectLoadingFetch,
  selectError,
  selectLoading,
} from "../../redux/contacts/selectors";
import { selectNameFilter } from "../../redux/filters/selectors";
import toast from "react-hot-toast";
import ContactForm from "../../components/ContactForm/ContactForm";
import SearchBox from "../../components/SearchBox/SearchBox";
import ContactList from "../../components/ContactList/ContactList";
import css from "./ContactsPage.module.css";

export default function ContactsPage() {
  const loading = useSelector(selectLoading);
  const loadingFetch = useSelector(selectLoadingFetch);
  const error = useSelector(selectError);
  const filter = useSelector(selectNameFilter);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className="container">
      <div className={css.pageWrapper}>
        <div className={css.contentWrapper}>
          <h2 className={css.sectionTitle}>Add Contact</h2>
          {(loading || loadingFetch) && (
            <p className={css.loadingText}>Please wait, loading contacts...</p>
          )}
          <ContactForm />
          <SearchBox />
          {error && toast.error(error)}
        </div>
        {!error && !loading && (
          <div className={css.contactsSection}>
            <h2 className={css.sectionTitle}>
              {filter !== "" ? "Results" : "Your Contacts"}
            </h2>
            <ContactList />
          </div>
        )}
      </div>
    </div>
  );
}
