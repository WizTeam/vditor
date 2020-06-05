import {processCodeRender} from "../util/processCode";
import {afterRenderEvent} from "./afterRenderEvent";

export const renderDomByMd = (vditor: IVditor, md: string, enableInput = true) => {
    const editorElement = vditor.wysiwyg.element;
    // editorElement.innerHTML = vditor.lute.Md2VditorDOM(md);
    // wizPatch 2020-05-26 所见即所得模式下 支持 preview.transform ，便于统一处理规则（尤其是图片路径）
    let html = vditor.lute.Md2VditorDOM(md);
     if (vditor.options.preview.transform) {
        html = vditor.options.preview.transform(html);
    }
    editorElement.innerHTML = html;

    editorElement.querySelectorAll(".vditor-wysiwyg__preview[data-render='2']").forEach((item: HTMLElement) => {
        processCodeRender(item, vditor);
        item.previousElementSibling.setAttribute("style", "display:none");
    });

    afterRenderEvent(vditor, {
        enableAddUndoStack: true,
        enableHint: false,
        enableInput,
    });
};
