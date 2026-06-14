export default function Footer() {
  return (
    <footer className="border-t border-white/50 py-10">
      <div className="max-w-5xl mx-auto px-6 sm:px-12 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-[#3b3f5c] text-sm font-bold">James Liu</p>
        <p className="text-[#4d5780] text-xs">
          &copy; {new Date().getFullYear()}. Built with Next.js.
        </p>
      </div>
    </footer>
  );
}
