export default function Footer() {
  return (
    <footer className="border-t border-[#303030] bg-[#131313] px-6 py-6 text-center text-sm text-gray-400">
      <p>
        &copy; {new Date().getFullYear()} Tharun Potharaju. All rights
        reserved.
      </p>
    </footer>
  );
}
