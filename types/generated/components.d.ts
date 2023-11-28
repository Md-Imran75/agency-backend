import type { Schema, Attribute } from '@strapi/strapi';

export interface MetaMetaDataForBlog extends Schema.Component {
  collectionName: 'components_meta_meta_data_for_blogs';
  info: {
    displayName: 'metaDataForBlog';
  };
  attributes: {
    title: Attribute.String;
    image: Attribute.Media;
    description: Attribute.Text;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'meta.meta-data-for-blog': MetaMetaDataForBlog;
    }
  }
}
