import Navbar from "./_components/navbar";

const MarketingLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-full">
      <Navbar></Navbar>
      <main className="pt-40 h-full ">{children}</main>
    </div>
  );
};

export default MarketingLayout;
