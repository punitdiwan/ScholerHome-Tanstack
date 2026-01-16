import  { useState } from "react";
import { HiX } from "react-icons/hi";
import { useNavigate } from "@tanstack/react-router";

const FixedRightWidget = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  return (
    <>
      {/* ===== FIXED BUTTON (HIDE WHEN OPEN) ===== */}
      {!open && (
        <div
          onClick={() => setOpen(true)}
          className="fixed z-40 cursor-pointer select-none text-black font-semibold"
        >
          {/* Desktop */}
          <div
            className="
              hidden md:block
              bg-[#87CEEB] hover:bg-blue-600
              px-2 pb-1
              rounded-tr-lg rounded-br-lg
              [writing-mode:vertical-rl] rotate-180
              fixed right-0 top-1/2 -translate-y-1/2
              transition-colors
              uppercase
            "
          >
            Admissions For 2026-27
          </div>

          {/* Mobile */}
          <div
            className="
              md:hidden
              fixed bottom-5 right-5
              bg-[#ffae00] hover:bg-blue-600
              px-3 py-1 rounded-full shadow-lg
              text-sm transition-colors
            "
          >
            Admissions For 2026-27
          </div>
        </div>
      )}

      {/* ===== CENTER DIALOG ===== */}
      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-end">
          {/* Overlay */}
          <div
            onClick={() => setOpen(false)}
            className="absolute inset-0"
          />

          {/* Dialog */}
          <div
            className="
              relative bg-white
              shadow-2xl
              py-6 px-10
              text-center
              rounded-lg
              z-10
              w-75
            "
            style={{
                backgroundImage: "url('/shlok.jpg')",
                backgroundPosition: "left center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
            }}
          >
            {/* Close */}
            <button
              onClick={() => setOpen(false)}
              className="absolute cursor-pointer top-3 right-3 text-gray-500 hover:text-black"
            >
              <HiX size={20} />
            </button>

            <h3 className="text-xl font-bold text-secondary mb-2">
              Admissions Open
            </h3>

            <p className="text-gray-700 text-sm mb-4">
              For Session 2026-27
            </p>

            <button
              className="
                  cursor-pointer
                  relative text-sm font-light text-white px-2 py-2 bg-primary
                  overflow-hidden
                  after:content-[''] after:absolute after:left-1/2 after:bottom-0
                  after:h-1 after:w-0 after:bg-blue-400
                  after:transition-all after:duration-300
                  hover:after:left-0 hover:after:w-full
              "
              onClick={() => {navigate({ to: "/admission" }),setOpen(false)}}
          >
              Know More
          </button>
          </div>
        </div>
      )}
    </>
  );
};

export default FixedRightWidget;
