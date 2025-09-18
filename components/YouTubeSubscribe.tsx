// "use client";
// import { useEffect } from "react";

// const YouTubeSubscribe = () => {
//   useEffect(() => {
//     // Load Google Platform.js script once
//     const scriptId = "youtube-subscribe-script";
//     if (!document.getElementById(scriptId)) {
//       const script = document.createElement("script");
//       script.src = "https://apis.google.com/js/platform.js";
//       script.async = true;
//       script.defer = true;
//       script.id = scriptId;
//       document.body.appendChild(script);
//     }
//   }, []);

//   const handleSubscribe = () => {
//     const url =
//       "https://www.youtube.com/channel/UCe_EfhzRmqjyJPQgbNsufSA?sub_confirmation=1";
//     window.open(url, "SubscribePopup", "width=500,height=600,left=200,top=200");
//   };

//   return (
//     <div className="youtube-subscribe-container">
//       {/* <h2 className="text-xl font-bold mb-2">
//         🎬 Subscribe to My YouTube Channel
//       </h2>
//       <p className="mb-4">Don’t miss our latest tutorials & videos!</p> */}

//       {/* YouTube Subscribe Button */}
//       <div
//         className="g-ytsubscribe"
//         data-channelid="UCe_EfhzRmqjyJPQgbNsufSA" // or use data-channel="ChannelName"
//         data-layout="full"
//         data-count="default"
//       ></div>
//       <button
//         onClick={handleSubscribe}
//         className="flex items-center gap-2 px-4 py-2 rounded-lg bg-red-600 text-white font-medium hover:bg-red-700 transition-colors"
//       >
//         {/* YouTube play icon */}
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           fill="white"
//           viewBox="0 0 24 24"
//           width="20"
//           height="15"
//         >
//           <path d="M23.498 6.186a2.992 2.992 0 0 0-2.106-2.118C19.691 3.5 12 3.5 12 3.5s-7.691 0-9.392.568A2.992 2.992 0 0 0 .502 6.186C0 7.887 0 12 0 12s0 4.113.502 5.814a2.992 2.992 0 0 0 2.106 2.118C4.309 20.5 12 20.5 12 20.5s7.691 0 9.392-.568a2.992 2.992 0 0 0 2.106-2.118C24 16.113 24 12 24 12s0-4.113-.502-5.814zM9.75 15.5v-7l6 3.5-6 3.5z" />
//         </svg>
//         Subscribe
//       </button>
//     </div>
//   );
// };

// export default YouTubeSubscribe;

"use client";

const YouTubeSubscribe = () => {
  const handleSubscribe = () => {
    const url =
      "https://www.youtube.com/channel/UCe_EfhzRmqjyJPQgbNsufSA?sub_confirmation=1"; // replace with your channel ID
    window.open(
      url,
      "SubscribePopup",
      "width=500,height=600,left=200,top=200"
    );
  };

  return (
    <>
      <div
        className="g-ytsubscribe"
        data-channelid="UCe_EfhzRmqjyJPQgbNsufSA"   // or use data-channel="ChannelName"
        data-layout="full"
        data-count="default"
      ></div>
    <button
      onClick={handleSubscribe}
      className="flex items-center gap-2 px-4 py-1 rounded-lg bg-red-600 text-white font-medium hover:bg-red-700 transition-colors"
    >
      {/* YouTube play icon */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="white"
        viewBox="0 0 24 24"
        width="20"
        height="20"
      >
        <path d="M23.498 6.186a2.992 2.992 0 0 0-2.106-2.118C19.691 3.5 12 3.5 12 3.5s-7.691 0-9.392.568A2.992 2.992 0 0 0 .502 6.186C0 7.887 0 12 0 12s0 4.113.502 5.814a2.992 2.992 0 0 0 2.106 2.118C4.309 20.5 12 20.5 12 20.5s7.691 0 9.392-.568a2.992 2.992 0 0 0 2.106-2.118C24 16.113 24 12 24 12s0-4.113-.502-5.814zM9.75 15.5v-7l6 3.5-6 3.5z" />
      </svg>
      Join Our YouTube Community
    </button>
  </>
  );
};

export default YouTubeSubscribe;
