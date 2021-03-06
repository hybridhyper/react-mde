import * as React from "react";
import {MarkdownState} from "./MarkdownState";
import {EditorState} from "draft-js";

export interface ButtonContentOptions {
  iconProvider: (iconName: string) => React.ReactNode;
}

export type ButtonContentBuilder = (options: ButtonContentOptions) => React.ReactNode;

export interface Command {
    buttonContentBuilder: ButtonContentBuilder;
    buttonProps?: any;
    children?: Command[];
    execute?: (EditorState, data?) => EditorState | Promise<EditorState>;
}
