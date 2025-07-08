import { lusitana } from '@/app/ui/fonts';
import Image from 'next/image'; // Import the Next.js Image component

export default function AIMLogo() {
  return (
    <div
      className={`${lusitana.className} flex flex-row items-center leading-none text-white`}
    >
      {/* Replace the SVG icon with the Next.js Image component */}
      <Image
        src="/images/AIM-yellow.png"  // Path relative to the public folder
        alt="Active Infromation Model"      // Provide descriptive alt text
        width={180}                // Specify the desired width (adjust as needed)
        height={180}               // Specify the desired height (adjust as needed)
        // Optional: Add other props like `priority` for important images
      />
      <p className="text-[44px]">Active Infromation Model</p>
    </div>
  );
}