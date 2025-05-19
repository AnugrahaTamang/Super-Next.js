import { ReactNode } from "react";
import "./globals.css";

type LayoutProps = {
  children: ReactNode;
  comments: ReactNode;
  members: ReactNode;
};

export const metadata = {
  title: "Members",
  description: "members page",
};

const Layout = ({ children, comments, members }: LayoutProps) => {
  <body>
    return (
    <>
      <section>{children}</section>
      <section className="border p-[10rem] w-[30rem]">{comments}</section>
      <section className="border p-[10rem] w-[30rem]">{members}</section>
    </>
    );
  </body>;
};

export default Layout;
