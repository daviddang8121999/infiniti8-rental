import type { Schema, Attribute } from '@strapi/strapi';

export interface BlockHero extends Schema.Component {
  collectionName: 'components_block_heroes';
  info: {
    displayName: 'Hero';
  };
  attributes: {
    heading: Attribute.String;
    text: Attribute.Text;
    link: Attribute.Component<'element.button-link'>;
    image: Attribute.Media;
  };
}

export interface BlockRow extends Schema.Component {
  collectionName: 'components_block_rows';
  info: {
    displayName: 'Row';
  };
  attributes: {
    card: Attribute.Component<'element.card', true>;
  };
}

export interface ElementButtonLink extends Schema.Component {
  collectionName: 'components_element_button_links';
  info: {
    displayName: 'Button Link';
  };
  attributes: {
    title: Attribute.String;
    link: Attribute.String;
    isExternal: Attribute.Boolean & Attribute.DefaultTo<false>;
    type: Attribute.Enumeration<['PRIMARY', 'SECONDARY']>;
  };
}

export interface ElementCard extends Schema.Component {
  collectionName: 'components_element_cards';
  info: {
    displayName: 'Card';
  };
  attributes: {
    image: Attribute.Media;
    heading: Attribute.String;
    desciption: Attribute.Text;
  };
}

export interface ElementPricingCard extends Schema.Component {
  collectionName: 'components_element_pricing_cards';
  info: {
    displayName: 'Pricing Card';
  };
  attributes: {
    planType: Attribute.String;
    planPrice: Attribute.String;
    isFeature: Attribute.Boolean & Attribute.DefaultTo<false>;
    services: Attribute.Relation<
      'element.pricing-card',
      'oneToMany',
      'api::service.service'
    >;
    link: Attribute.Component<'element.button-link', true>;
  };
}

export interface SeoMetaData extends Schema.Component {
  collectionName: 'components_seo_meta_data';
  info: {
    displayName: 'Meta Data';
  };
  attributes: {
    metaTitle: Attribute.String;
    metaDescription: Attribute.Text;
    metaImages: Attribute.Media;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'block.hero': BlockHero;
      'block.row': BlockRow;
      'element.button-link': ElementButtonLink;
      'element.card': ElementCard;
      'element.pricing-card': ElementPricingCard;
      'seo.meta-data': SeoMetaData;
    }
  }
}
