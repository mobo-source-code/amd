
import dynamic from "next/dynamic";
import { useEffect } from "react";



const Chat = () => useEffect(() => {
    (function(d, m){
        var kommunicateSettings = {"appId":"1dee383a46e76662a7bcd71893d984010","popupWidget":true,"automaticChatOpenOnNavigation":true};
        var s = document.createElement("script"); s.type = "text/javascript"; s.async = true;
        s.src = "https://widget.kommunicate.io/v2/kommunicate.app";
        var h = document.getElementsByTagName("head")[0]; h.appendChild(s);
        window.kommunicate = m; m._globals = kommunicateSettings;
      })(document, window.kommunicate || {});
}, []);



export default Chat
