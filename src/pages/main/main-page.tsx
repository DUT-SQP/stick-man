import React, { Component } from 'react';
import CanvasDraw from 'react-canvas-draw';
import Draggable from 'react-draggable';
import {
  HeaderContainer,
  ContentContainer,
  SidebarContainer,
  PlayContainer,
} from '../../containers/main-page-container';
import { InstructionText } from '../../components/text';
import { pastelPalette } from '../../constants/colors';
import predictApi from '../../api/predict-api';
import { PredictRequest, PredictResponse } from '../../models/predict.model';
import { AxiosPromise } from 'axios';
import {
  CanvasContainer,
  CanvasControls,
} from '../../containers/play-container';

export default class MainPage extends Component {
  saveableCanvas: any;
  loadableCanvas: any;
  state = {
    activeDrags: 0,
    deltaPosition: {
      x: 0,
      y: 0,
    },
    controlledPosition: {
      x: -400,
      y: 200,
    },
  };

  onStart = () => {
    this.setState({ activeDrags: ++this.state.activeDrags });
  };

  onStop = () => {
    this.setState({ activeDrags: --this.state.activeDrags });
  };

  handlePredict = (image: string): AxiosPromise<PredictResponse> => {
    const predictRequest: PredictRequest = {
      data_input: image,
    };
    return predictApi.predict(predictRequest);
  };

  render() {
    const dragHandlers = { onStart: this.onStart, onStop: this.onStop };
    return (
      <>
        <HeaderContainer>header</HeaderContainer>
        <ContentContainer>
          <SidebarContainer>menu</SidebarContainer>
          <PlayContainer>
            <InstructionText>Draw a stickman!</InstructionText>
            <CanvasContainer>
              <CanvasDraw
                ref={(canvasDraw) => (this.saveableCanvas = canvasDraw)}
                hideGrid={true}
                brushColor={pastelPalette.yellow}
                brushRadius={8}
                style={{
                  boxShadow:
                    '0 13px 27px -5px rgba(50, 50, 93, 0.25), 0 8px 16px -8px rgba(0, 0, 0, 0.3)',
                }}
              />
              <CanvasControls>
                <button
                  onClick={() => {
                    this.saveableCanvas.clear();
                    sessionStorage.setItem('savedDrawing', '');
                  }}
                >
                  Clear
                </button>
                <button onClick={() => this.saveableCanvas.undo()}>Undo</button>
                <button>Predict</button>
                <button
                  onClick={() => {
                    sessionStorage.setItem(
                      'savedDrawing',
                      this.saveableCanvas.getSaveData()
                    );
                    this.loadableCanvas.loadSaveData(
                      sessionStorage.getItem('savedDrawing')
                    );
                  }}
                >
                  Save
                </button>
              </CanvasControls>
            </CanvasContainer>
            <Draggable bounds='parent' {...dragHandlers}>
              <div>
                <CanvasDraw
                  ref={(canvasDraw) => (this.loadableCanvas = canvasDraw)}
                  disabled
                  hideGrid={true}
                  canvasWidth={100}
                  canvasHeight={100}
                  brushColor={pastelPalette.purple}
                  saveData={sessionStorage.getItem('savedDrawing')}
                  style={{ backgroundColor: 'rgba(255, 255, 255, 0.5)' }}
                />
              </div>
            </Draggable>
          </PlayContainer>
        </ContentContainer>
      </>
    );
  }
}
