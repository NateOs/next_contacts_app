import Header from "../components/Header";
import AllContacts from "../components/AllContacts";
import ContactCount from "../components/ContactCount";
export default function Home() {
  return (
    <div className="container">
      <Header />
      <AllContacts />
      <ContactCount />
    </div>
  );
}
