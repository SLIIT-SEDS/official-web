import Button from '../ui/Button';

const ContactForm = () => {
  return (
    <div
      className="
                flex
                flex-col
                items-center
                p-2
                mr-32
            "
    >
      <h1 className="font-bold m-7">
        Contact us directly by sending a message
      </h1>

      <form
        className="
                    flex flex-col
                    items-center
                    w-full
                    max-w-lg
                "
      >
        <label htmlFor="name" className="m-3">
          Your Name
        </label>
        <input
          type="text"
          id="name"
          className="w-2/3 outline-none border border-purple-600 rounded px-2 py-0.5 bg-transparent"
        />

        <label htmlFor="email" id="email" className="m-3">
          Your Email Adress
        </label>
        <input
          type="email"
          id="email"
          className="w-2/3 outline-none border border-purple-600 rounded px-2 py-0.5 bg-transparent"
        />

        <label htmlFor="textarea" className="m-3">
          Your Message
        </label>
        <textarea
          id="textarea"
          className="w-2/3 f-full px-2 py-2 outline-none border border-purple-600 rounded bg-transparent"
          rows={8}
        />

        <Button className="mt-10">Submit</Button>
      </form>
    </div>
  );
};

export { ContactForm };
