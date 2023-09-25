import { Card, Spin } from "antd";
import { useEffect, useState } from "react";
import { DataModel } from "../services/DataModel";
import axios from "axios";
import "./styles.css";

const FormCard = () => {
  const [data, setData] = useState<DataModel | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {

    axios.get<DataModel>('http://0.0.0.0:4010/api/330.0639190345027/programs/ea/application-form')
      .then(response => {
        setData(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.log(error);
        setError(error);
        setLoading(true);
      });
  }, []);

  if (loading) {
    return <Spin size={"large"} />;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <Card title="upload an Image" className="custom-card">
        {/* <Image width={200} height={200}  /> */}
         <h1>{data?.dataModel?.attributes?.profile.resume.mandatory}</h1> 
         <h1>{data?.dataModel?.attributes?.profile.resume.mandatory}</h1> 

         <h1>{data?.dataModel?.attributes?.profile.resume.mandatory}</h1> 

      </Card>
      <h1>{data?.dataModel?.attributes?.profile.resume.mandatory}</h1> 

    </div>
  );
}

export default FormCard;
