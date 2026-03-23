import { ContactForm } from '@/components/contact/ContactForm';
import { ContactImage } from '@/components/contact/ContactImage';

const Contact = () => {
  return (
    <div className="flex flex-row items-center gap-4">
      <div className="w-3/5 h-full">
        <ContactImage />
      </div>
      <div className="w-2/5 h-full mr-10">
        <ContactForm />
      </div>
    </div>
  );
};

export default Contact;
