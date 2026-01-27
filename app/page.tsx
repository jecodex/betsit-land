import BeddingStore from "./local/page";

export const metadata = {
  title: "Khalid Fashion | Premium Bed Sheet & Waterproof Chador in Bangladesh",
  description:
    "Khalid Fashion থেকে কিনুন প্রিমিয়াম কোয়ালিটি বেডশিট ও ওয়াটারপ্রুফ চাদর। ১০০% অরিজিনাল, কোয়ালিটি গ্যারান্টি, সরাসরি কারখানা থেকে আপনার দোরগোড়ায় ডেলিভারি।",
  keywords: [
    "Khalid Fashion",
    "bedsheet",
    "waterproof chador",
    "premium bedsheet Bangladesh",
    "bed sheet price in Bangladesh",
    "waterproof bed cover",
    "বেডশিট",
    "ওয়াটারপ্রুফ চাদর",
    "প্রিমিয়াম বেডশিট",
    "বেডশিট অনলাইন"
  ],
  openGraph: {
    title: "Khalid Fashion – Premium Bed Sheet & Waterproof Chador",
    description:
      "Premium quality bedsheet & waterproof chador. 100% original, factory direct delivery.",
    url: "https://khalidfashion.com",
    siteName: "Khalid Fashion",
    images: [
      {
        url: "https://khalidfashion.com/logo.png",
        width: 1200,
        height: 630,
        alt: "Khalid Fashion Premium Bed Sheet",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Khalid Fashion – Premium Bed Sheet Store",
    description:
      "Buy premium bedsheet & waterproof chador in Bangladesh. 100% original & quality guaranteed.",
    images: ["https://khalidfashion.com/logo.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function Home() {
  return (
    <main>
      {/* SEO-friendly hidden H1 */}
      <h1 className="sr-only">
        Khalid Fashion – বাংলাদেশের প্রিমিয়াম বেডশিট ও ওয়াটারপ্রুফ চাদরের বিশ্বস্ত শপ
      </h1>
      <BeddingStore />
    </main>
  );
}
