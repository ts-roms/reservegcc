import { PropsWithChildren } from "react";
import Header from "./Headers/Header";
import { User } from "@/types";
import Footer from "./Footer";


export default function UnAuthenticatedLayout({ children, auth }: PropsWithChildren<{ auth: { user: User } }>) {
  return (
    <div>
      <Header auth={auth} />
      <main className="min-h-[56vh]">
        {children}
      </main>
      <Footer />
    </div>
  )
}