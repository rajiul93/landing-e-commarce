import LoginPage from "@/components/module/authentication/SignIn";
import Banner from "@/components/module/Banner";
import { ThemeToggle } from "@/components/module/CounterFilter/ThemeToggle";
import MainForm from "@/components/module/form/MainForm";
import { PButton } from "@/components/PButton";

export default function Home() {
  return (
    <main className="">
      <Banner /> 
      <ThemeToggle />
      <PButton variant="gradiant" className="">
        Start Your Pet's Journey
      </PButton>
      <MainForm />
      <LoginPage />
    </main>
  );
}
