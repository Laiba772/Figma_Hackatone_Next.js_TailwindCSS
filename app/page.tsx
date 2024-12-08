
import CompanyLogo from "@/Components/companyLogo";
import Categories from "@/Components/Categories";
import HotProduct from "@/Components/hotProduct";
import Hero from "@/Components/Hero";
import OurProduct from "@/Components/ourProduct";

export default function Home() {
  return (
    <>
      <Hero />
      <CompanyLogo />


      <Categories />
      <HotProduct />
      <OurProduct />
    </>
  );
}