import GalaxyScreen from "../src/client/components/GalaxyScreen";
import ConnectWalletButton from "../src/client/components/common/ConnectWalletButton";

import dynamic from "next/dynamic";

const MintContainer = dynamic(
  () => import("../src/client/components/common/MintContainer"),
  {
    ssr: false
  }
);
const MintPage = () => {
  return (
    <>
      <GalaxyScreen
        render={() => (
          <MintContainer
            title="JOIN TO ANDROMEDA"
            sepPage={true}
            render={() => <ConnectWalletButton replaceTo="mint" />}
          />
        )}
      />
    </>
  );
};

export default MintPage;
