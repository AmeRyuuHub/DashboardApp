import React from "react";
import {
  getMainContainerWithLang,
  getHowItWorkBlockWithLang,
  getOtherBlocksWithLang
} from "../store/selectors/home/homeSelector";
import { connect } from "react-redux";
import {
  OtherBlock,
  HowItWorksBlock,
  FirstBlock
} from "../components/HomePage";
import Footer from "../components/Footer/Footer";
import { getRoutsMenu } from "../store/selectors/appBar/appBarSelectors";

const HomePageContainer = props => {
  const { mainBlock, secondBlock, otherBlocks } = props;

  return (
    <>
      <main>
        {mainBlock && <FirstBlock {...mainBlock} />}

       {secondBlock && <HowItWorksBlock {...secondBlock} />}

       {otherBlocks && otherBlocks.map((block, index) => (
          <OtherBlock {...block} count={index} key={index} />
       ))}
      </main>
      <Footer />
    </>
  );
};


function mapStateToProps(state) {
  return {
    routsMenu: getRoutsMenu(state),
    mainBlock: getMainContainerWithLang(state),
    secondBlock: getHowItWorkBlockWithLang(state),
    otherBlocks: getOtherBlocksWithLang(state)
  };
}

export default connect(mapStateToProps, null)(HomePageContainer);
