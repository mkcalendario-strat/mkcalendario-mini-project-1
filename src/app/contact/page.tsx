import ContactForm from "@/components/sections/contact/ContactForm";
import Footer from "@/components/sections/landing/Footer";
import Navbar from "@/components/ui/Navbar";
import { Fragment } from "react";

export default function Contact() {
  return (
    <Fragment>
      <Navbar />
      <ContactForm />
      <Footer />
    </Fragment>
  );
}
