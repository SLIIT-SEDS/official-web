import img from '@/assets/divisions/image1.png';

const ContactImage = () => {
  return (
    <div className="flex justify-center p-4 sm:p-8 w-full max-w-md mx-auto">
      <img src={img} alt="Contact Illustration" className="w-full h-auto object-contain rounded-3xl" />
    </div>
  );
};

export { ContactImage };
