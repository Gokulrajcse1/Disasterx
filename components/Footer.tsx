export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-6 mt-10">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
        <p>© {new Date().getFullYear()} DisasterX. All rights reserved.</p>
        <p className="text-sm">
          Built with ❤️ using Next.js + Tailwind CSS
        </p>
      </div>
    </footer>
  );
}
