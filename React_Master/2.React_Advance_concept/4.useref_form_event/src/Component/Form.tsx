import React, { useRef, useState, type FormEvent } from "react";
type FormData = {
  name: string;
  email: string;
  password: string;
};
const Form = () => {
  const [data, setdata] = useState<FormData>({
    name: "",
    email: "",
    password: "",
  });
  const name = useRef<HTMLInputElement>(null);
  const email = useRef<HTMLInputElement>(null);
  const password = useRef<HTMLInputElement>(null);
  const HandleSubmit = (e: FormEvent<HTMLInputElement>) => {
    e.preventDefault();
    const nameval = name.current!.value;
    const emailval = email.current!.value;
    const passwordval = password.current!.value;
    setdata({
      name: nameval,
      email: emailval,
      password: passwordval,
    });
  };
  return (
    <div>
      <div>
        <form onSubmit={HandleSubmit}>
          <input type="text" placeholder="Enter your name..." ref={name} />
          <input type="email" placeholder="Enter your email..." ref={email} />
          <input
            type="password"
            placeholder="Enter your password..."
            ref={password}
          />
          <button type="submit">Submit</button>
        </form>
      </div>
      <section>
        <h1>Name: {data.name}</h1>
        <h1>Email: {data.email}</h1>
        <h1>Password: {data.password}</h1>
      </section>
    </div>
  );
};

export default Form;
