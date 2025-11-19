"use client";

import { useEffect } from "react";
import Script from "next/script";

export default function DialogflowChatbot() {
  useEffect(() => {
    // Add type declaration for custom element
    if (typeof window !== "undefined") {
      const dfMessenger = document.createElement("df-messenger");
      dfMessenger.setAttribute("intent", "WELCOME");
      dfMessenger.setAttribute("chat-title", "SchoolChatBot");
      dfMessenger.setAttribute("agent-id", "9d27fbe9-9dda-4b58-aff4-c53825858d66");
      dfMessenger.setAttribute("language-code", "en");
      document.body.appendChild(dfMessenger);

      return () => {
        // Cleanup on unmount
        const messenger = document.querySelector("df-messenger");
        if (messenger) {
          messenger.remove();
        }
      };
    }
  }, []);

  return (
    <Script
      src="https://www.gstatic.com/dialogflow-console/fast/messenger/bootstrap.js?v=1"
      strategy="afterInteractive"
    />
  );
}
