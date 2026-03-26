export default function SiteFooter() {
  const now = new Date();
  const currentYear = now.getFullYear();
  const lastUpdated = now.toISOString().split("T")[0];

  return (
    <div className="text-center mt-4 mb-6 text-gray-600 opacity-100">
      <p className="text-sm">&copy; {currentYear} Yue Wu. All rights reserved.</p>
      <p className="text-sm">Last updated: {lastUpdated}</p>
    </div>
  );
}
