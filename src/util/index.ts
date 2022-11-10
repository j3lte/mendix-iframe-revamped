import { DynamicValue, ValueStatus, ActionValue } from "mendix";
import { SandboxAttributeValue } from "src/components/IFrame.types";
import { MiscReferrerPolicyEnum } from "../../typings/IframeRevampedProps";

type ReferrerType =
    | "no-referrer"
    | "no-referrer-when-downgrade"
    | "origin"
    | "origin-when-cross-origin"
    | "same-origin"
    | "strict-origin"
    | "strict-origin-when-cross-origin"
    | "unsafe-url";

const SandboxType: SandboxAttributeValue[] = [
    "allow-forms",
    "allow-modals",
    "allow-orientation-lock",
    "allow-pointer-lock",
    "allow-popups",
    "allow-popups-to-escape-sandbox",
    "allow-presentation",
    "allow-same-origin",
    "allow-scripts",
    "allow-storage-access-by-user-activation",
    "allow-top-navigation",
    "allow-top-navigation-by-user-activation"
];

const enumReferrerMap: Record<MiscReferrerPolicyEnum, ReferrerType | null> = {
    noReferrer: "no-referrer",
    noReferrerWhenDowngrade: "no-referrer-when-downgrade",
    origin: "origin",
    orginWhenCrossOrigin: "origin-when-cross-origin",
    sameOrigin: "same-origin",
    strictOrigin: "strict-origin",
    strictOriginWhenCrossOrigin: "strict-origin-when-cross-origin",
    unsafeUrl: "unsafe-url",
    notSet: null
};

export const enumReferrer = (value: MiscReferrerPolicyEnum): ReferrerType | null => {
    return enumReferrerMap[value];
};

export const enumSandbox = (value?: string | null): SandboxAttributeValue[] => {
    if (!value) {
        return [];
    }
    const sandboxValues = value
        .split(",")
        .map((v: string) => v.trim())
        .filter((v: string) => v !== "" && SandboxType.includes(v as SandboxAttributeValue)) as SandboxAttributeValue[];
    return sandboxValues;
};

export const getDynamicValue = <P, T>(alternative: P, dynamicValue?: DynamicValue<T>): T | P => {
    if (dynamicValue && dynamicValue.status === ValueStatus.Available) {
        return dynamicValue.value;
    }
    return alternative;
};

export const executeAction = (action?: ActionValue): void => {
    if (action && action.canExecute && !action.isExecuting) {
        action.execute();
    }
};
