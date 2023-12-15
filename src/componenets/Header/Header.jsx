import React from "react";

const Header = (props) => {
  const tg = window.Telegram.WebApp;
  const onClose = () => tg.close();

  return (
    <div className={"header"}>
      <Button onClic={onClose}>Close</Button>
      <span className={"username"}>{tg.initDataUnsafe?.user?.username}</span>
    </div>
  );
};

export default Header;