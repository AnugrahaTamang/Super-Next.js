import React, { useState, type ChangeEvent, type FormEvent } from "react";
type FormOne = {
  name: string;
  email: string;
};
const ContactForm = () => {
  const [profile, setprofile] = useState<FormOne>({
    name: "",
    email: "",
  });
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setprofile((data) => ({ ...data, [name]: value }));
  };
  const handleSubmit = (e: FormEvent<HTMLInputElement>) => {
    e.preventDefault();
    console.log("formData submittedL", profile);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={profile.name}
          onChange={handleChange}
        />
        <input
          type="password"
          name="email"
          value={profile.email}
          onChange={handleChange}
        />
        <button type="submit">submit</button>
      </form>
      <section>
        <h1>Name: {profile.name}</h1>
        <h1>Email: {profile.email}</h1>
      </section>
    </div>
  );
};

export default ContactForm;
