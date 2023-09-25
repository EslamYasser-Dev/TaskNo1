
import { MenuOutlined,HomeOutlined} from '@ant-design/icons';
import { FloatButton } from 'antd';
const SideBar = () => {
  return (

    <div className='flex flex-col justify-center bg-white h-screen w-20'>
      <FloatButton.Group shape="square" style={{ left:25, top:0, background:"#fff",width:50}}>
      <FloatButton icon={<MenuOutlined />} />
      <FloatButton icon={<HomeOutlined  />} />
      <FloatButton.BackTop visibilityHeight={50} />
       </FloatButton.Group>
    </div>
  )
}

export default SideBar