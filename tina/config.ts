import { defineConfig } from 'tinacms';

export default defineConfig({
  clientId: 'Ov23liyrcFGHuoQ2clmp',
  branch: 'main',
  repo: 'myproxynetwork/my-knowledge-base',
  build: {
    outputFolder: 'admin',
    publicFolder: 'static'
  },
  media: {
    tina: {
      publicFolder: 'static',
      mediaRoot: 'images/uploads'
    }
  },
  schema: {
    collections: [
      {
        name: 'docs',
        label: 'Documentation',
        path: 'docs',
        format: 'md',
        fields: [
          { type: 'string', name: 'title', label: 'Title', isTitle: true, required: true },
          { type: 'rich-text', name: 'body', label: 'Body', isBody: true }
        ]
      }
    ]
  }
});