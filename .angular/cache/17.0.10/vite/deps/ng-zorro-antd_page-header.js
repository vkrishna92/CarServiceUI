import {
  NzIconDirective,
  NzIconModule
} from "./chunk-WR36RT2W.js";
import {
  NzOutletModule,
  NzStringTemplateOutletDirective
} from "./chunk-UR6RIVS4.js";
import {
  NzConfigService,
  WithConfig
} from "./chunk-RTYVRV2Z.js";
import {
  InputBoolean,
  PREFIX
} from "./chunk-WZWMWBUR.js";
import "./chunk-ARCS7CD3.js";
import {
  Directionality
} from "./chunk-OPAOCM2X.js";
import {
  coerceElement
} from "./chunk-BW3U25EH.js";
import "./chunk-VLJRELEJ.js";
import "./chunk-KDJXA7WE.js";
import {
  Location,
  NgIf
} from "./chunk-WMCAWSDL.js";
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ContentChild,
  Directive,
  ElementRef,
  EventEmitter,
  Injectable,
  Input,
  NgModule,
  Observable,
  Optional,
  Output,
  Subject,
  ViewEncapsulation$1,
  __decorate,
  map,
  setClassMetadata,
  takeUntil,
  ɵɵNgOnChangesFeature,
  ɵɵProvidersFeature,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵcontentQuery,
  ɵɵdefineComponent,
  ɵɵdefineDirective,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵinject,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵqueryRefresh,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-TCQIETDU.js";
import "./chunk-HSNDBVJ3.js";

// node_modules/ng-zorro-antd/fesm2022/ng-zorro-antd-cdk-resize-observer.mjs
var _NzResizeObserverFactory = class _NzResizeObserverFactory {
  create(callback) {
    return typeof ResizeObserver === "undefined" ? null : new ResizeObserver(callback);
  }
};
_NzResizeObserverFactory.ɵfac = function NzResizeObserverFactory_Factory(t) {
  return new (t || _NzResizeObserverFactory)();
};
_NzResizeObserverFactory.ɵprov = ɵɵdefineInjectable({
  token: _NzResizeObserverFactory,
  factory: _NzResizeObserverFactory.ɵfac,
  providedIn: "root"
});
var NzResizeObserverFactory = _NzResizeObserverFactory;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzResizeObserverFactory, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var _NzResizeObserver = class _NzResizeObserver {
  constructor(nzResizeObserverFactory) {
    this.nzResizeObserverFactory = nzResizeObserverFactory;
    this.observedElements = /* @__PURE__ */ new Map();
  }
  ngOnDestroy() {
    this.observedElements.forEach((_, element) => this.cleanupObserver(element));
  }
  observe(elementOrRef) {
    const element = coerceElement(elementOrRef);
    return new Observable((observer) => {
      const stream = this.observeElement(element);
      const subscription = stream.subscribe(observer);
      return () => {
        subscription.unsubscribe();
        this.unobserveElement(element);
      };
    });
  }
  /**
   * Observes the given element by using the existing ResizeObserver if available, or creating a
   * new one if not.
   */
  observeElement(element) {
    if (!this.observedElements.has(element)) {
      const stream = new Subject();
      const observer = this.nzResizeObserverFactory.create((mutations) => stream.next(mutations));
      if (observer) {
        observer.observe(element);
      }
      this.observedElements.set(element, {
        observer,
        stream,
        count: 1
      });
    } else {
      this.observedElements.get(element).count++;
    }
    return this.observedElements.get(element).stream;
  }
  /**
   * Un-observes the given element and cleans up the underlying ResizeObserver if nobody else is
   * observing this element.
   */
  unobserveElement(element) {
    if (this.observedElements.has(element)) {
      this.observedElements.get(element).count--;
      if (!this.observedElements.get(element).count) {
        this.cleanupObserver(element);
      }
    }
  }
  /** Clean up the underlying ResizeObserver for the specified element. */
  cleanupObserver(element) {
    if (this.observedElements.has(element)) {
      const {
        observer,
        stream
      } = this.observedElements.get(element);
      if (observer) {
        observer.disconnect();
      }
      stream.complete();
      this.observedElements.delete(element);
    }
  }
};
_NzResizeObserver.ɵfac = function NzResizeObserver_Factory(t) {
  return new (t || _NzResizeObserver)(ɵɵinject(NzResizeObserverFactory));
};
_NzResizeObserver.ɵprov = ɵɵdefineInjectable({
  token: _NzResizeObserver,
  factory: _NzResizeObserver.ɵfac,
  providedIn: "root"
});
var NzResizeObserver = _NzResizeObserver;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzResizeObserver, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: NzResizeObserverFactory
  }], null);
})();
var _NzResizeObserverDirective = class _NzResizeObserverDirective {
  subscribe() {
    this.unsubscribe();
    this.currentSubscription = this.nzResizeObserver.observe(this.elementRef).subscribe(this.nzResizeObserve);
  }
  unsubscribe() {
    this.currentSubscription?.unsubscribe();
  }
  constructor(nzResizeObserver, elementRef) {
    this.nzResizeObserver = nzResizeObserver;
    this.elementRef = elementRef;
    this.nzResizeObserve = new EventEmitter();
    this.nzResizeObserverDisabled = false;
    this.currentSubscription = null;
  }
  ngAfterContentInit() {
    if (!this.currentSubscription && !this.nzResizeObserverDisabled) {
      this.subscribe();
    }
  }
  ngOnDestroy() {
    this.unsubscribe();
  }
  ngOnChanges(changes) {
    const {
      nzResizeObserve
    } = changes;
    if (nzResizeObserve) {
      if (this.nzResizeObserverDisabled) {
        this.unsubscribe();
      } else {
        this.subscribe();
      }
    }
  }
};
_NzResizeObserverDirective.ɵfac = function NzResizeObserverDirective_Factory(t) {
  return new (t || _NzResizeObserverDirective)(ɵɵdirectiveInject(NzResizeObserver), ɵɵdirectiveInject(ElementRef));
};
_NzResizeObserverDirective.ɵdir = ɵɵdefineDirective({
  type: _NzResizeObserverDirective,
  selectors: [["", "nzResizeObserver", ""]],
  inputs: {
    nzResizeObserverDisabled: "nzResizeObserverDisabled"
  },
  outputs: {
    nzResizeObserve: "nzResizeObserve"
  },
  standalone: true,
  features: [ɵɵProvidersFeature([NzResizeObserverFactory]), ɵɵNgOnChangesFeature]
});
var NzResizeObserverDirective = _NzResizeObserverDirective;
__decorate([InputBoolean()], NzResizeObserverDirective.prototype, "nzResizeObserverDisabled", void 0);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzResizeObserverDirective, [{
    type: Directive,
    args: [{
      selector: "[nzResizeObserver]",
      standalone: true,
      providers: [NzResizeObserverFactory]
    }]
  }], () => [{
    type: NzResizeObserver
  }, {
    type: ElementRef
  }], {
    nzResizeObserve: [{
      type: Output
    }],
    nzResizeObserverDisabled: [{
      type: Input
    }]
  });
})();
var _NzResizeObserverModule = class _NzResizeObserverModule {
};
_NzResizeObserverModule.ɵfac = function NzResizeObserverModule_Factory(t) {
  return new (t || _NzResizeObserverModule)();
};
_NzResizeObserverModule.ɵmod = ɵɵdefineNgModule({
  type: _NzResizeObserverModule,
  imports: [NzResizeObserverDirective],
  exports: [NzResizeObserverDirective]
});
_NzResizeObserverModule.ɵinj = ɵɵdefineInjector({});
var NzResizeObserverModule = _NzResizeObserverModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzResizeObserverModule, [{
    type: NgModule,
    args: [{
      imports: [NzResizeObserverDirective],
      exports: [NzResizeObserverDirective]
    }]
  }], null, null);
})();

// node_modules/ng-zorro-antd/fesm2022/ng-zorro-antd-page-header.mjs
function NzPageHeaderComponent_div_3_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵelement(1, "span", 9);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const backIcon_r6 = ctx.$implicit;
    const ctx_r5 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵproperty("nzType", backIcon_r6 || ctx_r5.getBackIcon());
  }
}
function NzPageHeaderComponent_div_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 6);
    ɵɵlistener("click", function NzPageHeaderComponent_div_3_Template_div_click_0_listener() {
      ɵɵrestoreView(_r8);
      const ctx_r7 = ɵɵnextContext();
      return ɵɵresetView(ctx_r7.onBack());
    });
    ɵɵelementStart(1, "div", 7);
    ɵɵtemplate(2, NzPageHeaderComponent_div_3_ng_container_2_Template, 2, 1, "ng-container", 8);
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵadvance(2);
    ɵɵproperty("nzStringTemplateOutlet", ctx_r0.nzBackIcon);
  }
}
function NzPageHeaderComponent_span_5_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtext(1);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r9 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵtextInterpolate(ctx_r9.nzTitle);
  }
}
function NzPageHeaderComponent_span_5_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span", 10);
    ɵɵtemplate(1, NzPageHeaderComponent_span_5_ng_container_1_Template, 2, 1, "ng-container", 8);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("nzStringTemplateOutlet", ctx_r1.nzTitle);
  }
}
function NzPageHeaderComponent_ng_content_6_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵprojection(0, 6, ["*ngIf", "!nzTitle"]);
  }
}
function NzPageHeaderComponent_span_7_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtext(1);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r10 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵtextInterpolate(ctx_r10.nzSubtitle);
  }
}
function NzPageHeaderComponent_span_7_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span", 11);
    ɵɵtemplate(1, NzPageHeaderComponent_span_7_ng_container_1_Template, 2, 1, "ng-container", 8);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("nzStringTemplateOutlet", ctx_r3.nzSubtitle);
  }
}
function NzPageHeaderComponent_ng_content_8_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵprojection(0, 7, ["*ngIf", "!nzSubtitle"]);
  }
}
var _c0 = [[["nz-breadcrumb", "nz-page-header-breadcrumb", ""]], [["nz-avatar", "nz-page-header-avatar", ""]], [["nz-page-header-tags"], ["", "nz-page-header-tags", ""]], [["nz-page-header-extra"], ["", "nz-page-header-extra", ""]], [["nz-page-header-content"], ["", "nz-page-header-content", ""]], [["nz-page-header-footer"], ["", "nz-page-header-footer", ""]], [["nz-page-header-title"], ["", "nz-page-header-title", ""]], [["nz-page-header-subtitle"], ["", "nz-page-header-subtitle", ""]]];
var _c1 = ["nz-breadcrumb[nz-page-header-breadcrumb]", "nz-avatar[nz-page-header-avatar]", "nz-page-header-tags, [nz-page-header-tags]", "nz-page-header-extra, [nz-page-header-extra]", "nz-page-header-content, [nz-page-header-content]", "nz-page-header-footer, [nz-page-header-footer]", "nz-page-header-title, [nz-page-header-title]", "nz-page-header-subtitle, [nz-page-header-subtitle]"];
var _NzPageHeaderTitleDirective = class _NzPageHeaderTitleDirective {
};
_NzPageHeaderTitleDirective.ɵfac = function NzPageHeaderTitleDirective_Factory(t) {
  return new (t || _NzPageHeaderTitleDirective)();
};
_NzPageHeaderTitleDirective.ɵdir = ɵɵdefineDirective({
  type: _NzPageHeaderTitleDirective,
  selectors: [["nz-page-header-title"], ["", "nz-page-header-title", ""]],
  hostAttrs: [1, "ant-page-header-heading-title"],
  exportAs: ["nzPageHeaderTitle"],
  standalone: true
});
var NzPageHeaderTitleDirective = _NzPageHeaderTitleDirective;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzPageHeaderTitleDirective, [{
    type: Directive,
    args: [{
      selector: "nz-page-header-title, [nz-page-header-title]",
      exportAs: "nzPageHeaderTitle",
      host: {
        class: "ant-page-header-heading-title"
      },
      standalone: true
    }]
  }], null, null);
})();
var _NzPageHeaderSubtitleDirective = class _NzPageHeaderSubtitleDirective {
};
_NzPageHeaderSubtitleDirective.ɵfac = function NzPageHeaderSubtitleDirective_Factory(t) {
  return new (t || _NzPageHeaderSubtitleDirective)();
};
_NzPageHeaderSubtitleDirective.ɵdir = ɵɵdefineDirective({
  type: _NzPageHeaderSubtitleDirective,
  selectors: [["nz-page-header-subtitle"], ["", "nz-page-header-subtitle", ""]],
  hostAttrs: [1, "ant-page-header-heading-sub-title"],
  exportAs: ["nzPageHeaderSubtitle"],
  standalone: true
});
var NzPageHeaderSubtitleDirective = _NzPageHeaderSubtitleDirective;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzPageHeaderSubtitleDirective, [{
    type: Directive,
    args: [{
      selector: "nz-page-header-subtitle, [nz-page-header-subtitle]",
      exportAs: "nzPageHeaderSubtitle",
      host: {
        class: "ant-page-header-heading-sub-title"
      },
      standalone: true
    }]
  }], null, null);
})();
var _NzPageHeaderContentDirective = class _NzPageHeaderContentDirective {
};
_NzPageHeaderContentDirective.ɵfac = function NzPageHeaderContentDirective_Factory(t) {
  return new (t || _NzPageHeaderContentDirective)();
};
_NzPageHeaderContentDirective.ɵdir = ɵɵdefineDirective({
  type: _NzPageHeaderContentDirective,
  selectors: [["nz-page-header-content"], ["", "nz-page-header-content", ""]],
  hostAttrs: [1, "ant-page-header-content"],
  exportAs: ["nzPageHeaderContent"],
  standalone: true
});
var NzPageHeaderContentDirective = _NzPageHeaderContentDirective;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzPageHeaderContentDirective, [{
    type: Directive,
    args: [{
      selector: "nz-page-header-content, [nz-page-header-content]",
      exportAs: "nzPageHeaderContent",
      host: {
        class: "ant-page-header-content"
      },
      standalone: true
    }]
  }], null, null);
})();
var _NzPageHeaderTagDirective = class _NzPageHeaderTagDirective {
};
_NzPageHeaderTagDirective.ɵfac = function NzPageHeaderTagDirective_Factory(t) {
  return new (t || _NzPageHeaderTagDirective)();
};
_NzPageHeaderTagDirective.ɵdir = ɵɵdefineDirective({
  type: _NzPageHeaderTagDirective,
  selectors: [["nz-page-header-tags"], ["", "nz-page-header-tags", ""]],
  hostAttrs: [1, "ant-page-header-heading-tags"],
  exportAs: ["nzPageHeaderTags"],
  standalone: true
});
var NzPageHeaderTagDirective = _NzPageHeaderTagDirective;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzPageHeaderTagDirective, [{
    type: Directive,
    args: [{
      selector: "nz-page-header-tags, [nz-page-header-tags]",
      exportAs: "nzPageHeaderTags",
      host: {
        class: "ant-page-header-heading-tags"
      },
      standalone: true
    }]
  }], null, null);
})();
var _NzPageHeaderExtraDirective = class _NzPageHeaderExtraDirective {
};
_NzPageHeaderExtraDirective.ɵfac = function NzPageHeaderExtraDirective_Factory(t) {
  return new (t || _NzPageHeaderExtraDirective)();
};
_NzPageHeaderExtraDirective.ɵdir = ɵɵdefineDirective({
  type: _NzPageHeaderExtraDirective,
  selectors: [["nz-page-header-extra"], ["", "nz-page-header-extra", ""]],
  hostAttrs: [1, "ant-page-header-heading-extra"],
  exportAs: ["nzPageHeaderExtra"],
  standalone: true
});
var NzPageHeaderExtraDirective = _NzPageHeaderExtraDirective;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzPageHeaderExtraDirective, [{
    type: Directive,
    args: [{
      selector: "nz-page-header-extra, [nz-page-header-extra]",
      exportAs: "nzPageHeaderExtra",
      host: {
        class: "ant-page-header-heading-extra"
      },
      standalone: true
    }]
  }], null, null);
})();
var _NzPageHeaderFooterDirective = class _NzPageHeaderFooterDirective {
};
_NzPageHeaderFooterDirective.ɵfac = function NzPageHeaderFooterDirective_Factory(t) {
  return new (t || _NzPageHeaderFooterDirective)();
};
_NzPageHeaderFooterDirective.ɵdir = ɵɵdefineDirective({
  type: _NzPageHeaderFooterDirective,
  selectors: [["nz-page-header-footer"], ["", "nz-page-header-footer", ""]],
  hostAttrs: [1, "ant-page-header-footer"],
  exportAs: ["nzPageHeaderFooter"],
  standalone: true
});
var NzPageHeaderFooterDirective = _NzPageHeaderFooterDirective;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzPageHeaderFooterDirective, [{
    type: Directive,
    args: [{
      selector: "nz-page-header-footer, [nz-page-header-footer]",
      exportAs: "nzPageHeaderFooter",
      host: {
        class: "ant-page-header-footer"
      },
      standalone: true
    }]
  }], null, null);
})();
var _NzPageHeaderBreadcrumbDirective = class _NzPageHeaderBreadcrumbDirective {
};
_NzPageHeaderBreadcrumbDirective.ɵfac = function NzPageHeaderBreadcrumbDirective_Factory(t) {
  return new (t || _NzPageHeaderBreadcrumbDirective)();
};
_NzPageHeaderBreadcrumbDirective.ɵdir = ɵɵdefineDirective({
  type: _NzPageHeaderBreadcrumbDirective,
  selectors: [["nz-breadcrumb", "nz-page-header-breadcrumb", ""]],
  exportAs: ["nzPageHeaderBreadcrumb"],
  standalone: true
});
var NzPageHeaderBreadcrumbDirective = _NzPageHeaderBreadcrumbDirective;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzPageHeaderBreadcrumbDirective, [{
    type: Directive,
    args: [{
      selector: "nz-breadcrumb[nz-page-header-breadcrumb]",
      exportAs: "nzPageHeaderBreadcrumb",
      standalone: true
    }]
  }], null, null);
})();
var _NzPageHeaderAvatarDirective = class _NzPageHeaderAvatarDirective {
};
_NzPageHeaderAvatarDirective.ɵfac = function NzPageHeaderAvatarDirective_Factory(t) {
  return new (t || _NzPageHeaderAvatarDirective)();
};
_NzPageHeaderAvatarDirective.ɵdir = ɵɵdefineDirective({
  type: _NzPageHeaderAvatarDirective,
  selectors: [["nz-avatar", "nz-page-header-avatar", ""]],
  exportAs: ["nzPageHeaderAvatar"],
  standalone: true
});
var NzPageHeaderAvatarDirective = _NzPageHeaderAvatarDirective;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzPageHeaderAvatarDirective, [{
    type: Directive,
    args: [{
      selector: "nz-avatar[nz-page-header-avatar]",
      exportAs: "nzPageHeaderAvatar",
      standalone: true
    }]
  }], null, null);
})();
var NZ_CONFIG_MODULE_NAME = "pageHeader";
var _NzPageHeaderComponent = class _NzPageHeaderComponent {
  constructor(location, nzConfigService, elementRef, nzResizeObserver, cdr, directionality) {
    this.location = location;
    this.nzConfigService = nzConfigService;
    this.elementRef = elementRef;
    this.nzResizeObserver = nzResizeObserver;
    this.cdr = cdr;
    this.directionality = directionality;
    this._nzModuleName = NZ_CONFIG_MODULE_NAME;
    this.nzBackIcon = null;
    this.nzGhost = true;
    this.nzBack = new EventEmitter();
    this.compact = false;
    this.destroy$ = new Subject();
    this.dir = "ltr";
  }
  ngOnInit() {
    this.directionality.change?.pipe(takeUntil(this.destroy$)).subscribe((direction) => {
      this.dir = direction;
      this.cdr.detectChanges();
    });
    this.dir = this.directionality.value;
  }
  ngAfterViewInit() {
    this.nzResizeObserver.observe(this.elementRef).pipe(map(([entry]) => entry.contentRect.width), takeUntil(this.destroy$)).subscribe((width) => {
      this.compact = width < 768;
      this.cdr.markForCheck();
    });
  }
  onBack() {
    if (this.nzBack.observers.length) {
      this.nzBack.emit();
    } else {
      if (!this.location) {
        throw new Error(`${PREFIX} you should import 'RouterModule' or register 'Location' if you want to use 'nzBack' default event!`);
      }
      this.location.back();
    }
  }
  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
  getBackIcon() {
    if (this.dir === "rtl") {
      return "arrow-right";
    }
    return "arrow-left";
  }
};
_NzPageHeaderComponent.ɵfac = function NzPageHeaderComponent_Factory(t) {
  return new (t || _NzPageHeaderComponent)(ɵɵdirectiveInject(Location, 8), ɵɵdirectiveInject(NzConfigService), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NzResizeObserver), ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(Directionality, 8));
};
_NzPageHeaderComponent.ɵcmp = ɵɵdefineComponent({
  type: _NzPageHeaderComponent,
  selectors: [["nz-page-header"]],
  contentQueries: function NzPageHeaderComponent_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      ɵɵcontentQuery(dirIndex, NzPageHeaderFooterDirective, 5);
      ɵɵcontentQuery(dirIndex, NzPageHeaderBreadcrumbDirective, 5);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.nzPageHeaderFooter = _t.first);
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.nzPageHeaderBreadcrumb = _t.first);
    }
  },
  hostAttrs: [1, "ant-page-header"],
  hostVars: 10,
  hostBindings: function NzPageHeaderComponent_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵclassProp("has-footer", ctx.nzPageHeaderFooter)("ant-page-header-ghost", ctx.nzGhost)("has-breadcrumb", ctx.nzPageHeaderBreadcrumb)("ant-page-header-compact", ctx.compact)("ant-page-header-rtl", ctx.dir === "rtl");
    }
  },
  inputs: {
    nzBackIcon: "nzBackIcon",
    nzTitle: "nzTitle",
    nzSubtitle: "nzSubtitle",
    nzGhost: "nzGhost"
  },
  outputs: {
    nzBack: "nzBack"
  },
  exportAs: ["nzPageHeader"],
  standalone: true,
  features: [ɵɵStandaloneFeature],
  ngContentSelectors: _c1,
  decls: 13,
  vars: 5,
  consts: [[1, "ant-page-header-heading"], [1, "ant-page-header-heading-left"], ["class", "ant-page-header-back", 3, "click", 4, "ngIf"], ["class", "ant-page-header-heading-title", 4, "ngIf"], [4, "ngIf"], ["class", "ant-page-header-heading-sub-title", 4, "ngIf"], [1, "ant-page-header-back", 3, "click"], ["role", "button", "tabindex", "0", 1, "ant-page-header-back-button"], [4, "nzStringTemplateOutlet"], ["nz-icon", "", "nzTheme", "outline", 3, "nzType"], [1, "ant-page-header-heading-title"], [1, "ant-page-header-heading-sub-title"]],
  template: function NzPageHeaderComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵprojectionDef(_c0);
      ɵɵprojection(0);
      ɵɵelementStart(1, "div", 0)(2, "div", 1);
      ɵɵtemplate(3, NzPageHeaderComponent_div_3_Template, 3, 1, "div", 2);
      ɵɵprojection(4, 1);
      ɵɵtemplate(5, NzPageHeaderComponent_span_5_Template, 2, 1, "span", 3)(6, NzPageHeaderComponent_ng_content_6_Template, 1, 0, "ng-content", 4)(7, NzPageHeaderComponent_span_7_Template, 2, 1, "span", 5)(8, NzPageHeaderComponent_ng_content_8_Template, 1, 0, "ng-content", 4);
      ɵɵprojection(9, 2);
      ɵɵelementEnd();
      ɵɵprojection(10, 3);
      ɵɵelementEnd();
      ɵɵprojection(11, 4);
      ɵɵprojection(12, 5);
    }
    if (rf & 2) {
      ɵɵadvance(3);
      ɵɵproperty("ngIf", ctx.nzBackIcon !== null);
      ɵɵadvance(2);
      ɵɵproperty("ngIf", ctx.nzTitle);
      ɵɵadvance();
      ɵɵproperty("ngIf", !ctx.nzTitle);
      ɵɵadvance();
      ɵɵproperty("ngIf", ctx.nzSubtitle);
      ɵɵadvance();
      ɵɵproperty("ngIf", !ctx.nzSubtitle);
    }
  },
  dependencies: [NgIf, NzOutletModule, NzStringTemplateOutletDirective, NzIconModule, NzIconDirective],
  encapsulation: 2,
  changeDetection: 0
});
var NzPageHeaderComponent = _NzPageHeaderComponent;
__decorate([WithConfig()], NzPageHeaderComponent.prototype, "nzGhost", void 0);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzPageHeaderComponent, [{
    type: Component,
    args: [{
      selector: "nz-page-header",
      exportAs: "nzPageHeader",
      template: `
    <ng-content select="nz-breadcrumb[nz-page-header-breadcrumb]"></ng-content>

    <div class="ant-page-header-heading">
      <div class="ant-page-header-heading-left">
        <!--back-->
        <div *ngIf="nzBackIcon !== null" (click)="onBack()" class="ant-page-header-back">
          <div role="button" tabindex="0" class="ant-page-header-back-button">
            <ng-container *nzStringTemplateOutlet="nzBackIcon; let backIcon">
              <span nz-icon [nzType]="backIcon || getBackIcon()" nzTheme="outline"></span>
            </ng-container>
          </div>
        </div>
        <!--avatar-->
        <ng-content select="nz-avatar[nz-page-header-avatar]"></ng-content>
        <!--title-->
        <span class="ant-page-header-heading-title" *ngIf="nzTitle">
          <ng-container *nzStringTemplateOutlet="nzTitle">{{ nzTitle }}</ng-container>
        </span>
        <ng-content *ngIf="!nzTitle" select="nz-page-header-title, [nz-page-header-title]"></ng-content>
        <!--subtitle-->
        <span class="ant-page-header-heading-sub-title" *ngIf="nzSubtitle">
          <ng-container *nzStringTemplateOutlet="nzSubtitle">{{ nzSubtitle }}</ng-container>
        </span>
        <ng-content *ngIf="!nzSubtitle" select="nz-page-header-subtitle, [nz-page-header-subtitle]"></ng-content>
        <ng-content select="nz-page-header-tags, [nz-page-header-tags]"></ng-content>
      </div>

      <ng-content select="nz-page-header-extra, [nz-page-header-extra]"></ng-content>
    </div>

    <ng-content select="nz-page-header-content, [nz-page-header-content]"></ng-content>
    <ng-content select="nz-page-header-footer, [nz-page-header-footer]"></ng-content>
  `,
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation$1.None,
      host: {
        class: "ant-page-header",
        "[class.has-footer]": "nzPageHeaderFooter",
        "[class.ant-page-header-ghost]": "nzGhost",
        "[class.has-breadcrumb]": "nzPageHeaderBreadcrumb",
        "[class.ant-page-header-compact]": "compact",
        "[class.ant-page-header-rtl]": `dir === 'rtl'`
      },
      imports: [NgIf, NzOutletModule, NzIconModule],
      standalone: true
    }]
  }], () => [{
    type: Location,
    decorators: [{
      type: Optional
    }]
  }, {
    type: NzConfigService
  }, {
    type: ElementRef
  }, {
    type: NzResizeObserver
  }, {
    type: ChangeDetectorRef
  }, {
    type: Directionality,
    decorators: [{
      type: Optional
    }]
  }], {
    nzBackIcon: [{
      type: Input
    }],
    nzTitle: [{
      type: Input
    }],
    nzSubtitle: [{
      type: Input
    }],
    nzGhost: [{
      type: Input
    }],
    nzBack: [{
      type: Output
    }],
    nzPageHeaderFooter: [{
      type: ContentChild,
      args: [NzPageHeaderFooterDirective, {
        static: false
      }]
    }],
    nzPageHeaderBreadcrumb: [{
      type: ContentChild,
      args: [NzPageHeaderBreadcrumbDirective, {
        static: false
      }]
    }]
  });
})();
var NzPageHeaderCells = [NzPageHeaderTitleDirective, NzPageHeaderSubtitleDirective, NzPageHeaderContentDirective, NzPageHeaderTagDirective, NzPageHeaderExtraDirective, NzPageHeaderFooterDirective, NzPageHeaderBreadcrumbDirective, NzPageHeaderAvatarDirective];
var _NzPageHeaderModule = class _NzPageHeaderModule {
};
_NzPageHeaderModule.ɵfac = function NzPageHeaderModule_Factory(t) {
  return new (t || _NzPageHeaderModule)();
};
_NzPageHeaderModule.ɵmod = ɵɵdefineNgModule({
  type: _NzPageHeaderModule,
  imports: [NzPageHeaderComponent, NzPageHeaderTitleDirective, NzPageHeaderSubtitleDirective, NzPageHeaderContentDirective, NzPageHeaderTagDirective, NzPageHeaderExtraDirective, NzPageHeaderFooterDirective, NzPageHeaderBreadcrumbDirective, NzPageHeaderAvatarDirective],
  exports: [NzPageHeaderComponent, NzPageHeaderTitleDirective, NzPageHeaderSubtitleDirective, NzPageHeaderContentDirective, NzPageHeaderTagDirective, NzPageHeaderExtraDirective, NzPageHeaderFooterDirective, NzPageHeaderBreadcrumbDirective, NzPageHeaderAvatarDirective]
});
_NzPageHeaderModule.ɵinj = ɵɵdefineInjector({
  imports: [NzPageHeaderComponent]
});
var NzPageHeaderModule = _NzPageHeaderModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzPageHeaderModule, [{
    type: NgModule,
    args: [{
      imports: [NzPageHeaderComponent, NzPageHeaderCells],
      exports: [NzPageHeaderComponent, NzPageHeaderCells]
    }]
  }], null, null);
})();
export {
  NzPageHeaderAvatarDirective,
  NzPageHeaderBreadcrumbDirective,
  NzPageHeaderComponent,
  NzPageHeaderContentDirective,
  NzPageHeaderExtraDirective,
  NzPageHeaderFooterDirective,
  NzPageHeaderModule,
  NzPageHeaderSubtitleDirective,
  NzPageHeaderTagDirective,
  NzPageHeaderTitleDirective
};
//# sourceMappingURL=ng-zorro-antd_page-header.js.map
