import React from "react";
import cs from "classnames"; //用来合并 classname

let importAll = (requireContext: __WebpackModuleApi.RequireContext) =>
  requireContext.keys().forEach(requireContext);
try {
  importAll(require.context("icons", true, /\.svg$/));
} catch (error) {
  console.log(error);
}

// require("icons/money.svg");
// require("icons/tag.svg");
// require("icons/chart.svg");

//Tree-shaking  所以使用require

type Props = {
  name?: string;
} & React.SVGAttributes<SVGElement>;

const Icon = (props: Props) => {
  //接受传递过来的属性, 和svg的事件
  const { name, children, className, ...rest } = props;
  return (
    // <svg className="icon">
    <svg className={cs("icon", className)} onClick={props.onClick}>
      {props.name && <use xlinkHref={"#" + props.name} />}
    </svg>
  );
};

export default Icon;
