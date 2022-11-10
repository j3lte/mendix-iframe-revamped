/*
Copied from https://github.com/robbestad/react-iframe
With some modifications
*/
import { createElement, DetailedHTMLProps, IframeHTMLAttributes, FC } from "react";
import { IIframeBaseProps } from "./IFrame.types";

type IFrameProps = DetailedHTMLProps<IframeHTMLAttributes<HTMLIFrameElement>, HTMLIFrameElement> & {
    fetchPriority?: "string";
};
type IFrameAttribute = keyof IFrameProps;

export const Iframe: FC<IIframeBaseProps> = ({
    height,
    width,
    style,
    onLoad,
    onMouseOver,
    onMouseOut,
    frameBorder,
    ariaHidden,
    sandbox,
    allow,
    className,
    title,
    ariaLabel,
    ariaLabelledby,
    name,
    loading,
    fetchPriority,
    referrerPolicy,
    src,
    srcDoc,
    key
}) => {
    const defaultProps = Object.freeze<Partial<Record<IFrameAttribute, any>>>({
        src: src || "about:blank",
        srcDoc,
        style,
        fetchPriority: fetchPriority || "auto",
        sandbox: (sandbox && [...sandbox].join(" ")) || "",
        loading: loading || null,
        name: name || null,
        className: className || null,
        referrerPolicy: referrerPolicy || null,
        title: title || null,
        allow: allow || null,
        "aria-labelledby": ariaLabelledby || null,
        "aria-hidden": ariaHidden || null,
        "aria-label": ariaLabel || null,
        width: width || null,
        height: height || null,
        onLoad: onLoad || null,
        onMouseOver: onMouseOver || null,
        onMouseOut: onMouseOut || null,
        key: key || "iframe"
    });

    const props = Object.create(null) as IFrameProps;
    for (const prop of Object.keys(defaultProps) as IFrameAttribute[]) {
        if (defaultProps[prop] != null) {
            props[prop] = defaultProps[prop];
        }
    }

    if (!props.style) {
        props.style = {};
    }

    if (!props.style.display) {
        props.style.display = "initial";
    }

    if (frameBorder && frameBorder >= 0) {
        if (!props.style.border) {
            props.style.border = frameBorder;
        }
    } else {
        props.style.border = 0;
    }

    return <iframe {...props} />;
};
