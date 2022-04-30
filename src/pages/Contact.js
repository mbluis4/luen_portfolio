import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div
      className="contact bg-slate-50 pt-20
    grid place-items-center"
    >
      <div
        className="flex flex-col justify-center items-center 
      max-w-lg w-ninety mx-auto bg-white shadow-lg "
      >
        <h2 className="text-2xl text-slate-400 tracking-wider my-5">
          Contact me
        </h2>
        <form
          name="contact-form"
          method="POST"
          className="w-full"
          data-netlify="true"
          action="/success"
          onSubmit="submit"
        >
          <input type="hidden" name="form-name" value="contact-form" />
          <input
            name="name"
            value={formData.name}
            onChange={handleChange}
            type="text"
            placeholder="name"
            className="block w-11/12 mx-auto bg-slate-100 rounded-sm placeholder:text-slate-700 text-sm placeholder:uppercase 
            placeholder:tracking-widest py-2 px-2 mb-5 "
          ></input>
          <input
            name="email"
            value={formData.email}
            onChange={handleChange}
            type="email"
            placeholder="email"
            required
            className="block w-11/12 mx-auto mb-5 bg-slate-100 rounded-sm placeholder:text-slate-700 text-sm placeholder:uppercase 
            placeholder:tracking-widest py-2 px-2 "
          ></input>
          <textarea
            name="message"
            type="text"
            value={formData.message}
            onChange={handleChange}
            rows="5"
            placeholder="message"
            className="block w-11/12 mx-auto mb-5 bg-slate-100 rounded-sm placeholder:text-slate-700 text-sm placeholder:uppercase 
            placeholder:tracking-widest py-2 px-2 "
          ></textarea>
          <button className="w-full bg-teal-500 py-3 rounded-b-md text-slate-50 uppercase tracking-widest font-semibold hover:text-slate-700">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
