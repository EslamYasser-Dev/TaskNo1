import Layout, { Content, Footer, Header } from "antd/es/layout/layout";
import FormField from "../components/formFields/FormField";
import Sider from "antd/es/layout/Sider";
import {
  HomeOutlined,
  MenuOutlined,
  FileSearchOutlined,
} from "@ant-design/icons";
import "./style.css";
import { Avatar } from "antd";

const Form = () => {
  return (
    <>
      <div>
        <Layout>
          <Sider
            width={"6rem"}
            style={{
              backgroundColor: "#fff",
              boxShadow: "0px 4px 28px rgba(0, 0, 0, 0.04)",
              position: "fixed",
              height: "100%",
            }}
          >
            <MenuOutlined
            className="icons homeic"
            />
            <HomeOutlined
             className="icons"
            />
            <FileSearchOutlined
            className="icons"
            />
                <Avatar style={{ color: '#f56a00', backgroundColor: '#1D4ED8', margin:"8rem 2.4rem 0rem 2rem"}}>U</Avatar>
          </Sider>

          <Layout>
            <Header style={{background:"#fff",height:"5.5rem", margin:"5.5rem 0 0 3rem ", width:"100%" ,boxShadow: "0px 4px 28px rgba(0, 0, 0, 0.04)", transition:"1s"
        }}>
              <span className="headeritems">Program Details</span>
              <span className="headeritems selected">Application Form</span>
              <span className="headeritems">Workflow</span>
              <span className="headeritems">Preview</span>
                

            </Header>
            <Content style={{margin:"7rem"}}>
              <FormField />
            </Content >
            <Footer>-------------------------------------------All Right received to @eslam yasser-----------------------------</Footer>
          </Layout>
        </Layout>
      </div>
    </>
  );
};

export default Form;
