import styled from 'styled-components';
import { Row, Column } from '../components/direction';
import { pastelPalette } from '../constants/colors';

export const AppWrapper = styled(Column)`
  height: 100%;
  width: 100%;
`;

export const Page = styled(Column)`
  height: 100%;
  width: 100%;
`;

export const HeaderContainer = styled(Row)`
  height: 5%;
  width: 60%;
  justify-content: center;
  min-height: 5vh;
  max-height: 5vh;
  align-self: center;
  border-radius: 5px;
  border: 1px solid ${pastelPalette.turquoise};
  color: ${pastelPalette.turquoise};
`;

export const ContentContainer = styled(Row)`
  height: 90vh;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  margin: 8px 0;
`;

export const SidebarContainer = styled(Column)`
  height: 50%;
  width: 5%;
  border-radius: 5px;
  border: 1px solid ${pastelPalette.turquoise};
  color: ${pastelPalette.turquoise};
  align-items: center;
  padding: 5px 0;
`;

export const PlayContainer = styled(Column)`
  height: 100%;
  width: 94%;
  border-radius: 5px;
  border: 1px solid ${pastelPalette.turquoise};
  align-items: center;
  justify-content: center;
  background-color: ${pastelPalette.green + '38'};
`;
