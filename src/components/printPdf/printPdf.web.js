/* eslint-disable no-undef */

// below code to print entire page with button
import { Component } from 'react';

export default class PrintThisComponent extends Component {
  static printHardCopyWeb = () => {
    window.print();

    // var content = document.getElementById('prin');
    // var pri = document.getElementById('ifm').contentWindow;
    // pri.document.open();
    // pri.document.write(content.innerHTML);
    // pri.document.close();
    // pri.focus();
    // pri.print();
  };
}
//     const styles = {
//       fontFamily: 'sans-serif',
//       textAlign: 'center',
//     };
//     const colstyle = {
//       width: '30%',
//     };
//     const tableStyle = {
//       width: '100%',
//     };
//     const fullContainer = {
//       backgroundColor: 'white',
//       marginLeft: 20,
//       marginRight: 20,
//       width: '90%',
//     };

//     // const header = {
//     //   backgroundColor: 'green',
//     //   height: '50%',
//     //   width: '100%',
//     // }

//     const divCommonFirstRow = {
//       height: '100%',
//       width: '100%',
//     };

//     const divfirstRowSecondContainer = {
//       display: 'flex',
//       flexFlow: 'colWrap',
//     };

//     const senderContainer = {
//       width: '45%',
//       marginRight: '5%',
//     };

//     const senderRecieverContainer = {
//       height: 330,
//       marginTop: 20,
//       display: 'flex',
//       flexDirection: 'row',
//     };

//     const secondContainer = {
//       width: '100%',
//       height: 100,
//     };

//     const divbelowTexts = {
//       marginTop: 30,
//       marginRight: 40,
//       paddingBottom: 40,
//     };

//     const textscommonClass = {
//       fontSize: 12,
//       color: '#9B9B9B',
//     };

//     const font16Label = {
//       fontSize: 16,
//       color: '#4A4A4A',
//       fontFamily: 'Arial, Helvetica, sans-serif',
//       marginBottom: 5,
//       paddingTop: 10,
//     };

//     const font16WithBoldLabel = {
//       fontSize: 16,
//       color: '#4A4A4A',
//       fontFamily: 'Arial, Helvetica, sans-serif',
//       fontWeight: 'bold',
//       paddingTop: 10,
//     };

//     const font24withorangebold = {
//       fontSize: 24,
//       color: 'orange',
//       fontFamily: 'Arial, Helvetica, sans-serif',
//       fontWeight: 'bold',
//       paddingTop: 10,
//     };

//     const font18withboldLabel = {
//       fontSize: 18,
//       color: '#4A4A4A',
//       fontFamily: 'Arial, Helvetica, sans-serif',
//       fontWeight: 'bold',
//       paddingTop: 10,
//     };

//     const font18withorangebold = {
//       fontSize: 18,
//       color: 'orange',
//       fontFamily: 'Arial, Helvetica, sans-serif',
//       fontWeight: 'bold',
//       paddingTop: 10,
//     };

//     const styleOfdiv = {
//       display: 'flex',
//       flexDirection: 'row',
//       paddingTop: 10,
//       marginTop: 35,
//       borderStyle: 'solid',
//       borderWidth: 1,
//       borderTopColor: 'grey',
//       borderBottomColor: 'transparent',
//       borderRightColor: 'transparent',
//       borderLeftColor: 'transparent',
//     };

//     const label = {
//       paddingTop: 10,
//     };

//     return (
//         <div>
//              <iframe
//         id="ifm"
//         style={{
//           height: '0px',
//           width: '0px',
//           position: 'absolute',
//         }}

//       >
//           <div>
//               <label>d</label>
//           </div>
//       </iframe>

//         <div id="prin">
//          <p>sbjh</p>
//           </div>

//           </div>

//     );
//   }
// }

// below code for react js using trigger
// import React from "react";
// import ReactToPrint from "react-to-print";

// class ComponentToPrint extends React.Component {
//   render() {
//     return (
//       <table>
//         <thead>
//           <th>column 1</th>
//           <th>column 2</th>
//           <th>column 3</th>
//         </thead>
//         <tbody>
//           <tr>
//             <td>data 1</td>
//             <td>data 2</td>
//             <td>data 3</td>
//           </tr>
//           <tr>
//             <td>data 1</td>
//             <td>data 2</td>
//             <td>data 3</td>
//           </tr>
//           <tr>
//             <td>data 1</td>
//             <td>data 2</td>
//             <td>data 3</td>
//           </tr>
//         </tbody>
//       </table>
//     );
//   }
// }

// export default class Example extends React.Component {
//   render() {
//     return (
//       <div>
//         <ReactToPrint
//           trigger={() => <a href="#">Print this out!</a>}
//           content={() => this.componentRef}
//         />
//         <ComponentToPrint ref={el => (this.componentRef = el)} />
//       </div>
//     );
//   }
// }

// example to print in react native perfect code below
// import React, { Component } from 'react';
// import {
//   AppRegistry,
//   Button,
//   StyleSheet,
//   NativeModules,
//   Platform,
//   Text,
//   View
// } from 'react-native';

// import RNHTMLtoPDF from 'react-native-html-to-pdf';
// import RNPrint from 'react-native-print';

// export default class RNPrintExample extends Component {
//   constructor(props) {
//   super(props);

//   state = {
//     selectedPrinter: null
//   }
// }

// @NOTE iOS Only
//   selectPrinter = async () => {
//     const selectedPrinter = await RNPrint.selectPrinter({ x: 100, y: 100 })
//     this.setState({ selectedPrinter })
//   }

//   // @NOTE iOS Only
//   silentPrint = async () => {
//     if (!this.state.selectedPrinter) {
//       alert('Must Select Printer First')
//     }

//     const jobName = await RNPrint.print({
//       printerURL: this.state.selectedPrinter.url,
//       html: '<h1>Silent Print</h1>'
//     })

//   }

//   async printHTML() {
//     await RNPrint.print({
//       html: '<h1>Heading 1</h1><h2>Heading 2</h2><h3>Heading 3</h3>'
//     })
//   }

//   async printPDF() {
//     const results = await RNHTMLtoPDF.convert({
//       html: '<h1>Custom converted PDF Document</h1>',
//       fileName: 'test',
//       base64: true,
//     })

//     await RNPrint.print({ filePath: results.filePath })
//   }

//   async printRemotePDF() {
//     await RNPrint.print({ filePath: 'https://graduateland.com/api/v2/users/jesper/cv' })
//   }

//   customOptions = () => {
//     return (
//       <View>
//         {this.state.selectedPrinter &&
//           <View>
//             <Text>{`Selected Printer Name: ${this.state.selectedPrinter.name}`}</Text>
//             <Text>{`Selected Printer URI: ${this.state.selectedPrinter.url}`}</Text>
//           </View>
//         }
//       <Button onPress={this.selectPrinter} title="Select Printer" />
//       <Button onPress={this.silentPrint} title="Silent Print" />
//     </View>

//     )
//   }

//   render() {
//     return (
//       <View style={styles.container}>
//         {Platform.OS === 'ios' && this.customOptions()}
//         <Button onPress={this.printHTML} title="Print HTML" />
//         <Button onPress={this.printPDF} title="Print PDF" />
//         <Button onPress={this.printRemotePDF} title="Print Remote PDF" />
//         <Text>hello</Text>
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#F5FCFF',
//   },
// });
