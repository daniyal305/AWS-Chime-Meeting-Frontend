import React from "react";
import { Heading } from "amazon-chime-sdk-component-library-react";
import DeviceSelection from "../../components/DeviceSelection";
import MeetingJoinDetails from "../../containers/MeetingJoinDetails";
import { StyledLayout } from "./Styled";

const DeviceSetup: React.FC = () => {
  return (
    <StyledLayout>
      <Heading tag="h1" level={3} css="align-self: flex-start">
        Device settings 2
      </Heading>
      <DeviceSelection />
      <MeetingJoinDetails />
    </StyledLayout>
  );
};

export default DeviceSetup;
