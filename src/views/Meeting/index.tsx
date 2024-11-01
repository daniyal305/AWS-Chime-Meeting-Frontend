// Copyright 2020-2021 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: MIT-0

import {
  UserActivityProvider,
  VideoTileGrid,
} from "amazon-chime-sdk-component-library-react";

import DynamicMeetingControls from "../../containers/DynamicMeetingControls";
import MeetingControls from "../../containers/MeetingControls";
import MeetingDetails from "../../containers/MeetingDetails";
import MeetingStatusNotifier from "../../containers/MeetingStatusNotifier";
import NavigationControl from "../../containers/Navigation/NavigationControl";
import useMeetingEndRedirect from "../../hooks/useMeetingEndRedirect";
import { useAppState } from "../../providers/AppStateProvider";
import { DataMessagesProvider } from "../../providers/DataMessagesProvider";
import { useNavigation } from "../../providers/NavigationProvider";
import { VideoTileGridProvider } from "../../providers/VideoTileGridProvider";
import { Layout, MeetingMode } from "../../types";
import { StyledContent, StyledLayout } from "./Styled";

const MeetingView = (props: { mode: MeetingMode }) => {
  useMeetingEndRedirect();
  const { showNavbar, showRoster, showChat } = useNavigation();
  const { mode } = props;
  const { layout } = useAppState();

  return (
    <UserActivityProvider>
      <DataMessagesProvider>
        <VideoTileGridProvider>
          <StyledLayout
            showNav={showNavbar}
            showRoster={showRoster}
            showChat={showChat}
          >
            <StyledContent>
              <VideoTileGrid
                layout={layout === Layout.Gallery ? "standard" : "featured"}
                className="videos"
                noRemoteVideoView={<MeetingDetails />}
              />
              {mode === MeetingMode.Spectator ? (
                <DynamicMeetingControls />
              ) : (
                <MeetingControls />
              )}
            </StyledContent>
            <MeetingStatusNotifier />
            <NavigationControl />
          </StyledLayout>
        </VideoTileGridProvider>
      </DataMessagesProvider>
    </UserActivityProvider>
  );
};

export default MeetingView;
