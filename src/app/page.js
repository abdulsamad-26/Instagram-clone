import Navbar from "../components/Navbar";
import Stories from "../components/Stories";
import Post from "../components/Post";
import Sidebar from "../components/Sidebar";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#fafafa]">
      <Navbar />

      <div className="mx-auto flex max-w-[1000px] gap-8 px-4 pt-[85px]">

        {/* Main Feed */}
        <div className="w-full max-w-[600px]">
          <Stories />
          <Post />
        </div>

        {/* Right Sidebar */}
        <Sidebar />

      </div>
    </main>
  );
}
