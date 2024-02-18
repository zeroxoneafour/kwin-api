import QRect from "./qml/qrect";
import Signal from "./qml/signal";

export default interface Output
{
    geometry: QRect;
    devicePixelRatio: number;
    name: string;
    manufacturer: string;
    model: string;
    serialNumber: string;
    
    mapToGlobal(rect: QRect): void;
    mapFromGlobal(rect: QRect): void;
    
    geometryChanged: Signal<() => void>;
    enabledChanged: Signal<() => void>;
    scaleChanged: Signal<() => void>;
    aboutToTurnOff: Signal<() => void>;
    wakeUp: Signal<() => void>;
    aboutToChange: Signal<() => void>;
    changed: Signal<() => void>;
    currentModeChanged: Signal<() => void>;
    modesChanged: Signal<() => void>;
    outputChange: Signal<() => void>;
    transformChanged: Signal<() => void>;
    dpmsModeChanged: Signal<() => void>;
    capabilitiesChanged: Signal<() => void>;
    overscanChanged: Signal<() => void>;
    vrrPolicyChanged: Signal<() => void>;
    rgbRangeChanged: Signal<() => void>;
    wideColorGamutChanged: Signal<() => void>;
    sdrBrightnessChanged: Signal<() => void>;
    highDynamicRangeChanged: Signal<() => void>;
    autoRotationPolicyChanged: Signal<() => void>;
    iccProfileChanged: Signal<() => void>;
    iccProfilePathChanged: Signal<() => void>;
    brightnessMetadataChanged: Signal<() => void>;
    sdrGamutWidenessChanged: Signal<() => void>;
    colorDescriptionChanged: Signal<() => void>;
}