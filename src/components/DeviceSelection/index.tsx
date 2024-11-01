// Copyright 2020-2021 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: MIT-0

import { useMemo } from "react";

import CameraDevices from "./CameraDevices";
import MicrophoneDevices from "./MicrophoneDevices";
import SpeakerDevices from "./SpeakerDevices";
import { StyledAudioGroup, StyledVideoGroup, StyledWrapper } from "./Styled";

const DeviceSelection = () => {
  const memo = useMemo(() => {
    return (
      <StyledWrapper>
        <StyledAudioGroup>
          <MicrophoneDevices />
          <SpeakerDevices />
        </StyledAudioGroup>
        <StyledVideoGroup>
          <CameraDevices />
        </StyledVideoGroup>
      </StyledWrapper>
    );
  }, []);
  return memo;
};

export default DeviceSelection;
