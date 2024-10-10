import * as React from "react";
import styles from "./ExternalLibrary.module.scss";
import { IExternalLibraryProps } from "./IExternalLibraryProps";
import { escape } from "@microsoft/sp-lodash-subset";

import * as $ from "jquery";
import "jqueryui";

import { SPComponentLoader } from "@microsoft/sp-loader";

export default class ExternalLibrary extends React.Component<
  IExternalLibraryProps,
  {}
> {
  constructor(props: IExternalLibraryProps) {
    super(props);
    SPComponentLoader.loadCss(
      "https://ajax.googleapis.com/ajax/libs/jqueryui/1.12.1/themes/smoothness/jquery-ui.css"
    );
    SPComponentLoader.loadScript(
      "https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js",
      { globalExportsName: "jQuery" }
    );
    SPComponentLoader.loadScript(
      "https://ajax.googleapis.com/ajax/libs/jqueryui/1.12.1/jquery-ui.min.js",
      { globalExportsName: "jQuery" }
    );
  }

  public render(): React.ReactElement<IExternalLibraryProps> {
    return (
      <div className={styles.externalLibrary}>
        <div className="accordion">
          <h3>This is a draft of a page. 1</h3>
          <div>
            <ul>
              <li>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
                sequi molestias saepe repellat! Quisquam, atque id! Dolore id
                amet dolorem aliquid itaque voluptas at ipsam, porro beatae,
                similique, deleniti veritatis.
              </li>
              <li>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum
                neque nisi voluptatum voluptas dicta corporis, atque veniam iste
                cum dignissimos ipsum sed ipsa quos odio doloremque ipsam
                quisquam eos temporibus!
              </li>
              <li>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta
                tenetur beatae iure suscipit nihil. Placeat quod laudantium, eos
                nostrum quibusdam a. Vitae vel adipisci ea corporis? Eaque
                doloremque officia provident.
              </li>
            </ul>
          </div>
          <h3>This is a draft of a page. 2</h3>
          <div>
            <ul>
              <li>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
              </li>
              <li>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum
              </li>
              <li>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta
              </li>
            </ul>
          </div>
          <h3>This is a draft of a page. 3</h3>
          <div>
            <ul>
              <li>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
              </li>
              <li>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum
              </li>
              <li>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
    const accordionOptions: JQueryUI.AccordionOptions = {
      collapsible: true,
      animate: true,
      icons: {
        header: "ui-icon-triangle-1-s",
        activeHeader: "ui-icon-triangle-1-n",
      },
    };
    ($(".accordion, this.domElement") as any).accordion(accordionOptions);
  }
}
