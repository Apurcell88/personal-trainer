import Nav from "@/components/Nav";

export default function Home() {
  return (
    <div
      className="relative min-h-screen w-full bg-cover bg-center"
      style={{ backgroundImage: "url('/images/training-homepage.jpg')" }}
    >
      {/* OVERLAY DIV */}
      <div className="absolute inset-0 bg-black opacity-50 z-0"></div>
      <Nav />
      <div className="relative z-10">
        <h1 className="text-white">HomePage</h1>
      </div>
    </div>
  );
}
