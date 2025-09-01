const subscribeHook = async (z, bundle) => {
  const options = {
    url: 'https://exportcomments.com/api/v1/zapier/webhooks',
    method: 'POST',
    headers: {
      'X-AUTH-TOKEN': bundle.authData.api_key,
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    body: {
      url: bundle.targetUrl,
      event: 'export.requeued'
    }
  };

  const response = await z.request(options);
  return response.data;
};

const unsubscribeHook = async (z, bundle) => {
  const hookId = bundle.subscribeData.id;
  const options = {
    url: `https://exportcomments.com/api/v1/zapier/webhooks/${hookId}`,
    method: 'DELETE',
    headers: {
      'X-AUTH-TOKEN': bundle.authData.api_key,
      'Accept': 'application/json'
    }
  };

  await z.request(options);
  return {};
};
const getWebhookData = async (z, bundle) => {
  const data = bundle.cleanedRequest;

  return [data];
};
const performList = async (z, bundle) => {
  const options = {
    url: 'https://exportcomments.com/api/v1/webhooks/events?event=export.requeued',
    method: 'GET',
    headers: {
      'X-AUTH-TOKEN': bundle.authData.api_key,
      'Accept': 'application/json'
    }
  };
  const response = await z.request(options);
  const list = [];
  for (const item of response.data.items) {
    list.push(JSON.parse(item.message));
  }
  return list;
};
const performListSample = async (z, bundle) => {
  const options = {
    url: 'https://exportcomments.com/api/v1/zapier/events/export.requeued/sample',
    method: 'GET',
    headers: {
      'X-AUTH-TOKEN': bundle.authData.api_key,
      'Accept': 'application/json'
    }
  };

  const response = await z.request(options);
  return [response.data];
};
export default {
  key: 'exportRequeued',
  noun: 'Export',
  display: {
    label: 'Export Requeued',
    description: 'Triggers when an export job is requeued for retry after a temporary failure.'
  },
  operation: {
    type: 'hook',
    performSubscribe: subscribeHook,
    performUnsubscribe: unsubscribeHook,
    perform: getWebhookData,
    performList: performList,
    sample: {
      "url": "https://www.instagram.com/mypage",
      "guid": "test-export-uuid",
      "replies": false,
      "shares": false,
      "likes": false,
      "file_name": "ig-posts_mypage_f5f93319.xlsx",
      "total": 11,
      "total_exported": 0,
      "retry": 3,
      "error": null,
      "replies_count": 0,
      "twitter_type": false,
      "options": {
        "tweets": true,
        "limit": 11
      },
      "created_at": "2024-01-15T10:25:00Z",
      "updated_at": "2024-01-15T10:30:00Z",
      "exported_at": null,
      "plan": "business",
      "platform": "instagram",
      "export_type": "posts",
      "download_url": null,
      "preview_url": null,
      "status_url": "https://exportcomments.com/done/test-export-uuid",
      "delete_after": "2024-01-20T10:30:00Z",
      "json_url": null,
      "masked_metadata": null,
      "message_id": "test-export-requeued-123",
      "event_id": "uuid-event-id",
      "event": "export.requeued",
      "status": "requeued"
    },
    outputFields: [
      { key: 'url', label: 'Source URL', type: 'string' },
      { key: 'guid', label: 'Export GUID', type: 'string' },
      { key: 'file_name', label: 'File Name', type: 'string' },
      { key: 'total', label: 'Total Items', type: 'integer' },
      { key: 'total_exported', label: 'Items Exported', type: 'integer' },
      { key: 'retry', label: 'Retry Count', type: 'integer' },
      { key: 'platform', label: 'Platform', type: 'string' },
      { key: 'export_type', label: 'Export Type', type: 'string' },
      { key: 'plan', label: 'User Plan', type: 'string' },
      { key: 'status', label: 'Status', type: 'string' },
      { key: 'created_at', label: 'Created At', type: 'datetime' },
      { key: 'updated_at', label: 'Updated At', type: 'datetime' },
      { key: 'status_url', label: 'Status URL', type: 'string' },
      { key: 'delete_after', label: 'Delete After', type: 'datetime' },
      { key: 'message_id', label: 'Message ID', type: 'string' },
      { key: 'event_id', label: 'Event ID', type: 'string' },
      { key: 'event', label: 'Event Type', type: 'string' }
    ]
  }
};