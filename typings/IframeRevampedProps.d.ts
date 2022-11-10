/**
 * This file was generated from IframeRevamped.xml
 * WARNING: All changes made to this file will be overwritten
 * @author Mendix UI Content Team
 */
import { CSSProperties } from "react";
import { ActionValue, DynamicValue } from "mendix";

export type MiscLoadingEnum = "auto" | "eager" | "lazy";

export type MiscReferrerPolicyEnum = "notSet" | "noReferrer" | "noReferrerWhenDowngrade" | "origin" | "orginWhenCrossOrigin" | "sameOrigin" | "strictOrigin" | "strictOriginWhenCrossOrigin" | "unsafeUrl";

export interface IframeRevampedContainerProps {
    name: string;
    class: string;
    style?: CSSProperties;
    tabIndex?: number;
    urlExpression?: DynamicValue<string>;
    srcExpression?: DynamicValue<string>;
    uiSizeWidth?: DynamicValue<string>;
    uiSizeHeight?: DynamicValue<string>;
    miscLoading: MiscLoadingEnum;
    miscReferrerPolicy: MiscReferrerPolicyEnum;
    miscSandboxExpression?: DynamicValue<string>;
    miscAllowExpression?: DynamicValue<string>;
    onLoad?: ActionValue;
    onMouseOver?: ActionValue;
    onMouseOut?: ActionValue;
}

export interface IframeRevampedPreviewProps {
    /**
     * @deprecated Deprecated since version 9.18.0. Please use class property instead.
     */
    className: string;
    class: string;
    style: string;
    styleObject?: CSSProperties;
    readOnly: boolean;
    urlExpression: string;
    srcExpression: string;
    uiSizeWidth: string;
    uiSizeHeight: string;
    miscLoading: MiscLoadingEnum;
    miscReferrerPolicy: MiscReferrerPolicyEnum;
    miscSandboxExpression: string;
    miscAllowExpression: string;
    onLoad: {} | null;
    onMouseOver: {} | null;
    onMouseOut: {} | null;
}
