# ExportComments Zapier Integration

Zapier integration for [ExportComments.com](https://exportcomments.com) - automate your comment export workflows with 6000+ apps.

## Features

### Triggers
This integration provides the following triggers:

- **Export Started** - Triggered when a new export job is created and queued
- **Export Completed** - Triggered when an export job completes successfully with download link
- **Export Failed** - Triggered when an export job fails with error details
- **Export Requeued** - Triggered when an export job is requeued for retry

### Actions
- **Create Export** - Creates a new export job for social media content using API v3

## Supported Platforms

- Instagram
- YouTube  
- Twitter/X
- Facebook
- TikTok
- Vimeo
- And more...

## Setup

1. Get your API key from [ExportComments API page](https://app.exportcomments.com/user/api)
2. Connect your ExportComments account in Zapier using the API key
3. Choose your trigger/action and connect to any of 6000+ apps

## Usage Examples

### Trigger Workflows
- **Export Completed** → Save files to Google Drive
- **Export Failed** → Send notification to Slack
- **Export Started** → Log to spreadsheet for tracking

### Action Workflows  
- **Schedule** → Create Export → Wait for completion webhook
- **Form Submission** → Create Export with submitted URL
- **CRM Update** → Trigger export for social media analysis

## Authentication

Uses API key authentication with `X-AUTH-TOKEN` header. You can find your API key at https://app.exportcomments.com/user/api

## API Reference

### Create Export Action

Creates a new export job using ExportComments API v3.

**Endpoint:** `POST /api/v3/job`

**Input Fields:**
- `url` (required) - Source URL to export from
- `limit` (optional) - Maximum number of items to export
- `followers` (optional) - Include followers data (boolean)
- `likes` (optional) - Include likes data (boolean)  
- `minTimestamp` (optional) - Unix timestamp for filtering
- `options` (optional) - Additional options as JSON string

**Output:**
- `id` - Job numeric identifier
- `guid` - Unique job identifier  
- `status` - Job status (queued, processing, completed, failed)
- `url` - Original source URL
- `json_url` - JSON export file URL
- `download_link` - Direct download link

## Development

### Prerequisites
- Node.js 18+
- Zapier CLI (`npm install -g zapier-platform-cli`)

### Commands
- `npm test` - Run tests
- `npm run zapier-push` - Push to Zapier
- `npm run zapier-test` - Run Zapier tests and validation
- `npm run zapier-dev` - View logs

### Project Structure
```
├── authentication.js      # API key authentication
├── creates/
│   └── createExport.js    # Create export action
├── triggers/
│   ├── exportCreated.js   # Export started webhook
│   ├── exportCompleted.js # Export completed webhook
│   ├── exportFailed.js    # Export failed webhook
│   └── exportRequeued.js  # Export requeued webhook
├── test/
│   ├── creates.test.js    # Action tests
│   └── example.test.js    # Integration tests
├── index.js              # Main app definition
└── package.json          # Dependencies and scripts
```

### Testing
```bash
# Run all tests
npm test

# Run Zapier validation and tests
npm run zapier-test

# Test specific file
npx jest test/creates.test.js
```

### Deployment
```bash
# Login to Zapier
zapier login

# Validate integration
zapier validate

# Push to Zapier (development)
zapier push

# Promote to production
zapier promote 1.0.0
```

### Environment Variables
```bash
# For testing with real API
export ZAPIER_TEST_API_KEY=your_api_key_here
```

## Troubleshooting

### Common Issues

**Authentication Failed**
- Verify your API key at https://app.exportcomments.com/user/api
- Ensure the key is properly entered in Zapier connection

**Export Creation Fails**
- Check if the URL is valid and publicly accessible
- Verify the platform supports the requested export type
- Review rate limits on your ExportComments plan

**Webhook Not Triggering**  
- Check webhook endpoint is accessible from ExportComments servers
- Verify webhook subscription was created successfully
- Review webhook logs in Zapier

### Testing with Zapier CLI

```bash
# Test authentication
zapier test --debug

# Test create action locally
zapier invoke creates.createExport --inputData='{"url":"https://instagram.com/test"}'

# Test webhook subscription
zapier invoke triggers.exportCompleted.operation.performSubscribe
```

### Logs and Debugging

```bash
# View real-time logs
npm run zapier-dev

# View specific logs
zapier logs --type=http --detailed --limit=50

# Test with verbose output
npm test -- --verbose
```

## Version History

- **1.0.2** - Added Create Export action with API v3 support
- **1.0.1** - Initial triggers (Created, Completed, Failed, Requeued)
- **1.0.0** - Initial release with webhook triggers

## Support

For issues or questions:
- **ExportComments API**: https://exportcomments.com/contact
- **Zapier Platform**: https://platform.zapier.com/
- **GitHub Issues**: [Create an issue](https://github.com/exportcomments/zapier-integration/issues)

## License

ISC - See package.json for details
