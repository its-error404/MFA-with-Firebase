import React from "react";

type WelcomeMessageProps = {
  name: string;
};

const WelcomeMessage: React.FC<WelcomeMessageProps> = ({ name }) => {
  return <p className="text-lg">Welcome, User 👋 ! Enjoy your stay.</p>;
};

export default WelcomeMessage;