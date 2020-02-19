/* eslint-disable no-undef */
import React from 'react';
import { PermissionsAndroid } from 'react-native';
import RNHTMLtoPDF from 'react-native-html-to-pdf';

export default class PrintPdf extends React.Component {
  static askPermission = async (senderAmt, recipientName, date, responce) => {
    try {
      const monthNames = [
        'Jan',
        'Feb',
        'Mar',
        'Apr',
        'May',
        'Jun',
        'Jul',
        'Aug',
        'Sep',
        'Oct',
        'Nov',
        'Dec',
      ];

      const trandate = new Date(responce.transDate);

      const transCurrentDate = trandate.getDate();
      const transMonth = monthNames[trandate.getMonth()];
      const transCurrentYear = trandate.getFullYear();
      const transDate = `${transCurrentDate}-${transMonth}-${transCurrentYear}`;

      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        const options = {
          // Content to print
          html: `<html> <head> <style> .fullContainer { background-color:white; margin-left: 20; margin-right: 20; width: 90%; } .header { background-color: green; height: 50; width: 100%; } .secondContainer { width: 100%; height: 100; } .divCommonFirstRow { width: 200; padding: 2; margin: 2; } .divfirstRowSecondContainer { display: flex; flex-direction: row; } .senderRecieverContainer{ height: 330; margin-top: 20; display: flex; flex-direction: row; } .senderContainer{ width: 45%; margin-right: 5%; } .divbelowTexts { margin-top: 70; margin-right: 40; padding-bottom: 40; } .textscommonClass { font-size: 12; color: #9B9B9B; } .font16Label { font-size: 16; color: #4A4A4A; font-family: Arial, Helvetica, sans-serif; margin-bottom: 5; } .font16WithBoldLabel { font-size: 16; color: #4A4A4A; font-family: Arial, Helvetica, sans-serif; font-weight: bold; } .font24withorangebold { font-size: 24; color: orange; font-family: Arial, Helvetica, sans-serif; font-weight: bold; } .font18withboldLabel { font-size: 18; color: #4A4A4A; font-family: Arial, Helvetica, sans-serif; font-weight: bold; } .font18withorangebold { font-size: 18; color: orange; font-family: Arial, Helvetica, sans-serif; font-weight: bold; } label{ padding-top: 10; } </style> </head> <body > <div style='margin-bottom: 30; margin-left: 20;'> <img src='logo.png' alt='Logo' />  </div>   <div class='fullContainer' > <div class='secondContainer'> <div class='divfirstRowSecondContainer'> <div class='divCommonFirstRow'> <label class='font16Label'>Trans. Initiation Date:</label> </div> <div class='divCommonFirstRow'> <label class='font16WithBoldLabel'> ${transDate} </label> </div> <div class='divCommonFirstRow'> <label class='font16Label'> Purpose of Payment:</label> </div> <div class='divCommonFirstRow'> <label class='font16WithBoldLabel'>Payment for Advertising</label> </div> </div> <div class='divfirstRowSecondContainer'> <div class='divCommonFirstRow'> <label class='font16Label'>Est. Delivery Date:</label> </div> <div class='divCommonFirstRow'> <label class='font16WithBoldLabel'>${date}</label> </div> <div class='divCommonFirstRow'> <label class='font16Label'>Transfer Type:</label> </div> <div class='divCommonFirstRow'> <label class='font16WithBoldLabel'> Online</label> </div> </div> <div class='divfirstRowSecondContainer'> <div class='divCommonFirstRow'> <label class='font16Label'>Tracking Number:</label> </div> <div class='divCommonFirstRow'> <label class='font16WithBoldLabel'>${responce.trackNo}</label> </div> <div class='divCommonFirstRow'> <label class='font16Label'> Exchange Rate:</label> </div> <div class='divCommonFirstRow'> <label class='font16WithBoldLabel'>${responce.exchrate}</label> </div> </div> </div> <div class='senderRecieverContainer'> <div class='senderContainer'> <div> <label class='font24withorangebold'>Sender</label> </div> <div> <label class='font16WithBoldLabel'>Sunil Lovevanshi</label> </div> <div> <label class='font16Label'>Prabha Building, 60 Feet Road</label> </div> <div> <label class='font16Label'>Ghatkopar East</label> </div> <div> <label class='font16Label'>Mumbai, Maharashtra</label> </div> <div> <label class='font16Label'>400077</label> </div> <div> <label class='font16Label'>Ph: 921026315</label> </div> <div style='margin-top: 20;'> <label class='font16WithBoldLabel'>${responce.remBankName}</label> </div> <div> <label class='font16WithBoldLabel'>${responce.RemAccountNumber}</label> </div> <div style='display: flex; flex-direction: row; margin-top: 30;'> <div style='width: 50%;'> <label class='font16Label'>Transfer Amount:</label> </div> <div style='width: 50%;'> <label class='font16WithBoldLabel'>${responce.txnAmount}</label> </div> </div> <div style='display: flex; flex-direction: row;'> <div style='width: 50%;'> <label class='font16Label'>Transfer Fees:</label> </div> <div style='width: 50%;'> <label class='font16WithBoldLabel'>+ 4.00 USD</label> </div> </div> <div style='display: flex; flex-direction: row; padding-top: 10; margin-top: 35; border-style: solid; border-width: 1; border-top-color:grey; border-bottom-color: transparent; border-right-color: transparent; border-left-color: transparent;'> <div style='width: 50%;'> <label class='font18withboldLabel'>Total Amount:</label> </div> <div style='width: 50%;'> <label class='font18withorangebold'>10,004.00 USD</label> </div> </div> </div> <div class='senderContainer'> <div> <label class='font24withorangebold'>Receiver</label> </div> <div> <label class='font16WithBoldLabel'>${responce.receName}</label> </div> <div> <label class='font16Label'>${responce.corrBankAddress}</label> </div> <div> <label class='font16Label'>Ghatkopar East</label> </div> <div> <label class='font16Label'>Mumbai, Maharashtra</label> </div> <div> <label class='font16Label'>400077</label> </div> <div> <label class='font16Label'>Ph: 921026315</label> </div> <div style='margin-top: 20;'> <label class='font16WithBoldLabel'>${responce.corrBankName}</label> </div> <div> <label class='font16WithBoldLabel'>${responce.corrBankaccNumber}</label> </div> <div style='display: flex; flex-direction: row; margin-top: 30;'> <div style='width: 50%;'> <label class='font16Label'>Converted Amount:</label> </div> <div style='width: 50%;'> <label class='font16WithBoldLabel'> ${responce.beneamount} INR</label> </div> </div> <div style='display: flex; flex-direction: row; padding-top: 10; margin-top: 35; border-style: solid; border-width: 1; border-top-color:grey; border-bottom-color: transparent; border-right-color: transparent; border-left-color: transparent;'> <div style='width: 50%;'> <label class='font18withboldLabel'>Total to Recipient*:</label> </div> <div style='width: 50%;'> <label class='font18withorangebold'>710,000.00 INR</label> </div> </div> </div> </div> <div class='divbelowTexts'> <p class='textscommonClass'>*Recipient may recieve less due to fees charged by recipients bank or foreign taxes.</p> <p class='textscommonClass'>You have a right to refute errors in your transaction. If you think there is an error, contact us withi 180 days at our toll free number at 1-866-424-2448 or write to us at nri@icicibank.com. You can also contact us for a written explanation of your rights.</p> <p class='textscommonClass'>You can cancel your payment for a full refund within 30 minutes after you authorize the transaction on our website, unless the funds have been picked up by or deposited into the account of the recipient. To cancel your transaction, please go to “My Transfers” page and click “Cancel Transaction” against the tracking number for the transaction. For Power Transfers, please see the additional information under the “Kindly Note” below.</p> <p class='textscommonClass'>For questions or complaints about ICICI Bank NY, contact: U.S. Consumer Financial Protection Bureau, Tel:855-411-2372 / 855-729-2372 (TTY/TDD), https://www.consumerfinance.gov/sending-money/</p> </div> </div> </html>`,
          fileName: 'View_Reciept',
          directory: 'M2I',
        };

        const file = await RNHTMLtoPDF.convert(options);
        alert(`Successfully saved in ${file.filePath}`);
      } else {
        // alert('WRITE_EXTERNAL_STORAGE permission denied');
      }
    } catch (err) {
      alert(`Write permission err`, err);
    }
  };
}
