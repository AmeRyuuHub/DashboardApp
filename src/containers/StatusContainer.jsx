import React from "react";
import { connect } from "react-redux";
import { getStbStatusByMac } from "../store/redusers/dashboard/status/status";
import { compose } from "redux";
import { withAuthRole, withMainDiv } from "../common/HOC";
import {
  getStatusFetching,
  getStatusStbType,
  getStatusLastReport,
  getDetailsValue,
  getConnectValue,
  getStatusStbModel,
  getStatusSearchMac,
  getStatusSearchStatus,
  getStatusValueRow,
  getSearchFormWithLang,
} from "../store/selectors/dashboard/status/statusSelectors.js";
import { Status, SubAppBar } from "../components/Dashboard";
import { Container } from "@material-ui/core";
import { getUILang } from "../store/selectors/appInit/initSelectors";
import { checkHexWithLang } from "../common/ReduxValidators";
import { getStatusMainWithLang } from "../store/selectors/dashboard/dashboardSelectors";

const StatusContainer = props => {
  const {
    getStbStatusByMac,
    searchStatus,
    isFetching,
    searchFormContent,
    lang,
    mainContent,
    ...rest
  } = props;
  const checkHex = checkHexWithLang(lang);
  return (
    <>
      <SubAppBar
        getStbStatusByMac={props.getStbStatusByMac}
        searchFormContent={searchFormContent}
        checkHex={checkHex}
      />
      <Container maxWidth="lg">
        {/* <Box color="text.secondary">
          <Typography variant="h6" component="span">
            {mainContent.title}
          </Typography>
          <Typography variant="h6" component="span">
            {props.macValue && ` ${props.macValue} `}
          </Typography>
          {props.lastReport && (
            <Typography variant="h6" component="span">
              {`( ${mainContent.date} ${props.lastReport} )`}
            </Typography>
          )}
          <Divider />
        </Box> */}

        {!isFetching && searchStatus && props.boxType && <Status {...rest} />}
      </Container>
    </>
  );
};

function mapStateToProps(state) {
  return {
    searchStatus: getStatusSearchStatus(state),
    isFetching: getStatusFetching(state),
    macValue: getStatusSearchMac(state),

    boxType: getStatusStbType(state),
    lastReport: getStatusLastReport(state),
    dataDetailsRow: getDetailsValue(state),
    dataConnectRow: getConnectValue(state),
    boxModel: getStatusStbModel(state),
    lang: getUILang(state),
    searchFormContent: getSearchFormWithLang(state),
    mainContent: getStatusMainWithLang(state),
    dataStatusCards: getStatusValueRow(state)
  };
}

export default compose(
  withMainDiv,
  withAuthRole,
  connect(mapStateToProps, {
    getStbStatusByMac
  })
)(StatusContainer);
