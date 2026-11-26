import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import FloatingDonateButton from "./FloatingDonateButton";
import BackToTopButton from "../common/BackToTopButton";
import ScrollToTop from "../common/ScrollToTop";
import DonationModal from "../donation/DonationModal";
import { DonationModalProvider } from "../../context/DonationModalContext";

export default function Layout() {
  return (
    <DonationModalProvider>
      <ScrollToTop />
      <div className="flex min-h-screen flex-col bg-offwhite">
        <Navbar />
        <main className="flex-1">
          <Outlet />
        </main>
        <Footer />
      </div>
      <FloatingDonateButton />
      <BackToTopButton />
      <DonationModal />
    </DonationModalProvider>
  );
}
