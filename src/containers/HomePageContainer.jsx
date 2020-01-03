import React from "react";
import {
  getRoutsMenu,
  getMainContainerWithLang,
  getHowItWorkBlockWithLang,
  getOtherBlocksWithLang
} from "../store/selectors/dataUISelectors";
import { connect } from "react-redux";
import {OtherBlock, HowItWorksBlock, FirstBlock} from "../components/HomePage";
import Footer from "../components/Footer/Footer";

const HomePageContainer = props => {
  const { mainBlock, secondBlock, otherBlocks } = props;
  let secondMinHeight = { minHeight: "50vh" };
  return (
    <>
      <main>
      {mainBlock && <FirstBlock
          firstTitle={mainBlock.firstTitle}
          secondTitle={mainBlock.secondTitle}
          titleButton={mainBlock.titleButton}
          imgUrl={mainBlock.imgUrl}
          imgAlt={mainBlock.imgAlt}
          buttonLink={mainBlock.link}
        />}

       {secondBlock && <HowItWorksBlock
          firstTitle={secondBlock.firstTitle}
          secondTitle={secondBlock.secondTitle}
          steps={secondBlock.steps}
          minHeight={secondMinHeight}
          imgUrl={secondBlock.imgUrl}
        />} 

        {otherBlocks.value.map((block, index) => {
          return (
            <OtherBlock
              block={block}
              imgUrl={otherBlocks.imgUrl[index]}
              link={otherBlocks.link[index]}
              count={index}
              key={block.firstTitle}
            />
          );
        })}
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
