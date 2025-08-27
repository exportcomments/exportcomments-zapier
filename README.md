# ExportComments Zapier Integration

Zapier integration for [ExportComments.com](https://exportcomments.com) - automate your comment export workflows with 6000+ apps.

## Features

This integration provides the following triggers:

- **Export Started** - Triggered when a new export job is created and queued
- **Export Completed** - Triggered when an export job completes successfully with download link
- **Export Failed** - Triggered when an export job fails with error details

## Setup

1. Get your API key from [ExportComments API page](https://app.exportcomments.com/user/api)
2. Connect your ExportComments account in Zapier using the API key
3. Choose your trigger and connect to any of 6000+ apps

## Authentication

Uses API key authentication with `X-AUTH-TOKEN` header. You can find your API key at https://app.exportcomments.com/user/api

## Development

### Prerequisites
- Node.js 16+
- Zapier CLI (`npm install -g zapier-platform-cli`)

### Commands
- `npm test` - Run tests
- `npm run zapier-push` - Push to Zapier
- `npm run zapier-test` - Run Zapier tests
- `npm run zapier-dev` - View logs

### Testing
```bash
npm test
```

### Deployment
```bash
zapier login
zapier push
```

## Support

For issues or questions:
- ExportComments: https://exportcomments.com/contact
- Zapier Platform: https://platform.zapier.com/
