export default function Call() {
  const phoneNumber = "918090579753";
  const callUrl = `tel:${phoneNumber}`;

  return (
    <div className="fixed right-5 md:right-10 bottom-5 md:bottom-10 z-[999999]">
      <a
        href={callUrl}
        className="flex items-center justify-center active:bg-black/70 h-12 w-12 md:w-14 md:h-14 bg-black text-white rounded-full hover:bg-black/70 transition-colors"
      >
        {/* Phone SVG */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
          className="md:w-8 h-6 w-6 md:h-8"
          fill="currentColor"
        >
          <path d="M493.4 24.6l-104-24c-11.7-2.7-23.8 3.3-28.9 14.5l-48 104c-4.2 9.1-2.1 20 5.2 27.2l60 60c-36.2 76.6-99.2 139.6-175.8 175.8l-60-60c-7.3-7.3-18.1-9.4-27.2-5.2l-104 48c-11.2 5.1-17.2 17.2-14.5 28.9l24 104c2.7 11.7 13.3 20.4 25.4 20.4 256 0 464-208 464-464 0-12.1-8.7-22.7-20.4-25.4z" />
        </svg>
      </a>
    </div>
  );
}
