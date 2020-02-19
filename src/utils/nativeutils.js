export const getHeaderName = currentRouteName => {
  let routeName = 'Send Money';

  if (currentRouteName === 'Registration') {
    routeName = 'Registration';
  }

  if (currentRouteName === 'BusinessSignUp') {
    routeName = 'Sign Up';
  }
  if (currentRouteName === 'IndividualSignUp') {
    routeName = 'Sign Up';
  }

  if (currentRouteName === 'HomePage') {
    routeName = '';
  }
  if (currentRouteName === 'PayBills') {
    routeName = 'Pay Bills';
  }
  if (currentRouteName === 'MyTransaction') {
    routeName = 'My Transactions';
  }
  if (currentRouteName === 'MyRecipientList') {
    routeName = 'Manage Recipients';
  }
  if (currentRouteName === 'MyRecipientRequest') {
    routeName = 'Manage Recipients';
  }
  if (currentRouteName === 'ManageMyAccounts') {
    routeName = 'Manage My Bank Accounts';
  }
  if (currentRouteName === 'ContactUs') {
    routeName = 'Contact Us';
  }
  if (currentRouteName === 'ManageBiller') {
    routeName = 'Manage Billers';
  }
  if (currentRouteName === 'Insurance') {
    routeName = 'Insurance';
  }
  if (currentRouteName === 'Insurance') {
    routeName = 'Insurance';
  }
  if (currentRouteName === 'LandlineServiceProvider') {
    routeName = 'Landline';
  }
  if (currentRouteName === 'PolicyDetails') {
    routeName = 'ICICI Prudential Life Insurance';
  }
  if (currentRouteName === 'AddInsurance') {
    routeName = 'ICICI Prudential Life Insurance';
  }
  if (currentRouteName === 'AddLandline') {
    routeName = 'Landline';
  }
  if (currentRouteName === 'BillingStatus') {
    routeName = 'Landline';
  }
  if (currentRouteName === 'TrackConnection') {
    routeName = 'Track Transaction';
  }
  if (currentRouteName === 'TrackTransfer') {
    routeName = 'Track Transaction';
  }
  if (currentRouteName === 'BillingStatus') {
    routeName = 'Pay Bill';
  }
  if (currentRouteName === 'ReferAFriend') {
    routeName = 'Refer a Friend';
  }
  if (currentRouteName === 'MyRecipients') {
    routeName = 'Add Recipient';
  }
  if (currentRouteName === 'MyProfile') {
    routeName = 'My Profile';
  }
  if (currentRouteName === 'MyRewards') {
    routeName = 'My M2I Rewards';
  }
  if (currentRouteName === 'SubDollarVerification') {
    routeName = 'Subdollar Verification';
  }
  if (currentRouteName === 'ManageMyAccounts') {
    routeName = 'Manage My Accounts';
  }
  if (currentRouteName === 'AllNotificationsPage') {
    routeName = 'Notifications';
  }
  if (currentRouteName === 'UploadDocument') {
    routeName = 'Upload Document';
  }
  if (currentRouteName === 'ChangePassword') {
    routeName = 'Change Password';
  }
  if (currentRouteName === 'SendMoneyForNewUser') {
    routeName = 'Send Money';
  }
  if (currentRouteName === 'GasAgency') {
    routeName = 'Gas';
  }
  if (currentRouteName === 'ElectricityBill') {
    routeName = 'Electricity';
  }
  if (currentRouteName === 'AddElectricity') {
    routeName = 'Electricity Provider';
  }
  if (currentRouteName === 'AddGasAgency') {
    routeName = 'Gas Provider';
  }
  if (currentRouteName === 'PrepaidMobile') {
    routeName = 'Prepaid Mobile';
  }
  if (currentRouteName === 'AddPrepaidMobile') {
    routeName = 'Prepaid Mobile Provider';
  }
  if (currentRouteName === 'PostpaidMobile') {
    routeName = 'PostPaid Mobile';
  }
  if (currentRouteName === 'AddPostpaidMobile') {
    routeName = 'PostPaid Mobile Provider';
  }
  if (currentRouteName === 'TransactionDetails') {
    routeName = 'Transaction Details';
  }
  if (currentRouteName === 'ThankYouPage') {
    routeName = 'Money Sent';
  }

  if (currentRouteName === 'PowerProductMain') {
    routeName = 'Complete your transaction';
  }
  if (currentRouteName === 'RecipientAddress') {
    routeName = 'Add Recipient';
  }
  if (currentRouteName === 'RecipientInfoBusiness') {
    routeName = 'Add Recipient';
  }
  if (currentRouteName === 'RecipientInfoIndividual') {
    routeName = 'Add Recipient';
  }
  if (currentRouteName === 'RecipientBankDetails') {
    routeName = 'Add Recipient';
  }
  if (currentRouteName === 'AddRecipientDetails') {
    routeName = 'Recipient Details';
  }
  if (currentRouteName === 'SelectAccountDetails') {
    routeName = 'Select Recipient & Account';
  }
  if (
    currentRouteName === 'NewAddAccount' ||
    currentRouteName === 'AccountDetails'
  ) {
    routeName = 'Add Bank Account';
  }
  if (currentRouteName === 'SenderReceipt') {
    routeName = 'Receipt';
  }
  return routeName;
};

// gets the current screen from navigation state
export const getActiveRouteName = navigationState => {
  if (!navigationState) {
    return null;
  }
  const route = navigationState.routes[navigationState.index];
  // dive into nested navigators
  if (route.routes) {
    return getActiveRouteName(route);
  }
  return route.routeName;
};

export const getBottomNavigationName = navigationState => {
  return navigationState.routes[navigationState.index].routeName;
};
