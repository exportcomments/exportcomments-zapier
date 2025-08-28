const authentication = {
  type: 'custom',
  test: {
    url: 'https://exportcomments.com/api/v1/zapier/auth/test',
    method: 'GET',
    headers: {
      'X-AUTH-TOKEN': '{{bundle.authData.api_key}}',
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
  },
  fields: [
    {
      computed: false,
      key: 'api_key',
      required: true,
      label: 'API Key',
      type: 'password',
      helpText: 'Your ExportComments API key. You can find this at [https://app.exportcomments.com/user/api](https://app.exportcomments.com/user/api)'
    }
  ],
  connectionLabel: '{{user_email}} ({{plan}})'
};

export default authentication;