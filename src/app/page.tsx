import Banner from "@/components/module/Banner";  
import MainForm from "@/components/module/form/MainForm";
import { PButton } from "@/components/PButton";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <main className="">
      <Banner />
      <PButton variant="gradiant" className="">
        Start Your Pet's Journey
      </PButton>
      <MainForm />
    </main>
  );
}
