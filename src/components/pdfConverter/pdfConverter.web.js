/* eslint-disable new-cap */
/* eslint-disable no-undef */
/* eslint-disable jsx-a11y/label-has-for */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { View, Text } from 'react-native';
import { renderToString } from 'react-dom/server';
import jsPDF from 'jspdf';
// import { View } from 'react-native-animatable';
// import Hello from './hello';

// const styles = {
//   fontFamily: 'sans-serif',
//   textAlign: 'center',
// };
// const colstyle = {
//   width: '30%',
// };
// const tableStyle = {
//   width: '100%',
// };
const fullContainer = {
  backgroundColor: 'white',
  marginLeft: 20,
  marginRight: 20,
  width: '90%'
};

// const header = {
//   backgroundColor: 'green',
//   height: '50%',
//   width: '100%',
// }

const divCommonFirstRow = {
  height: '100%',
  width: '100%'
};

const divfirstRowSecondContainer = {
  display: 'flex',
  flexFlow: 'colWrap'
};

const senderContainer = {
  width: '45%',
  marginRight: '5%'
};

const senderRecieverContainer = {
  height: 330,
  marginTop: 20,
  display: 'flex',
  flexDirection: 'row'
};

const secondContainer = {
  width: '100%',
  height: 100
};

const divbelowTexts = {
  marginTop: 30,
  marginRight: 40,
  paddingBottom: 40
};

const textscommonClass = {
  fontSize: 12,
  color: '#9B9B9B'
};

const font16Label = {
  fontSize: 16,
  color: '#4A4A4A',
  fontFamily: 'Arial',
  marginBottom: 5,
  paddingTop: 10
};

const font16WithBoldLabel = {
  fontSize: 16,
  color: '#4A4A4A',
  fontFamily: 'Arial',
  fontWeight: 'bold',
  paddingTop: 10
};

const font24withorangebold = {
  fontSize: 24,
  color: 'orange',
  fontFamily: 'Arial',
  fontWeight: 'bold',
  paddingTop: 10
};

const font18withboldLabel = {
  fontSize: 18,
  color: '#4A4A4A',
  fontFamily: 'Arial',
  fontWeight: 'bold',
  paddingTop: 10
};

const font18withorangebold = {
  fontSize: 18,
  color: 'orange',
  fontFamily: 'Arial',
  fontWeight: 'bold',
  paddingTop: 10
};

const styleOfdiv = {
  display: 'flex',
  flexDirection: 'row',
  paddingTop: 10,
  marginTop: 35,
  borderStyle: 'solid',
  borderWidth: 1,
  borderTopColor: 'grey',
  borderBottomColor: 'transparent',
  borderRightColor: 'transparent',
  borderLeftColor: 'transparent'
};

const label = {
  paddingTop: 10
};

const Prints = () => (
  <div>
    <div style={fullContainer}>
      <div style={secondContainer}>
        <div style={divfirstRowSecondContainer}>
          <div
            className='fl w-50 bg-washed-blue vh-25 pa3'
            style={divCommonFirstRow}
          >
            <label style={font16Label}>Trans. Initiation Date::</label>
          </div>
          <div
            className='fl w-50 bg-washed-red vh-25 pa3'
            style={divCommonFirstRow}
          >
            <label style={font16WithBoldLabel}>Purpose of Payment: </label>
          </div>
          <div style={divCommonFirstRow}>
            <label style={font16Label}>Payment for Advertising</label>
          </div>
          <div style={divCommonFirstRow}>
            <label style={font16WithBoldLabel}>Online</label>
          </div>
        </div>
        <div style={divfirstRowSecondContainer}>
          <div style={divCommonFirstRow}>
            <label style={font16Label}>Est. Delivery Date:</label>
          </div>
          <div style={divCommonFirstRow}>
            <label style={font16WithBoldLabel}>30 January 2019</label>
          </div>
          <div style={divCommonFirstRow}>
            <label style={font16Label}>Transfer Type:</label>
          </div>
          <div style={divCommonFirstRow}>
            <label style={font16WithBoldLabel}>Online</label>
          </div>
        </div>
        <div style={divfirstRowSecondContainer}>
          <div style={divCommonFirstRow}>
            <label style={font16Label}>Tracking Number:</label>
          </div>
          <div style={divCommonFirstRow}>
            <label style={font16WithBoldLabel}>M2X19283760</label>
          </div>
          <div style={divCommonFirstRow}>
            <label style={font16Label}>Exchange Rate:</label>
          </div>
          <div style={divCommonFirstRow}>
            <label style={font16WithBoldLabel}>1.00 USD = 69.16 INR</label>
          </div>
        </div>
      </div>
      <div style={senderRecieverContainer}>
        <div style={senderContainer}>
          <div>
            <label style={font24withorangebold}>Sender</label>
          </div>
          <div>
            <label style={font16WithBoldLabel}>Sunil Lovevanshi</label>
          </div>
          <div>
            <label style={font16Label}>Prabha Building, 60 Feet Road</label>
          </div>
          <div>
            <label style={font16Label}>Ghatkopar East</label>
          </div>
          <div>
            <label style={font16Label}>Mumbai, Maharashtra</label>
          </div>
          <div>
            <label style={font16Label}>400077</label>
          </div>
          <div>
            <label style={font16Label}>Ph: 921026315</label>
          </div>
          <div style={{ marginTop: 20 }}>
            <label style={font16WithBoldLabel}>Bank of America</label>
          </div>
          <div>
            <label style={font16WithBoldLabel}>A/c No. XXXXXXXX6257</label>
          </div>
          <div style={{ display: 'flex', flexDirection: 'row', marginTop: 30 }}>
            <div style={{ width: '50%' }}>
              <label style={font16Label} className='font16Label'>
                Transfer Amount:
              </label>
            </div>
            <div style={{ width: '50%' }}>
              <label
                style={font16WithBoldLabel}
                className='font16WithBoldLabel'
              >
                10,000 USD
              </label>
            </div>
          </div>
          <div style={{ display: 'flex', flexDirection: 'row' }}>
            <div style={{ width: '50%' }}>
              <label style={font16Label} className='font16Label'>
                Transfer Fees:
              </label>
            </div>
            <div style={{ width: '50%' }}>
              <label
                style={font16WithBoldLabel}
                className='font16WithBoldLabel'
              >
                + 4.00 USD
              </label>
            </div>
          </div>
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              paddingTop: 10,
              marginTop: 20,
              borderStyle: 'solid',
              borderWidth: 1,
              borderTopColor: 'grey',
              borderBottomColor: 'white',
              borderRightColor: 'white',
              borderLeftColor: 'white'
            }}
          >
            <div style={{ width: '50%' }}>
              <label style={font18withboldLabel}>Total Amount:</label>
            </div>
            <div style={{ width: '50%' }}>
              <label style={font18withorangebold}>10,004.00 USD</label>
            </div>
          </div>
        </div>
        <div style={senderContainer}>
          <div>
            <label style={font24withorangebold}>Receiver</label>
          </div>
          <div>
            <label style={font16WithBoldLabel}>Sunil Lovevanshi</label>
          </div>
          <div>
            <label style={font16Label}>Prabha Building, 60 Feet Road</label>
          </div>
          <div>
            <label style={font16Label}>Ghatkopar East</label>
          </div>
          <div>
            <label style={font16Label}>Mumbai, Maharashtra</label>
          </div>
          <div>
            <label style={font16Label}>400077</label>
          </div>
          <div>
            <label style={font16Label}>Ph: 921026315</label>
          </div>
          <div style={{ marginTop: 20 }}>
            <label style={font16WithBoldLabel}>Canara Bank</label>
          </div>
          <div>
            <label style={font16WithBoldLabel}>A/c No. XXXXXXXX3824</label>
          </div>
          <div style={{ display: 'flex', flexDirection: 'row', marginTop: 30 }}>
            <div style={{ width: '50%' }}>
              <label style={font16Label}>Converted Amount:</label>
            </div>
            <div style={{ width: '50%' }}>
              <label style={font16WithBoldLabel}>710,000.00 INR</label>
            </div>
          </div>
          <div style={styleOfdiv}>
            <div style={{ width: '50%' }}>
              <label
                style={font18withboldLabel}
                className='font18withboldLabel'
              >
                Total to Recipient*:
              </label>
            </div>
            <div style={{ width: '50%' }}>
              <label
                style={font18withorangebold}
                className='font18withorangebold'
              >
                710,000.00 INR
              </label>
            </div>
          </div>
        </div>
      </div>
      <div style={divbelowTexts} className='divbelowTexts'>
        <p style={textscommonClass}>
          *Recipient may recieve less due to fees charged by recipients bank or
          foreign taxes.
          {'\\n'}
          You have a right to refute errors in your transaction. If you think
          there is an error {'\n'}
          contact us withi 180 days at our toll free number at 1-866-424-2448 or
          write to us at
          {'\n'}
          nri@icicibank.com. You can also contact us for a written explanation
          of your rights.
          {'\n'}
        </p>
        <p style={textscommonClass}>
          You can cancel your payment for a full refund within 30 minutes after
          you authorize the transaction on our website, unless the funds have
          been picked up by or deposited into the account of the recipient. To
          cancel your transaction, please go to “My Transfers” page and click
          “Cancel Transaction” against the tracking number for the transaction.
          For Power Transfers, please see the additional information under the
          “Kindly Note” below.
        </p>
        <p style={textscommonClass}>
          For questions or complaints about ICICI Bank NY, contact: U.S.
          Consumer Financial Protection Bureau, Tel:855-411-2372 / 855-729-2372
          (TTY/TDD), https://www.consumerfinance.gov/sending-money/
        </p>
      </div>
    </div>
  </div>
);

export default class PrintPdf extends React.Component {
  static Print = () => {
    const string = renderToString(<Prints />);
    const pdf = new jsPDF('p', 'mm', 'a4');
    pdf.fromHTML(string);
    pdf.save('View_Receipt');
  };

  static prinFun = () => {
    const doc = new jsPDF();

    doc.setFontSize(40);
    doc.text('Octonyan loves jsPDF', 35, 25);
    doc.addImage(imgData, 'JPEG', 15, 40, 180, 180);

    // Set the document to automatically print via JS
    doc.autoPrint();
  };
}

// const PdfConvert = () => (
//   <div style={styles}>
//     <Hello name="CodeSandbox" />
//     <h2>Start editing to see some magic happen {'\u2728'}</h2>
//     <button onClick={print}>print</button>
//   </div>
// );

// export default Print;

// import React, { Component } from 'react';
// import { render } from 'react-dom';

// import SinglePage from './singlePage';
// import MultiPage from './multiPage';
// import PrintButton from './printButton';

// const pdfConvertor = () => (
//   <div className="bg-black-80 w-100 pv5">
//     <div className="white mt3 tc f3">Single Page Mode</div>
//     <PrintButton id="singlePage" label="Print single page" />
//     <SinglePage id="singlePage" />

//     <div className="white mt5 tc f3">Multi Page Mode</div>
//     <PrintButton id="multiPage" label="Print multiplate pages" />
//     <MultiPage id="multiPage" />
//   </div>
// );

// export default pdfConvertor;
