import {
  NzFormItemFeedbackIconComponent,
  NzFormNoStatusService,
  NzFormPatchModule,
  NzFormStatusService
} from "./chunk-IZK5ECB4.js";
import {
  NgControl
} from "./chunk-NB6ZWZTG.js";
import {
  NzResizeService
} from "./chunk-O4GYHXXL.js";
import {
  NzIconDirective,
  NzIconModule
} from "./chunk-WR36RT2W.js";
import {
  NzOutletModule,
  NzStringTemplateOutletDirective
} from "./chunk-UR6RIVS4.js";
import "./chunk-RTYVRV2Z.js";
import {
  InputBoolean,
  getStatusClassNames,
  isNotNil
} from "./chunk-WZWMWBUR.js";
import {
  FocusMonitor
} from "./chunk-5V3LOG5Z.js";
import "./chunk-27BDGVS6.js";
import "./chunk-ZB7MIWNW.js";
import {
  Platform
} from "./chunk-ARCS7CD3.js";
import {
  Directionality
} from "./chunk-OPAOCM2X.js";
import "./chunk-BW3U25EH.js";
import "./chunk-VLJRELEJ.js";
import "./chunk-KDJXA7WE.js";
import {
  NgClass,
  NgIf,
  NgTemplateOutlet
} from "./chunk-WMCAWSDL.js";
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ContentChild,
  ContentChildren,
  Directive,
  EMPTY,
  ElementRef,
  Input,
  NgModule,
  NgZone,
  Optional,
  Renderer2,
  Self,
  Subject,
  ViewContainerRef,
  ViewEncapsulation$1,
  __decorate,
  distinctUntilChanged,
  filter,
  isDevMode,
  map,
  merge,
  mergeMap,
  setClassMetadata,
  startWith,
  switchMap,
  takeUntil,
  ɵɵNgOnChangesFeature,
  ɵɵProvidersFeature,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassProp,
  ɵɵcontentQuery,
  ɵɵdefineComponent,
  ɵɵdefineDirective,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵqueryRefresh,
  ɵɵreference,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-TCQIETDU.js";
import {
  __spreadValues
} from "./chunk-HSNDBVJ3.js";

// node_modules/ng-zorro-antd/fesm2022/ng-zorro-antd-input.mjs
var _c0 = ["nz-input-group-slot", ""];
function NzInputGroupSlotComponent_span_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "span", 2);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵproperty("nzType", ctx_r0.icon);
  }
}
function NzInputGroupSlotComponent_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtext(1);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵtextInterpolate(ctx_r1.template);
  }
}
var _c1 = ["*"];
function NzInputGroupComponent_span_0_span_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "span", 7);
  }
  if (rf & 2) {
    const ctx_r7 = ɵɵnextContext(2);
    ɵɵproperty("icon", ctx_r7.nzAddOnBeforeIcon)("template", ctx_r7.nzAddOnBefore);
  }
}
function NzInputGroupComponent_span_0_span_2_ng_template_1_Template(rf, ctx) {
}
function NzInputGroupComponent_span_0_span_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span", 8);
    ɵɵtemplate(1, NzInputGroupComponent_span_0_span_2_ng_template_1_Template, 0, 0, "ng-template", 9);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r8 = ɵɵnextContext(2);
    const _r4 = ɵɵreference(4);
    ɵɵclassProp("ant-input-affix-wrapper-disabled", ctx_r8.disabled)("ant-input-affix-wrapper-sm", ctx_r8.isSmall)("ant-input-affix-wrapper-lg", ctx_r8.isLarge)("ant-input-affix-wrapper-focused", ctx_r8.focused);
    ɵɵproperty("ngClass", ctx_r8.affixInGroupStatusCls);
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", _r4);
  }
}
function NzInputGroupComponent_span_0_span_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "span", 7);
  }
  if (rf & 2) {
    const ctx_r9 = ɵɵnextContext(2);
    ɵɵproperty("icon", ctx_r9.nzAddOnAfterIcon)("template", ctx_r9.nzAddOnAfter);
  }
}
function NzInputGroupComponent_span_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span", 4);
    ɵɵtemplate(1, NzInputGroupComponent_span_0_span_1_Template, 1, 2, "span", 5)(2, NzInputGroupComponent_span_0_span_2_Template, 2, 10, "span", 6)(3, NzInputGroupComponent_span_0_span_3_Template, 1, 2, "span", 5);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    const _r6 = ɵɵreference(6);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r0.nzAddOnBefore || ctx_r0.nzAddOnBeforeIcon);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r0.isAffix || ctx_r0.hasFeedback)("ngIfElse", _r6);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r0.nzAddOnAfter || ctx_r0.nzAddOnAfterIcon);
  }
}
function NzInputGroupComponent_ng_template_1_ng_template_0_ng_template_0_Template(rf, ctx) {
}
function NzInputGroupComponent_ng_template_1_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, NzInputGroupComponent_ng_template_1_ng_template_0_ng_template_0_Template, 0, 0, "ng-template", 9);
  }
  if (rf & 2) {
    ɵɵnextContext(2);
    const _r4 = ɵɵreference(4);
    ɵɵproperty("ngTemplateOutlet", _r4);
  }
}
function NzInputGroupComponent_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, NzInputGroupComponent_ng_template_1_ng_template_0_Template, 1, 1, "ng-template", 10);
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    const _r6 = ɵɵreference(6);
    ɵɵproperty("ngIf", ctx_r1.isAffix)("ngIfElse", _r6);
  }
}
function NzInputGroupComponent_ng_template_3_span_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "span", 13);
  }
  if (rf & 2) {
    const ctx_r13 = ɵɵnextContext(2);
    ɵɵproperty("icon", ctx_r13.nzPrefixIcon)("template", ctx_r13.nzPrefix);
  }
}
function NzInputGroupComponent_ng_template_3_ng_template_1_Template(rf, ctx) {
}
function NzInputGroupComponent_ng_template_3_span_2_nz_form_item_feedback_icon_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "nz-form-item-feedback-icon", 16);
  }
  if (rf & 2) {
    const ctx_r16 = ɵɵnextContext(3);
    ɵɵproperty("status", ctx_r16.status);
  }
}
function NzInputGroupComponent_ng_template_3_span_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span", 14);
    ɵɵtemplate(1, NzInputGroupComponent_ng_template_3_span_2_nz_form_item_feedback_icon_1_Template, 1, 1, "nz-form-item-feedback-icon", 15);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r15 = ɵɵnextContext(2);
    ɵɵproperty("icon", ctx_r15.nzSuffixIcon)("template", ctx_r15.nzSuffix);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r15.isFeedback);
  }
}
function NzInputGroupComponent_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, NzInputGroupComponent_ng_template_3_span_0_Template, 1, 2, "span", 11)(1, NzInputGroupComponent_ng_template_3_ng_template_1_Template, 0, 0, "ng-template", 9)(2, NzInputGroupComponent_ng_template_3_span_2_Template, 2, 3, "span", 12);
  }
  if (rf & 2) {
    const ctx_r3 = ɵɵnextContext();
    const _r6 = ɵɵreference(6);
    ɵɵproperty("ngIf", ctx_r3.nzPrefix || ctx_r3.nzPrefixIcon);
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", _r6);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r3.nzSuffix || ctx_r3.nzSuffixIcon || ctx_r3.isFeedback);
  }
}
function NzInputGroupComponent_ng_template_5_span_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span", 18);
    ɵɵelement(1, "nz-form-item-feedback-icon", 16);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r17 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵproperty("status", ctx_r17.status);
  }
}
function NzInputGroupComponent_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵprojection(0);
    ɵɵtemplate(1, NzInputGroupComponent_ng_template_5_span_1_Template, 2, 1, "span", 17);
  }
  if (rf & 2) {
    const ctx_r5 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("ngIf", !ctx_r5.isAddOn && !ctx_r5.isAffix && ctx_r5.isFeedback);
  }
}
var _c2 = [[["textarea", "nz-input", ""]]];
var _c3 = ["textarea[nz-input]"];
var _NzInputGroupSlotComponent = class _NzInputGroupSlotComponent {
  constructor() {
    this.icon = null;
    this.type = null;
    this.template = null;
  }
};
_NzInputGroupSlotComponent.ɵfac = function NzInputGroupSlotComponent_Factory(t) {
  return new (t || _NzInputGroupSlotComponent)();
};
_NzInputGroupSlotComponent.ɵcmp = ɵɵdefineComponent({
  type: _NzInputGroupSlotComponent,
  selectors: [["", "nz-input-group-slot", ""]],
  hostVars: 6,
  hostBindings: function NzInputGroupSlotComponent_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵclassProp("ant-input-group-addon", ctx.type === "addon")("ant-input-prefix", ctx.type === "prefix")("ant-input-suffix", ctx.type === "suffix");
    }
  },
  inputs: {
    icon: "icon",
    type: "type",
    template: "template"
  },
  standalone: true,
  features: [ɵɵStandaloneFeature],
  attrs: _c0,
  ngContentSelectors: _c1,
  decls: 3,
  vars: 2,
  consts: [["nz-icon", "", 3, "nzType", 4, "ngIf"], [4, "nzStringTemplateOutlet"], ["nz-icon", "", 3, "nzType"]],
  template: function NzInputGroupSlotComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵprojectionDef();
      ɵɵtemplate(0, NzInputGroupSlotComponent_span_0_Template, 1, 1, "span", 0)(1, NzInputGroupSlotComponent_ng_container_1_Template, 2, 1, "ng-container", 1);
      ɵɵprojection(2);
    }
    if (rf & 2) {
      ɵɵproperty("ngIf", ctx.icon);
      ɵɵadvance();
      ɵɵproperty("nzStringTemplateOutlet", ctx.template);
    }
  },
  dependencies: [NzIconModule, NzIconDirective, NgIf, NzOutletModule, NzStringTemplateOutletDirective],
  encapsulation: 2,
  changeDetection: 0
});
var NzInputGroupSlotComponent = _NzInputGroupSlotComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzInputGroupSlotComponent, [{
    type: Component,
    args: [{
      selector: "[nz-input-group-slot]",
      preserveWhitespaces: false,
      encapsulation: ViewEncapsulation$1.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: `
    <span nz-icon [nzType]="icon" *ngIf="icon"></span>
    <ng-container *nzStringTemplateOutlet="template">{{ template }}</ng-container>
    <ng-content></ng-content>
  `,
      host: {
        "[class.ant-input-group-addon]": `type === 'addon'`,
        "[class.ant-input-prefix]": `type === 'prefix'`,
        "[class.ant-input-suffix]": `type === 'suffix'`
      },
      imports: [NzIconModule, NgIf, NzOutletModule],
      standalone: true
    }]
  }], null, {
    icon: [{
      type: Input
    }],
    type: [{
      type: Input
    }],
    template: [{
      type: Input
    }]
  });
})();
var _NzInputDirective = class _NzInputDirective {
  get disabled() {
    if (this.ngControl && this.ngControl.disabled !== null) {
      return this.ngControl.disabled;
    }
    return this._disabled;
  }
  set disabled(value) {
    this._disabled = value != null && `${value}` !== "false";
  }
  constructor(ngControl, renderer, elementRef, hostView, directionality, nzFormStatusService, nzFormNoStatusService) {
    this.ngControl = ngControl;
    this.renderer = renderer;
    this.elementRef = elementRef;
    this.hostView = hostView;
    this.directionality = directionality;
    this.nzFormStatusService = nzFormStatusService;
    this.nzFormNoStatusService = nzFormNoStatusService;
    this.nzBorderless = false;
    this.nzSize = "default";
    this.nzStepperless = true;
    this.nzStatus = "";
    this._disabled = false;
    this.disabled$ = new Subject();
    this.dir = "ltr";
    this.prefixCls = "ant-input";
    this.status = "";
    this.statusCls = {};
    this.hasFeedback = false;
    this.feedbackRef = null;
    this.components = [];
    this.destroy$ = new Subject();
  }
  ngOnInit() {
    this.nzFormStatusService?.formStatusChanges.pipe(distinctUntilChanged((pre, cur) => {
      return pre.status === cur.status && pre.hasFeedback === cur.hasFeedback;
    }), takeUntil(this.destroy$)).subscribe(({
      status,
      hasFeedback
    }) => {
      this.setStatusStyles(status, hasFeedback);
    });
    if (this.ngControl) {
      this.ngControl.statusChanges?.pipe(filter(() => this.ngControl.disabled !== null), takeUntil(this.destroy$)).subscribe(() => {
        this.disabled$.next(this.ngControl.disabled);
      });
    }
    this.dir = this.directionality.value;
    this.directionality.change?.pipe(takeUntil(this.destroy$)).subscribe((direction) => {
      this.dir = direction;
    });
  }
  ngOnChanges(changes) {
    const {
      disabled,
      nzStatus
    } = changes;
    if (disabled) {
      this.disabled$.next(this.disabled);
    }
    if (nzStatus) {
      this.setStatusStyles(this.nzStatus, this.hasFeedback);
    }
  }
  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
  setStatusStyles(status, hasFeedback) {
    this.status = status;
    this.hasFeedback = hasFeedback;
    this.renderFeedbackIcon();
    this.statusCls = getStatusClassNames(this.prefixCls, status, hasFeedback);
    Object.keys(this.statusCls).forEach((status2) => {
      if (this.statusCls[status2]) {
        this.renderer.addClass(this.elementRef.nativeElement, status2);
      } else {
        this.renderer.removeClass(this.elementRef.nativeElement, status2);
      }
    });
  }
  renderFeedbackIcon() {
    if (!this.status || !this.hasFeedback || !!this.nzFormNoStatusService) {
      this.hostView.clear();
      this.feedbackRef = null;
      return;
    }
    this.feedbackRef = this.feedbackRef || this.hostView.createComponent(NzFormItemFeedbackIconComponent);
    this.feedbackRef.location.nativeElement.classList.add("ant-input-suffix");
    this.feedbackRef.instance.status = this.status;
    this.feedbackRef.instance.updateIcon();
  }
};
_NzInputDirective.ɵfac = function NzInputDirective_Factory(t) {
  return new (t || _NzInputDirective)(ɵɵdirectiveInject(NgControl, 10), ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(ViewContainerRef), ɵɵdirectiveInject(Directionality, 8), ɵɵdirectiveInject(NzFormStatusService, 8), ɵɵdirectiveInject(NzFormNoStatusService, 8));
};
_NzInputDirective.ɵdir = ɵɵdefineDirective({
  type: _NzInputDirective,
  selectors: [["input", "nz-input", ""], ["textarea", "nz-input", ""]],
  hostAttrs: [1, "ant-input"],
  hostVars: 13,
  hostBindings: function NzInputDirective_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵattribute("disabled", ctx.disabled || null);
      ɵɵclassProp("ant-input-disabled", ctx.disabled)("ant-input-borderless", ctx.nzBorderless)("ant-input-lg", ctx.nzSize === "large")("ant-input-sm", ctx.nzSize === "small")("ant-input-rtl", ctx.dir === "rtl")("ant-input-stepperless", ctx.nzStepperless);
    }
  },
  inputs: {
    nzBorderless: "nzBorderless",
    nzSize: "nzSize",
    nzStepperless: "nzStepperless",
    nzStatus: "nzStatus",
    disabled: "disabled"
  },
  exportAs: ["nzInput"],
  standalone: true,
  features: [ɵɵNgOnChangesFeature]
});
var NzInputDirective = _NzInputDirective;
__decorate([InputBoolean()], NzInputDirective.prototype, "nzBorderless", void 0);
__decorate([InputBoolean()], NzInputDirective.prototype, "nzStepperless", void 0);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzInputDirective, [{
    type: Directive,
    args: [{
      selector: "input[nz-input],textarea[nz-input]",
      exportAs: "nzInput",
      host: {
        class: "ant-input",
        "[class.ant-input-disabled]": "disabled",
        "[class.ant-input-borderless]": "nzBorderless",
        "[class.ant-input-lg]": `nzSize === 'large'`,
        "[class.ant-input-sm]": `nzSize === 'small'`,
        "[attr.disabled]": "disabled || null",
        "[class.ant-input-rtl]": `dir=== 'rtl'`,
        "[class.ant-input-stepperless]": `nzStepperless`
      },
      standalone: true
    }]
  }], () => [{
    type: NgControl,
    decorators: [{
      type: Optional
    }, {
      type: Self
    }]
  }, {
    type: Renderer2
  }, {
    type: ElementRef
  }, {
    type: ViewContainerRef
  }, {
    type: Directionality,
    decorators: [{
      type: Optional
    }]
  }, {
    type: NzFormStatusService,
    decorators: [{
      type: Optional
    }]
  }, {
    type: NzFormNoStatusService,
    decorators: [{
      type: Optional
    }]
  }], {
    nzBorderless: [{
      type: Input
    }],
    nzSize: [{
      type: Input
    }],
    nzStepperless: [{
      type: Input
    }],
    nzStatus: [{
      type: Input
    }],
    disabled: [{
      type: Input
    }]
  });
})();
var _NzInputGroupWhitSuffixOrPrefixDirective = class _NzInputGroupWhitSuffixOrPrefixDirective {
  constructor(elementRef) {
    this.elementRef = elementRef;
  }
};
_NzInputGroupWhitSuffixOrPrefixDirective.ɵfac = function NzInputGroupWhitSuffixOrPrefixDirective_Factory(t) {
  return new (t || _NzInputGroupWhitSuffixOrPrefixDirective)(ɵɵdirectiveInject(ElementRef));
};
_NzInputGroupWhitSuffixOrPrefixDirective.ɵdir = ɵɵdefineDirective({
  type: _NzInputGroupWhitSuffixOrPrefixDirective,
  selectors: [["nz-input-group", "nzSuffix", ""], ["nz-input-group", "nzPrefix", ""]],
  standalone: true
});
var NzInputGroupWhitSuffixOrPrefixDirective = _NzInputGroupWhitSuffixOrPrefixDirective;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzInputGroupWhitSuffixOrPrefixDirective, [{
    type: Directive,
    args: [{
      selector: `nz-input-group[nzSuffix], nz-input-group[nzPrefix]`,
      standalone: true
    }]
  }], () => [{
    type: ElementRef
  }], null);
})();
var _NzInputGroupComponent = class _NzInputGroupComponent {
  constructor(focusMonitor, elementRef, renderer, cdr, directionality, nzFormStatusService, nzFormNoStatusService) {
    this.focusMonitor = focusMonitor;
    this.elementRef = elementRef;
    this.renderer = renderer;
    this.cdr = cdr;
    this.directionality = directionality;
    this.nzFormStatusService = nzFormStatusService;
    this.nzFormNoStatusService = nzFormNoStatusService;
    this.nzAddOnBeforeIcon = null;
    this.nzAddOnAfterIcon = null;
    this.nzPrefixIcon = null;
    this.nzSuffixIcon = null;
    this.nzStatus = "";
    this.nzSize = "default";
    this.nzSearch = false;
    this.nzCompact = false;
    this.isLarge = false;
    this.isSmall = false;
    this.isAffix = false;
    this.isAddOn = false;
    this.isFeedback = false;
    this.focused = false;
    this.disabled = false;
    this.dir = "ltr";
    this.prefixCls = "ant-input";
    this.affixStatusCls = {};
    this.groupStatusCls = {};
    this.affixInGroupStatusCls = {};
    this.status = "";
    this.hasFeedback = false;
    this.destroy$ = new Subject();
  }
  updateChildrenInputSize() {
    if (this.listOfNzInputDirective) {
      this.listOfNzInputDirective.forEach((item) => item.nzSize = this.nzSize);
    }
  }
  ngOnInit() {
    this.nzFormStatusService?.formStatusChanges.pipe(distinctUntilChanged((pre, cur) => {
      return pre.status === cur.status && pre.hasFeedback === cur.hasFeedback;
    }), takeUntil(this.destroy$)).subscribe(({
      status,
      hasFeedback
    }) => {
      this.setStatusStyles(status, hasFeedback);
    });
    this.focusMonitor.monitor(this.elementRef, true).pipe(takeUntil(this.destroy$)).subscribe((focusOrigin) => {
      this.focused = !!focusOrigin;
      this.cdr.markForCheck();
    });
    this.dir = this.directionality.value;
    this.directionality.change?.pipe(takeUntil(this.destroy$)).subscribe((direction) => {
      this.dir = direction;
    });
  }
  ngAfterContentInit() {
    this.updateChildrenInputSize();
    const listOfInputChange$ = this.listOfNzInputDirective.changes.pipe(startWith(this.listOfNzInputDirective));
    listOfInputChange$.pipe(switchMap((list) => merge(...[listOfInputChange$, ...list.map((input) => input.disabled$)])), mergeMap(() => listOfInputChange$), map((list) => list.some((input) => input.disabled)), takeUntil(this.destroy$)).subscribe((disabled) => {
      this.disabled = disabled;
      this.cdr.markForCheck();
    });
  }
  ngOnChanges(changes) {
    const {
      nzSize,
      nzSuffix,
      nzPrefix,
      nzPrefixIcon,
      nzSuffixIcon,
      nzAddOnAfter,
      nzAddOnBefore,
      nzAddOnAfterIcon,
      nzAddOnBeforeIcon,
      nzStatus
    } = changes;
    if (nzSize) {
      this.updateChildrenInputSize();
      this.isLarge = this.nzSize === "large";
      this.isSmall = this.nzSize === "small";
    }
    if (nzSuffix || nzPrefix || nzPrefixIcon || nzSuffixIcon) {
      this.isAffix = !!(this.nzSuffix || this.nzPrefix || this.nzPrefixIcon || this.nzSuffixIcon);
    }
    if (nzAddOnAfter || nzAddOnBefore || nzAddOnAfterIcon || nzAddOnBeforeIcon) {
      this.isAddOn = !!(this.nzAddOnAfter || this.nzAddOnBefore || this.nzAddOnAfterIcon || this.nzAddOnBeforeIcon);
      this.nzFormNoStatusService?.noFormStatus?.next(this.isAddOn);
    }
    if (nzStatus) {
      this.setStatusStyles(this.nzStatus, this.hasFeedback);
    }
  }
  ngOnDestroy() {
    this.focusMonitor.stopMonitoring(this.elementRef);
    this.destroy$.next();
    this.destroy$.complete();
  }
  setStatusStyles(status, hasFeedback) {
    this.status = status;
    this.hasFeedback = hasFeedback;
    this.isFeedback = !!status && hasFeedback;
    const baseAffix = !!(this.nzSuffix || this.nzPrefix || this.nzPrefixIcon || this.nzSuffixIcon);
    this.isAffix = baseAffix || !this.isAddOn && hasFeedback;
    this.affixInGroupStatusCls = this.isAffix || this.isFeedback ? this.affixStatusCls = getStatusClassNames(`${this.prefixCls}-affix-wrapper`, status, hasFeedback) : {};
    this.cdr.markForCheck();
    this.affixStatusCls = getStatusClassNames(`${this.prefixCls}-affix-wrapper`, this.isAddOn ? "" : status, this.isAddOn ? false : hasFeedback);
    this.groupStatusCls = getStatusClassNames(`${this.prefixCls}-group-wrapper`, this.isAddOn ? status : "", this.isAddOn ? hasFeedback : false);
    const statusCls = __spreadValues(__spreadValues({}, this.affixStatusCls), this.groupStatusCls);
    Object.keys(statusCls).forEach((status2) => {
      if (statusCls[status2]) {
        this.renderer.addClass(this.elementRef.nativeElement, status2);
      } else {
        this.renderer.removeClass(this.elementRef.nativeElement, status2);
      }
    });
  }
};
_NzInputGroupComponent.ɵfac = function NzInputGroupComponent_Factory(t) {
  return new (t || _NzInputGroupComponent)(ɵɵdirectiveInject(FocusMonitor), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(Directionality, 8), ɵɵdirectiveInject(NzFormStatusService, 8), ɵɵdirectiveInject(NzFormNoStatusService, 8));
};
_NzInputGroupComponent.ɵcmp = ɵɵdefineComponent({
  type: _NzInputGroupComponent,
  selectors: [["nz-input-group"]],
  contentQueries: function NzInputGroupComponent_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      ɵɵcontentQuery(dirIndex, NzInputDirective, 4);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.listOfNzInputDirective = _t);
    }
  },
  hostVars: 40,
  hostBindings: function NzInputGroupComponent_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵclassProp("ant-input-group-compact", ctx.nzCompact)("ant-input-search-enter-button", ctx.nzSearch)("ant-input-search", ctx.nzSearch)("ant-input-search-rtl", ctx.dir === "rtl")("ant-input-search-sm", ctx.nzSearch && ctx.isSmall)("ant-input-search-large", ctx.nzSearch && ctx.isLarge)("ant-input-group-wrapper", ctx.isAddOn)("ant-input-group-wrapper-rtl", ctx.dir === "rtl")("ant-input-group-wrapper-lg", ctx.isAddOn && ctx.isLarge)("ant-input-group-wrapper-sm", ctx.isAddOn && ctx.isSmall)("ant-input-affix-wrapper", ctx.isAffix && !ctx.isAddOn)("ant-input-affix-wrapper-rtl", ctx.dir === "rtl")("ant-input-affix-wrapper-focused", ctx.isAffix && ctx.focused)("ant-input-affix-wrapper-disabled", ctx.isAffix && ctx.disabled)("ant-input-affix-wrapper-lg", ctx.isAffix && !ctx.isAddOn && ctx.isLarge)("ant-input-affix-wrapper-sm", ctx.isAffix && !ctx.isAddOn && ctx.isSmall)("ant-input-group", !ctx.isAffix && !ctx.isAddOn)("ant-input-group-rtl", ctx.dir === "rtl")("ant-input-group-lg", !ctx.isAffix && !ctx.isAddOn && ctx.isLarge)("ant-input-group-sm", !ctx.isAffix && !ctx.isAddOn && ctx.isSmall);
    }
  },
  inputs: {
    nzAddOnBeforeIcon: "nzAddOnBeforeIcon",
    nzAddOnAfterIcon: "nzAddOnAfterIcon",
    nzPrefixIcon: "nzPrefixIcon",
    nzSuffixIcon: "nzSuffixIcon",
    nzAddOnBefore: "nzAddOnBefore",
    nzAddOnAfter: "nzAddOnAfter",
    nzPrefix: "nzPrefix",
    nzStatus: "nzStatus",
    nzSuffix: "nzSuffix",
    nzSize: "nzSize",
    nzSearch: "nzSearch",
    nzCompact: "nzCompact"
  },
  exportAs: ["nzInputGroup"],
  standalone: true,
  features: [ɵɵProvidersFeature([NzFormNoStatusService]), ɵɵNgOnChangesFeature, ɵɵStandaloneFeature],
  ngContentSelectors: _c1,
  decls: 7,
  vars: 2,
  consts: [["class", "ant-input-wrapper ant-input-group", 4, "ngIf", "ngIfElse"], ["noAddOnTemplate", ""], ["affixTemplate", ""], ["contentTemplate", ""], [1, "ant-input-wrapper", "ant-input-group"], ["nz-input-group-slot", "", "type", "addon", 3, "icon", "template", 4, "ngIf"], ["class", "ant-input-affix-wrapper", 3, "ant-input-affix-wrapper-disabled", "ant-input-affix-wrapper-sm", "ant-input-affix-wrapper-lg", "ant-input-affix-wrapper-focused", "ngClass", 4, "ngIf", "ngIfElse"], ["nz-input-group-slot", "", "type", "addon", 3, "icon", "template"], [1, "ant-input-affix-wrapper", 3, "ngClass"], [3, "ngTemplateOutlet"], [3, "ngIf", "ngIfElse"], ["nz-input-group-slot", "", "type", "prefix", 3, "icon", "template", 4, "ngIf"], ["nz-input-group-slot", "", "type", "suffix", 3, "icon", "template", 4, "ngIf"], ["nz-input-group-slot", "", "type", "prefix", 3, "icon", "template"], ["nz-input-group-slot", "", "type", "suffix", 3, "icon", "template"], [3, "status", 4, "ngIf"], [3, "status"], ["nz-input-group-slot", "", "type", "suffix", 4, "ngIf"], ["nz-input-group-slot", "", "type", "suffix"]],
  template: function NzInputGroupComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵprojectionDef();
      ɵɵtemplate(0, NzInputGroupComponent_span_0_Template, 4, 4, "span", 0)(1, NzInputGroupComponent_ng_template_1_Template, 1, 2, "ng-template", null, 1, ɵɵtemplateRefExtractor)(3, NzInputGroupComponent_ng_template_3_Template, 3, 3, "ng-template", null, 2, ɵɵtemplateRefExtractor)(5, NzInputGroupComponent_ng_template_5_Template, 2, 1, "ng-template", null, 3, ɵɵtemplateRefExtractor);
    }
    if (rf & 2) {
      const _r2 = ɵɵreference(2);
      ɵɵproperty("ngIf", ctx.isAddOn)("ngIfElse", _r2);
    }
  },
  dependencies: [NgIf, NzInputGroupSlotComponent, NgClass, NgTemplateOutlet, NzFormPatchModule, NzFormItemFeedbackIconComponent],
  encapsulation: 2,
  changeDetection: 0
});
var NzInputGroupComponent = _NzInputGroupComponent;
__decorate([InputBoolean()], NzInputGroupComponent.prototype, "nzSearch", void 0);
__decorate([InputBoolean()], NzInputGroupComponent.prototype, "nzCompact", void 0);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzInputGroupComponent, [{
    type: Component,
    args: [{
      selector: "nz-input-group",
      exportAs: "nzInputGroup",
      preserveWhitespaces: false,
      encapsulation: ViewEncapsulation$1.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      providers: [NzFormNoStatusService],
      template: `
    <span class="ant-input-wrapper ant-input-group" *ngIf="isAddOn; else noAddOnTemplate">
      <span
        *ngIf="nzAddOnBefore || nzAddOnBeforeIcon"
        nz-input-group-slot
        type="addon"
        [icon]="nzAddOnBeforeIcon"
        [template]="nzAddOnBefore"
      ></span>
      <span
        *ngIf="isAffix || hasFeedback; else contentTemplate"
        class="ant-input-affix-wrapper"
        [class.ant-input-affix-wrapper-disabled]="disabled"
        [class.ant-input-affix-wrapper-sm]="isSmall"
        [class.ant-input-affix-wrapper-lg]="isLarge"
        [class.ant-input-affix-wrapper-focused]="focused"
        [ngClass]="affixInGroupStatusCls"
      >
        <ng-template [ngTemplateOutlet]="affixTemplate"></ng-template>
      </span>
      <span
        *ngIf="nzAddOnAfter || nzAddOnAfterIcon"
        nz-input-group-slot
        type="addon"
        [icon]="nzAddOnAfterIcon"
        [template]="nzAddOnAfter"
      ></span>
    </span>
    <ng-template #noAddOnTemplate>
      <ng-template [ngIf]="isAffix" [ngIfElse]="contentTemplate">
        <ng-template [ngTemplateOutlet]="affixTemplate"></ng-template>
      </ng-template>
    </ng-template>
    <ng-template #affixTemplate>
      <span
        *ngIf="nzPrefix || nzPrefixIcon"
        nz-input-group-slot
        type="prefix"
        [icon]="nzPrefixIcon"
        [template]="nzPrefix"
      ></span>
      <ng-template [ngTemplateOutlet]="contentTemplate"></ng-template>
      <span
        *ngIf="nzSuffix || nzSuffixIcon || isFeedback"
        nz-input-group-slot
        type="suffix"
        [icon]="nzSuffixIcon"
        [template]="nzSuffix"
      >
        <nz-form-item-feedback-icon *ngIf="isFeedback" [status]="status"></nz-form-item-feedback-icon>
      </span>
    </ng-template>
    <ng-template #contentTemplate>
      <ng-content></ng-content>
      <span *ngIf="!isAddOn && !isAffix && isFeedback" nz-input-group-slot type="suffix">
        <nz-form-item-feedback-icon [status]="status"></nz-form-item-feedback-icon>
      </span>
    </ng-template>
  `,
      host: {
        "[class.ant-input-group-compact]": `nzCompact`,
        "[class.ant-input-search-enter-button]": `nzSearch`,
        "[class.ant-input-search]": `nzSearch`,
        "[class.ant-input-search-rtl]": `dir === 'rtl'`,
        "[class.ant-input-search-sm]": `nzSearch && isSmall`,
        "[class.ant-input-search-large]": `nzSearch && isLarge`,
        "[class.ant-input-group-wrapper]": `isAddOn`,
        "[class.ant-input-group-wrapper-rtl]": `dir === 'rtl'`,
        "[class.ant-input-group-wrapper-lg]": `isAddOn && isLarge`,
        "[class.ant-input-group-wrapper-sm]": `isAddOn && isSmall`,
        "[class.ant-input-affix-wrapper]": `isAffix && !isAddOn`,
        "[class.ant-input-affix-wrapper-rtl]": `dir === 'rtl'`,
        "[class.ant-input-affix-wrapper-focused]": `isAffix && focused`,
        "[class.ant-input-affix-wrapper-disabled]": `isAffix && disabled`,
        "[class.ant-input-affix-wrapper-lg]": `isAffix && !isAddOn && isLarge`,
        "[class.ant-input-affix-wrapper-sm]": `isAffix && !isAddOn && isSmall`,
        "[class.ant-input-group]": `!isAffix && !isAddOn`,
        "[class.ant-input-group-rtl]": `dir === 'rtl'`,
        "[class.ant-input-group-lg]": `!isAffix && !isAddOn && isLarge`,
        "[class.ant-input-group-sm]": `!isAffix && !isAddOn && isSmall`
      },
      imports: [NgIf, NzInputGroupSlotComponent, NgClass, NgTemplateOutlet, NzFormPatchModule],
      standalone: true
    }]
  }], () => [{
    type: FocusMonitor
  }, {
    type: ElementRef
  }, {
    type: Renderer2
  }, {
    type: ChangeDetectorRef
  }, {
    type: Directionality,
    decorators: [{
      type: Optional
    }]
  }, {
    type: NzFormStatusService,
    decorators: [{
      type: Optional
    }]
  }, {
    type: NzFormNoStatusService,
    decorators: [{
      type: Optional
    }]
  }], {
    listOfNzInputDirective: [{
      type: ContentChildren,
      args: [NzInputDirective]
    }],
    nzAddOnBeforeIcon: [{
      type: Input
    }],
    nzAddOnAfterIcon: [{
      type: Input
    }],
    nzPrefixIcon: [{
      type: Input
    }],
    nzSuffixIcon: [{
      type: Input
    }],
    nzAddOnBefore: [{
      type: Input
    }],
    nzAddOnAfter: [{
      type: Input
    }],
    nzPrefix: [{
      type: Input
    }],
    nzStatus: [{
      type: Input
    }],
    nzSuffix: [{
      type: Input
    }],
    nzSize: [{
      type: Input
    }],
    nzSearch: [{
      type: Input
    }],
    nzCompact: [{
      type: Input
    }]
  });
})();
var _NzAutosizeDirective = class _NzAutosizeDirective {
  set nzAutosize(value) {
    const isAutoSizeType = (data) => typeof data !== "string" && typeof data !== "boolean" && (!!data.maxRows || !!data.minRows);
    if (typeof value === "string" || value === true) {
      this.autosize = true;
    } else if (isAutoSizeType(value)) {
      this.autosize = true;
      this.minRows = value.minRows;
      this.maxRows = value.maxRows;
      this.maxHeight = this.setMaxHeight();
      this.minHeight = this.setMinHeight();
    }
  }
  resizeToFitContent(force = false) {
    this.cacheTextareaLineHeight();
    if (!this.cachedLineHeight) {
      return;
    }
    const textarea = this.el;
    const value = textarea.value;
    if (!force && this.minRows === this.previousMinRows && value === this.previousValue) {
      return;
    }
    const placeholderText = textarea.placeholder;
    textarea.classList.add("nz-textarea-autosize-measuring");
    textarea.placeholder = "";
    let height = Math.round((textarea.scrollHeight - this.inputGap) / this.cachedLineHeight) * this.cachedLineHeight + this.inputGap;
    if (this.maxHeight !== null && height > this.maxHeight) {
      height = this.maxHeight;
    }
    if (this.minHeight !== null && height < this.minHeight) {
      height = this.minHeight;
    }
    textarea.style.height = `${height}px`;
    textarea.classList.remove("nz-textarea-autosize-measuring");
    textarea.placeholder = placeholderText;
    if (typeof requestAnimationFrame !== "undefined") {
      this.ngZone.runOutsideAngular(() => requestAnimationFrame(() => {
        const {
          selectionStart,
          selectionEnd
        } = textarea;
        if (!this.destroy$.isStopped && document.activeElement === textarea) {
          textarea.setSelectionRange(selectionStart, selectionEnd);
        }
      }));
    }
    this.previousValue = value;
    this.previousMinRows = this.minRows;
  }
  cacheTextareaLineHeight() {
    if (this.cachedLineHeight >= 0 || !this.el.parentNode) {
      return;
    }
    const textareaClone = this.el.cloneNode(false);
    textareaClone.rows = 1;
    textareaClone.style.position = "absolute";
    textareaClone.style.visibility = "hidden";
    textareaClone.style.border = "none";
    textareaClone.style.padding = "0";
    textareaClone.style.height = "";
    textareaClone.style.minHeight = "";
    textareaClone.style.maxHeight = "";
    textareaClone.style.overflow = "hidden";
    this.el.parentNode.appendChild(textareaClone);
    this.cachedLineHeight = textareaClone.clientHeight - this.inputGap;
    this.el.parentNode.removeChild(textareaClone);
    this.maxHeight = this.setMaxHeight();
    this.minHeight = this.setMinHeight();
  }
  setMinHeight() {
    const minHeight = this.minRows && this.cachedLineHeight ? this.minRows * this.cachedLineHeight + this.inputGap : null;
    if (minHeight !== null) {
      this.el.style.minHeight = `${minHeight}px`;
    }
    return minHeight;
  }
  setMaxHeight() {
    const maxHeight = this.maxRows && this.cachedLineHeight ? this.maxRows * this.cachedLineHeight + this.inputGap : null;
    if (maxHeight !== null) {
      this.el.style.maxHeight = `${maxHeight}px`;
    }
    return maxHeight;
  }
  noopInputHandler() {
  }
  constructor(elementRef, ngZone, platform, resizeService) {
    this.elementRef = elementRef;
    this.ngZone = ngZone;
    this.platform = platform;
    this.resizeService = resizeService;
    this.autosize = false;
    this.el = this.elementRef.nativeElement;
    this.maxHeight = null;
    this.minHeight = null;
    this.destroy$ = new Subject();
    this.inputGap = 10;
  }
  ngAfterViewInit() {
    if (this.autosize && this.platform.isBrowser) {
      this.resizeToFitContent();
      this.resizeService.subscribe().pipe(takeUntil(this.destroy$)).subscribe(() => this.resizeToFitContent(true));
    }
  }
  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.complete();
  }
  ngDoCheck() {
    if (this.autosize && this.platform.isBrowser) {
      this.resizeToFitContent();
    }
  }
};
_NzAutosizeDirective.ɵfac = function NzAutosizeDirective_Factory(t) {
  return new (t || _NzAutosizeDirective)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone), ɵɵdirectiveInject(Platform), ɵɵdirectiveInject(NzResizeService));
};
_NzAutosizeDirective.ɵdir = ɵɵdefineDirective({
  type: _NzAutosizeDirective,
  selectors: [["textarea", "nzAutosize", ""]],
  hostAttrs: ["rows", "1"],
  hostBindings: function NzAutosizeDirective_HostBindings(rf, ctx) {
    if (rf & 1) {
      ɵɵlistener("input", function NzAutosizeDirective_input_HostBindingHandler() {
        return ctx.noopInputHandler();
      });
    }
  },
  inputs: {
    nzAutosize: "nzAutosize"
  },
  exportAs: ["nzAutosize"],
  standalone: true
});
var NzAutosizeDirective = _NzAutosizeDirective;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzAutosizeDirective, [{
    type: Directive,
    args: [{
      selector: "textarea[nzAutosize]",
      exportAs: "nzAutosize",
      host: {
        // Textarea elements that have the directive applied should have a single row by default.
        // Browsers normally show two rows by default and therefore this limits the minRows binding.
        rows: "1",
        "(input)": "noopInputHandler()"
      },
      standalone: true
    }]
  }], () => [{
    type: ElementRef
  }, {
    type: NgZone
  }, {
    type: Platform
  }, {
    type: NzResizeService
  }], {
    nzAutosize: [{
      type: Input
    }]
  });
})();
var _NzTextareaCountComponent = class _NzTextareaCountComponent {
  constructor(renderer, elementRef) {
    this.renderer = renderer;
    this.elementRef = elementRef;
    this.nzMaxCharacterCount = 0;
    this.nzComputeCharacterCount = (v) => v.length;
    this.nzFormatter = (c, m) => `${c}${m > 0 ? `/${m}` : ``}`;
    this.configChange$ = new Subject();
    this.destroy$ = new Subject();
  }
  ngAfterContentInit() {
    if (!this.nzInputDirective && isDevMode()) {
      throw new Error("[nz-textarea-count]: Could not find matching textarea[nz-input] child.");
    }
    if (this.nzInputDirective.ngControl) {
      const valueChanges = this.nzInputDirective.ngControl.valueChanges || EMPTY;
      merge(valueChanges, this.configChange$).pipe(takeUntil(this.destroy$), map(() => this.nzInputDirective.ngControl.value), startWith(this.nzInputDirective.ngControl.value)).subscribe((value) => {
        this.setDataCount(value);
      });
    }
  }
  setDataCount(value) {
    const inputValue = isNotNil(value) ? String(value) : "";
    const currentCount = this.nzComputeCharacterCount(inputValue);
    const dataCount = this.nzFormatter(currentCount, this.nzMaxCharacterCount);
    this.renderer.setAttribute(this.elementRef.nativeElement, "data-count", dataCount);
  }
  ngOnDestroy() {
    this.configChange$.complete();
    this.destroy$.next(true);
    this.destroy$.complete();
  }
};
_NzTextareaCountComponent.ɵfac = function NzTextareaCountComponent_Factory(t) {
  return new (t || _NzTextareaCountComponent)(ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(ElementRef));
};
_NzTextareaCountComponent.ɵcmp = ɵɵdefineComponent({
  type: _NzTextareaCountComponent,
  selectors: [["nz-textarea-count"]],
  contentQueries: function NzTextareaCountComponent_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      ɵɵcontentQuery(dirIndex, NzInputDirective, 7);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.nzInputDirective = _t.first);
    }
  },
  hostAttrs: [1, "ant-input-textarea-show-count"],
  inputs: {
    nzMaxCharacterCount: "nzMaxCharacterCount",
    nzComputeCharacterCount: "nzComputeCharacterCount",
    nzFormatter: "nzFormatter"
  },
  standalone: true,
  features: [ɵɵStandaloneFeature],
  ngContentSelectors: _c3,
  decls: 1,
  vars: 0,
  template: function NzTextareaCountComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵprojectionDef(_c2);
      ɵɵprojection(0);
    }
  },
  encapsulation: 2,
  changeDetection: 0
});
var NzTextareaCountComponent = _NzTextareaCountComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzTextareaCountComponent, [{
    type: Component,
    args: [{
      selector: "nz-textarea-count",
      template: ` <ng-content select="textarea[nz-input]"></ng-content> `,
      host: {
        class: "ant-input-textarea-show-count"
      },
      changeDetection: ChangeDetectionStrategy.OnPush,
      standalone: true
    }]
  }], () => [{
    type: Renderer2
  }, {
    type: ElementRef
  }], {
    nzInputDirective: [{
      type: ContentChild,
      args: [NzInputDirective, {
        static: true
      }]
    }],
    nzMaxCharacterCount: [{
      type: Input
    }],
    nzComputeCharacterCount: [{
      type: Input
    }],
    nzFormatter: [{
      type: Input
    }]
  });
})();
var _NzInputModule = class _NzInputModule {
};
_NzInputModule.ɵfac = function NzInputModule_Factory(t) {
  return new (t || _NzInputModule)();
};
_NzInputModule.ɵmod = ɵɵdefineNgModule({
  type: _NzInputModule,
  imports: [NzTextareaCountComponent, NzInputDirective, NzInputGroupComponent, NzAutosizeDirective, NzInputGroupSlotComponent, NzInputGroupWhitSuffixOrPrefixDirective],
  exports: [NzTextareaCountComponent, NzInputDirective, NzInputGroupComponent, NzAutosizeDirective, NzInputGroupWhitSuffixOrPrefixDirective]
});
_NzInputModule.ɵinj = ɵɵdefineInjector({
  imports: [NzInputGroupComponent, NzInputGroupSlotComponent]
});
var NzInputModule = _NzInputModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzInputModule, [{
    type: NgModule,
    args: [{
      imports: [NzTextareaCountComponent, NzInputDirective, NzInputGroupComponent, NzAutosizeDirective, NzInputGroupSlotComponent, NzInputGroupWhitSuffixOrPrefixDirective],
      exports: [NzTextareaCountComponent, NzInputDirective, NzInputGroupComponent, NzAutosizeDirective, NzInputGroupWhitSuffixOrPrefixDirective]
    }]
  }], null, null);
})();
export {
  NzAutosizeDirective,
  NzInputDirective,
  NzInputGroupComponent,
  NzInputGroupSlotComponent,
  NzInputGroupWhitSuffixOrPrefixDirective,
  NzInputModule,
  NzTextareaCountComponent
};
//# sourceMappingURL=ng-zorro-antd_input.js.map
