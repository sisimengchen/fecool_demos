import React, { Component } from "react";
import {
  Menu,
  ActivityIndicator,
  NavBar,
  Result,
  Icon,
  WhiteSpace
} from "antd-mobile";
import style from "./index.less";

style.use();

const data = [
  {
    value: "1",
    label: "Food"
  },
  {
    value: "2",
    label: "Supermarket"
  },
  {
    value: "3",
    label: "Extra",
    isLeaf: true
  }
];

const myImg = src => (
  <img src={src} className="spe am-icon am-icon-md" alt="" />
);

const ResultExample = () => (
  <div className="result-example">
    <div className="sub-title">支付成功</div>
    <Result
      img={myImg(
        "https://gw.alipayobjects.com/zos/rmsportal/pdFARIqkrKEGVVEwotFe.svg"
      )}
      title="支付成功"
      message={
        <div>
          998.00元 <del>1098元</del>
        </div>
      }
    />
    <WhiteSpace />
    <div className="sub-title">验证成功</div>
    <Result
      img={
        <Icon type="check-circle" className="spe" style={{ fill: "#1F90E6" }} />
      }
      title="验证成功"
      message="所提交内容已成功完成验证"
    />
    <WhiteSpace />
    <div className="sub-title">支付失败</div>
    <Result
      img={
        <Icon
          type="cross-circle-o"
          className="spe"
          style={{ fill: "#F13642" }}
        />
      }
      title="支付失败"
      message="所选银行卡余额不足"
    />
    <WhiteSpace />
    <div className="sub-title">等待处理</div>
    <Result
      img={myImg(
        "https://gw.alipayobjects.com/zos/rmsportal/HWuSTipkjJRfTWekgTUG.svg"
      )}
      title="等待处理"
      message="已提交申请，等待银行处理"
    />
    <WhiteSpace />
    <div className="sub-title">操作失败</div>
    <Result
      img={myImg(
        "https://gw.alipayobjects.com/zos/rmsportal/GIyMDJnuqmcqPLpHCSkj.svg"
      )}
      title="无法完成操作"
      message="由于你的支付宝账户还未绑定淘宝账户请登请登录www.taobao.com"
    />
  </div>
);

export default class HomePage extends Component {
  constructor(...args) {
    super(...args);
    this.state = {};
    this.state = {
      initData: "",
      show: false
    };
  }

  onChange = value => {
    let label = "";
    data.forEach(dataItem => {
      if (dataItem.value === value[0]) {
        label = dataItem.label;
        if (dataItem.children && value[1]) {
          dataItem.children.forEach(cItem => {
            if (cItem.value === value[1]) {
              label += ` ${cItem.label}`;
            }
          });
        }
      }
    });
    console.log(label);
  };
  handleClick = e => {
    e.preventDefault(); // Fix event propagation on Android
    this.setState({
      show: !this.state.show
    });
    // mock for async data loading
    if (!this.state.initData) {
      setTimeout(() => {
        this.setState({
          initData: data
        });
      }, 500);
    }
  };

  onMaskClick = () => {
    this.setState({
      show: false
    });
  };

  render() {
    const { initData, show } = this.state;
    const menuEl = (
      <Menu
        className="single-foo-menu"
        data={initData}
        value={["1"]}
        level={1}
        onChange={this.onChange}
        height={document.documentElement.clientHeight * 0.6}
      />
    );
    const loadingEl = (
      <div
        style={{
          position: "absolute",
          width: "100%",
          height: document.documentElement.clientHeight * 0.6,
          display: "flex",
          justifyContent: "center"
        }}
      >
        <ActivityIndicator size="large" />
      </div>
    );
    return (
      <div className={show ? "pages-home single-menu-active" : "pages-home"}>
        <div>
          <NavBar
            leftContent="菜单"
            mode="light"
            onLeftClick={this.handleClick}
            className="single-top-nav-bar"
          >
            首页
          </NavBar>
        </div>
        {show ? (initData ? menuEl : loadingEl) : null}
        {show ? <div className="menu-mask" onClick={this.onMaskClick} /> : null}
        <ResultExample />
      </div>
    );
  }
}
