import css from "../Contact/Contact.module.css";
import { BsTelephonePlus } from "react-icons/bs";
import { FaUserCheck } from "react-icons/fa6";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contacts/operations"; 

export default function Contact({ contact: { name, number, id } }) {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteContact(id));
  };

  return (
    <div className={css.container}>
      <div className={css.contactContainer}>
        <div className={css.contactInfo}>
          <BsTelephonePlus size={18} />
          <p>{name}</p>
        </div>
        <a href={`tel:${number}`} className={css.contact}>
          <FaUserCheck size={18} />
          <p>{number}</p>
        </a>
      </div>
      <button type="button" className={css.button} onClick={() => {
        handleDelete(id);
      }}>
        Delete
      </button>
    </div>
  );
}
