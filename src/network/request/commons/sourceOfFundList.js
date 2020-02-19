/* eslint-disable import/prefer-default-export */
import { Types } from '../../request';
import ApiTag from '../apiTags';

// API docs ref - #28
// {
// 	"instId": "1000000001"
// }
// Output
// {
//   "status": "success",
//   "description": "success",
//   "result": [
//   { "SOURCEDESCRIPTION": "Business income from cash generating professions" },
//   { "SOURCEDESCRIPTION": "Salary from employer" } ]}
const auth_key =
  'eyJhbGciOiJIUzI1NiJ9.eyJqdGkiOiI5YWEwZDQ0NC05ZmJlLTRiZDUtYmZlMi1lMjAwY2U4MzY2OGUiLCJpc3MiOiJodHRwOi8vZXhhbXBsZS5vcmciLCJhdWQiOiJodHRwOi8vZXhhbXBsZS5vcmciLCJzdWIiOiJwYXZhbi5rdW1hckBnbWFpbC5jb20iLCJpYXQiOjE1NzU5NzE0MzcsImV4cCI6MTU3NTk3MTczNywicmVmcmVzaENvdW50IjowLCJyZWZyZXNoTGltaXQiOjF9.XK4PRaAkD7kzCwemwjaOyGOXx4C-9PAXWhibJXwqqJA';
const GetSourceOfFundList = instId => {
  return {
    url: '/commons/SourceOfFundsList',
    payload: { instId },
    type: Types.POST,
    tag: ApiTag.SOURCE_OF_FUND,
    headers: {
      'Content-Type': 'application/json',
    },
  };
};

export default GetSourceOfFundList;
