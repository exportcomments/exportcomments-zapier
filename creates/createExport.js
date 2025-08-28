const performCreate = async (z, bundle) => {
  const requestOptions = {
    limit: bundle.inputData.limit,
    followers: bundle.inputData.followers,
    likes: bundle.inputData.likes,
    minTimestamp: bundle.inputData.minTimestamp
  };

  // Remove undefined values
  Object.keys(requestOptions).forEach(key => 
    requestOptions[key] === undefined && delete requestOptions[key]
  );

  // Parse additional options if provided
  if (bundle.inputData.options) {
    try {
      const additionalOptions = JSON.parse(bundle.inputData.options);
      Object.assign(requestOptions, additionalOptions);
    } catch (e) {
      throw new Error('Invalid JSON format in additional options field');
    }
  }

  const options = {
    url: 'https://exportcomments.com/api/v3/job',
    method: 'POST',
    headers: {
      'X-AUTH-TOKEN': bundle.authData.api_key,
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    body: {
      url: bundle.inputData.url,
      options: requestOptions
    }
  };

  const response = await z.request(options);
  return response.data;
};

export default {
  key: 'createExport',
  noun: 'Export',
  display: {
    label: 'Create Export',
    description: 'Creates a new export job for social media content.'
  },
  operation: {
    perform: performCreate,
    inputFields: [
      {
        key: 'url',
        label: 'Source URL',
        type: 'string',
        required: true,
        helpText: 'The URL of the social media content to export (e.g., Instagram profile, YouTube channel, etc.)'
      },
      {
        key: 'limit',
        label: 'Limit',
        type: 'integer',
        required: false,
        helpText: 'Maximum number of items to export (leave empty for no limit)'
      },
      {
        key: 'followers',
        label: 'Include Followers',
        type: 'boolean',
        required: false,
        helpText: 'Whether to include followers information'
      },
      {
        key: 'likes',
        label: 'Include Likes',
        type: 'boolean',
        required: false,
        helpText: 'Whether to include like information'
      },
      {
        key: 'minTimestamp',
        label: 'Minimum Timestamp',
        type: 'integer',
        required: false,
        helpText: 'Unix timestamp to filter content from this date onwards'
      },
      {
        key: 'options',
        label: 'Additional Options',
        type: 'text',
        required: false,
        helpText: 'Additional options as JSON string (e.g., {"custom_field": "value"})'
      }
    ],
    sample: {
      "id": 12345,
      "guid": "export-uuid-123",
      "status": "queued",
      "url": "https://www.instagram.com/mypage",
      "json_url": "https://exportcomments.com/exports/export-uuid-123.json",
      "download_link": "https://exportcomments.com/exports/export-uuid-123.xlsx"
    },
    outputFields: [
      { key: 'id', label: 'Job ID', type: 'integer' },
      { key: 'guid', label: 'Export GUID', type: 'string' },
      { key: 'status', label: 'Status', type: 'string' },
      { key: 'url', label: 'Source URL', type: 'string' },
      { key: 'json_url', label: 'JSON Export URL', type: 'string' },
      { key: 'download_link', label: 'Download Link', type: 'string' }
    ]
  }
};