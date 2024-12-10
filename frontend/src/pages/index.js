import HellowordNextJS from "@/components/HellowordNextJS";

export default function Home() {
  return (
    <div
      className={`grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]`}
    >
      <HellowordNextJS />
      <h1 className="text-white mb-4"><span className="text-3xl">Demo</span> deploy static web with nextjs to s3 bucket with github action</h1>
    </div>
  );
}