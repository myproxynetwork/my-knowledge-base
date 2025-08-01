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
        label: 'Документация',
        path: 'docs',
        format: 'md',
        fields: [
          { type: 'string', name: 'id', label: 'ID' },
          { type: 'string', name: 'title', label: 'Заголовок', isTitle: true, required: true },
          { type: 'rich-text', name: 'body', label: 'Тело документа', isBody: true }
        ]
      }
    ]
  }
});