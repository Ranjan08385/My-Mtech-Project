/* eslint-disable react/sort-comp */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable no-undef */
// example to print in react native perfect code below
import React, { Component } from 'react';
import { Button, StyleSheet, Platform, Text, View } from 'react-native';

import RNHTMLtoPDF from 'react-native-html-to-pdf';
import RNPrint from 'react-native-print';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  }
});

export default class RNPrintExample extends Component {
  static async printHTML() {
    await RNPrint.print({
      html:
        "<html> <head> <style> .fullContainer { background-color:white; margin-left: 20; margin-right: 20; width: 90%; } .header { background-color: green; height: 50; width: 100%; } .secondContainer { width: 100%; height: 100; } .divCommonFirstRow { width: 200; padding: 2; margin: 2; } .divfirstRowSecondContainer { display: flex; flex-direction: row; } .senderRecieverContainer{ height: 330; margin-top: 20; display: flex; flex-direction: row; } .senderContainer{ width: 45%; margin-right: 5%; } .divbelowTexts { margin-top: 70; margin-right: 40; padding-bottom: 40; } .textscommonClass { font-size: 12; color: #9B9B9B; } .font16Label { font-size: 16; color: #4A4A4A; font-family: Arial; margin-bottom: 5; } .font16WithBoldLabel { font-size: 16; color: #4A4A4A; font-family: Arial; font-weight: bold; } .font24withorangebold { font-size: 24; color: orange; font-family: Arial; font-weight: bold; } .font18withboldLabel { font-size: 18; color: #4A4A4A; font-family: Arial; font-weight: bold; } .font18withorangebold { font-size: 18; color: orange; font-family: Arial; font-weight: bold; } label{ padding-top: 10; } </style> </head> <body > <div class='fullContainer' > <div class='secondContainer'> <div class='divfirstRowSecondContainer'> <div class='divCommonFirstRow'> <label class='font16Label'>Trans. Initiation Date:</label> </div> <div class='divCommonFirstRow'> <label class='font16WithBoldLabel'> 30 January 2019</label> </div> <div class='divCommonFirstRow'> <label class='font16Label'> Purpose of Payment:</label> </div> <div class='divCommonFirstRow'> <label class='font16WithBoldLabel'>Payment for Advertising</label> </div> </div> <div class='divfirstRowSecondContainer'> <div class='divCommonFirstRow'> <label class='font16Label'>Est. Delivery Date:</label> </div> <div class='divCommonFirstRow'> <label class='font16WithBoldLabel'>30 January 2019</label> </div> <div class='divCommonFirstRow'> <label class='font16Label'>Transfer Type:</label> </div> <div class='divCommonFirstRow'> <label class='font16WithBoldLabel'> Online</label> </div> </div> <div class='divfirstRowSecondContainer'> <div class='divCommonFirstRow'> <label class='font16Label'>Tracking Number:</label> </div> <div class='divCommonFirstRow'> <label class='font16WithBoldLabel'>M2X19283760</label> </div> <div class='divCommonFirstRow'> <label class='font16Label'> Exchange Rate:</label> </div> <div class='divCommonFirstRow'> <label class='font16WithBoldLabel'>1.00 USD = 69.16 INR</label> </div> </div> </div> <div class='senderRecieverContainer'> <div class='senderContainer'> <div> <label class='font24withorangebold'>Sender</label> </div> <div> <label class='font16WithBoldLabel'>Sunil Lovevanshi</label> </div> <div> <label class='font16Label'>Prabha Building, 60 Feet Road</label> </div> <div> <label class='font16Label'>Ghatkopar East</label> </div> <div> <label class='font16Label'>Mumbai, Maharashtra</label> </div> <div> <label class='font16Label'>400077</label> </div> <div> <label class='font16Label'>Ph: 921026315</label> </div> <div style='margin-top: 20;'> <label class='font16WithBoldLabel'>Bank of America</label> </div> <div> <label class='font16WithBoldLabel'>A/c No. XXXXXXXX6257</label> </div> <div style='display: flex; flex-direction: row; margin-top: 30;'> <div style='width: 50%;'> <label class='font16Label'>Transfer Amount:</label> </div> <div style='width: 50%;'> <label class='font16WithBoldLabel'>10,000 USD</label> </div> </div> <div style='display: flex; flex-direction: row;'> <div style='width: 50%;'> <label class='font16Label'>Transfer Fees:</label> </div> <div style='width: 50%;'> <label class='font16WithBoldLabel'>+ 4.00 USD</label> </div> </div> <div style='display: flex; flex-direction: row; padding-top: 10; margin-top: 20; border-style: solid; border-width: 1; border-top-color:grey; border-bottom-color: transparent; border-right-color: transparent; border-left-color: transparent;'> <div style='width: 50%;'> <label class='font18withboldLabel'>Total Amount:</label> </div> <div style='width: 50%;'> <label class='font18withorangebold'>10,004.00 USD</label> </div> </div> </div> <div class='senderContainer'> <div> <label class='font24withorangebold'>Receiver</label> </div> <div> <label class='font16WithBoldLabel'>Sunil Lovevanshi</label> </div> <div> <label class='font16Label'>Prabha Building, 60 Feet Road</label> </div> <div> <label class='font16Label'>Ghatkopar East</label> </div> <div> <label class='font16Label'>Mumbai, Maharashtra</label> </div> <div> <label class='font16Label'>400077</label> </div> <div> <label class='font16Label'>Ph: 921026315</label> </div> <div style='margin-top: 20;'> <label class='font16WithBoldLabel'>Canara Bank</label> </div> <div> <label class='font16WithBoldLabel'>A/c No. XXXXXXXX3824</label> </div> <div style='display: flex; flex-direction: row; margin-top: 30;'> <div style='width: 50%;'> <label class='font16Label'>Converted Amount:</label> </div> <div style='width: 50%;'> <label class='font16WithBoldLabel'>710,000.00 INR</label> </div> </div> <div style='display: flex; flex-direction: row; padding-top: 10; margin-top: 35; border-style: solid; border-width: 1; border-top-color:grey; border-bottom-color: transparent; border-right-color: transparent; border-left-color: transparent;'> <div style='width: 50%;'> <label class='font18withboldLabel'>Total to Recipient*:</label> </div> <div style='width: 50%;'> <label class='font18withorangebold'>710,000.00 INR</label> </div> </div> </div> </div> <div class='divbelowTexts'> <p class='textscommonClass'>*Recipient may recieve less due to fees charged by recipients bank or foreign taxes.</p> <p class='textscommonClass'>You have a right to refute errors in your transaction. If you think there is an error, contact us withi 180 days at our toll free number at 1-866-424-2448 or write to us at nri@icicibank.com. You can also contact us for a written explanation of your rights.</p> <p class='textscommonClass'>You can cancel your payment for a full refund within 30 minutes after you authorize the transaction on our website, unless the funds have been picked up by or deposited into the account of the recipient. To cancel your transaction, please go to “My Transfers” page and click “Cancel Transaction” against the tracking number for the transaction. For Power Transfers, please see the additional information under the “Kindly Note” below.</p> <p class='textscommonClass'>For questions or complaints about ICICI Bank NY, contact: U.S. Consumer Financial Protection Bureau, Tel:855-411-2372 / 855-729-2372 (TTY/TDD), https://www.consumerfinance.gov/sending-money/</p> </div> </div> </html>"
    });
  }

  static async printPDF() {
    let dynamicValue = 'dynamic data';
    const results = await RNHTMLtoPDF.convert({
      html:
        "<html> <head> <style> .fullContainer  { background-color:white; margin-left: 20; margin-right: 20; width: 90%; } .header { background-color: green; height: 50; width: 100%; } .secondContainer { width: 100%; height: 100; } .divCommonFirstRow { width: 200; padding: 2; margin: 2; } .divfirstRowSecondContainer { display: flex; flex-direction: row; } .senderRecieverContainer{ height: 330; margin-top: 20; display: flex; flex-direction: row; } .senderContainer{ width: 45%; margin-right: 5%; } .divbelowTexts { margin-top: 70; margin-right: 40; padding-bottom: 40; } .textscommonClass { font-size: 12; color: #9B9B9B; } .font16Label { font-size: 16; color: #4A4A4A; font-family: Arial; margin-bottom: 5; } .font16WithBoldLabel { font-size: 16; color: #4A4A4A; font-family: Arial; font-weight: bold; } .font24withorangebold { font-size: 24; color: orange; font-family: Arial; font-weight: bold; } .font18withboldLabel { font-size: 18; color: #4A4A4A; font-family: Arial; font-weight: bold; } .font18withorangebold { font-size: 18; color: orange; font-family: Arial; font-weight: bold; } label{ padding-top: 10; } </style> </head> <body >  <div style='margin-bottom: 30; margin-left: 20;'> <img src='./logo.png' alt='Logo' /> </div> <div> <h1>chang</h1> </div> <div class='fullContainer' > <div class='secondContainer'> <div class='divfirstRowSecondContainer'> <div class='divCommonFirstRow'> <label class='font16Label'>Trans. Initiation Date:</label> </div> <div class='divCommonFirstRow'> <label class='font16WithBoldLabel'> 30 January 2019</label> </div> <div class='divCommonFirstRow'> <label class='font16Label'> Purpose of Payment:</label> </div> <div class='divCommonFirstRow'> <label class='font16WithBoldLabel'>Payment for Advertising</label> </div> </div> <div class='divfirstRowSecondContainer'> <div class='divCommonFirstRow'> <label class='font16Label'>Est. Delivery Date:</label> </div> <div class='divCommonFirstRow'> <label class='font16WithBoldLabel'>30 January 2019</label> </div> <div class='divCommonFirstRow'> <label class='font16Label'>Transfer Type:</label> </div> <div class='divCommonFirstRow'> <label class='font16WithBoldLabel'> Online</label> </div> </div> <div class='divfirstRowSecondContainer'> <div class='divCommonFirstRow'> <label class='font16Label'>Tracking Number:</label> </div> <div class='divCommonFirstRow'> <label class='font16WithBoldLabel'>M2X19283760</label> </div> <div class='divCommonFirstRow'> <label class='font16Label'> Exchange Rate:</label> </div> <div class='divCommonFirstRow'> <label class='font16WithBoldLabel'>1.00 USD = 69.16 INR</label> </div> </div> </div> <div class='senderRecieverContainer'> <div class='senderContainer'> <div> <label class='font24withorangebold'>Sender</label> </div> <div> <label class='font16WithBoldLabel'>Sunil Lovevanshi</label> </div> <div> <label class='font16Label'>Prabha Building, 60 Feet Road</label> </div> <div> <label class='font16Label'>Ghatkopar East</label> </div> <div> <label class='font16Label'>Mumbai, Maharashtra</label> </div> <div> <label class='font16Label'>400077</label> </div> <div> <label class='font16Label'>Ph: 921026315</label> </div> <div style='margin-top: 20;'> <label class='font16WithBoldLabel'>Bank of America</label> </div> <div> <label class='font16WithBoldLabel'>A/c No. XXXXXXXX6257</label> </div> <div style='display: flex; flex-direction: row; margin-top: 30;'> <div style='width: 50%;'> <label class='font16Label'>Transfer Amount:</label> </div> <div style='width: 50%;'> <label class='font16WithBoldLabel'>10,000 USD</label> </div> </div> <div style='display: flex; flex-direction: row;'> <div style='width: 50%;'> <label class='font16Label'>Transfer Fees:</label> </div> <div style='width: 50%;'> <label class='font16WithBoldLabel'>+ 4.00 USD</label> </div> </div> <div style='display: flex; flex-direction: row; padding-top: 10; margin-top: 35; border-style: solid; border-width: 1; border-top-color:grey; border-bottom-color: transparent; border-right-color: transparent; border-left-color: transparent;'> <div style='width: 50%;'> <label class='font18withboldLabel'>Total Amount:</label> </div> <div style='width: 50%;'> <label class='font18withorangebold'>10,004.00 USD</label> </div> </div> </div> <div class='senderContainer'> <div> <label class='font24withorangebold'>Receiver</label> </div> <div> <label class='font16WithBoldLabel'>Sunil Lovevanshi</label> </div> <div> <label class='font16Label'>Prabha Building, 60 Feet Road </label> </div> <div> <label class='font16Label'>Ghatkopar East</label> </div> <div> <label class='font16Label'>Mumbai, Maharashtra</label> </div> <div> <label class='font16Label'>400077</label> </div> <div> <label class='font16Label'>Ph: 921026315</label> </div> <div style='margin-top: 20;'> <label class='font16WithBoldLabel'>Canara Bank</label> </div> <div> <label class='font16WithBoldLabel'>A/c No. XXXXXXXX3824</label> </div> <div style='display: flex; flex-direction: row; margin-top: 30;'> <div style='width: 50%;'> <label class='font16Label'>Converted Amount:</label> </div> <div style='width: 50%;'> <label class='font16WithBoldLabel'>710,000.00 INR</label> </div> </div> <div style='display: flex; flex-direction: row; padding-top: 10; margin-top: 35; border-style: solid; border-width: 1; border-top-color:grey; border-bottom-color: transparent; border-right-color: transparent; border-left-color: transparent;'> <div style='width: 50%;'> <label class='font18withboldLabel'>Total to Recipient*:</label> </div> <div style='width: 50%;'> <label class='font18withorangebold'>710,000.00 INR</label> </div> </div> </div> </div> <div class='divbelowTexts'> <p class='textscommonClass'>*Recipient may recieve less due to fees charged by recipients bank or foreign taxes.</p> <p class='textscommonClass'>You have a right to refute errors in your transaction. If you think there is an error, contact us withi 180 days at our toll free number at 1-866-424-2448 or write to us at nri@icicibank.com. You can also contact us for a written explanation of your rights.</p> <p class='textscommonClass'>You can cancel your payment for a full refund within 30 minutes after you authorize the transaction on our website, unless the funds have been picked up by or deposited into the account of the recipient. To cancel your transaction, please go to “My Transfers” page and click “Cancel Transaction” against the tracking number for the transaction. For Power Transfers, please see the additional information under the “Kindly Note” below.</p> <p class='textscommonClass'>For questions or complaints about ICICI Bank NY, contact: U.S. Consumer Financial Protection Bureau, Tel:855-411-2372 / 855-729-2372 (TTY/TDD), https://www.consumerfinance.gov/sending-money/ </p> </div> </div> </html>",

      fileName: 'test',
      base64: true
    });

    await RNPrint.print({ filePath: results.filePath });
  }

  constructor(props) {
    super(props);

    this.state = {
      selectedPrinter: null
    };
  }

  // @NOTE iOS Only
  selectPrinter = async () => {
    const selectedPrinter = await RNPrint.selectPrinter({ x: 100, y: 100 });
    this.setState({ selectedPrinter });
  };

  // @NOTE iOS Only
  silentPrint = async () => {
    if (!this.state.selectedPrinter) {
      alert('Must Select Printer First');
    }
  };

  async printRemotePDF() {
    await RNPrint.print({
      filePath: 'https://graduateland.com/api/v2/users/jesper/cv'
    });
  }

  customOptions = () => {
    return (
      <View>
        {this.state.selectedPrinter && (
          <View>
            <Text>{`Selected Printer Name: ${this.state.selectedPrinter.name}`}</Text>
            <Text>{`Selected Printer URI: ${this.state.selectedPrinter.url}`}</Text>
          </View>
        )}
        <Button onPress={this.selectPrinter} title='Select Printer' />
        <Button onPress={this.silentPrint} title='Silent Print' />
      </View>
    );
  };

  render() {
    return (
      <View style={styles.container}>
        {Platform.OS === 'ios' && this.customOptions()}
        <Button onPress={this.printHTML} title='Print HTML' />
        <Button onPress={this.printPDF} title='Print PDF' />
        <Button onPress={this.printRemotePDF} title='Print Remote PDF' />
        <Text>hello</Text>
      </View>
    );
  }
}
