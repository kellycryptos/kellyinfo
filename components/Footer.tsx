export default function Footer() {
  return (
    <footer className="py-8 section-divider relative z-10 text-center font-mono text-xs text-gray-500">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <p>© {new Date().getFullYear()} KELLY. All rights reserved.</p>
      </div>
    </footer>
  );
}
