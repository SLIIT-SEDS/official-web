import { ContactForm } from '@/features/contact/components/ContactForm';
import { ContactImage } from '@/features/contact/components/ContactImage';

const Contact = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-center gap-10 lg:gap-6 px-6 md:px-12 max-w-7xl mx-auto w-full">
      <div className="w-full lg:w-1/2 h-full flex justify-center">
        <ContactImage />
      </div>
      <div className="w-full lg:w-1/2 h-full">
        <ContactForm />
      </div>
    </div>
  );
};

export default Contact;
