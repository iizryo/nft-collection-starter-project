import React from "react";
import "./styles/App.css";
import twitterLogo from "./assets/twitter-logo.svg";
import { useApp } from "./hooks/useApp";
import { CONTRACT_ADDRESS, MAX_SUPPLY, TWITTER_HANDLE, TWITTER_LINK } from "./hooks/useApp";

const App = () => {
  const { currentAccount, mintCount, inProgress, isRinkebyTestNetwork, connectWallet, askContractToMintNft } = useApp();

  // Connect to Wallet ボタンをレンダリングするメソッドを定義します。
  const renderNotConnectedContainer = () => (
    <button onClick={connectWallet} className="cta-button connect-wallet-button">
      Connect to Wallet
    </button>
  );

  // Mint NFT ボタンをレンダリングするメソッドを定義します。
  const renderMintUI = () => (
    <button onClick={askContractToMintNft} className="cta-button connect-wallet-button">
      Mint NFT
    </button>
  );

  return (
    <div className="App">
      <div className="container">
        <div className="header-container">
          <p className="header gradient-text">My NFT Collection</p>
          <p className="description-text">あなただけの特別な NFT を Mint しよう💫</p>
          {!isRinkebyTestNetwork && <p className="alert-text">Rinkeby Test Network に切り替えてください！</p>}
          {currentAccount === "" ? renderNotConnectedContainer() : renderMintUI()}
          <p className="sub-text">{`MintされたNFT： ${mintCount === 0 ? "?" : mintCount}/${MAX_SUPPLY}`}</p>
          <a
            className="footer-text"
            href={`https://rinkeby.rarible.com/collection/${CONTRACT_ADDRESS}/items`}
            target="_blank"
            rel="noreferrer"
          >{`Rarible でコレクションを表示`}</a>
        </div>
        {inProgress && (
          <>
            <p className="loader">Loading ...</p>
          </>
        )}
        <div className="footer-container">
          <img alt="Twitter Logo" className="twitter-logo" src={twitterLogo} />
          <a
            className="footer-text"
            href={TWITTER_LINK}
            target="_blank"
            rel="noreferrer"
          >{`built on @${TWITTER_HANDLE}`}</a>
        </div>
      </div>
    </div>
  );
};
export default App;
