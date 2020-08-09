import React, { Component } from 'react';
import { Page } from '../../containers/main-page-container';
import { Row, Column } from '../../components/direction';

export default class AboutPage extends Component {
  render() {
    return (
      <Page>
        <Column>
          <Row>about us</Row>
        </Column>
      </Page>
    );
  }
}
