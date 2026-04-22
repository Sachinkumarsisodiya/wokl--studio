import React from "react";

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/919999999999?text=Hello%20Wokl%20Music%20Studio,%20I%20want%20to%20know%20more%20about%20your%20studio%20services."
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-[9999] group"
    >
      <div className="w-16 h-16 bg-[#25D366] rounded-full flex items-center justify-center shadow-2xl transition-transform duration-300 group-hover:scale-110">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
          alt="WhatsApp"
          className="w-9 h-9"
        />
      </div>
    </a>
  );
}
