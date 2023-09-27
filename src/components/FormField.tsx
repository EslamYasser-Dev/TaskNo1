import { Card, Form, Divider, Switch } from "antd";
import { useEffect, useState } from "react";
import axios from "axios";
import "./styles.css";
import Checkbox from "./inputs/CheckBox";
import UploadButton from "./UploadButton/UploadButton";
import { data } from "../services/DataModel";

const FormCard = () => {
  const [data, setData] = useState<data | null>(null);
  // const [loading, setLoading] = useState(false);

  useEffect(() => {
    axios
      .get<data>(
        "http://0.0.0.0:4010/api/330.0639190345027/programs/ea/application-form"
      )
      .then((response) => {
        setData(response.data);
        console.log(response.data);
        // setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        // setLoading(true);
      });
  }, []);

  return (
    <Form>
      {/* image upload */}
      <Card title="upload an Image" className="custom-card">
          <UploadButton />
      </Card>

      {/*personal info */}
      <Card title="Personal Information" className="custom-card">
        {data?.data?.attributes?.personalInformation &&
          Object.keys(data.data.attributes.personalInformation).map((key) => {
            if (data) {
              return (
                <div>
                  <div key={key} className="Box">
                    <h1 className="leading">{key}</h1>
                    <Checkbox
                      checked={
                        data.data.attributes.personalInformation[key].show
                      }
                    />
                         <Switch defaultChecked={(data.data.attributes.personalInformation[key].internalUse)} />
                          <span>{(data.data.attributes.personalInformation[key].internalUse)?"Show":"hide"}</span>
                  </div>
                  <Divider />
                </div>
              );
            }
          })}
      </Card>

      {/* profile */}
      <Card title="Profile" className="custom-card">
        {data?.data.attributes?.profile &&
          Object.keys(data.data.attributes.profile).map((key) => {
            if (key !== "profileQuestions") {
              return (
                <div>
                  <div key={key} className="Box">
                    <h1 className="leading">{key}</h1>
                    <Checkbox
                      checked={data.data.attributes.profile[key]?.show}
                    />
                         <Switch  checked={(data.data.attributes.profile[key]?.mandatory)} />
                         <span>{(data.data.attributes.profile[key]?.mandatory)?"Show":"hide"}</span>

                  </div>
                  <Divider />
                </div>
              );
            }
          })}
      </Card>

      <Card title="Additional questions" className="custom-card">
        {data?.data?.attributes?.customisedQuestions?.map((question:any, index:string) => (
          <div key={index}>
            <h1>{question.question}</h1>
            <p>{question.choices.join(", ")}</p>
            <Checkbox checked={!question.disqualify} />
            <Switch checked={question.other} />
            <Divider />
          </div>
        ))}
      </Card>
    </Form>
  );
};

export default FormCard;
