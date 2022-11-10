import { CSSProperties } from "react";

export type SandboxAttributeValue =
    | "allow-downloads-without-user-activation"
    | "allow-forms"
    | "allow-modals"
    | "allow-orientation-lock"
    | "allow-pointer-lock"
    | "allow-popups"
    | "allow-popups-to-escape-sandbox"
    | "allow-presentation"
    | "allow-same-origin"
    | "allow-scripts"
    | "allow-storage-access-by-user-activation"
    | "allow-top-navigation"
    | "allow-top-navigation-by-user-activation";

export interface IIframeBaseProps {
    src?: string;
    srcDoc?: string;
    height?: number;
    width?: number;
    loading?: "auto" | "eager" | "lazy";
    fetchPriority?: "auto" | "high" | "low";
    style?: CSSProperties;
    name?: string;
    referrerPolicy?:
        | "no-referrer"
        | "no-referrer-when-downgrade"
        | "origin"
        | "origin-when-cross-origin"
        | "same-origin"
        | "strict-origin"
        | "strict-origin-when-cross-origin"
        | "unsafe-url";
    onLoad?: (evt: Event) => void;
    onMouseOver?: () => void;
    onMouseOut?: () => void;
    frameBorder?: number;
    ariaHidden?: boolean;
    ariaLabel?: string;
    ariaLabelledby?: string;
    sandbox?: SandboxAttributeValue | SandboxAttributeValue[];
    allow?: string;
    className?: string;
    title?: string;
    key?: string;
}
