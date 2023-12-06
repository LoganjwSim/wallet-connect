// src/App.jsx
import { useState } from "react";
import { useSpring, animated } from "react-spring";
import { useSDK } from "@metamask/sdk-react";
import "animate.css";

const App = () => {
  const [account, setAccount] = useState("");

  const { sdk } = useSDK();

  const onClickMetaMask = async () => {
    try {
      const accounts = await sdk?.connect(); //optional chaining

      setAccount(accounts[0]);
    } catch (error) {
      console.error(error);
    }
  };

  const buttonAnimation = useSpring({
    from: { transform: "scale(0.8)", opacity: 0 },
    to: { transform: "scale(1)", opacity: 1 },
    config: { tension: 300, friction: 10 },
  });

  return (
    <div className="bg-gradient-to-r from-black to-purple-800 text-white min-h-screen flex flex-col justify-center items-center">
      {account ? (
        <>
          <div>
            Hello, {account.substring(0, 7)}...
            {account.substring(account.length - 5)}
          </div>
          <button onClick={() => setAccount("")}>Logout</button>
        </>
      ) : (
        <>
          <button className="mb-4 text-7xl">
            <animated.button style={buttonAnimation}>🦊</animated.button>
          </button>
          <button
            onClick={onClickMetaMask}
            className="bg-gradient-to-r from-blue-700 to-purple-700 px-8 py-4 text-black font-semibold font-serif rounded-md hover:from-blue-600 hover:to-purple-600"
          >
            <animated.button style={buttonAnimation}>
              MetaMask login
            </animated.button>
          </button>
        </>
      )}
    </div>
  );
};

export default App;
