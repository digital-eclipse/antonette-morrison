import Image from "next/image";
import Header from "../components/Header"
import HomePage from "@/components/HomePage";
export default function Home() {
  return (
    <div className="items-center justify-items-center min-h-screen">

      <Header/>
      
      <HomePage/>
    </div>
  );
}
