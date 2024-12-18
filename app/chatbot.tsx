import Script from "next/script";

const Chatbot = () => {
  return (
    <>
      {/* Embed Chatbot Configuration */}
      <Script id="chatbot-config" strategy="beforeInteractive">
        {`
          window.embeddedChatbotConfig = {
            chatbotId: "odMZL5EPO8aqVTgX4KSy7",
            domain: "www.chatbase.co"
          };
        `}
      </Script>

      {/* Embed Chatbot Script */}
      <Script
        src="https://www.chatbase.co/embed.min.js"
        strategy="afterInteractive"
        defer
      />
    </>
  );
};

export default Chatbot;