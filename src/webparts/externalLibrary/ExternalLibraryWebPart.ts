import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import {
  BaseClientSideWebPart,
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-webpart-base';

import * as strings from 'ExternalLibraryWebPartStrings';
import ExternalLibrary from './components/ExternalLibrary';
import { IExternalLibraryProps } from './components/IExternalLibraryProps';

import * as $ from 'jquery'
import * as JQueryUI from 'jqueryui';


import {SPComponentLoader} from '@microsoft/sp-loader';
export interface IExternalLibraryWebPartProps {
  description: string;
}

export default class ExternalLibraryWebPart extends BaseClientSideWebPart<IExternalLibraryWebPartProps> {

public constructor() {
  super();
  SPComponentLoader.loadCss('https://ajax.googleapis.com/ajax/libs/jqueryui/1.12.1/themes/smoothness/jquery-ui.css');
  SPComponentLoader.loadScript('https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js', { globalExportsName: 'jQuery' });
  SPComponentLoader.loadScript('https://ajax.googleapis.com/ajax/libs/jqueryui/1.12.1/jquery-ui.min.js', { globalExportsName: 'jQuery' });
}





  public render(): void {
    const element: React.ReactElement<IExternalLibraryProps > = React.createElement(
      ExternalLibrary,
      {
        description: this.properties.description
      }
    );

    ReactDom.render(element, this.domElement);
  }

  protected onDispose(): void {
    ReactDom.unmountComponentAtNode(this.domElement);
  }

  protected get dataVersion(): Version {
    return Version.parse('1.0');
  }

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return {
      pages: [
        {
          header: {
            description: strings.PropertyPaneDescription
          },
          groups: [
            {
              groupName: strings.BasicGroupName,
              groupFields: [
                PropertyPaneTextField('description', {
                  label: strings.DescriptionFieldLabel
                })
              ]
            }
          ]
        }
      ]
    };
  }
}
