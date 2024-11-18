import Footer from "@/components/landing-page/footer";
import Header from "@/components/landing-page/header";

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <Header />
      <div>{children}</div>

      <Footer />
    </div>
  );
}
