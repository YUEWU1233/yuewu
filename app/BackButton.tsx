"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";

interface BackButtonProps {
  href?: string;
  className?: string;
}

const BackButton = ({ href, className = "" }: BackButtonProps) => {
  const router = useRouter();

  const handleBack = () => {
    if (href) {
      router.push(href);
    } else {
      router.back();
    }
  };

  return (
    <div className={`mb-4 ${className}`}>
      {href ? (
        <Link
          href={href}
          className="inline-flex items-center text-black hover:text-gray-700 transition-colors bg-white/80 backdrop-blur-sm px-3 py-2 rounded-lg shadow-sm"
        >
          <span className="text-xl mr-2">←</span>
          <span>Back</span>
        </Link>
      ) : (
        <button
          onClick={handleBack}
          className="inline-flex items-center text-black hover:text-gray-700 transition-colors bg-white/80 backdrop-blur-sm px-3 py-2 rounded-lg shadow-sm"
        >
          <span className="text-xl mr-2">←</span>
          <span>Back</span>
        </button>
      )}
    </div>
  );
};

export default BackButton;
