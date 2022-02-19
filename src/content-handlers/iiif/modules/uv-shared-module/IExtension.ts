import {
  AnnotationBody,
  Canvas,
  Collection,
  IExternalResource,
  IExternalResourceData,
  Range,
  Manifest,
} from "manifesto.js";
import { ILocale } from "./ILocale";
import { IExtensionHost } from "../../IExtensionHost";
import { IUVData } from "../../../../IUVData";
import { Shell } from "./Shell";
import { Helper } from "@iiif/manifold";
import { MetricType } from "./Metric";

export type ExtensionLoader = { name: string; loader: () => Promise<any> };

export type LocaleRegistry = {
  [key: string]: any;
};

export interface IExtension {
  $element: JQuery;
  // addTimestamp(uri: string): string;
  changeLocale(locale: string): void;
  extensionHost: IExtensionHost;
  create(): void;
  createModules(): void;
  data: IUVData;
  defaultConfig: any;
  exitFullScreen(): void;
  fire(name: string, ...args: any[]): void;
  format?: string | undefined;
  getAlternateLocale(): ILocale | null;
  getAppUri(): string;
  getCanvasLabels(label: string): string;
  getCurrentCanvases(): Canvas[];
  getCurrentCanvasRange(): Range | null;
  getDomain(): string;
  getExternalResources(
    resources?: IExternalResource[]
  ): Promise<IExternalResourceData[]>;
  getIIIFShareUrl(shareManifests?: boolean): string;
  getLocale(): string;
  getMediaFormats(canvas: Canvas): AnnotationBody[];
  getPagedIndices(canvasIndex?: number): number[];
  getSerializedLocales(): string | null;
  getSettings(): ISettings;
  getShareUrl(): string | null;
  height(): number;
  helper: Helper;
  isCreated: boolean;
  isDesktopMetric(): boolean;
  isFooterPanelEnabled(): boolean;
  isFullScreen(): boolean;
  isHeaderPanelEnabled(): boolean;
  isLeftPanelEnabled(): boolean;
  isLoggedIn: boolean;
  isMobile(): boolean;
  isOverlayActive(): boolean;
  isRightPanelEnabled(): boolean;
  isSeeAlsoEnabled(): boolean;
  isMobileMetric(): boolean;
  lastCanvasIndex: number;
  locales: LocaleRegistry;
  metric: MetricType;
  mouseX: number;
  mouseY: number;
  type: ExtensionLoader;
  redirect(uri: string): void;
  refresh(): void;
  reload(data?: IUVData): void;
  resize(): void;
  resources: IExternalResourceData[] | null;
  shifted: boolean;
  showMessage(
    message: string,
    acceptCallback?: any,
    buttonText?: string,
    allowClose?: boolean
  ): void;
  tabbing: boolean;
  render(): void;
  shell: Shell;
  updateSettings(settings: ISettings): void;
  viewCanvas(canvasIndex: number): void;
  viewCollection(collection: Collection): void;
  viewManifest(manifest: Manifest): void;
  width(): number;
}