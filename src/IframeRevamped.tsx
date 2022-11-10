import clsx from "clsx";
import { createElement, CSSProperties, FC, useMemo } from "react";
import { IframeRevampedContainerProps } from "../typings/IframeRevampedProps";
import { Iframe } from "./components/IFrame";
import { getDynamicValue, enumReferrer, enumSandbox, executeAction } from "./util";
import { IIframeBaseProps } from "./components/IFrame.types";

const DEFAULT_CLASSNAME = "mendix-iframe-component";

export const IframeRevamped: FC<IframeRevampedContainerProps> = ({
    urlExpression,
    srcExpression,
    uiSizeWidth,
    uiSizeHeight,
    miscLoading,
    miscReferrerPolicy,
    miscAllowExpression,
    miscSandboxExpression,
    onLoad,
    onMouseOver,
    onMouseOut,
    class: className,
    style,
    name
}) => {
    const { src, isSrcDoc, invalid } = useMemo(() => {
        const url = getDynamicValue("", urlExpression);
        const src = getDynamicValue(null, srcExpression);
        return {
            isSrcDoc: src !== null,
            src: src !== null ? src : url,
            invalid: (!url || url === null) && !src
        };
    }, [urlExpression, srcExpression]);

    const iframeProps: IIframeBaseProps = useMemo(() => {
        const isPureNumbersRegExp = /^\d+$/;
        const widthValue = getDynamicValue(undefined, uiSizeWidth);
        const heightValue = getDynamicValue(undefined, uiSizeHeight);
        const styleObject: CSSProperties = style ?? {};

        if (widthValue && !isPureNumbersRegExp.test(widthValue)) {
            styleObject.width = `${widthValue}`;
        }
        if (heightValue && !isPureNumbersRegExp.test(heightValue)) {
            styleObject.height = `${heightValue}`;
        }

        const widthNumber = widthValue && isPureNumbersRegExp.test(widthValue) ? parseInt(widthValue, 10) : undefined;
        const heightNumber =
            heightValue && isPureNumbersRegExp.test(heightValue) ? parseInt(heightValue, 10) : undefined;

        const classes = clsx(className, DEFAULT_CLASSNAME, { [`${DEFAULT_CLASSNAME}-invalid`]: invalid });

        return {
            src: isSrcDoc ? undefined : src,
            srcDoc: isSrcDoc ? src : undefined,
            name,
            className: classes,
            width: widthNumber,
            height: heightNumber,
            loading: miscLoading,
            sandbox: enumSandbox(getDynamicValue("", miscSandboxExpression)),
            referrerPolicy: enumReferrer(miscReferrerPolicy) || undefined,
            allow: getDynamicValue(undefined, miscAllowExpression),
            style: styleObject,
            onLoad: () => executeAction(onLoad),
            onMouseOver: () => executeAction(onMouseOver),
            onMouseOut: () => executeAction(onMouseOut)
        };
    }, [
        uiSizeWidth,
        uiSizeHeight,
        style,
        className,
        invalid,
        isSrcDoc,
        src,
        name,
        miscLoading,
        miscSandboxExpression,
        miscReferrerPolicy,
        miscAllowExpression,
        onLoad,
        onMouseOver,
        onMouseOut
    ]);

    return <Iframe {...iframeProps} />;
};
