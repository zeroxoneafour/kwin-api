import { QPoint, QRect, Signal } from "./qt";

export interface Output {
    readonly geometry: QRect;
    readonly devicePixelRatio: number;
    readonly name: string;
    readonly manufacturer: string;
    readonly model: string;
    readonly serialNumber: string;

    mapToGlobal(point: QPoint): void;
    mapFromGlobal(point: QPoint): void;

    readonly geometryChanged: Signal<() => void>;
    readonly enabledChanged: Signal<() => void>;
    readonly scaleChanged: Signal<() => void>;
    readonly aboutToTurnOff: Signal<() => void>;
    readonly wakeUp: Signal<() => void>;
    readonly aboutToChange: Signal<() => void>;
    readonly changed: Signal<() => void>;
    readonly currentModeChanged: Signal<() => void>;
    readonly modesChanged: Signal<() => void>;
    readonly outputChange: Signal<() => void>;
    readonly transformChanged: Signal<() => void>;
    readonly dpmsModeChanged: Signal<() => void>;
    readonly capabilitiesChanged: Signal<() => void>;
    readonly overscanChanged: Signal<() => void>;
    readonly vrrPolicyChanged: Signal<() => void>;
    readonly rgbRangeChanged: Signal<() => void>;
    readonly wideColorGamutChanged: Signal<() => void>;
    readonly sdrBrightnessChanged: Signal<() => void>;
    readonly highDynamicRangeChanged: Signal<() => void>;
    readonly autoRotationPolicyChanged: Signal<() => void>;
    readonly iccProfileChanged: Signal<() => void>;
    readonly iccProfilePathChanged: Signal<() => void>;
    readonly brightnessMetadataChanged: Signal<() => void>;
    readonly sdrGamutWidenessChanged: Signal<() => void>;
    readonly colorDescriptionChanged: Signal<() => void>;
}